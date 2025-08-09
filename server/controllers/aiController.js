import OpenAI from "openai";
import 'dotenv/config'
import sql from "../configs/db.js";
import { clerkClient } from "@clerk/express";
import cloudinary from 'cloudinary'
import axios from 'axios'
import fs from 'fs'
import pdf from 'pdf-parse/lib/pdf-parse.js'


const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});


// generate article using user propmt and length of content
export const generateArticle = async (req, res) => {
    try {
        const { userId } = req.auth()

        const { prompt, length } = req.body;
        const plan = req.plan;
        const free_usage = req.free_usage;

        if (plan !== 'premium' && free_usage >= 10) {
            return res.json({ success: false, message: "Limit reached. Upgrade to continue. " })
        }

        const response = await AI.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [
                { role: "user", content: prompt },
            ],
            temperature: 0.7,
            max_completion_tokens: length,
        });

        const content = response.choices[0].message.content; //user will recieve this output

        await sql` insert into creations(user_id , prompt , content , type) values (${userId} , ${prompt} , ${content} , 'article')`;

        if (plan !== 'premium') {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: free_usage + 1
                }
            })
        }
        res.json({ success: true, content })

    } catch (e) {
        console.log(e.message)
        res.json({ success: false, message: e.message })
    }
}

export const generateBlogTitle = async (req, res) => {
    try {

        const { userId } = req.auth();
        const { prompt } = req.body;
        const plan = req.plan;
        const free_usage = req.free_usage;

        if (!plan !== 'premium' && free_usage >= 10) {
            return res.json({ success: false, message: "Limit reached. Upgrade to continue." })
        }

        const response = await AI.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [
                { role: "user", content: prompt, },
            ],
            temperature: 0.7,
            max_completion_tokens: 100,
        });

        const content = response.choices[0].message.content;

        await sql` insert into creations(user_id , prompt , content , type) values (${userId} , ${prompt} , ${content} , 'blog-title')`;

        if (plan !== 'premium') {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: free_usage + 1
                }
            })
        }
        res.json({ success: true, content })

    } catch (e) {
        console.log(e.message)
        res.json({ success: false, message: e.message })
    }
}


// this servise for paid users only
export const generateImage = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { prompt, publish } = req.body;
        const plan = req.plan;

        if (plan !== 'premium') {
            return res.json({ success: false, message: "This feature is available only for premium subscriptions" })
        }

        const formData = new FormData();
        formData.append('prompt', prompt)
        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: { 'x-api-key': process.env.CLIPDROP_API_KEY },
            responseType: "arraybuffer",
        })

        const base64Image = `data:image/png;base64,${Buffer.from(data, 'binary').toString('base64')}`;

        const { secure_url } = await cloudinary.uploader.upload(base64Image)

        await sql` insert into creations(user_id , prompt , content , type , publish) values (${userId} , ${prompt} , ${secure_url} , 'image' , ${publish ?? false})`;

        res.json({ success: true, content: secure_url })

    } catch (e) {
        console.log(e.message)
        res.json({ success: false, message: e.message })
    }
}

// utilizes cloudinary's bg removal servise [limited use service]
// export const removeImageBackground = async (req, res) => {

//     try {

//         const { userId } = req.auth()
//         const  image  = req.file;
//         const plan = req.plan;

//         if (plan !== 'premium') {
//             return res.json({ success: false, message: 'This feature is available only for premium subscriptions.' })
//         }

//         const { secure_url } = await cloudinary.uploader.upload(image.path, {
//             transformation: [
//                 {
//                     effect: 'bg_remove',
//                     background_removal: 'remove_the_background'
//                 }
//             ]
//         })

//         await sql` insert into creations (user_id ,prompt , content , type ) 
//         values( ${userId},'Remove background from image' , ${secure_url} ,'image'
//          ) `;

//         res.json({ success: true, content: secure_url });

//     } catch (e) {
//         console.log(e.message)
//         res.json({ success: false, message: e.message })
//     }

// }
// utilizes Cloudinary's bg removal service [limited use service]
export const removeImageBackground = async (req, res) => {
  try {
    const { userId } = req.auth();
    const image = req.file;
    const plan = req.plan;

    if (plan !== 'premium') {
      return res.json({
        success: false,
        message: 'This feature is available only for premium subscriptions.'
      });
    }

    const { secure_url } = await cloudinary.uploader.upload(image.path, {
      background_removal: "cloudinary_ai_bgremoval", // use add-on
      folder: "bg_removed" // optional, for organization
    });

    await sql`
      INSERT INTO creations (user_id, prompt, content, type)
      VALUES (${userId}, 'Remove background from image', ${secure_url}, 'image')
    `;

    res.json({ success: true, content: secure_url });
  } catch (e) {
    console.log(e.message);
    res.json({ success: false, message: e.message });
  }
};



export const removeImageObject = async (req, res) => {

    try {

        const { userId } = req.auth()
        const  image  = req.file;
        const { object } = req.body;
        const plan = req.plan;

        if (plan !== 'premium') {
            return res.json({ success: false, message: "This feature is available for premium subscription only" })
        }

        const { public_id } = await cloudinary.uploader.upload(image.path)

        const imageUrl = cloudinary.url(public_id, {
            transformation: [{ effect: `gen_remove:${object}` }],
            resource_type: 'image'
        })

        await sql` insert into creations(user_id , prompt , content , type) 
        values (${userId} , ${`Removed ${object} from image`} , ${imageUrl} , 'image')`;

        res.json({ success: true, content: imageUrl })

    } catch (e) {
        console.log(e.message)
        res.json({ success: false, message: e.message })

    }
}

export const resumeReview = async(req , res)=>{
    try {
        
        const {userId} = req.auth();
        const resume = req.file;
        const plan = req.plan;

        if(plan !== 'premium'){
            return res.json({success:false , message:"This feature is only available for premium subscriptions"})
        }

        if(resume.size > 5*1024*1024 ){
            return res.json({success:false , message:"Resume file size exceeds allowed size [5mb]. "})
        }

        const dataBuffer = fs.readFileSync(resume.path);
        const pdfData = await pdf(dataBuffer);

        const prompt = `Review the following resume and provide constructive feedback on its strengths , weaknesses , and areas for improvement. Resume content:\n\n${pdfData.text} `

        const response  = await AI.chat.completions.create({
            model:"gemini-2.0-flash" , 
            messages: [{role:"user" , content:prompt}] , 
            temperature:0.7 , 
            max_completion_tokens:1000
        })

        const content = response.choices[0].message.content

        await sql` insert into creations(user_id , prompt , content , type) 
        values ( ${userId} , 'Review the uploaded resume' , ${content} , 'resume-review')`;

        res.json({success:true , content})

    } catch (e) {
        console.log(e.message)
        res.json({ success: false, message: e.message })
    }
}


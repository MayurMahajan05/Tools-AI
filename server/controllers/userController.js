import sql from "../configs/db.js";

export const getUserCreations = async(req , res)=>{
    try {
        const {userId} = req.auth()
        const creations = await sql` select * from creations where user_id = ${userId} order by created_at desc `;

        res.json({success:true , creations});

    } catch (e) {
        console.log(e.message)
        res.json({success:false , message:e.message})
    }
}

export const getPublishedCreations = async(req , res)=>{

    try {
        const creations = await sql` select * from creations where publish = true order by created_at desc `;

        res.json({success:true , creations});
        
    } catch (e) {
        console.log(e.message)
        res.json({success:false , message:e.message})
    }
}



//    const currentLikes = creation.likes;
        // const userIdStr = userId.toString()
        // let updatesLikes;
        // let message;

        // if(currentLikes.includes(userIdStr)){
        //     updatesLikes = currentLikes.filter((user)=> user !== userIdStr );
        //     message = 'Creation Unliked'
        // }else{
        //     updatesLikes = [...currentLikes , userIdStr]
        //     message = 'Creation Liked '
        // }

export const toggleLikeCreation = async(req, res)=>{
    try {
        
        const {userId} = req.auth()
        const {id} = req.body;

        const [creation] = await sql` select * from creations where id = ${id} `

        if(!creation){
            return res.json({success:false , message:"Creation not found"})
        }

        const currentLikes = creation.likes;
        const userIdStr = userId.toString()
        let updatedLikes;
        let message;

        if(currentLikes.includes(userIdStr)){
            updatedLikes = currentLikes.filter((user)=> user !== userIdStr);
            message = 'Creation Unliked'
        }else{
            updatedLikes = [...currentLikes , userIdStr]
            message = 'Creation Liked'
        }

        const formattedArray = `{${updatedLikes.join(',')}}`
        await sql`update creations set likes = ${formattedArray}::text[] where id= ${id}`;

        res.json({success:true , creation})

    } catch (e) {
        console.log(e.message)
        res.json({success:false , message:e.message})
    }
}

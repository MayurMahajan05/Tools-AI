// import React from 'react'
// import { assets } from '../assets/assets'
// import { Facebook, Github, Globe, Instagram, Linkedin, Search, X } from 'lucide-react'

// const Footer = () => {
//     return (
//         <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
//             <div className='flex flex-wrap justify-between gap-12 md:gap-6'>

//                 {/* Left Section */}
//                 <div className='max-w-80'>
//                     <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9' />
//                     <p className='text-sm'>
//                         This project was crafted with passion by Mayur, a Software Engineer. For queries, suggestions, or collaboration ideas, feel free to reach out anytime.
//                     </p>

//                     <div className='flex items-center gap-4 mt-4'>
//                         <a href="https://mayur.dev" target="_blank" rel="noopener noreferrer">
//                             <Globe className="w-6 h-6 text-gray-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
//                         </a>
//                         <a href="https://github.com/mayurdev" target="_blank" rel="noopener noreferrer">
//                             <Github className="w-6 h-6 text-gray-500 hover:text-black transition-colors duration-300 cursor-pointer" />
//                         </a>
//                         <a href="https://x.com/mayur" target="_blank" rel="noopener noreferrer">
//                             <X className="w-6 h-6 text-gray-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer" />
//                         </a>
//                         <a href="https://linkedin.com/in/mayur" target="_blank" rel="noopener noreferrer">
//                             <Linkedin className="w-6 h-6 text-gray-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer" />
//                         </a>
//                     </div>

//                     <div className='mt-3 text-sm'>
//                         Or <a href="mailto:mayur@example.com" className="text-blue-600 hover:underline">email me</a> directly.
//                     </div>
//                 </div>

//                 {/* Company Section */}
//                 <div>
//                     <p className='text-lg text-gray-800'>COMPANY</p>
//                     <ul className='mt-3 flex flex-col gap-2 text-sm'>
//                         <li><a href="#">About</a></li>
//                         <li><a href="#">Careers</a></li>
//                         <li><a href="#">Press</a></li>
//                         <li><a href="#">Blog</a></li>
//                         <li><a href="#">Partners</a></li>
//                     </ul>
//                 </div>

//                 {/* Support Section */}
//                 <div>
//                     <p className='text-lg text-gray-800'>SUPPORT</p>
//                     <ul className='mt-3 flex flex-col gap-2 text-sm'>
//                         <li><a href="#">Help Center</a></li>
//                         <li><a href="#">Safety Information</a></li>
//                         <li><a href="#">Cancellation Options</a></li>
//                         <li><a href="mailto:mayur@example.com">Contact Developer</a></li>
//                         <li><a href="#">Accessibility</a></li>
//                     </ul>
//                 </div>

//                 {/* Newsletter */}
//                 <div className='max-w-80'>
//                     <p className='text-lg text-gray-800'>STAY UPDATED</p>
//                     <p className='mt-3 text-sm'>
//                         Subscribe to receive new project announcements or features.
//                     </p>
//                     <div className='flex items-center mt-4'>
//                         <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
//                         <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
//                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>

//             </div>

//             <hr className='border-gray-300 mt-8' />

//             <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm'>
//                 <p>© {new Date().getFullYear()} Mayur. All rights reserved.</p>
//                 <ul className='flex items-center gap-4'>
//                     <li><a href="#">Privacy</a></li>
//                     <li><a href="#">Terms</a></li>
//                     <li><a href="#">Sitemap</a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Footer


import React from 'react'
import { assets } from '../assets/assets'
import { Github, Globe, Linkedin, X } from 'lucide-react'

const Footer = () => {
    return (
        <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>

                {/* Brand & Socials */}
                <div className='max-w-80'>
                    <img src={assets.aiLogo} alt="logo" className='mb-4 h-12 md:h-14' />
                    <p className='text-sm'>
                        Hi, I’m Mayur — a Software Engineer who loves building elegant web solutions. For queries, collabs, or feedback, feel free to reach out!
                    </p>

                    <div className='flex items-center gap-4 mt-4'>
                        <a href="https://github.com/MayurMahajan05" target="_blank" rel="noopener noreferrer">
                            <Globe className="w-6 h-6 text-gray-500 hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                        </a>
                        <a href="https://github.com/MayurMahajan05" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 text-gray-500 hover:text-black transition-colors duration-300 cursor-pointer" />
                        </a>
                        <a href="https://www.geeksforgeeks.org/user/mimayurmkv2p/" target="_blank" rel="noopener noreferrer">
                            <X className="w-6 h-6 text-gray-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer" />
                        </a>
                        <a href="https://www.linkedin.com/in/mayur-mahajan-31b1192a9" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 text-gray-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer" />
                        </a>
                    </div>

                    <div className='mt-3 text-sm'>
                        Or <a href="mailto:mahajan.mayur.it030@gmail.com" className="text-blue-600 hover:underline">email me</a> directly.
                    </div>
                </div>

                {/* Projects */}
                <div>
                    <p className='text-lg text-gray-800'>PROJECTS</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#project1">JobHunt Platform</a></li>
                        <li><a href="#project2">HaritKranti (Agri Marketplace)</a></li>
                        <li><a href="#project3">Producticity</a></li>
                        <li><a href="#project4">Competitive Coding Tracker</a></li>
                    </ul>
                </div>

                {/* Tech Stack */}
                <div>
                    <p className='text-lg text-gray-800'>TECH STACK</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li>React.js / Next.js</li>
                        <li>Node.js / Express</li>
                        <li>MongoDB / Postgres</li>
                        <li>Tailwind CSS / ShadCN</li>
                        <li>Java / SQL</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className='max-w-80'>
                    <p className='text-lg text-gray-800'>LET’S STAY IN TOUCH</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to get updates on new projects or insights.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>

            <hr className='border-gray-300 mt-8' />

            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-sm'>
                <p>© {new Date().getFullYear()} Mayur. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer

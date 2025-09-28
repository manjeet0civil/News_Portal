import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    
     <div>
        <nav  className='bg-bgDark py-4 mb-0'>
            <div>
                <h1 className='text-center text-white font-bold text-3xl mb-4'>Contact Us</h1>
            </div>
            <div className='flex justify-center space-x-6 mb-4'>
               <a
        href="https://www.linkedin.com/in/manjeet0civil"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <FaLinkedin size={30} />
      </a>
       <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="text-blue-800 hover:text-black"
      >
        <FaGithub size={30} />
      </a>

            </div>
            <div>
                <h1 className='text-center text-white font-bold text-xl'>Developed by Manjeet Singh</h1>
            </div>
            
        </nav>
    </div>
  )
}

export default Footer
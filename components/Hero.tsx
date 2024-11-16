import React from 'react'
import Link from 'next/link';
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div
      id='hero'
      className="min-h-screen bg-no-repeat bg-[url(/shumaila.png)] bg-cover"
      style={{ backgroundSize: "35%", backgroundPosition: "left 100px top 100px" }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className="hidden lg:block"></div>
        <div className='flex flex-col items-center justify-center text-center lg:text-left'>
          <div className='text-[60px] sm:text-[60px] font-bold leading-tight mt-8'>
            <p className='ml-14'  data-aos="zoom-in" >I'm Shumaila!</p>
            <p  data-aos="zoom-in"className='text-cyan-700'>Frontend developer</p>
          </div>

          <p  data-aos="zoom-in"className="text-left lg:text-left mt-4">
            As a front-end developer, I specialize in creating visually appealing and user-friendly web interfaces. I have a strong command of HTML, CSS, JavaScript, TypeScript, and frameworks like Tailwind CSS and Next.js, enabling me to build responsive and dynamic applications.
          </p>
          <br />

          <div className='mt-4'>
            <Link href="https://hackathon-milestones1-2-pi.vercel.app/" target="_blank">
              <button data-aos="zoom-in" className= ' bg-cyan-700 text-white p-2 px-6 mr-14 rounded-md hover:bg-cyan-300'>
                Download cv
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
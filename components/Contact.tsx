import React from 'react';
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        
        {/* Left Side: Contact Info */}
        <div className='space-y-8'>
          <h2 className='text-2xl md:text-4xl text-center font-bold text-cyan-700' data-aos="zoom-in">Contact me</h2>
          <h2 className='text-4xl font-bold text-cyan-700 text-center' data-aos="zoom-in">Get in Touch</h2>
          <p className='text-white text-[18px] pt-2 text-center' data-aos="zoom-in"> 
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>
          
          {/* Contact Info */}
          <div className='flex gap-3 items-center text-cyan-700 justify-center' data-aos="zoom-in">
            <AiOutlineMail size={30}/> <span>shumailashakir300@gmail.com</span>
          </div>
          <div className='flex gap-3 items-center text-cyan-700 justify-center' data-aos="zoom-in">
            <BsTelephone size={30}/> <span>(0313-1347171)</span>
          </div>
          <div className='flex gap-3 items-center text-cyan-700 justify-center' data-aos="zoom-in">
            <AiOutlineGithub size={30}/> <span>https://github.com/shumailashakir</span>
          </div>
          <div className='flex gap-3 items-center text-cyan-700 justify-center' data-aos="zoom-in">
            <AiFillLinkedin size={30}/> <span>https://www.linkedin.com/in/shumaila-shakir/</span>
          </div>
        </div>
        
        {/* Right Side: Form */}
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'data-aos="zoom-in">
            <label htmlFor="name" className='text-cyan-700'>Name</label>
            <input type="text" className='h-[40px] bg-transparent border border-white text-white' id='name' />
          </div>
          
          <div className='flex flex-col gap-1' data-aos="zoom-in">
            <label htmlFor="email" className='text-cyan-700'>Email</label>
            <input type="email" className='h-[40px] bg-transparent border border-white text-white' id='email' />
          </div>
          
          <div className='flex flex-col gap-1' data-aos="zoom-in">
            <label htmlFor="msg" className='text-cyan-700'>Message</label>
            <textarea className="bg-transparent border border-white text-white" id='msg' rows={8}></textarea>
          </div>
          
          <button className='bg-cyan-700 text-white p-2 px-6 rounded-md hover:bg-cyan-600' data-aos="zoom-in">
            Send me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact


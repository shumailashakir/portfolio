import React from 'react';

const About = () => {
  return (
    <div id='about' className='container pt-32 p-8'>
      
      {/* Heading - Centered */}
      <h2 className='text-2xl md:text-4xl text-center font-bold text-cyan-700' data-aos="zoom-in">
        About Me
      </h2>

      {/* Paragraph - Centered and Spaced */}
      <p className='text-white pt-4 text-lg max-w-3xl mx-auto' data-aos="zoom-in">
        My name is Shumaila Shakir, a graduate with a deep passion for coding and a current student in the Artificial Intelligence program under the Governor of Sindhs initiative. This program has opened doors for me to pursue my long-term goal of becoming a skilled full-stack developer. I am committed to mastering the art of creating user-friendly, responsive, and efficient websites that provide meaningful experiences for users.
        
        Coding has always fascinated me, and with each new skill I acquire, my drive to excel in this field grows stronger. By becoming a proficient developer, I aim to overcome my financial challenges and gain stability. More importantly, I see this journey as an opportunity to bring positive change not only to my own life but also to the lives of others.
        
        Once I have reached my own career goals, I plan to give back by teaching this course to others. I want to empower individuals with the skills to become independent and financially secure, opening up new paths for themselves in technology. I believe that by sharing what I have learned, I can help others achieve their own dreams, build confidence, and take charge of their futures.
        
        Through hard work and dedication, I am committed to creating a ripple effect—helping others unlock their potential and become self-sufficient in the tech world.
      </p>
    </div>
  );
}

export default About


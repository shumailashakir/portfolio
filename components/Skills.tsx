import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className='pt-32 pb-40 container mx-auto'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in">
          <h2 className='text-2xl md:text-4xl text-center font-bold text-cyan-700 pb-8'>
            Skills
          </h2>
          <h2 className='text-2xl md:text-3xl font-bold text-cyan-700 text-center' data-aos="zoom-in">
            Technologies I work with
          </h2>
          <p className='text-white pt-2'>
            I bring a strong foundation in front-end and back-end web development, with expertise in HTML, CSS, TypeScript, JavaScript, and Tailwind CSS. My skills extend to creating dynamic and responsive user interfaces, utilizing frameworks like Next.js for optimized server-rendered applications. I have experience with Node.js, enabling me to handle server-side logic and build efficient, scalable solutions. My proficiency in these technologies allows me to create seamless, modern web applications with an eye for performance and a focus on delivering excellent user experiences.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-cyan-700 text-2xl sm:text-2xl font-semibold'>
            <div className='space-y-2'>
              <p data-aos="zoom-in">HTML</p>
              <p data-aos="zoom-in">CSS</p>
              <p data-aos="zoom-in">TypeScript</p>
              <p data-aos="zoom-in">JavaScript</p>
            </div>
            <div className='space-y-2'>
              <p data-aos="zoom-in">Tailwind CSS</p>
              <p data-aos="zoom-in">Node.js</p>
              <p data-aos="zoom-in">React</p>
              <p data-aos="zoom-in">Next.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
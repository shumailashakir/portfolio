import React from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import Image from 'next/image';
const Navbar = () => {
  const [isMenuOpen ,setIsMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center ml-8">
          <Image src="/shumaila.png" alt="Logo" width="50" height="50" className="mr-2" />
          <span className="text-xl font-medium text-white" data-aos="zoom-in">Shumaila Shakir</span>
        </div>
        <ul data-aos="zoom-in" className="gap-20 lg:gap-16 hidden md:flex mr-40">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>
        <div className='md:hidden'onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose size={30} /> :
          <AiOutlineMenu size={30}/>}
  
        </div>
      </div>
      {
        isMenuOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden'>
            <li className='menuLink'>
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li className='menuLink'>
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li className='menuLink'>
              <a href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className='menuLink'>
              <a href="#skills" onClick={toggleMenu}>Skills</a>
            </li>
            <li className='menuLink'>
              <a href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        )
      }

        </div>
        

      
    
  );
};

export default Navbar

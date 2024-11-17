import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Todolist",
    desc: "A to-do list is a tool that organizes tasks and helps prioritize and track their completion.",
    img: "/project-1.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Countdown Timer",
    desc: "A countdown timer counts down from a specified time to zero, often used to track remaining time for a task or event.",
    img: "/project-02.png",
    tags: ["Next.js", "Node", "CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Simple Calculator",
    desc: "A simple calculator for basic arithmetic operations like addition, subtraction, multiplication, and division.",
    img: "/project-3.png",
    tags: ["Next.js", "Node", "CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "ATM Machine",
    desc: "An ATM machine allows bank customers to perform financial transactions, such as withdrawing cash and transferring funds.",
    img: "/project-4.png",
    tags: ["Next.js", "Node", "CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "Currency Converter",
    desc: "A currency converter calculates the exchange value between different currencies based on current exchange rates.",
    img: "/project-5.png",
    tags: ["Next.js", "Node", "CSS", "TypeScript"],
  },
  {
    id: 5,
    title: "CLI Number Guessing Game",
    desc: "A command-line-based game where the player guesses a randomly generated number within a specified range.",
    img: "/project-6.png",
    tags: ["Next.js", "Node", "CSS", "TypeScript"],
  },
];



const Projects = () => {
    return (
      <div id="projects" className="container pt-20 font-bold text-cyan-700 mb-20">
        <Heading title="My Projects"/>
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {data.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects
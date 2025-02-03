import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      {/* Header */}
      <header className="text-center mb-10">
        <img src="your-profile-image.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-lg text-gray-400">Frontend Developer | ReactJS | Redux | IONIC</p>
      </header>
      
      {/* About Section */}
      <section className="mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-300">
          I am a passionate frontend developer with 5 years of experience specializing in ReactJS, Redux, React-Hook, JavaScript, and IONIC framework. I love building interactive and efficient web applications.
        </p>
      </section>
      
      {/* Skills Section */}
      <section className="mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <p className="text-gray-300">ReactJS, Redux, JavaScript, HTML, CSS, IONIC, TypeScript, TailwindCSS</p>
      </section>
      
      {/* Certification Section */}
      <section className="mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
        <p className="text-gray-300">Certified React Developer | Advanced JavaScript Certification</p>
      </section>
      
      {/* Projects Section */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-5">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a href="https://yourproject1.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-gray-400">A web application built using React and Redux for managing tasks efficiently.</p>
          </a>
          <a href="https://yourproject2.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-400">A mobile application developed using the IONIC framework for tracking fitness goals.</p>
          </a>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-3">Contact Me</h2>
        <div className="flex space-x-5 justify-center">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="text-blue-500 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" className="text-gray-300 text-2xl">
            <FaGithub />
          </a>
          <a href="mailto:your.email@example.com" className="text-red-500 text-2xl">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

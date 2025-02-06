import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from './images/nehaImg.png';
import './Portfolio.css';


const Portfolio = () => {
  return (
    <div className="common-cls ">
      {/* Header */}
      <header>
        <img src={logo} alt="Profile" className="logo-cls" />
        <h1 className="text-4xl font-bold">NEHA RAI</h1>
        <p className="text-lg text-gray-400">Software Developer | 5+ Years Experience</p>
      </header>
      
      {/* About Section */}
      <section className="mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="sub-text-cls">
        I am a passionate Frontend Developer who loves building interactive and efficient web and mobile applications.
        </p>
        <p className="sub-text-cls">
        Building dynamic and user-friendly applications is my passion.
        </p>
      </section>
      
      {/* Skills Section */}
      <section className="mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <p className="skill-cls">Reactjs | Redux | JavaScript | Html | Css | Ionic | TypeScript | TailwindCss</p>
        <p className="skill-cls">JEST | RTL | DSA | C++ | Web Accessibility</p>
        <p className="skill-cls">Package: Material-UI | Npm | Yarn | Font-Awesome</p>
      </section>
      
      {/* Certification Section */}
      <section className="mb-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
        <p className="sub-text-cls">

          <a href="https://www.hackerrank.com/certificates/1f415f03b8ab" target="_blank" className="problem-link-cls">
          HackerRank JavaScript (Basic) Certificate</a> <span> | </span>
          <a href="https://www.linkedin.com/learning/certificates/4bc0be5c7c40fd43e9d9b4895217764640dc585f281380a4aa15a35a28426c81?trk=backfilled_certificate" target="_blank" className="problem-link-cls">
          React: Building Progressive Web Apps (PWAs)</a> <span> | </span>
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7290984845248196608/" target="_blank" className="problem-link-cls">
          Bronze medal from CGI</a>
          </p>
      </section>
      
      {/* Projects Section */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-5">Projects</h2>
        <p className="project-dec">Click on project,to see the result..</p>
        <div className="projects-cls">
        <a href="https://www.cgi.com/us/en-us/solutions/engage-hub" target="_blank" rel="noopener noreferrer" className="project-link">
        <h3 className="text-center">Project 1</h3>
        <p className="project-dec hover-text">CGI EngageHub</p>
       </a>

         <a href="https://dhee.ai/" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="text-center">Project 2</h3>
            <p className="project-dec hover-text">Dhee cloud UI platform</p>
          </a>
         </div>

        <div className="projects-cls">
          <a href="https://play.google.com/store/apps/details?id=com.mbnepal.smartbanking_royal&hl=en_IN" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="text-center">Project 3</h3>
            <p className="project-dec hover-text">Royalti Wallet</p>
          </a>
          <a href="https://github.com/npalak/abi-pelzer-ionic-app" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="text-center">Project 4</h3>
            <p className="project-dec hover-text">Pelzer Ionic App</p>
          </a>
        </div>



        <div className="projects-cls">
          <a href="https://nyaaya.org/about/" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="text-center">Project 5</h3>
            <p className="project-dec hover-text">Nayay Website</p>
          </a>
          <a href="https://futuremedico.in/" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="text-center">Project 6</h3>
            <p className="project-dec hover-text">Future Medico</p>
          </a>
        </div>

        <div className="projects-cls">
          <a href="https://npalak.github.io/Youtube_Reactjs_App/" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="text-center">Project 7</h3>
            <p className="project-dec hover-text"> Youtube Clone App</p>
          </a>
          <a href="https://github.com/npalak/SVG-Map?tab=readme-ov-file#svg-map" target="_blank" rel="noopener noreferrer" className="project-link">
            <h3 className="text-center">Project 8</h3>
            <p className="project-dec hover-text">Svg Map</p>
          </a>

        </div>

      </section>

      <section className="mb-10 max-w-2xl text-center">
        <p >
          <a href="https://www.hackerrank.com/profile/neha_rai_8620" target="_blank" className="problem-link-cls">
          HackerRank</a> <span> | </span>
          <a href="https://leetcode.com/u/Neha-2024/" target="_blank" className="problem-link-cls">
          Leetcode</a> <span> | </span>
          <a href="https://www.geeksforgeeks.org/user/neharai1/" target="_blank" className="problem-link-cls">
          Geeksforgeeks</a>
          </p>
      </section>
      
      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-3">Contact Me</h2>
        <div className="flex space-x-5 justify-center">
          <a href="https://www.linkedin.com/in/neha-rai-386303144/" target="_blank" className="text-center">
            <FaLinkedin />
          </a>
          <a href="https://github.com/npalak/" target="_blank" className="text-center">
            <FaGithub />
          </a>
          <a href="mailto:neha.rai.8620@gmail.com" className="text-center">
          <FaEnvelope />
          </a>

        </div>
      </section>
    </div>
  );
};

export default Portfolio;

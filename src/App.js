import React, {} from 'react';
import { Github, Linkedin, ExternalLink, FileDown, Youtube, Instagram, Globe, Mail } from 'lucide-react';

// Array of project data - update with your actual project information
const projects = [
  
  {
    id: 1,
    title: 'RSA Encrypted Client-Server Communication',
    image: process.env.PUBLIC_URL + '/RSA_Encryption.png',
    description: 'Secure messaging system implementing RSA-1024 encryption with SHA256 integrity verification. Features dual-socket architecture, PKCS1_OAEP padding, and secure key exchange protocol.',
    languages: ['Python', 'RSA/SHA256'],
    githubUrl: 'https://github.com/catacisneros/cryptography',
    demoUrl: 'https://www.youtube.com/watch?v=_WXbKPG8QiM&t=6s'
  },
  {
    id: 2,
    title: 'Advanced Keylogger PoC ',
    image: process.env.PUBLIC_URL + '/Keylogger_Temp.png',
    description: 'Records keystrokes with timestamps, handles regular and special keys, and logs to a text file for easy review.',
    languages: ['Python', 'socket', 'Flask'],
    githubUrl: 'https://github.com/catacisneros/Keylogger',
    demoUrl: 'https://youtu.be/e8cjR6F0vdg'
  },
  {
    id: 3,
    title: '8-Puzzle Game',
    image: process.env.PUBLIC_URL + '/puzzle.png',
    description: 'Interactive 8-puzzle game with an A* algorithm solver. The game allows users to upload their own images.',
    languages: ['Python', 'A* Algorithm'],
    githubUrl: 'https://github.com/catacisneros/8puzzle_project',
    demoUrl: 'https://youtu.be/pUliJoU1Kv4'
  },
  {
    id: 4,
    title: 'TCP Socket Server',
    image: process.env.PUBLIC_URL + '/ArduinoPic.jpg',
    description: 'FTP client-server system that uses TCP sockets to enable authentication, file transfer, and directory management in passive mode, following the RFC 959 protocol standard.',
    languages: ['Python', 'Network'],
    githubUrl: 'https://github.com/catacisneros/TCP_Socket_Server',
    demoUrl: 'https://www.youtube.com/@catacis'
  }
];

// Array of Applied Physics & Data Analysis projects
const appliedPhysicsProjects = [
  {
    id: 1,
    name: 'Compton Scattering with Scintillation Detector',
    reportUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/blob/main/Compton_Scattering/Compton%20Scattering.pdf',
    githubUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/tree/main/Compton_Scattering'
  },
  {
    id: 2,
    name: 'Geiger-Mueller tube counting statistics',
    reportUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/blob/main/Counting_Statistics/Lab%20Report%20.pdf',
    githubUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/tree/main/Counting_Statistics'
  },
  {
    id: 3,
    name: 'Electron\'s Charge-to-Mass Ratio',
    reportUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/blob/main/EM_Ratio/EM%20Ratio%20Lab%20Report.pdf',
    githubUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/tree/main/EM_Ratio'
  },
  {
    id: 4,
    name: 'Hydrogen Spectrum using Balmer\'s formula and Rydberg constant',
    reportUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/blob/main/Hydrogen_Spectrum/Hydrogen%20spectrum.pdf',
    githubUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/tree/main/Hydrogen_Spectrum'
  },
  {
    id: 5,
    name: 'Verify Einstein\'s photoelectric equation and determine Planck\'s constant',
    reportUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/blob/main/Photoelectric_Effect/Photoelectric%20effect%20Lab%20Report.pdf',
    githubUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/tree/main/Photoelectric_Effect'
  },
  {
    id: 6,
    name: 'Calculating the Speed of Light using a laser and a photomultiplier tube',
    reportUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/blob/main/Speed_of_Light/Speed%20of%20Light.pdf',
    githubUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/tree/main/Speed_of_Light'
  },
  {
    id: 7,
    name: 'Double-Slit Interference Thomas Young Experiment',
    reportUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/blob/main/Two_Slit_Interference/Double-Slit-Interference.pdf',
    githubUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/tree/main/Two_Slit_Interference'
  },
  {
    id: 8,
    name: 'X-ray diffraction through a NaCl crystal.',
    reportUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/blob/main/X_Ray/X-Ray.pdf',
    githubUrl: 'https://github.com/catacisneros/PHY3802L_Fall2025/tree/main/X_Ray'
  }
];

// Main Portfolio component
const Portfolio = () => {

  
  // Custom TikTok icon component since Lucide doesn't have it
  const TikTokIcon = ({ className }) => (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
  
  return (
    <>
      {/* Hero Section - Split Screen Layout */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center py-12 sm:py-16 md:py-20 lg:py-24">
            {/* Left Side - Text Content */}
            <div>
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D0C13] leading-tight tracking-tight">
                Cybersecurity made practical
              </h1>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl text-[#0D0C13] leading-relaxed max-w-xl mt-4 sm:mt-6">
              I'm <strong>Cata</strong>, a CS student focused on <strong></strong>cybersecurity.
              I build projects in cryptography and networking. Experienced in incident response, log
              analysis, compliance, and client data protection.
              </p>
              
              {/* Social Icons and Stats Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mt-4 sm:mt-6">
                <div className="flex items-center gap-3 sm:gap-4">
              
            <a
              href="https://linkedin.com/in/catalinacisneros"
              target="_blank"
              rel="noopener noreferrer"
                    className="text-[#0D0C13] hover:text-[#A78BFA] transition-colors touch-manipulation">
            <Linkedin className="w-6 h-6 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://github.com/catacisneros"
              target="_blank"
              rel="noopener noreferrer"
                    className="text-[#0D0C13] hover:text-[#0D0C13] transition-colors touch-manipulation">
                    <Github className="w-6 h-6 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="mailto:catacis@catacis.anonaddy.com?subject=Contact%20-%20Catalina%20Cisneros"
                    className="text-[#0D0C13] hover:text-[#0D0C13] transition-colors touch-manipulation">
                  <Mail className="w-6 h-6 sm:w-5 sm:h-5" />
                  </a>
            <button
              onClick={() => {
                const url = process.env.PUBLIC_URL + '/Catalina Cisneros WS.pdf';
                window.open(encodeURI(url), '_blank', 'noopener,noreferrer');
              }}
                    className="text-[#0D0C13] hover:text-[#0D0C13] transition-colors touch-manipulation">
                    <FileDown className="w-6 h-6 sm:w-5 sm:h-5" />
            </button>
            <a
                    href="https://catacisneros.github.io/cybercata/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0D0C13] hover:text-[#A78BFA] transition-colors touch-manipulation">
                    <Globe className="w-6 h-6 sm:w-5 sm:h-5" />
                  </a>
          </div>
                <a
                  href="https://catacisneros.github.io/cybercata/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#0D0C13] hover:text-[#A78BFA] transition-colors"
                >
                  50k+ aprendiendo ciber conmigo
                </a>
              </div>
          
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6">
                <a
                  href="#projects"
                  className="px-4 py-2.5 sm:px-5 bg-[#0D0C13] text-[#F5F3FF] hover:bg-[#A78BFA] hover:text-[#F5F3FF] transition-colors rounded-md text-xs sm:text-sm font-medium touch-manipulation"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="px-4 py-2.5 sm:px-5 bg-[#0D0C13] text-[#F5F3FF] hover:bg-[#A78BFA] hover:text-[#F5F3FF] transition-colors rounded-md text-xs sm:text-sm font-medium touch-manipulation"
                >
                  Skills & Tools
                </a>
                <a
                  href="#additional-projects"
                  className="px-4 py-2.5 sm:px-5 bg-[#0D0C13] text-[#F5F3FF] hover:bg-[#A78BFA] hover:text-[#F5F3FF] transition-colors rounded-md text-xs sm:text-sm font-medium touch-manipulation"
                >
                  Physics & Data Analysis
                </a>
                <a
                  href="https://catacisneros.github.io/cybercata/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 sm:px-5 bg-[#0D0C13] text-[#F5F3FF] hover:bg-[#A78BFA] hover:text-[#F5F3FF] transition-colors rounded-md text-xs sm:text-sm font-medium touch-manipulation"
                >
                  CyberCata
                </a>
                <a
                  href="/Catalina Cisneros WS.pdf"
                  className="px-4 py-2.5 sm:px-5 bg-[#0D0C13] text-[#F5F3FF] hover:bg-[#A78BFA] hover:text-[#F5F3FF] transition-colors rounded-md text-xs sm:text-sm font-medium touch-manipulation"
                >
                  Resume
                </a>
              </div>
              
            </div>
            
            {/* Right Side - Image - isolated from dark mode invert so colors stay original */}
            <div className="w-full mt-6 sm:mt-8 lg:mt-0">
              <div className="w-full max-w-xs sm:max-w-md mx-auto lg:max-w-none aspect-square bg-[#E5E7EB] rounded-2xl shadow-2xl overflow-hidden relative">
                  <img
                    src={process.env.PUBLIC_URL + '/Cata_exp.png'}
                    alt="Cata presenting a cybersecurity lecture about open-source software"
                    className="w-full h-full object-cover opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
      </section>
      
      {/* Projects Section - Displays 4 projects in a grid */}
      <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F5F3FF]">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D0C13]">
             Software Projects
          </h2>
            <a
              href="https://github.com/catacisneros?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 sm:px-5 bg-[#0D0C13] text-[#F5F3FF] hover:bg-[#A78BFA] hover:text-[#F5F3FF] transition-colors rounded-md text-xs sm:text-sm font-medium touch-manipulation"
            >
              View all
            </a>
          </div>
          
          {/* Grid of project cards - responsive: 1 column on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#E5E7EB] rounded-lg overflow-hidden hover:bg-[#D1D5DB] transition-colors border border-neutral-800 flex flex-col"
              >
                {/* Project screenshot/image - isolated from dark mode invert; scale on wrapper so hover doesn't break counter-invert */}
                <div className="w-full h-48 bg-[#F5F3FF] overflow-hidden border border-neutral-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover border border-[#E5E7EB]"
                    />
                </div>
                
                {/* Project information container */}
                <div className="p-4 flex flex-col flex-1">
                  {/* Project title */}
                  <h3 className="text-[#0D0C13] font-semibold text-base mb-2">
                    {project.title}
                  </h3>
                  
                  {/* Project description text */}
                  <p className="text-[#0D0C13] text-sm leading-relaxed mb-3 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Technology tags (languages/frameworks used) */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#CBD5E1] text-[#0D0C13] text-xs rounded-md border border-neutral-800"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links to GitHub repo and live demo */}
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 sm:px-2.5 sm:py-2 bg-[#0D0C13] text-[#F5F3FF] hover:bg-[#A78BFA] hover:text-[#F5F3FF] transition-colors text-xs sm:text-sm font-medium rounded-md touch-manipulation"
                    >
                      <Github className="w-5 h-5 sm:w-4 sm:h-4" />
                      Github
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 sm:px-2.5 sm:py-2 bg-[#0D0C13] text-[#F5F3FF] hover:bg-[#A78BFA] hover:text-[#F5F3FF] transition-colors text-xs sm:text-sm font-medium rounded-md touch-manipulation"
                    >
                      <ExternalLink className="w-5 h-5 sm:w-4 sm:h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills & Tools Section */}
      <section id="skills" className="py-10 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F5F3FF]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0D0C13] mb-6 sm:mb-8 text-left">
            Skills & Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Security and networking */}
            <div className="bg-[#E5E7EB] border border-neutral-800 rounded-lg p-4 hover:bg-[#D1D5DB] transition-colors">
              <h4 className="text-[#0D0C13] font-semibold text-base mb-2">Security and networking</h4>
              <ul className="space-y-1.5">
                <li className="text-[#0D0C13] text-sm leading-relaxed">Splunk, Wireshark, Nmap, Snort, Burp Suite, OSINT tools, packet analysis, incident response</li>
              </ul>
            </div>
            
            {/* Programming and systems */}
            <div className="bg-[#E5E7EB] border border-neutral-800 rounded-lg p-4 hover:bg-[#D1D5DB] transition-colors">
              <h4 className="text-[#0D0C13] font-semibold text-base mb-2">Programming and systems</h4>
              <ul className="space-y-1.5">
                <li className="text-[#0D0C13] text-sm leading-relaxed">Python, Bash, SQL, Java, C and C++, Linux (Ubuntu, Kali), macOS, Windows</li>
              </ul>
            </div>
            
            {/* Cloud, data and platforms */}
            <div className="bg-[#E5E7EB] border border-neutral-800 rounded-lg p-4 hover:bg-[#D1D5DB] transition-colors">
              <h4 className="text-[#0D0C13] font-semibold text-base mb-2">Cloud, data and platforms</h4>
              <ul className="space-y-1.5">
                <li className="text-[#0D0C13] text-sm leading-relaxed">Git and GitHub, AWS, Power BI, Salesforce, SOC dashboards, data visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Projects Section - Applied Physics & Data Analysis */}
      <section id="additional-projects" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#F5F3FF]">
        <div className="max-w-7xl mx-auto">
                {/* Section Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0D0C13] mb-6 sm:mb-10">
                    Applied Physics Analysis & Lab Reports
                  </h3>
                
          {/* Projects List - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {appliedPhysicsProjects.map((project) => (
              <div key={project.id} className="flex items-center gap-3 bg-[#E5E7EB] rounded-md p-3 border border-neutral-800 hover:bg-[#D1D5DB] transition-colors">
                <div className="flex-1">
                  <span className="text-[#0D0C13] text-sm leading-relaxed">
                    {project.name}
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-8 sm:h-8 bg-[#0D0C13] text-[#F5F3FF] rounded-full flex items-center justify-center hover:bg-[#A78BFA] hover:text-[#F5F3FF] transition-colors touch-manipulation"
                    title="Link to report"
                  >
                    <ExternalLink className="w-5 h-5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-8 sm:h-8 bg-[#0D0C13] text-[#F5F3FF] rounded-full flex items-center justify-center hover:bg-[#A78BFA] hover:text-[#F5F3FF] transition-colors touch-manipulation"
                    title="Link to GitHub"
                  >
                    <Github className="w-5 h-5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      
      {/* Footer - Copyright and footer text */}
      <footer className="text-center py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12 text-[#0D0C13] text-xs sm:text-sm border-t border-neutral-300 bg-[#F5F3FF]">
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://tiktok.com/@catacisneros"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0D0C13] hover:text-[#A78BFA] transition-colors touch-manipulation">
                    <TikTokIcon className="w-6 h-6 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.youtube.com/@cybercata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0D0C13] hover:text-[#0D0C13] transition-colors touch-manipulation">
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/catalinacisneros"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0D0C13] hover:text-[#A78BFA] transition-colors touch-manipulation">
            <Linkedin className="w-6 h-6 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://github.com/catacisneros"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0D0C13] hover:text-[#0D0C13] transition-colors touch-manipulation">
                    <Github className="w-6 h-6 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://instagram.com/cyber.cata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0D0C13] hover:text-[#0D0C13] transition-colors touch-manipulation">
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://catacisneros.github.io/cybercata/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0D0C13] hover:text-[#0D0C13] transition-colors touch-manipulation">
            <Globe className="w-5 h-5" />
          </a>
          <a
            href="mailto:catacis@catacis.anonaddy.com?subject=Contact%20-%20Catalina%20Cisneros"
            className="text-[#0D0C13] hover:text-[#0D0C13] transition-colors touch-manipulation">
                  <Mail className="w-6 h-6 sm:w-5 sm:h-5" />
          </a>
          <button
            onClick={() => {
              const url = process.env.PUBLIC_URL + '/Catalina Cisneros WS.pdf';
              window.open(encodeURI(url), '_blank', 'noopener,noreferrer');
            }}
            className="text-[#0D0C13] hover:text-[#0D0C13] transition-colors touch-manipulation">
                    <FileDown className="w-6 h-6 sm:w-5 sm:h-5" />
          </button>
        </div>
        <p>© 2026 CyberCata </p>
        <p>Built by Cata</p>
      </footer>

    </>
  );
};

export default Portfolio;
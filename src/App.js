// Import React hooks and icons
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Terminal, ExternalLink, FileDown, Twitter } from 'lucide-react';

// Array of subtitle texts that cycle in the hero section
const subtitleTexts = ['Cybersecurity', 'Physics', 'Computer Science'];

// Array of project data - update with your actual project information
const projects = [
  
  {
    id: 1,
    title: 'RSA Encrypted Client-Server Communication',
    image: process.env.PUBLIC_URL + '/RSA_Encryption.png',
    description: 'Secure messaging system implementing RSA-1024 encryption with SHA256 integrity verification. Features dual-socket architecture, PKCS1_OAEP padding, and secure key exchange protocol.',
    languages: ['Python', 'PyCryptodome', 'RSA/SHA256'],
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
  // State variables to manage different features
  const [userInput, setUserInput] = useState(''); // User input for terminal commands
  const [terminalHistory, setTerminalHistory] = useState([]); // History of terminal commands and responses
  const [showCursor, setShowCursor] = useState(true); // Controls cursor blinking animation
  const [commandCount, setCommandCount] = useState(0); // Counter for terminal commands entered
  const [animatedSubtitle, setAnimatedSubtitle] = useState(''); // Current animated subtitle text
  const [subtitleIndex, setSubtitleIndex] = useState(0); // Index of current subtitle in array
  const [isDeleting, setIsDeleting] = useState(false); // Whether subtitle is being deleted or typed
  
  // Makes the cursor blink on and off
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Creates typing/deleting animation for the subtitle in hero section
  useEffect(() => {
    const currentText = subtitleTexts[subtitleIndex];
    
    if (!isDeleting && animatedSubtitle.length < currentText.length) {
      // Typing - add one character at a time
      const timeout = setTimeout(() => {
        setAnimatedSubtitle(currentText.slice(0, animatedSubtitle.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && animatedSubtitle.length === currentText.length) {
      // Wait 2 seconds before starting to delete
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && animatedSubtitle.length > 0) {
      // Deleting - remove one character at a time
      const timeout = setTimeout(() => {
        setAnimatedSubtitle(prev => prev.slice(0, -1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isDeleting && animatedSubtitle.length === 0) {
      // Move to next text immediately when done deleting
      setIsDeleting(false);
      setSubtitleIndex(prev => (prev + 1) % subtitleTexts.length);
    }
  }, [animatedSubtitle, subtitleIndex, isDeleting]);
  
  // Returns a response message based on how many commands the user has entered
  const getTerminalResponse = () => {
    const messages = [
      "Now streaming: cybersecurity explained simply in Spanish on <a href='https://tiktok.com/@catacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>TikTok</a>",
      "Breaking down complex security concepts, no gatekeeping, no fluff",
      "Watch me explain the basics of cybersecurity in Spanish on <a href='https://tiktok.com/@catacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>TikTok</a>",
      "This is my CV → <a href='/Catalina Cisneros 1.pdf' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>Catalina Cisneros</a>",
      "Computer Science major with a Physics minor",
      "Cybersecurity focused | CompTIA Security+ certified",
      "Currently mentoring future security engineers as a Tech Fellow at CodePath",
      "",
      "pip install <a href='/Catalina Cisneros 1.pdf' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>my resume</a>",
      "git push origin security_career",
      "",
      "echo '<a href='mailto:catacis@catacis.anonaddy.com?subject=Job%20Opportunity%20-%20Catalina%20Cisneros&body=Hi%20Catalina%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0ABest%2C%0A[Your%20Name]' class='text-green-600 hover:text-green-200 hover:underline'>let’s talk</a>'",
      "",
      "Incoming recruiter ping detected",
      "Response status: online",
      "",
      "Latina in tech | building, teaching, and shipping",
      "Connect professionally on <a href='https://linkedin.com/in/catalinacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>LinkedIn</a>",
      "Browse my projects on <a href='https://github.com/catacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>GitHub</a>",
      "",
      "Warning: following may upgrade your threat model",
      "EOF"

    ];
    return messages[Math.min(commandCount, messages.length - 1)];
  };

  // Handles when user submits a command in the terminal
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const response = getTerminalResponse();
    const newEntry = `catalina@security:~$ ${userInput}\n${response}`;
    setTerminalHistory(prev => [...prev, newEntry]);
    setCommandCount(prev => prev + 1);
    setUserInput('');
  };

  // Handles Enter key press in terminal input
  const handleTerminalKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleTerminalSubmit(e);
    }
  };

  // Auto-scroll to terminal when new entries are added
  useEffect(() => {
    if (terminalHistory.length > 0) {
      const terminalElement = document.getElementById('terminal-section');
      if (terminalElement) {
        terminalElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'end' 
        });
      }
    }
  }, [terminalHistory]);
  
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
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Background animation - random binary digits (1s and 0s) floating around */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
      
      {/* Hero Section - Main landing area with name and subtitle */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 mb-0">
        <div className="text-center space-y-2 max-w-4xl">
          {/* Terminal icon */}
          <Terminal className="w-12 h-12 mx-auto" />
          
          {/* Name heading */}
          <h2 className="text-4xl md:text-6xl font-bold">
            Catalina Cisneros
          </h2>
          
          {/* Animated subtitle that types and deletes */}
          <div className="text-lg md:text-xl text-white">
            <span className="text-green-400">
              {animatedSubtitle}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </span>
          </div>
          
          {/* Tagline */}
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            No, I won't hack your ex's Instagram.
          </p>
          
          {/* Social media links and resume download */}
          <div className="flex justify-center gap-4 pt-1">
            <a
              href="https://linkedin.com/in/catalinacisneros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6 hover:animate-pulse" />
            </a>
            
            <a
              href="https://github.com/catacisneros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6 hover:animate-spin" />
            </a>
            
            <a
              href="https://x.com/catacisnerosr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6 hover:animate-bounce" />
            </a>
            
            <a
              href="https://tiktok.com/@catacisneros"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-white transition-colors"
            >
              <TikTokIcon className="w-6 h-6 hover:animate-pulse" />
            </a>
            
            <button
              onClick={() => {
                const url = process.env.PUBLIC_URL + '/Catalina Cisneros 1.pdf';
                window.open(encodeURI(url), '_blank', 'noopener,noreferrer');
              }}
              className="text-green-400 hover:text-white transition-colors"
            >
              <FileDown className="w-6 h-6 hover:animate-pulse" />
            </button>
          </div>
          
          <p className="text-xs text-gray-600">
            I promise I'm friendly, <br/>{' '}
                <a href='mailto:catacis@catacis.anonaddy.com?subject=Job%20Opportunity%20-%20Catalina%20Cisneros&body=Hi%20Catalina%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20chat.%0A%0ABest%20regards,%0A[Your%20Name]' target='_blank' rel='noreferrer' className='text-gray-600 hover:text-gray-200 underline'> send me an email :) </a>
          </p>
        </div>
      </section>

      
      
      {/* Terminal Section - Interactive command-line interface */}
      <section id="terminal-section" className="pt-0 pb-16 px-4 mt-0">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Tip bubble encouraging users to type */}
          {commandCount === 0 && (
            <div className="relative max-w-4xl mx-auto mb-4 animate-pulse">
              <div className="bg-green-900/80 border border-green-500 rounded-lg px-4 py-3 text-left">
                <p className="text-green-300 text-sm font-mono">
                  💡 <span className="text-green-400">Try typing something! Type any command and press Enter to learn more about me.</span>
                </p>
              </div>
              {/* Small arrow pointing down to terminal */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500"></div>
              </div>
            </div>
          )}
          <div className="bg-gray-900 rounded-lg p-4 max-w-4xl mx-auto border border-green-500">
            {/* Terminal window header with colored buttons */}
            <div className="relative flex items-center mb-3 pb-2 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute left-16 text-green-400 font-mono text-sm">
                about_me.py
              </div>
            </div>
            {/* Terminal content area - shows interactive terminal after scrolling */}
            <div className="text-left space-y-2">
              {/* Display terminal history */}
                  {terminalHistory.map((entry, index) => (
                    <div key={index} className="text-green-400 text-sm whitespace-pre-line" dangerouslySetInnerHTML={{ __html: entry }} />
                  ))}
              {/* Terminal input field */}
                  <div className="flex items-center">
                <span className="text-green-300">catalina@security:~$ </span>
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={handleTerminalKeyDown}
                  className="bg-transparent text-green-400 outline-none font-mono flex-1"
                    />
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-green-400`}>_</span>
                  </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section - Displays 4 projects in a grid */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-400">
            My Coolest Projects
          </h2>
          
          {/* Grid of project cards - responsive: 1 column on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900 border border-green-500 rounded-lg overflow-hidden hover:border-green-400 transition-colors"
              >
                {/* Project screenshot/image */}
                <div className="w-full h-48 bg-gray-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Project information container */}
                <div className="p-4 space-y-3">
                  {/* Project description text */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technology tags (languages/frameworks used) */}
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((language, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-900/30 border border-green-500/50 text-green-400 text-xs rounded"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links to GitHub repo and live demo */}
                  <div className="flex gap-2 pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors text-sm font-mono"
                    >
                      <Github className="w-4 h-4" />
                      Github
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors text-sm font-mono"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Projects Section - Applied Physics & Data Analysis */}
      <section id="additional-projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Container */}
          <div className="p-6 md:p-8">
            {/* Single column layout - centered */}
            <div className="max-w-4xl mx-auto">
              {/* Applied Physics & Data Analysis Section */}
              <div className="space-y-4">
                {/* Section Title */}
                <div className="border border-dashed border-green-500 rounded px-4 py-2 bg-gray-900">
                  <h3 className="text-green-400 font-bold text-lg md:text-xl text-center">
                    Applied Physics & Data Analysis
                  </h3>
                </div>
                
                {/* Projects List */}
                <div className="space-y-3">
                  {appliedPhysicsProjects.map((project) => (
                    <div key={project.id} className="flex items-center gap-3">
                      {/* Project Name Box */}
                      <div className="flex-1 bg-gray-900 border border-green-500 rounded px-3 py-2">
                        <span className="text-gray-300 font-mono text-sm md:text-base">
                          {project.name}
                        </span>
                      </div>
                      
                      {/* Two Circular Icons */}
                      <div className="flex gap-2">
                        {/* Report/Demo Link Icon */}
                        <a
                          href={project.reportUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 border border-green-500 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-black transition-colors"
                          title="Link to report"
                        >
                          <ExternalLink className="w-5 h-5 text-green-400" />
                        </a>
                        
                        {/* GitHub Link Icon */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-800 border border-green-500 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-black transition-colors"
                          title="Link to GitHub"
                        >
                          <Github className="w-5 h-5 text-green-400" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      
      {/* Footer - Copyright and footer text */}
      <footer className="text-center py-8 text-gray-600 text-xs border-t border-gray-800">
        <p>© 2024 Catalina Cisneros • Vibe coded with Cursor</p>
        <p className="mt-1">This site is unhackable* (*probably)</p>
      </footer>
    </div>
  );
};

export default Portfolio;
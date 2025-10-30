// Import React hooks and icons
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Terminal, ExternalLink, FileDown, Twitter } from 'lucide-react';

// Array of subtitle texts that cycle in the hero section
const subtitleTexts = ['Cybersecurity', 'Physics', 'Computer Science'];

// Array of project data - update with your actual project information
const projects = [
  
  {
    id: 1,
    title: 'IoT Security Dashboard',
    image: 'https://via.placeholder.com/400x250/00ff00/000000?text=Project+4',
    description: 'Simulated SOC dashboard to track and monitor IoT devices. Designed to show device status, security alerts, and analytics.',
    languages: ['Python', 'React (JS)', 'FastAPI', 'WireShark'],
    githubUrl: 'https://github.com/catacisneros/IoT_Security_Dashboard',
    demoUrl: 'https://www.youtube.com/@cataciso'
  },
  {
    id: 2,
    title: 'Advanced Keylogger PoC ',
    image: 'https://via.placeholder.com/400x250/00ff00/000000?text=Project+2',
    description: 'Records keystrokes with timestamps, handles regular and special keys, and logs to a text file for easy review.',
    languages: ['Python', 'pynput', 'React (JS)', 'FastAPI'],
    githubUrl: 'https://github.com/catacisneros/Advanced-Keylogger',
    demoUrl: 'https://www.youtube.com/@catacis'
  },
  {
    id: 3,
    title: '8-Puzzle Game',
    image: 'https://via.placeholder.com/400x250/00ff00/000000?text=Project+3',
    description: 'Interactive 8-puzzle game with an A* algorithm solver. The game allows users to upload their own images.',
    languages: ['Python', 'A* Algorithm'],
    githubUrl: 'https://github.com/catacisneros/8puzzle_project',
    demoUrl: 'https://youtu.be/pUliJoU1Kv4'
  },
  {
    id: 4,
    title: 'TCP Socket Server',
    image: 'https://via.placeholder.com/400x250/00ff00/000000?text=Project+1',
    description: 'FTP client-server system that uses TCP sockets to enable authentication, file transfer, and directory management in passive mode, following the RFC 959 protocol standard.',
    languages: ['Python', 'Network'],
    githubUrl: 'https://github.com/catacisneros/IoT_Security_Dashboard',
    demoUrl: 'https://www.youtube.com/@catacis'
  }
  
];

// Array of other projects - simpler format with just name, description, languages, and GitHub
const otherProjects = [
  {
    id: 1,
    name: 'Other Project 1',
    description: 'A brief description of another project.',
    languages: ['Python', 'Flask'],
    githubUrl: 'https://github.com/catacisneros'
  },
  {
    id: 2,
    name: 'Other Project 2',
    description: 'A brief description of another project.',
    languages: ['JavaScript', 'Express'],
    githubUrl: 'https://github.com/catacisneros'
  },
  {
    id: 3,
    name: 'Other Project 3',
    description: 'A brief description of another project.',
    languages: ['C++', 'Qt'],
    githubUrl: 'https://github.com/catacisneros'
  },
  {
    id: 4,
    name: 'Other Project 4',
    description: 'A brief description of another project.',
    languages: ['Ruby', 'Rails'],
    githubUrl: 'https://github.com/catacisneros'
  },
  {
    id: 5,
    name: 'Other Project 5',
    description: 'A brief description of another project.',
    languages: ['Go', 'Gin'],
    githubUrl: 'https://github.com/catacisneros'
  },
  {
    id: 6,
    name: 'Other Project 6',
    description: 'A brief description of another project.',
    languages: ['PHP', 'Laravel'],
    githubUrl: 'https://github.com/catacisneros'
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
      "This is my CV: <a href='https://linkedin.com/in/catalinacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>Catalina Cisneros</a>",
      "I Study Computer Science and Physics at FIU",
      "Certifications: CompTIA Security+",
      "Currently a Tech Fellow at CodePath",
      "pip install <a href='https://catacisneros.github.io/Catalina_Cisneros_Resume.pdf' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'> my resume </a>",
      "git push origin career_goals",
      "echo '<a href='mailto:catacis@catacis.anonaddy.com?subject=Job%20Opportunity%20-%20Catalina%20Cisneros&body=Hi%20Catalina%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20chat.%0A%0ABest%20regards,%0A[Your%20Name]' class='text-green-600 hover:text-green-200 hover:text-green-200 hover:underline'>Send me an email</a>'",
      "Recruiter ping received...responding immediately",
      "FYI, I'm latina... you're welcome",
      "Oh! Don't forget to follow me on <a href='https://tiktok.com/@catacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>TikTok</a>",
      "And connect with me on <a href='https://linkedin.com/in/catalinacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>LinkedIn</a>",
      "And check out my <a href='https://github.com/catacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>GitHub</a>",
      "Follow or you'll wonder why you didn't...",
       "Anyway, if you're still here, <a href='mailto:catacis@catacis.anonaddy.com?subject=Job%20Opportunity%20-%20Catalina%20Cisneros&body=Hi%20Catalina%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20chat.%0A%0ABest%20regards,%0A[Your%20Name]' class='text-green-600 hover:text-green-200 hover:underline'>click</a>",
       "<a href='mailto:catacis@catacis.anonaddy.com?subject=Job%20Opportunity%20-%20Catalina%20Cisneros&body=Hi%20Catalina%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20chat.%0A%0ABest%20regards,%0A[Your%20Name]' class='text-green-600 hover:text-green-200 underline'>click</a>",
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
              onClick={() => window.open('Catalina Cisneros CV - NOPP.pdf')}
              className="text-green-400 hover:text-white transition-colors"
            >
              <FileDown className="w-6 h-6 hover:animate-pulse" />
            </button>
          </div>
          
          <p className="text-xs text-gray-600">
            I promise I'm friendly, <br/>{' '}
                <a href='mailto:catacis@catacis.anonaddy.com?subject=Job%20Opportunity%20-%20Catalina%20Cisneros&body=Hi%20Catalina%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20chat.%0A%0ABest%20regards,%0A[Your%20Name]' target='_blank' className='text-gray-600 hover:text-gray-200 underline'>please hire me</a>
          </p>
        </div>
      </section>

      
      
      {/* Terminal Section - Interactive command-line interface */}
      <section id="terminal-section" className="pt-0 pb-16 px-4 mt-0">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="bg-gray-900 rounded-lg p-4 max-w-4xl mx-auto border border-green-500">
            {/* Terminal window header with colored buttons */}
            <div className="relative flex items-center mb-3 pb-2 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute left-16 text-green-400 font-mono text-sm">
                about_me.exe
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
      
      
      
      {/* Footer - Copyright and footer text */}
      <footer className="text-center py-8 text-gray-600 text-xs border-t border-gray-800">
        <p>© 2024 Catalina Cisneros • Vibe coded with Cursor</p>
        <p className="mt-1">This site is unhackable* (*probably)</p>
      </footer>
    </div>
  );
};

export default Portfolio;
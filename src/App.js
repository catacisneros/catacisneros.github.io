import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Terminal, ExternalLink, FileDown, Twitter } from 'lucide-react';

const subtitleTexts = ['Cybersecurity', 'Physics', 'Computer Science'];

const Portfolio = () => {
  const [typedText, setTypedText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [commandCount, setCommandCount] = useState(0);
  const [animatedSubtitle, setAnimatedSubtitle] = useState('');
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const fullText = "I break things... for fun.";
  
  // Handle scroll detection for typing animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  // Typing animation triggered by scroll
  useEffect(() => {
    if (hasScrolled) {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, [hasScrolled]);
  
  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  

  // Animated subtitle typing effect
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
  
  

  const getTerminalResponse = () => {
    const messages = [
      "User: <a href='https://linkedin.com/in/catalinacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>Catalina Cisneros</a>",
      "Loading modules... Computer Science + Physics @ FIU",
      "Certifications: CompTIA Security+",
      "User status: Tech Fellow @ CodePath",
      "pip install <a href='https://catacisneros.github.io/Catalina_Cisneros_Resume.pdf' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>catalina_resume</a>",
      "git push origin career_goals",
      "echo '<a href='mailto:catacis@catacis.anonaddy.com?subject=Job%20Opportunity%20-%20Catalina%20Cisneros&body=Hi%20Catalina%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20chat.%0A%0ABest%20regards,%0A[Your%20Name]' class='text-green-600 hover:text-green-200 hover:text-green-200 hover:underline'>Please hire me</a>'",
      "Recruiter ping received...responding immediately",
      "Oh! Don't forget to follow me on <a href='https://tiktok.com/@catacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>TikTok</a>",
      "And connect with me on <a href='https://linkedin.com/in/catalinacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>LinkedIn</a>",
      "And check out my <a href='https://github.com/catacisneros' target='_blank' class='text-green-600 hover:text-green-200 hover:underline'>GitHub</a>",
      "Follow or you'll wonder why you didn't...",
       "Anyway, if you're still here, <a href='mailto:catacis@catacis.anonaddy.com?subject=Job%20Opportunity%20-%20Catalina%20Cisneros&body=Hi%20Catalina%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20chat.%0A%0ABest%20regards,%0A[Your%20Name]' class='text-green-600 hover:text-green-200 hover:underline'>click</a>",
       "<a href='mailto:catacis@catacis.anonaddy.com?subject=Job%20Opportunity%20-%20Catalina%20Cisneros&body=Hi%20Catalina%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20chat.%0A%0ABest%20regards,%0A[Your%20Name]' class='text-green-600 hover:text-green-200 underline'>click</a>",
    ];
    return messages[Math.min(commandCount, messages.length - 1)];
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const response = getTerminalResponse();
    const newEntry = `catalina@security:~$ ${userInput}\n${response}`;
    setTerminalHistory(prev => [...prev, newEntry]);
    setCommandCount(prev => prev + 1);
    setUserInput('');
  };

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
      {/* Matrix rain effect - simplified */}
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
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 mb-0">
        <div className="text-center space-y-2 max-w-4xl">
          <Terminal className="w-12 h-12 mx-auto" />
          
          <h2 className="text-4xl md:text-6xl font-bold">
            Catalina Cisneros
          </h2>
          
          <div className="text-lg md:text-xl text-white">
            <span className="text-green-400">
              {animatedSubtitle}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </span>
          </div>
          
          
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            No, I won't hack your ex's Instagram.
          </p>
          
          {/* Social Icons */}
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
              I promise I'm friendly, 
              <p className="text-xs text-gray-800">
                <a href='mailto:catacis@catacis.anonaddy.com?subject=Job%20Opportunity%20-%20Catalina%20Cisneros&body=Hi%20Catalina%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0APlease%20let%20me%20know%20when%20would%20be%20a%20good%20time%20to%20chat.%0A%0ABest%20regards,%0A[Your%20Name]' target='_blank' className='text-gray-600 hover:text-gray-200 underline'>please hire me</a>
              </p>
          </p>
        </div>
      </section>
      {/* Terminal and Status Bar Section */}
      <section id="terminal-section" className="pt-0 pb-16 px-4 mt-0">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="bg-gray-900 rounded-lg p-4 max-w-4xl mx-auto border border-green-500">
            {/* Window controls and title */}
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
            <div className="text-left space-y-2">
              {!hasScrolled ? (
                <div>
                  <span className="text-green-300">catalina@security:~$</span>
                  <span className="text-green-300">&nbsp;</span>
                  <span>{typedText}</span>
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
                </div>
              ) : (
                <>
                  {terminalHistory.map((entry, index) => (
                    <div key={index} className="text-green-400 text-sm whitespace-pre-line" dangerouslySetInnerHTML={{ __html: entry }} />
                  ))}
                  <div className="flex items-center">
                    <span className="text-green-300">catalina@security:~$</span>
                    <span className="text-green-300">&nbsp;</span>
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyDown={handleTerminalKeyDown}
                      className="bg-transparent text-green-400 outline-none font-mono"
                      placeholder=""
                      style={{ flex: 1 }}
                    />
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-green-400`}>_</span>
                  </div>
                </>
              )}
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-xs border-t border-gray-800">
        <p>© 2024 Catalina Cisneros • Vibe coded with Cursor</p>
        <p className="mt-1">This site is unhackable* (*probably)</p>
      </footer>
    </div>
  );
};

export default Portfolio;
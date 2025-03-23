import React, { useState, useEffect } from 'react';
import myimage from '../assets/images/myimage.jpg';
import { Sun, Moon, Mail, Phone, Linkedin, Briefcase, ChevronRight, Menu, X, MapPin, Calendar, GraduationCap, Code, Palette, MessageSquare, ShoppingBag, Store, Calendar as CalendarIcon } from 'lucide-react';

const home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800/80 backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Gopal Mahajan</h1>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-blue-500 transition-colors duration-200">About</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors duration-200">Experience</a>
            <a href="#education" className="hover:text-blue-500 transition-colors duration-200">Education</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors duration-200">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors duration-200">Projects</a>
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full transition-colors duration-200 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme} 
              className={`p-2 mr-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleMenu} 
              className={`p-2 rounded ${darkMode ? 'text-white' : 'text-gray-800'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden px-4 py-3 ${darkMode ? 'bg-gray-800/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'} shadow-inner`}>
            <div className="flex flex-col space-y-3">
              <a href="#about" className="py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center" onClick={toggleMenu}>
                About <ChevronRight size={16} className="ml-1" />
              </a>
              <a href="#experience" className="py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center" onClick={toggleMenu}>
                Experience <ChevronRight size={16} className="ml-1" />
              </a>
              <a href="#education" className="py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center" onClick={toggleMenu}>
                Education <ChevronRight size={16} className="ml-1" />
              </a>
              <a href="#skills" className="py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center" onClick={toggleMenu}>
                Skills <ChevronRight size={16} className="ml-1" />
              </a>
              <a href="#projects" className="py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center" onClick={toggleMenu}>
                Projects <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Profile Image */}
      <section className={`py-20 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Profile Image */}
            <div className="mb-6 md:mb-0 relative">
              <div className={`w-48 h-48 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-600' : 'border-blue-500'} shadow-lg transform transition-transform duration-500 hover:scale-105`}>
                <img src={myimage} alt="Gopal Mahajan" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg">
                <GraduationCap size={20} />
              </div>
            </div>
            
            {/* Hero Text */}
            <div className="text-center md:text-left md:max-w-lg">
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Gopal Mahajan</h1>
                <h2 className="text-xl md:text-2xl mb-1 font-semibold">Front-End Developer</h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto md:mx-0 rounded"></div>
              </div>
              <p className="text-lg mb-8 leading-relaxed">
                Motivated and detail-oriented Front-End Developer with expertise in building responsive, user-friendly interfaces using React and modern web technologies.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href="mailto:gopalmahajan3392@gmail.com" 
                  className={`px-6 py-3 rounded-full ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center`}
                >
                  <Mail size={20} className="mr-2" />
                  Contact Me
                </a>
                <a 
                  href="https://linkedin.com/in/gopal-mahajan-2b0638248" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`px-6 py-3 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center`}
                >
                  <Linkedin size={20} className="mr-2 text-blue-500" />
                  LinkedIn
                </a>
                <a 
                  href="#projects" 
                  className={`px-6 py-3 rounded-full ${darkMode ? 'bg-purple-700 hover:bg-purple-600' : 'bg-purple-600 hover:bg-purple-700'} text-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center`}
                >
                  <Briefcase size={20} className="mr-2" />
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold inline-block relative">
                About Me
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></div>
              </h2>
            </div>
            <p className="text-lg mb-4 leading-relaxed">
              I'm a Front-End Developer with a solid foundation in web development technologies, including HTML, CSS, JavaScript, and React. I'm skilled in building responsive and user-friendly interfaces with a focus on performance, accessibility, and aesthetics.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Proficient in Git, modern tools like Vite, and UI frameworks such as Material-UI and Tailwind CSS. I possess strong problem-solving skills and an eagerness to learn new technologies to stay at the forefront of web development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transform transition-transform duration-300 hover:scale-105`}>
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-blue-500 text-white mr-3">
                    <Mail size={20} />
                  </div>
                  <h3 className="font-bold text-xl">Contact Information</h3>
                </div>
                <div className="space-y-3 pl-2">
                  <p className="flex items-center">
                    <Phone size={16} className="text-blue-500 mr-2" />
                    <span>Phone: </span>
                    <a href="tel:8329222629" className="ml-1 text-blue-500 hover:underline">8329222629</a>
                  </p>
                  <p className="flex items-center">
                    <Mail size={16} className="text-blue-500 mr-2" />
                    <span>Email: </span>
                    <a href="mailto:gopalmahajan3392@gmail.com" className="ml-1 text-blue-500 hover:underline">gopalmahajan3392@gmail.com</a>
                  </p>
                  <p className="flex items-center">
                    <Linkedin size={16} className="text-blue-500 mr-2" />
                    <span>LinkedIn: </span>
                    <a href="https://linkedin.com/in/gopal-mahajan-2b0638248" target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-500 hover:underline">Gopal Mahajan</a>
                  </p>
                </div>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transform transition-transform duration-300 hover:scale-105`}>
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-500 text-white mr-3">
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-bold text-xl">Personal Details</h3>
                </div>
                <div className="space-y-3 pl-2">
                  <p className="flex items-center">
                    <MapPin size={16} className="text-purple-500 mr-2" />
                    Location: Pune, Maharashtra
                  </p>
                  <p className="flex items-center">
                    <Calendar size={16} className="text-purple-500 mr-2" />
                    Date of Birth: 15 November 2000
                  </p>
                  <p className="flex items-center">
                    {/* <Football size={16} className="text-purple-500 mr-2" /> */}
                    Interests: Football, Traveling, Watching Documentaries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold inline-block relative">
              Work Experience
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></div>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <div className="ml-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <Briefcase size={20} className="mr-2 text-blue-500" />
                    Software Developer
                  </h3>
                  <div className="text-sm mt-2 md:mt-0">
                    <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-blue-100 text-blue-800'} font-medium`}>
                      June 2024 - Present
                    </span>
                  </div>
                </div>
                <h4 className="text-lg mb-4 font-medium text-blue-500">Techriigour IT Solutions</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="mr-2 mt-1 text-green-500" />
                    Developed and maintained React-based applications with modern JavaScript features and best practices.
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="mr-2 mt-1 text-green-500" />
                    Collaborated with design and backend teams to create responsive and high-performance web applications that meet client requirements.
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="mr-2 mt-1 text-green-500" />
                    Applied industry best practices in modern front-end development using React, Tailwind CSS, and version control with Git.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold inline-block relative">
              Education
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></div>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} border-l-4 border-blue-500`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-xl font-bold flex items-center">
                  <GraduationCap size={20} className="mr-2 text-blue-500" />
                  Master of Computer Applications (MCA)
                </h3>
                <span className={`text-sm px-2 py-1 rounded mt-2 md:mt-0 ${darkMode ? 'bg-green-600' : 'bg-green-100 text-green-800'}`}>2025</span>
              </div>
              <p>Pratibha Institute of Business Management, SPPU</p>
              <p className="mt-2">SGPA: 7.29</p>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} border-l-4 border-blue-500`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-xl font-bold flex items-center">
                  <GraduationCap size={20} className="mr-2 text-blue-500" />
                  Bachelor of Computer Applications (BCA)
                </h3>
                <span className={`text-sm px-2 py-1 rounded mt-2 md:mt-0 ${darkMode ? 'bg-green-600' : 'bg-green-100 text-green-800'}`}>2023</span>
              </div>
              <p>Rashtriya Vidyalaya, Chalisgaon</p>
              <p className="mt-2">Percentage: 83.19%</p>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} border-l-4 border-blue-500`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-xl font-bold flex items-center">
                  <GraduationCap size={20} className="mr-2 text-blue-500" />
                  Higher Secondary Certificate (HSC)
                </h3>
                <span className={`text-sm px-2 py-1 rounded mt-2 md:mt-0 ${darkMode ? 'bg-green-600' : 'bg-green-100 text-green-800'}`}>2018</span>
              </div>
              <p>K.R. Kotkar Junior College</p>
              <p className="mt-2">Percentage: 62.77%</p>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} border-l-4 border-blue-500`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <h3 className="text-xl font-bold flex items-center">
                  <GraduationCap size={20} className="mr-2 text-blue-500" />
                  Secondary School Certificate (SSC)
                </h3>
                <span className={`text-sm px-2 py-1 rounded mt-2 md:mt-0 ${darkMode ? 'bg-green-600' : 'bg-green-100 text-green-800'}`}>2016</span>
              </div>
              <p>Good Shepherd Academy</p>
              <p className="mt-2">Percentage: 78%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold inline-block relative">
              Skills
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></div>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Code size={20} className="mr-2 text-blue-500" />
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>HTML</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>CSS</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>JavaScript</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>React.js</div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Palette size={20} className="mr-2 text-purple-500" />
                UI Libraries
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>Tailwind CSS</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>Bootstrap</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>Material-UI</div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                {/* <Tool size={20} className="mr-2 text-green-500" /> */}
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>Vite</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>REST APIs</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>Git</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>GitHub</div>
              </div>
            </div>
            
            <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MessageSquare size={20} className="mr-2 text-yellow-500" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>Communication</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>Problem-Solving</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>Decision Making</div>
                <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-300`}>Teamwork</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold inline-block relative">
              Projects
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></div>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`rounded-lg shadow-md overflow-hidden group ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 hover:-translate-y-2`}>
              <div className={`h-48 ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300`}>
                <ShoppingBag size={48} className={`group-hover:text-white transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Retail App</h3>
                <p className="mb-4">A web-based retail application that allows customers to browse, purchase, and manage products or services online.</p>
                <p className="text-sm font-semibold text-blue-500 flex items-center">
                  <Code size={16} className="mr-1" />
                  React
                </p>
              </div>
            </div>
            
            <div className={`rounded-lg shadow-md overflow-hidden group ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-transform duration-300 hover:-translate-y-2`}>
              <div className={`h-48 ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300`}>
                <Store size={48} className={`group-hover:text-white transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
                <p className="mb-4">A online shopping platform where users can explore products, add them to the cart, and make purchases seamlessly.</p>
                <p className="text-sm font-semibold text-blue-500 flex items-center">
                  <Code size={16} className="mr-1" />
                  React
                </p>
              </div>
            </div>
            
            <div className={`rounded-lg shadow-md overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className={`h-48 ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Conference Booking System</h3>
                <p className="mb-4">A conference room scheduling application designed to simplify meeting management, allowing users to book and track room availability.</p>
                <p className="text-sm font-semibold text-blue-500">React</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Gopal Mahajan &copy; 2025</p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:gopalmahajan3392@gmail.com" className="hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="tel:8329222629" className="hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/gopal-mahajan-2b0638248" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default home;
import React, { useState, useEffect } from "react";
import myimage from "../assets/images/Myimage.png";
import {
  Sun,
  Moon,
  Mail,
  Phone,
  Linkedin,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  MapPin,
  Calendar,
  GraduationCap,
  Code,
  Palette,
  MessageSquare,
  ShoppingBag,
  Store,
  CalendarCheck,
  Wrench,
  Activity,
} from "lucide-react";

const home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Navigation Bar */}
      <nav
        className={`sticky top-0 z-10 ${
          darkMode
            ? "bg-gray-800/80 backdrop-blur-md"
            : "bg-white/80 backdrop-blur-md"
        } shadow-md`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Gopal Mahajan
          </h1>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#education"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Education
            </a>
            <a
              href="#skills"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Projects
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-200 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 mr-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden px-4 py-3 ${
              darkMode
                ? "bg-gray-800/90 backdrop-blur-md"
                : "bg-white/90 backdrop-blur-md"
            } shadow-inner`}
          >
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                className="py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center"
                onClick={toggleMenu}
              >
                About <ChevronRight size={16} className="ml-1" />
              </a>
              <a
                href="#experience"
                className="py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center"
                onClick={toggleMenu}
              >
                Experience <ChevronRight size={16} className="ml-1" />
              </a>
              <a
                href="#education"
                className="py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center"
                onClick={toggleMenu}
              >
                Education <ChevronRight size={16} className="ml-1" />
              </a>
              <a
                href="#skills"
                className="py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center"
                onClick={toggleMenu}
              >
                Skills <ChevronRight size={16} className="ml-1" />
              </a>
              <a
                href="#projects"
                className="py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 flex items-center"
                onClick={toggleMenu}
              >
                Projects <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Profile Image */}
      <section
        className={`py-24 ${
          darkMode
            ? "bg-gradient-to-br from-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-50 to-indigo-100"
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Profile Image */}
            <div className="relative">
              <div
                className={`w-[20rem] h-[25rem] rounded-xl overflow-hidden border-4 ${
                  darkMode ? "border-blue-600" : "border-blue-500"
                } shadow-xl transform transition-transform duration-500 hover:scale-105`}
              >
                <img
                  src={myimage}
                  alt="Gopal Mahajan"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-8 -right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                <GraduationCap size={24} />
              </div> */}
            </div>

            {/* Hero Text */}
            <div className="text-center md:text-left md:max-w-2xl flex-1">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Gopal Mahajan
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl mb-2 font-semibold">
                  Front-End Developer
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto md:mx-0 rounded"></div>
              </div>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                Motivated and detail-oriented Front-End Developer with expertise
                in building responsive, user-friendly interfaces using React and
                modern web technologies.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="mailto:gopalmahajan3392@gmail.com"
                  className={`px-6 py-3 rounded-full ${
                    darkMode
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"
                  } text-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center`}
                >
                  <Mail size={20} className="mr-2" />
                  Contact Me
                </a>
                <a
                  href="https://linkedin.com/in/gopal-mahajan-2b0638248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-full ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-white hover:bg-gray-100"
                  } shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center`}
                >
                  <Linkedin size={20} className="mr-2 text-blue-500" />
                  LinkedIn
                </a>
                <a
                  href="#projects"
                  className={`px-6 py-3 rounded-full ${
                    darkMode
                      ? "bg-purple-700 hover:bg-purple-600"
                      : "bg-purple-600 hover:bg-purple-700"
                  } text-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center`}
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
      <section id="about" className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold inline-block relative mb-4">
              About Me
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></div>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              I'm a Front-End Developer with a solid foundation in web
              development technologies, including HTML, CSS, JavaScript, and
              React. I'm skilled in building responsive and user-friendly
              interfaces with a focus on performance, accessibility, and
              aesthetics.
            </p>
            <p className="text-lg md:text-xl mb-12 leading-relaxed">
              Proficient in Git, modern tools like Vite, and UI frameworks such
              as Material-UI and Tailwind CSS. I possess strong problem-solving
              skills and an eagerness to learn new technologies to stay at the
              forefront of web development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div
                className={`p-8 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-xl transform transition-transform duration-300 hover:scale-105`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-500 text-white mr-4">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-2xl">Contact Information</h3>
                </div>
                <div className="space-y-4 pl-3">
                  <p className="flex items-center text-lg">
                    <Phone size={18} className="text-blue-500 mr-3" />
                    <span>Phone: </span>
                    <a
                      href="tel:8329222629"
                      className="ml-2 text-blue-500 hover:underline"
                    >
                      8329222629
                    </a>
                  </p>
                  <p className="flex items-center text-lg">
                    <Mail size={18} className="text-blue-500 mr-3" />
                    <span>Email: </span>
                    <a
                      href="mailto:gopalmahajan3392@gmail.com"
                      className="ml-2 text-blue-500 hover:underline"
                    >
                      gopalmahajan3392@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center text-lg">
                    <Linkedin size={18} className="text-blue-500 mr-3" />
                    <span>LinkedIn: </span>
                    <a
                      href="https://linkedin.com/in/gopal-mahajan-2b0638248"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-500 hover:underline"
                    >
                      Gopal Mahajan
                    </a>
                  </p>
                </div>
              </div>
              <div
                className={`p-8 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-white"
                } shadow-xl transform transition-transform duration-300 hover:scale-105`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-purple-500 text-white mr-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-2xl">Personal Details</h3>
                </div>
                <div className="space-y-4 pl-3">
                  <p className="flex items-center text-lg">
                    <MapPin size={18} className="text-purple-500 mr-3" />
                    Location: Pune, Maharashtra
                  </p>
                  <p className="flex items-center text-lg">
                    <Calendar size={18} className="text-purple-500 mr-3" />
                    Date of Birth: 15 November 2000
                  </p>
                  <p className="flex items-center text-lg">
                    <Activity size={18} className="text-purple-500 mr-3" />
                    Interests: Football, Traveling, Watching Documentaries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-24 ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold inline-block relative mb-4">
              Work Experience
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></div>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div
              className={`p-8 rounded-xl shadow-xl ${
                darkMode ? "bg-gray-700" : "bg-white"
              } relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-3 h-full bg-blue-500"></div>
              <div className="ml-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h3 className="text-2xl font-bold flex items-center">
                    <Briefcase size={24} className="mr-3 text-blue-500" />
                    Software Developer
                  </h3>
                  <div className="text-md mt-3 md:mt-0">
                    <span
                      className={`px-4 py-2 rounded-full ${
                        darkMode ? "bg-blue-600" : "bg-blue-100 text-blue-800"
                      } font-medium`}
                    >
                      June 2024 - Present
                    </span>
                  </div>
                </div>
                <h4 className="text-xl mb-6 font-medium text-blue-500">
                  Techriigour IT Solutions
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start text-lg">
                    <ChevronRight
                      size={20}
                      className="mr-3 mt-1 text-green-500"
                    />
                    Developed and maintained React-based applications with
                    modern JavaScript features and best practices.
                  </li>
                  <li className="flex items-start text-lg">
                    <ChevronRight
                      size={20}
                      className="mr-3 mt-1 text-green-500"
                    />
                    Collaborated with design and backend teams to create
                    responsive and high-performance web applications that meet
                    client requirements.
                  </li>
                  <li className="flex items-start text-lg">
                    <ChevronRight
                      size={20}
                      className="mr-3 mt-1 text-green-500"
                    />
                    Applied industry best practices in modern front-end
                    development using React, Tailwind CSS, and version control
                    with Git.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold inline-block relative mb-4">
              Education
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded"></div>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div
              className={`p-8 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } border-l-4 border-blue-500`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <GraduationCap size={24} className="mr-3 text-blue-500" />
                  Master of Computer Applications (MCA)
                </h3>
                <span
                  className={`text-md px-4 py-2 rounded-full mt-3 md:mt-0 ${
                    darkMode ? "bg-green-600" : "bg-green-100 text-green-800"
                  } font-medium`}
                >
                  2025
                </span>
              </div>
              <p className="text-lg mt-2">
                Pratibha Institute of Business Management, SPPU
              </p>
              <p className="text-lg mt-2 font-medium">SGPA: 7.29</p>
            </div>

            <div
              className={`p-8 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } border-l-4 border-blue-500`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <GraduationCap size={24} className="mr-3 text-blue-500" />
                  Bachelor of Computer Applications (BCA)
                </h3>
                <span
                  className={`text-md px-4 py-2 rounded-full mt-3 md:mt-0 ${
                    darkMode ? "bg-green-600" : "bg-green-100 text-green-800"
                  } font-medium`}
                >
                  2023
                </span>
              </div>
              <p className="text-lg mt-2">Rashtriya Vidyalaya, Chalisgaon</p>
              <p className="text-lg mt-2 font-medium">Percentage: 83.19%</p>
            </div>

            <div
              className={`p-8 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } border-l-4 border-blue-500`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <GraduationCap size={24} className="mr-3 text-blue-500" />
                  Higher Secondary Certificate (HSC)
                </h3>
                <span
                  className={`text-md px-4 py-2 rounded-full mt-3 md:mt-0 ${
                    darkMode ? "bg-green-600" : "bg-green-100 text-green-800"
                  } font-medium`}
                >
                  2018
                </span>
              </div>
              <p className="text-lg mt-2">K.R. Kotkar Junior College</p>
              <p className="text-lg mt-2 font-medium">Percentage: 62.77%</p>
            </div>

            <div
              className={`p-8 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              } border-l-4 border-blue-500`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-bold flex items-center">
                  <GraduationCap size={24} className="mr-3 text-blue-500" />
                  Secondary School Certificate (SSC)
                </h3>
                <span
                  className={`text-md px-4 py-2 rounded-full mt-3 md:mt-0 ${
                    darkMode ? "bg-green-600" : "bg-green-100 text-green-800"
                  } font-medium`}
                >
                  2016
                </span>
              </div>
              <p className="text-lg mt-2">Good Shepherd Academy</p>
              <p className="text-lg mt-2 font-medium">Percentage: 78%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 ${
          darkMode
            ? "bg-gray-900 text-gray-100"
            : "bg-gradient-to-b from-blue-50 to-white text-gray-800"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold relative inline-block pb-3">
              My Expertise
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded"></div>
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-80">
              A collection of technologies and skills I've mastered throughout
              my journey
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Development */}
            <div
              className={`p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 hover:shadow-blue-500/20"
                  : "bg-white hover:shadow-xl"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-full ${
                    darkMode ? "bg-blue-500/20" : "bg-blue-100"
                  } mr-4`}
                >
                  <Code size={24} className="text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Frontend Development</h3>
              </div>
              <div className="space-y-4">
                {["HTML", "CSS", "JavaScript", "React.js"].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div
                      className={`w-full ${
                        darkMode ? "bg-gray-700" : "bg-gray-100"
                      } rounded-full h-4 mr-2`}
                    >
                      <div
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full"
                        style={{
                          width:
                            skill === "HTML" || skill === "CSS"
                              ? "95%"
                              : skill === "JavaScript"
                              ? "90%"
                              : "85%",
                        }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium w-24">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UI Libraries */}
            <div
              className={`p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 hover:shadow-purple-500/20"
                  : "bg-white hover:shadow-xl"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-full ${
                    darkMode ? "bg-purple-500/20" : "bg-purple-100"
                  } mr-4`}
                >
                  <Palette size={24} className="text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold">UI Libraries</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Tailwind CSS", "Bootstrap", "Material-UI"].map((lib) => (
                  <div
                    key={lib}
                    className={`p-4 rounded-lg text-center font-medium border-2 transition-all duration-300 flex items-center justify-center ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 hover:border-purple-500 hover:bg-gray-700/80"
                        : "bg-white border-gray-200 hover:border-purple-500 hover:bg-purple-50"
                    }`}
                  >
                    {lib}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div
              className={`p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 hover:shadow-green-500/20"
                  : "bg-white hover:shadow-xl"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-full ${
                    darkMode ? "bg-green-500/20" : "bg-green-100"
                  } mr-4`}
                >
                  <Wrench size={24} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">Tools & Technologies</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Vite", "REST APIs", "Git", "GitHub"].map((tool) => (
                  <div
                    key={tool}
                    className={`relative overflow-hidden p-4 rounded-lg text-center font-medium group ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-700/80"
                        : "bg-gray-50 hover:bg-white"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 w-1 ${
                        darkMode ? "bg-green-500" : "bg-green-400"
                      } group-hover:w-full transition-all duration-300 opacity-20`}
                    ></div>
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div
              className={`p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 hover:shadow-yellow-500/20"
                  : "bg-white hover:shadow-xl"
              }`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-full ${
                    darkMode ? "bg-yellow-500/20" : "bg-yellow-100"
                  } mr-4`}
                >
                  <MessageSquare size={24} className="text-yellow-500" />
                </div>
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Communication",
                  "Problem-Solving",
                  "Decision Making",
                  "Teamwork",
                  "Leadership",
                  "Adaptability",
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      darkMode
                        ? "bg-gray-700 text-yellow-400 border border-yellow-500/30"
                        : "bg-yellow-50 text-yellow-800 border border-yellow-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
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
            <div
              className={`rounded-lg shadow-md overflow-hidden group ${
                darkMode ? "bg-gray-800" : "bg-white"
              } transition-transform duration-300 hover:-translate-y-2`}
            >
              <div
                className={`h-48 ${
                  darkMode ? "bg-gray-700" : "bg-blue-100"
                } flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300`}
              >
                <ShoppingBag
                  size={48}
                  className={`group-hover:text-white transition-colors duration-300 ${
                    darkMode ? "text-blue-400" : "text-blue-500"
                  }`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Retail App</h3>
                <p className="mb-4">
                  A web-based retail application that allows customers to
                  browse, purchase, and manage products or services online.
                </p>
                <p className="text-sm font-semibold text-blue-500 flex items-center">
                  <Code size={16} className="mr-1" />
                  React
                </p>
              </div>
            </div>

            <div
              className={`rounded-lg shadow-md overflow-hidden group ${
                darkMode ? "bg-gray-800" : "bg-white"
              } transition-transform duration-300 hover:-translate-y-2`}
            >
              <div
                className={`h-48 ${
                  darkMode ? "bg-gray-700" : "bg-blue-100"
                } flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300`}
              >
                <Store
                  size={48}
                  className={`group-hover:text-white transition-colors duration-300 ${
                    darkMode ? "text-blue-400" : "text-blue-500"
                  }`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
                <p className="mb-4">
                  A online shopping platform where users can explore products,
                  add them to the cart, and make purchases seamlessly.
                </p>
                <p className="text-sm font-semibold text-blue-500 flex items-center">
                  <Code size={16} className="mr-1" />
                  React
                </p>
              </div>
            </div>
            <div
              className={`rounded-lg shadow-md overflow-hidden group ${
                darkMode ? "bg-gray-800" : "bg-white"
              } transition-transform duration-300 hover:-translate-y-2`}
            >
              <div
                className={`h-48 ${
                  darkMode ? "bg-gray-700" : "bg-blue-100"
                } flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300`}
              >
                <CalendarCheck
                  size={48}
                  className={`group-hover:text-white transition-colors duration-300 ${
                    darkMode ? "text-blue-400" : "text-blue-500"
                  }`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Conference Booking System
                </h3>
                <p className="mb-4">
                  A conference room scheduling application designed to simplify
                  meeting management, allowing users to book and track room
                  availability.
                </p>
                <p className="text-sm font-semibold text-blue-500 flex items-center">
                  <Code size={16} className="mr-1" />
                  React
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Gopal Mahajan &copy; 2025</p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:gopalmahajan3392@gmail.com"
              className="hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a href="tel:8329222629" className="hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/gopal-mahajan-2b0638248"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default home;

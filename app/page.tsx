"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, ExternalLink, Download, Mail, MapPin, Calendar, Code, Sun, Moon,Car,Film } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import img from "./asu-removebg-preview.png"
import personalImg from "./Screenshot 2024-09-18 at 2.49.40 AM.png"
import moviemania from './hmman.jpg'
import datanal from './adad.jpeg'
import msayImg from './pdak.png'
import cosmicapp from './cosmic.png'
export default function Component() {
  const [activeSection, setActiveSection] = useState("about")
  const [isScrolling, setIsScrolling] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const sectionRefs = {
    about: useRef(null),
    education: useRef(null),
    projects: useRef(null),
  }

  useEffect(() => {
    const observers = Object.entries(sectionRefs).map(([id, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { threshold: 0.5 }
      )
      if (ref.current) {
        observer.observe(ref.current)
      }
      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLAnchorElement
      const targetId = target.getAttribute("href")
      if (targetId && targetId.startsWith("#")) {
        setIsScrolling(true)
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
          setTimeout(() => setIsScrolling(false), 1000)
        }
      }
    }
  
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll as EventListener)
    })
  
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll as EventListener)
      })
    }
  }, [])

  const headerThemes = {
    about: isDarkMode ? "bg-gradient-to-r from-gray-900 to-gray-800" : "bg-gradient-to-r from-blue-500 to-purple-500",
    education: isDarkMode ? "bg-gradient-to-r from-gray-900 to-gray-800" : "bg-gradient-to-r from-red-800 to-red-600",
    projects: isDarkMode ? "bg-gradient-to-r from-gray-900 to-gray-800" : "bg-gradient-to-r from-green-500 to-teal-500",
  }

  const sectionThemes = {
    about: isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-blue-400 to-purple-500",
    education: isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-red-800 to-red-600",
    projects: isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-800" : "bg-gradient-to-br from-green-400 to-teal-500",
  }

  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <header
      className={`sticky top-0 z-10 ${
        headerThemes[activeSection as keyof typeof headerThemes]
      } transition-colors duration-300 ease-in-out text-white`}
       >
 
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Vansh Saxena</h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
          <nav className="flex items-center space-x-4">
            <Link
              href="#about"
              className={`hover:underline transition-all duration-300 ${
                activeSection === "about" ? "text-yellow-300" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="#education"
              className={`hover:underline transition-all duration-300 ${
                activeSection === "education" ? "text-yellow-300" : ""
              }`}
            >
              Education
            </Link>
            <Link
              href="#projects"
              className={`hover:underline transition-all duration-300 ${
                activeSection === "projects" ? "text-yellow-300" : ""
              }`}
            >
              Projects
            </Link>
            <a
              href="https://github.com/vanshisop"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="www.linkedin.com/in/vansh2407"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=12wvNK88irpbJd498IujcnbxEIXGLipwW"
              download
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main className={`${isScrolling ? "pointer-events-none" : ""} transition-colors duration-300`}>
        <section
          id="about"
          ref={sectionRefs.about}
          className={`min-h-screen flex items-center ${sectionThemes.about} ${isDarkMode ? 'text-gray-100' : 'text-white'}`}
        >
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 relative group">
                <Image
                  src= {msayImg}
                  alt="John Doe"
                  width={350}
                  height={300}
                  className=" transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-transparent group-hover:bg-none transition-colors duration-300"></div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-xl mb-6">
                Hello! I’m Vansh Saxena, a senior at Arizona State University, where I’m pursuing a Bachelor of Science in Computer Science with a minor in Data Science. 
                Over the years, I’ve gained hands-on experience through an internship and projects. My time at Coforge Technologies sharpened my skills in data pre-processing, data duplication techniques, and Master Data Management (MDM), while projects like UAM Data Management using Hyperledger Fabric have allowed me to explore cutting-edge technologies like blockchain. I’ve also developed tools such as an Appointment Scheduler using SQL and PostgreSQL, and a personal project called Movie Mania built with React, HTML, CSS, and JavaScript. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-2" />
                    <span>vsaxena4@asu.edu</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-2" />
                    <span>Tempe, Arizona</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 mr-2" />
                    <span>Available for hire</span>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS","Postgres", "MongoDB", "AWS","Machine Learning","Github","C/C++","Java","jUnit","Salesforce"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDarkMode ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : 'bg-white text-blue-600 hover:bg-blue-100'
                      } transition-colors duration-300`}
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Fun Facts</h3>
              <div className="flex flex-wrap gap-4">
                <div className={`flex items-center rounded-lg p-3 transition-transform duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white bg-opacity-20 hover:bg-opacity-30'
                }`}>
                  <Code className="h-6 w-6 mr-2" />
                  <span>I love to solve coding challenges</span>
                </div>
                <div className={`flex items-center rounded-lg p-3 transition-transform duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white bg-opacity-20 hover:bg-opacity-30'
                }`}>
                  <Car
                    className="h-6 w-6 mr-2 cursor-pointer"
                    
                  />
                  <span>
                    I am a massive Formula 1 fan
                  </span>
                </div>
                <div className={`flex items-center rounded-lg p-3 transition-transform duration-300 hover:scale-105 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white bg-opacity-20 hover:bg-opacity-30'
                }`}>
                  <Film className="h-6 w-6 mr-2" />
                  <span>My favorite movie is The Dark Knight</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="education"
          ref={sectionRefs.education}
          className={`min-h-screen flex items-center ${sectionThemes.education}`}
        >
          <div className="container mx-auto px-4 py-16">
            <div className={`p-8 rounded-lg shadow-md border-l-4 border-[#FFC627] h-full flex flex-col md:flex-row justify-center items-center md:items-start gap-8 ${
              isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
            }`}>
              <div className="md:w-2/3">
                <h2 className="text-4xl font-bold mb-8 text-[#FFC627]">Education</h2>
                <h3 className="text-3xl font-semibold text-[#FFC627] mb-2">Arizona State University</h3>
                <p className={`text-xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Bachelor of Science in Computer Science (Aug 2021-May2025)</p>
                <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Mantaining a 4.0 GPA</li>
  <li>Recipient of the NAmU University Scholarship, awarded for academic excellence in Computer Science.</li>
  <li>Apple CEI Swift Champion Scholarship recipient, recognized for proficiency in Swift and iOS development.</li>
  <li>Participated in the Devils Invent hackathon, contributing to innovative software solutions.</li>
  <li>Contributed to a blockchain-based UAM Data Management project using Hyperledger Fabric and MongoDB.</li>
  <li>Led a team to develop a Food Delivery System using SQL and PostgreSQL for efficient time management.</li>
  <li>Completed several interdisciplinary projects, creating compilers, mastering data structures and honing machine learning with data science principles.</li>
  <li>Consistently participated in several other hackathons and tech events, honing problem-solving and collaboration skills in fast-paced environments.</li>
                </ul>
              </div>
              <div className="md:w-1/3 relative group">
                <Image
                  src={img}
                  alt="Arizona State University Logo"
                  width={300}
                  height={300}
                  className="rounded-full bg-white p-2 transition-transform duration-300 group-hover:scale-105"
                />
                
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={sectionRefs.projects}
          className={`min-h-screen flex items-center ${sectionThemes.projects}`}
        >
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Personal Portfolio",
                  description: "A personal portfolio website using React and Next (you're looking at it!).",
                  link: "https://personal-portfolio-ecru-ten.vercel.app/",
                  img : personalImg,
                },
                {
                  title: "Cosmic Number Quest",
                  description: "A full-stack project with React, Next, Node and postgres.",
                  link: "https://my-guessing-number-lbhc.vercel.app",
                  img: cosmicapp
                },
                {
                  title: "Movie Mania",
                  description: "A full-stack movie guessing game built with Javascript, HTML,CSS",
                  link: "https://vanshisop.github.io/Moviemania/",
                  img: moviemania
                },
                {
                  title: "Meta Movie Analysis",
                  description: "An in-depth data analytics project to showcase change in movie culture across the last century",
                  link: "https://drive.google.com/uc?export=download&id=1gAY9m2FWp2hMC61SMRRrNZXGEsqTxxfS",
                  img: datanal
                },
                
              ].map((project, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${
                    isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'
                  }`}
                >
                  <Image
                    src= {project.img}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-teal-400' : 'text-teal-600'
                  }`}>{project.title}</h3>
                  <p className={`mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{project.description}</p>
                  <a
                    href={project.link}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center ${
                      isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-800'
                    } transition-colors duration-300`}
                  >
                    View Project <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

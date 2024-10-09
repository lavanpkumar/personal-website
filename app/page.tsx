"use client"
import { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight } from 'react-icons/fa'

const projects = [
  {
    title: "TikTok Edit Automator",
    description: "Automated video processing tool for TikTok content creators.",
    tech: ["Python", "OpenCV", "MoviePy"],
    details: [
      "Developed a Python script to automate the process of converting MP4 files into TikTok format",
      "Combines two versions of the same MP4 file into a single composite video",
      "Utilizes OpenCV and MoviePy libraries for video processing",
      "Splits the final composite video into multiple subclips"
    ]
  },
  {
    title: "Literature Discord Bot",
    description: "A Discord bot that provides book information and recommendations.",
    tech: ["JavaScript", "discord.js", "cheerio"],
    details: [
      "Utilized Fetch API and Cheerio for web scraping Goodreads",
      "Used asynchronous JavaScript for data retrieval",
      "Leveraged discord.js library to build and manage bot functionality",
      "Efficiently isolates and returns specific book information based on user queries"
    ]
  },
  {
    title: "Password Generator",
    description: "A versatile tool for generating secure passwords.",
    tech: ["JavaScript", "HTML", "CSS"],
    details: [
      "Developed a versatile password generator with customizable options",
      "Implemented with JavaScript for dynamic password generation",
      "Users can specify length and character types to include",
      "Designed with HTML and CSS for an intuitive user interface"
    ]
  }
]

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 to-blue-600 text-white">
      <header className="p-6 md:p-10">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lavan Premkumar</h1>
          <div className="flex space-x-4">
            <a href="https://linkedin.com/in/lavanpkumar" target="_blank" rel="noopener noreferrer" className="hover:text-sky-200 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/lavanpkumar" target="_blank" rel="noopener noreferrer" className="hover:text-sky-200 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="mailto:lavan.pkumar@gmail.com" className="hover:text-sky-200 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Software Developer & Content Creator</h2>
          <p className="text-xl md:text-2xl mb-8">Crafting digital experiences through code and creativity</p>
          <a href="#projects" className="inline-flex items-center bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-sky-100 transition-colors">
            View My Work <FaArrowRight className="ml-2" />
          </a>
        </section>

        <section id="projects" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all cursor-pointer" onClick={() => setActiveProject(project)}>
                <h4 className="text-2xl font-semibold mb-2">{project.title}</h4>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-sky-500 px-2 py-1 rounded text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'Express.js', 'Git', 'OpenCV'].map((skill, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h4 className="text-2xl font-semibold mb-2">University of Massachusetts Amherst</h4>
            <p className="mb-2">Bachelor of Science in Computer Science, Minor in Business</p>
            <p className="mb-2">Sep. 2023 – Present | GPA: 3.88/4.0</p>
            <p><strong>Relevant Coursework:</strong> Data Structures, Object-Oriented Programming, Introduction to Computation, Practicum-Introduction to the C Programming Language</p>
          </div>
        </section>
      </main>

      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setActiveProject(null)}>
          <div className="bg-white text-gray-800 p-6 rounded-lg max-w-2xl w-full" onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
            <p className="mb-4">{activeProject.description}</p>
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc pl-5 mb-4">
              {activeProject.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {activeProject.tech.map((tech, index) => (
                <span key={index} className="bg-sky-100 text-sky-800 px-2 py-1 rounded text-sm">{tech}</span>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors" onClick={() => setActiveProject(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
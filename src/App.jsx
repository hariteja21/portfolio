 import React from "react";
import { motion } from "framer-motion";

const CONTACTS = {
  email: "ihariteja@example.com",
  github: "https://github.com/ihariteja",
  linkedin: "https://linkedin.com/in/ihariteja",
};

const skills = [
  "C++ (STL)", "Java", "Python", "Data Structures & Algorithms",
  "React", "Node.js", "Express", "MongoDB",
  "SQL", "Operating Systems", "Computer Networks", "System Design Basics"
];

const internships = [
  {
    company: "Google Summer of Code",
    role: "Open Source Contributor",
    period: "May 2024 – Aug 2024",
    desc: "Contributed to an open-source project improving backend APIs and documentation."
  },
  {
    company: "StartupX",
    role: "Full-Stack Developer Intern",
    period: "Jan 2024 – Apr 2024",
    desc: "Built and optimized React + Node.js modules, improved API performance by 30%."
  }
];

const projects = [
  { title: "E-Commerce Backend", desc: "Express + MongoDB backend with authentication, catalog, and orders.", link: "#" },
  { title: "Portfolio Website", desc: "This very portfolio site built with React, Tailwind, Framer Motion.", link: "#" },
  { title: "Chat App", desc: "Real-time chat application using Socket.IO and Node.js.", link: "#" },
  { title: "DSA Tracker", desc: "Web app for practicing and tracking Data Structures & Algorithms problems.", link: "#" },
];

export default function App() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 min-h-[80vh] flex flex-col justify-center items-center text-center text-white">
        <motion.h1 initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1}}
          className="text-5xl md:text-6xl font-extrabold mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">I Hari Teja</span>
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5,duration:1}}
          className="max-w-2xl text-lg md:text-xl text-gray-100">
          Aspiring Software Development Engineer • IIIT Sri City (2023 — 2027)
        </motion.p>
        <div className="mt-8 flex gap-4">
          <a href={CONTACTS.github} className="btn-gradient">GitHub</a>
          <a href={CONTACTS.linkedin} className="btn-gradient">LinkedIn</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}}>
          <h2 className="text-3xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-gray-700 max-w-2xl">
            I'm a B.Tech Computer Science student at IIIT Sri City (2023–2027). 
            Passionate about software engineering, problem solving, and building full-stack apps. 
            I focus on backend services, algorithms, and modern web development.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="section bg-gray-100">
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}}>
          <h2 className="text-3xl font-bold mb-6 text-gradient">Skills</h2>
          <div className="flex flex-wrap">
            {skills.map((s,i)=>(<span key={i} className="tag">{s}</span>))}
          </div>
        </motion.div>
      </section>

      {/* Internships */}
      <section id="internships" className="section">
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}}>
          <h2 className="text-3xl font-bold mb-6 text-gradient">Internships</h2>
          <div className="space-y-6">
            {internships.map((exp, i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-semibold">{exp.role} — {exp.company}</h3>
                <p className="text-sm text-gray-500">{exp.period}</p>
                <p className="mt-2 text-gray-700">{exp.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="section bg-gray-100">
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}}>
          <h2 className="text-3xl font-bold mb-6 text-gradient">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p,i)=>(
              <div key={i} className="card">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-600">{p.desc}</p>
                <a href={p.link} className="btn-gradient mt-4 inline-block">View</a>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8}} viewport={{once:true}}>
          <h2 className="text-3xl font-bold mb-6 text-gradient">Contact</h2>
          <p className="text-gray-700 mb-4">
            Email me at <a href={`mailto:${CONTACTS.email}`} className="underline">{CONTACTS.email}</a>
          </p>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Demo form – connect backend/email service.')}} className="max-w-md">
            <input type="text" placeholder="Your name" className="mb-3 w-full p-2 border rounded" />
            <input type="email" placeholder="Your email" className="mb-3 w-full p-2 border rounded" />
            <textarea rows={5} placeholder="Message" className="mb-3 w-full p-2 border rounded" />
            <button type="submit" className="btn-gradient">Send</button>
          </form>
        </motion.div>
      </section>

      <footer className="text-center text-gray-500 py-6">
        © {new Date().getFullYear()} I Hari Teja — Built with React, Tailwind & Framer Motion
      </footer>
    </div>
  );
}




"use client";
import { motion } from 'framer-motion';

const portfolio = {
  education: [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of Karachi (UBIT)",
      period: "2021 - 2024",
      gpa: 2.75,
      highlights: [
        "Graduated from the Department of Information Technology (UBIT)",
        "Gained a strong foundation in programming, system design, and software development methodologies",
      ],
    },
    {
      degree: "Intermediate in Pre-Engineering",
      institution: "Government College",
      period: "2018 - 2019",
      gpa: null,
      highlights: [
        "Completed Intermediate in Pre-Engineering from Forman college ",
      ],
    },
    {
      degree: "Matriculation in Computer Science",
      institution: "St. Lawrence Grammar School",
      period: "2015 - 2016",
      gpa: null,
      highlights: [
        "Completed Matriculation with specialization in Computer Science",
      ],
    },
    {
      degree: "Diploma in Web Development",
      institution: "Saylani Mass IT Training Program",
      period: "2023",
      gpa: null,
      highlights: [
        "Completed a one-year diploma in Full Stack Web Development",
        "Developed multiple real-world projects using MERN stack technologies",
      ],
    },
  ],
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-orange-500 to-cyan-400 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        
        <div className="space-y-8">
          {portfolio.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Timeline connector */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-orange-500 to-cyan-400 rounded-full md:left-6" />
              
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-[-4px] top-6 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-orange-500 shadow-lg shadow-cyan-500/50 md:left-[20px]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              />
              
              {/* Content card */}
              <div className="ml-8 md:ml-16 p-6 rounded-lg bg-gradient-to-br from-gray-900/80 to-black border border-cyan-500/30 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20">
                
                {/* Degree and GPA */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                    {edu.degree}
                  </h3>
                </div>
                
                {/* Institution and Period */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <p className="text-cyan-400 font-semibold">
                    {edu.institution}
                  </p>
                  <span className="hidden sm:inline text-gray-600">•</span>
                  <p className="text-sm font-medium text-orange-400">
                    {edu.period}
                  </p>
                </div>
                
                {/* Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {edu.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15 + idx * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="text-gray-300 text-sm flex gap-3"
                      >
                        <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-tr-lg rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

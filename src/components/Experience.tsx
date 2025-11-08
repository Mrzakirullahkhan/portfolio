"use client";
import { motion } from "framer-motion";

const portfolio = {
  experience: [
    {
      company: "Corporate Prism",
      role: "MERN Stack Developer",
      start: "2025",
      end: "2026",
      details: [
        "Developed full-stack web applications using MongoDB, Express, React, and Node.js.",
        "Built and maintained both frontend and backend features with a focus on scalability and performance.",
        "Created responsive, user-friendly interfaces ensuring smooth user experiences across devices.",
        "Collaborated in a cross-functional team environment to deliver projects efficiently and on schedule.",
        "Implemented reusable components and optimized code for maintainability and faster load times."
      ],
    },
    {
      company: "Bell Canada",
      role: "Customer Service Representative",
      start: "2022",
      end: "2023",
      details: [
        "Assisted customers with inquiries, billing, and technical support in a fast-paced environment.",
        "Delivered high-quality service by resolving issues promptly and professionally.",
        "Maintained a positive and empathetic attitude to ensure strong customer satisfaction.",
        "Developed excellent communication and problem-solving skills while handling complex situations.",
        "Consistently met and exceeded service quality and performance targets."
      ],
    },
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-orange-500 to-cyan-400 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {portfolio.experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-lg bg-gradient-to-br from-gray-900/50 to-black border border-cyan-500/30 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-orange-500 to-cyan-400 rounded-l-lg" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-lg text-cyan-400 font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="text-sm font-medium text-orange-400 md:text-right">
                  {exp.start} — {exp.end}
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.details.map((d, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 + i * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-sm flex gap-3"
                  >
                    <span className="text-cyan-400 mt-1.5 flex-shrink-0">▹</span>
                    <span>{d}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

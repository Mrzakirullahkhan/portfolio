"use client";
import portfolio from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-semibold">Experience</h3>
        <div className="mt-6 space-y-6">
          {portfolio.experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{exp.role} — {exp.company}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{exp.start} — {exp.end}</div>
                </div>
              </div>
              <ul className="mt-2 list-disc ml-5 text-sm text-gray-700 dark:text-gray-300">
                {exp.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

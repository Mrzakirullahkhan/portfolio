"use client";
import portfolio from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="py-12 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3 
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Skills
        </motion.h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {portfolio.skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="p-4 bg-gray-900 border border-cyan-500/30 rounded-lg flex flex-col items-start gap-2 hover:border-orange-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
            >
              <div className="font-semibold text-gray-200">{skill.name}</div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                  className="bg-gradient-to-r from-cyan-500 to-orange-500 h-2"
                />
              </div>
              <div className="text-xs text-gray-400">{skill.level}% proficiency</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
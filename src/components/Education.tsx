"use client";
import portfolio from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-semibold">Education</h3>
        <div className="mt-6 space-y-4">
          {portfolio.education.map((edu, i) => (
            <motion.div initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} key={i} className="p-4 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
              <div className="font-semibold">{edu.degree}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{edu.institution} — {edu.period}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

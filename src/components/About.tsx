"use client";
import { motion } from 'framer-motion';
import Button from './Button';
import portfolio from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 8 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent"
        >
          About
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 8 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.15 }} 
          className="mt-4 text-gray-300 text-lg leading-relaxed"
        >
          {portfolio.about.summary}
        </motion.p>
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="shadow-xl cursor-pointer shadow-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/70 transition-all">
                Download CV
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 
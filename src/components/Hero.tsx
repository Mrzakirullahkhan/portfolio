"use client";
import portfolio from '../data/portfolioData';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';

export default function Hero() {
  const { meta, hero } = portfolio;
  return (
    <section id="home" className="pt-12 pb-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-orange-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm {meta.name}
          </h1>
          <p className="mt-4 text-lg text-gray-300">{portfolio.hero.tagline}</p>
          <motion.div 
            className="mt-6 flex gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="shadow-xl cursor-pointer shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/70 transition-all" onClick={() => {}} >
                Hire Me
              </Button>
            </motion.div>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="ghost" className='cursor-pointer text-white'>View Resume</Button>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-orange-500 bg-gradient-to-tr from-cyan-500/30 via-orange-500/20 to-black shadow-2xl shadow-orange-500/50">
            <Image src={hero.avatar} alt="avatar" fill style={{ objectFit: 'cover' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
      <div className="h-40 w-full relative rounded-md overflow-hidden">
        <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <h4 className="mt-3 font-semibold">{project.title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{t}</span>)}
      </div>
      <div className="mt-4 flex gap-2">
        <a href={project.liveUrl || '#'} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-accent text-white rounded">View Live</a>
        <a href={project.codeUrl || '#'} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 border rounded">View Code</a>
        <Link href={`/projects/${project.slug}`} className="ml-auto text-sm text-gray-600 dark:text-gray-300 underline">Details</Link>
      </div>
    </motion.div>
  );
}

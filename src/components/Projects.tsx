"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

// Sample project data for demonstration
const portfolio = {
  projects: [
    {
      slug: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example"
    },
    {
      slug: "ai-chatbot",
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot powered by GPT-4 with context awareness and multi-language support.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
      tech: ["React", "OpenAI API", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example"
    },
    {
      slug: "fitness-tracker",
      title: "Fitness Tracking App",
      description: "Mobile-first fitness application with workout plans, progress tracking, and social features.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example"
    },
    {
      slug: "dashboard-analytics",
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization, reporting, and export capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Vue.js", "D3.js", "Express", "MySQL", "Redis"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/example"
    }
  ]
};

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-gradient-to-br from-gray-900/80 to-black rounded-lg overflow-hidden border border-cyan-500/30 hover:border-orange-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-900">
        <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 z-10 transition-opacity duration-300 ${imageLoaded ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onLoad={() => setImageLoaded(true)}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </h4>
        <p className="text-sm text-gray-300 mt-2 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full font-medium hover:bg-cyan-500/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <motion.a
            href={project.liveUrl || '#'}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center text-sm font-semibold px-4 py-2 bg-gradient-to-r from-cyan-500 to-orange-500 text-white rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all"
          >
            View Live
          </motion.a>
          <motion.a
            href={project.codeUrl || '#'}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 text-center text-sm font-semibold px-4 py-2 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all"
          >
            View Code
          </motion.a>
        </div>

        {/* Details Link */}
        <a
          href={`/projects/${project.slug}`}
          className="mt-4 block text-sm text-orange-400 hover:text-orange-300 font-medium transition-colors group/link"
        >
          View Details 
          <span className="inline-block ml-1 transition-transform group-hover/link:translate-x-1">→</span>
        </a>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-full" />
    </motion.div>
  );
}

export default function Projects() {
  const projects = portfolio.projects;
  
  return (
    <section id="projects" className="py-20 bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-orange-500 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <ProjectCard key={p.slug} project={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
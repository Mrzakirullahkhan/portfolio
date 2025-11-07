import portfolio from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = portfolio.projects;
  return (
    <section id="projects" className="py-12 bg-white/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold">Projects</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </div>
    </section>
  );
}

import portfolio from '../data/portfolioData';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-black/30">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">© {new Date().getFullYear()} {portfolio.meta.name}. All rights reserved.</div>
        <div className="flex gap-3 mt-3 md:mt-0">
          <a href={portfolio.meta.github} target="_blank" rel="noreferrer" className="text-sm">GitHub</a>
          <a href={portfolio.meta.linkedin} target="_blank" rel="noreferrer" className="text-sm">LinkedIn</a>
          <a href="#home" className="text-sm">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

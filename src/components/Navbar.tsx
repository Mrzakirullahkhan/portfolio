'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const path = usePathname() || '/';
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/95 border-b border-cyan-500/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent hover:from-orange-500 hover:to-cyan-400 transition-all">
          Zakir Ullah
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a 
              key={l.href} 
              href={l.href} 
              className="text-sm text-gray-300 hover:text-orange-500 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
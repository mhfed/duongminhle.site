'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { defaultSettings } from '@/app/lib/settings-constants';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Navbar({
  settings = defaultSettings.global,
}: {
  settings?: any;
}) {
  const { siteName, navLinks } = settings;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getHref = (href: string) => {
    if (href.startsWith('#') && pathname !== '/') {
      return `/${href}`;
    }
    return href;
  };

  return (
    <nav className='fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-light dark:border-border-dark px-6 py-4 flex justify-between items-center transition-all duration-300 shadow-sm'>
      <Link
        className='text-primary font-display font-bold tracking-widest text-lg hover:scale-105 transition-transform cursor-pointer uppercase z-50'
        href='/'
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {siteName}
      </Link>

      {/* Desktop Menu */}
      <div className='hidden md:flex space-x-8 text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400'>
        {navLinks.map((link: any) => (
          <Link
            key={link.id}
            className='nav-link hover:text-primary transition-colors relative group'
            href={getHref(link.href)}
            id={link.id}
          >
            {link.label}
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-gray-900 dark:text-white z-50 focus:outline-none'
        onClick={toggleMobileMenu}
        aria-label='Toggle menu'
      >
        <span className='material-icons text-3xl'>
          {isMobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 bg-background-light dark:bg-background-dark flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out z-60 md:hidden ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {navLinks.map((link: any) => (
              <Link
                key={link.id}
                className='text-2xl font-display font-bold text-gray-900 dark:text-white hover:text-primary transition-colors'
                href={getHref(link.href)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              className='absolute top-6 right-6 p-2 text-gray-900 dark:text-white'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className='material-icons text-3xl'>close</span>
            </button>
          </div>,
          document.body,
        )}
    </nav>
  );
}

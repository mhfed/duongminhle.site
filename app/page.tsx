'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Etcetra from './components/sections/Etcetra';
import Testimonials from './components/sections/Testimonials';
import AboutTransition from './components/sections/AboutTransition';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal on Scroll Animations
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      // Hero Text Staggered Reveal
      const heroTitle = document.querySelector('.hero-title');
      if (heroTitle) {
        gsap.fromTo(
          heroTitle,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'expo.out',
          },
        );
      }

      // Project Image Hover Effects (Parallax/Scale)
      const projectImages = document.querySelectorAll(
        '.project-image-container',
      );
      projectImages.forEach((container) => {
        const img = container.querySelector('img');
        if (img) {
          gsap.set(img, { scale: 1.0 });
          container.addEventListener('mouseenter', () => {
            gsap.to(img, { scale: 1.1, duration: 0.5, ease: 'power2.out' });
          });
          container.addEventListener('mouseleave', () => {
            gsap.to(img, { scale: 1.0, duration: 0.5, ease: 'power2.out' });
          });
        }
      });

      // Active Nav State Scroll Spy using ScrollTrigger
      const sectionsCode = ['about', 'projects', 'etcetra'];
      sectionsCode.forEach((sectionId) => {
        ScrollTrigger.create({
          trigger: `#${sectionId}`,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) {
              document.querySelectorAll('.nav-link').forEach((link) => {
                link.classList.remove('text-primary');
                link.classList.add('text-gray-500', 'dark:text-gray-400');
              });
              const activeLink = document.getElementById(`nav-${sectionId}`);
              if (activeLink) {
                activeLink.classList.remove(
                  'text-gray-500',
                  'dark:text-gray-400',
                );
                activeLink.classList.add('text-primary');
              }
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <Navbar />
      <Hero />
      <Projects />
      <AboutTransition />
      <Etcetra />
      <Testimonials />
      <Footer />
    </div>
  );
}

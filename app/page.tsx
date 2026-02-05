'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      <nav className='fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-light dark:border-border-dark px-6 py-4 flex justify-between items-center transition-all duration-300 shadow-sm'>
        <a
          className='text-primary font-display font-bold tracking-widest text-lg hover:scale-105 transition-transform cursor-pointer'
          href='#about'
        >
          SANJANA.
        </a>
        <div className='hidden md:flex space-x-8 text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400'>
          <a
            className='nav-link hover:text-primary transition-colors relative group'
            href='#about'
            id='nav-about'
          >
            ABOUT
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a
            className='nav-link hover:text-primary transition-colors relative group'
            href='#projects'
            id='nav-projects'
          >
            PROJECTS
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a
            className='nav-link hover:text-primary transition-colors relative group'
            href='#etcetra'
            id='nav-etcetra'
          >
            ETCETRA
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
          </a>
          <a
            className='nav-link hover:text-primary transition-colors relative group'
            href='#'
            id='nav-resume'
          >
            RESUME
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
          </a>
        </div>
        <button className='md:hidden text-gray-900 dark:text-white'>
          <span className='material-icons'>menu</span>
        </button>
      </nav>
      <header
        className='relative min-h-screen flex flex-col pt-24 border-b border-border-light dark:border-border-dark'
        id='about'
      >
        <div className='absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid opacity-20 pointer-events-none z-0'></div>
        <div className='container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 flex-grow'>
          <div className='flex flex-col justify-center'>
            <div className='relative mb-8 reveal-on-scroll hero-title'>
              <h1 className='text-7xl md:text-9xl font-display font-bold leading-none uppercase tracking-tighter'>
                Sanjana
                <br />
                Baweja
              </h1>
              <div className='hidden md:block absolute top-0 right-10 lg:right-20 w-24 h-24 bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 animate-[pulse_3s_ease-in-out_infinite]'>
                <svg
                  fill='currentColor'
                  height='60'
                  viewBox='0 0 24 24'
                  width='60'
                >
                  <path d='M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z'></path>
                </svg>
              </div>
            </div>
            <div className='max-w-md text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-12 reveal-on-scroll'>
              I&apos;m a User Experience Designer, artist and storyteller. I
              believe in solving meaningful problems through elegant, creative
              solutions. My passion lies in the subtle intersection of art and
              technology.
              <br />
              <br />
              Currently studying Interaction Design, B.Des at UID, Gujarat
            </div>
            <div className='mt-auto pb-12 flex items-center space-x-4 reveal-on-scroll'>
              <div className='h-10 w-0.5 bg-primary'></div>
              <span className='text-xs tracking-widest uppercase text-gray-500 font-bold'>
                Scroll
              </span>
              <span className='material-icons text-primary animate-bounce'>
                arrow_downward
              </span>
            </div>
          </div>
          <div className='flex flex-col border-l border-border-light dark:border-border-dark pl-0 lg:pl-12 pt-24 reveal-on-scroll'>
            <div className='mb-12'>
              <h2 className='text-4xl md:text-5xl font-display font-bold leading-tight'>
                Every Detail Tells A<br />
                Story Worth
                <br />
                <span className='font-script text-6xl text-gray-400 dark:text-gray-500 font-normal lowercase ml-2'>
                  Exploring
                </span>
              </h2>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-auto mb-12'>
              <div className='aspect-video bg-gray-800 relative overflow-hidden group rounded-sm project-image-container'>
                <img
                  alt='Design work sketch'
                  className='w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 transform'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuD7BfwYkJ3wuAlEYcxseZvzLefQYzqAA4iH0dPyn4BdYhZN24dTL01WOHCrn3FP_L4Xmwg4dfQBHawF8g5CYK2RLRQ6OkfJbEJBr6g2FTQluSJww3W1SwMM-d4CKCRMPXMH2GdxNBW8IXSgKjCK6IPzo-qJIXxIxG3IAHSC81BIbrlwuSTB0kS_7XJBcEg0_mFOyU1ylgQJfWNpqeRXijIl6tD0oFtVehfcAii_J5bIK-vVa18cozT7PJoqnfSj4B4fqIFnQMm3jPLE'
                />
              </div>
              <div className='aspect-video bg-gray-800 relative overflow-hidden group rounded-sm project-image-container'>
                <img
                  alt='Team collaboration'
                  className='w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 transform'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuAqSao1pwF2Yzq9R9GxW1uatJTUCwn39iZw8PG1Dil7nrBas30T26LKQkJumeOjbJbMEUHlaW4ywsI7c8DBwCm1LOmrccghm1K5brY2bGI_2QO3G_CNCzzfFSaoIOj_UdbOnItuXMN_ybRnWs1upEZHrfxiG1W4C16C9EZtqxJKJmHnEFJ4qlpkD6O9xdIqF7A_aPKFq49RuNRFzoaLJVBb50nCDrd5nZHOgutlGQWmQkjppWjsZeS-P_Ay8b5VfFHE07Fy6uR8H5Sa'
                />
              </div>
              <div className='aspect-video bg-gray-900 relative overflow-hidden group cursor-pointer rounded-sm project-image-container'>
                <div className='absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 group-hover:opacity-0'>
                  <span className='material-icons text-white mr-2'>
                    touch_app
                  </span>
                  <span className='text-xs uppercase tracking-widest text-white'>
                    Click to Reveal
                  </span>
                </div>
                <img
                  alt='Presentation'
                  className='w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 transform'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuDByAZlq0YuAu_NWfEPItpBexhie27_nPbzic9qIc7xEaSVWMqLneVUM0pYQx5pR-1jcHGDZuf8O6fkmdCesDMEIyb6gTdGuYbSUtY9FssIeauSLMxILqXs8AIbCUCEgYUW7HHxjH_lOpnd3bMHa3VJt8YeSyhJ-YoUWQrI_SJSbOKSenY_d698g4pbGwPfYmQqjI7XNJ1AD_LN7KrtuKrcC9T0Q3Eox7UyhdAaG61B8ayuKbYpSFf-qqe-FT1MR8eu4EzLffOfP9iL'
                />
              </div>
              <div className='aspect-video bg-gray-800 relative overflow-hidden group rounded-sm project-image-container'>
                <img
                  alt='Wireframing'
                  className='w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 transform'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuDrKyl_SXfYwE425QFtax06f_VoRuRZaTMDM0nTEpdClw8w7IVGDm2W1siTNELDh9ApMyDteTEz5w0q5VPtFwnPjvsWX-G0DPmbt3CV-Pi2tEHf8bbC67a8CLzFf4jEHAIyf7Ts66rbH4Cdj7AsGmSnDZuaDGX4DdRbG_KwuFmk614xSB3R9TFSO-kOQ5Hug2ChgMwtbPF0PFoQiRfczbOby3y3ZsqVxXQcuenMKfMgHORYLCah4pIuV50li6kQjJ2B81eZulyrU0i2'
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        className='border-b border-border-light dark:border-border-dark scroll-mt-20'
        id='projects'
      >
        <div className='container mx-auto px-6 py-16 flex items-end reveal-on-scroll'>
          <div className='flex items-start'>
            <svg
              className='text-white fill-current w-16 h-16 md:w-24 md:h-24 mr-4'
              viewBox='0 0 100 100'
            >
              <rect
                className='text-white'
                height='35'
                width='35'
                x='0'
                y='0'
              ></rect>
              <rect
                className='text-gray-600'
                height='35'
                width='35'
                x='45'
                y='0'
              ></rect>
              <path
                className='text-white'
                d='M0 50 L35 50 L35 85 L0 50 Z'
              ></path>
            </svg>
            <h2 className='text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter self-center ml-4'>
              Projects
            </h2>
          </div>
        </div>
        <div className='border-t border-border-light dark:border-border-dark group reveal-on-scroll'>
          <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[500px]'>
            <div className='lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between border-r border-border-light dark:border-border-dark transition-colors duration-300 group-hover:bg-surface-dark/20'>
              <div>
                <span className='text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block'>
                  UX Research; Interface Design
                </span>
                <h3 className='text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors'>
                  Artceps
                </h3>
              </div>
              <div className='flex items-end justify-between mt-12'>
                <div>
                  <span className='text-xs uppercase text-gray-500 block'>
                    Duration
                  </span>
                  <span className='text-sm font-medium'>3 months</span>
                </div>
                <div className='w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 transform group-hover:scale-110'>
                  <span className='material-icons transform -rotate-45'>
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className='lg:col-span-8 bg-surface-dark relative overflow-hidden flex items-center justify-center p-8'>
              <div className='absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black opacity-90 transition-opacity group-hover:opacity-100'></div>
              <div className='absolute top-10 right-10 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay filter blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700'></div>
              <div className='relative z-10 w-full max-w-4xl flex items-center justify-center space-x-8 project-image-container'>
                <img
                  alt='Mobile App Mockup'
                  className='h-[400px] w-auto object-contain rounded-3xl shadow-2xl transform'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuAlmBnqxDIGkyaRz5CIIlAXGjnekmVgmaLmLXInLYWMiAYL3uldmjk9TOAxh9DnFF9eQvJhCOYF8R3BYFp8i_O4MJ7WbmvpF9_jxGmkM8FqeP3bIZvQG52A5Ldu33nNFHgqN_batKo0mJ8bgoqIfwAC5bWD8GOv_BPPan7bExe0_tSn_HR08SSeiTPJpRzHniHFHtmkgu0qnQMccxTvlTcNrreZAPxSPRtPoflY3eEGc-YUdqJoJQhoRESjZ4PTkTocz0x3uYW2CoNc'
                />
                <div className='hidden md:block text-gray-300 max-w-xs transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100'>
                  <h4 className='text-xl font-bold mb-2 text-white'>
                    Connect with movies, people
                  </h4>
                  <p className='text-sm text-gray-400'>
                    and cinema more than ever.
                  </p>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    <span className='px-3 py-1 bg-gray-800 rounded-full text-xs text-primary border border-gray-700 hover:border-primary transition-colors'>
                      Qualitative Analysis
                    </span>
                    <span className='px-3 py-1 bg-gray-800 rounded-full text-xs text-primary border border-gray-700 hover:border-primary transition-colors'>
                      Research
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-border-light dark:border-border-dark group reveal-on-scroll'>
          <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[500px]'>
            <div className='lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between border-r border-border-light dark:border-border-dark transition-colors duration-300 group-hover:bg-surface-dark/20'>
              <div>
                <span className='text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block'>
                  Service Design
                </span>
                <h3 className='text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors'>
                  Sahayak
                </h3>
              </div>
              <div className='flex items-end justify-between mt-12'>
                <div>
                  <span className='text-xs uppercase text-gray-500 block'>
                    Duration
                  </span>
                  <span className='text-sm font-medium'>2 months</span>
                </div>
                <div className='w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 transform group-hover:scale-110'>
                  <span className='material-icons transform -rotate-45'>
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className='lg:col-span-8 bg-surface-dark relative overflow-hidden flex items-center justify-center p-8'>
              <div className='absolute inset-0 bg-linear-to-bl from-gray-900 via-black to-gray-900 opacity-90'></div>
              <div className='relative z-10 w-full max-w-4xl flex items-center justify-center space-x-8 project-image-container'>
                <img
                  alt='Sahayak App Mockup'
                  className='h-[400px] w-auto object-contain rounded-3xl shadow-2xl transform'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuBIGqsINpCsqNyBlBEKSgsJR_HvTgVqrUg0iWD2pkEw2lnG5b9chFl1P9OfiK7gkU_14U8_gvj0YBZnP65qz5pT1AJw5iZXTBUEmojQlTZhPatF4M5vXJJeUf2jcNfUT7mjzXlrPSiSdGdnn2hDSxOhhcRRFtycjuSkUkVGCLLP61adr8nlfkCX-KsnYyuDrItHXEa3Cl-PzDJpprooJnDDpxOEt4lpV69wALdbaCbTv7b2oOR7Qblzqax0fCDDx3KDPS5f-pYNgGfl'
                />
                <div className='hidden md:block bg-white text-black p-6 rounded-lg shadow-lg max-w-xs transform translate-y-12 group-hover:translate-y-8 transition-transform duration-500'>
                  <h4 className='font-bold mb-2'>
                    Connect with the right househelp easily.
                  </h4>
                  <div className='w-full h-2 bg-gray-200 rounded mt-2'>
                    <div className='w-2/3 h-full bg-orange-500 rounded'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-border-light dark:border-border-dark group reveal-on-scroll'>
          <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[500px]'>
            <div className='lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between border-r border-border-light dark:border-border-dark transition-colors duration-300 group-hover:bg-surface-dark/20'>
              <div>
                <span className='text-xs font-bold tracking-widest uppercase text-primary mb-2 block'>
                  INTERNSHIP
                </span>
                <h3 className='text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors'>
                  STEMpedia
                </h3>
              </div>
              <div className='flex items-end justify-between mt-12'>
                <div>
                  <span className='text-xs uppercase text-gray-500 block'>
                    Duration
                  </span>
                  <span className='text-sm font-medium'>5 months</span>
                </div>
                <div className='w-12 h-12 rounded-full border border-gray-600 bg-white text-black flex items-center justify-center group-hover:scale-125 group-hover:shadow-lg transition-all duration-300'>
                  <span className='material-icons transform -rotate-45'>
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className='lg:col-span-8 bg-surface-dark relative overflow-hidden flex items-center justify-center p-8'>
              <div className='absolute inset-0 bg-[#0a0f0d]'></div>
              <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black to-transparent'></div>
              <div className='relative z-10 w-full flex items-center justify-center flex-col project-image-container'>
                <img
                  alt='Dashboard Mockup'
                  className='w-3/4 rounded-lg shadow-2xl border border-gray-800 transform'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuDWp9Rdpeglq-S9p5NgLPUhhNHzI7q4NNbCEN26tDh8fDiBiNtQUQBTsji3R0KcNK4B2tvwHoiEQbbVj6ODg7OftLe-1EQxi8R63_19S4y6Mday63ASXCouB0ARJalaGFj0GxxnT2QF-8Jpa5xG1NYaliWhfOF3vN6g6ijqpBuFpGr59YFaupjTZNlT24U92vzy1hlGf_9AZYyaPnHhhFF7UAZujH6gOFdawORjADEnhVBEQAp78dP1ODfdrJKKNS6qcYIltX2YmrGh'
                />
                <p className='mt-6 text-gray-400 text-sm max-w-md text-center transform group-hover:text-white transition-colors'>
                  Worked as a UI/UX Designer at STEMpedia (EdTech Company)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-border-light dark:border-border-dark group reveal-on-scroll'>
          <div className='grid grid-cols-1 lg:grid-cols-12 min-h-[500px]'>
            <div className='lg:col-span-4 p-8 lg:p-12 flex flex-col justify-between border-r border-border-light dark:border-border-dark transition-colors duration-300 group-hover:bg-surface-dark/20'>
              <div>
                <span className='text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block'>
                  INTERNSHIP
                </span>
                <h3 className='text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors'>
                  Benjamins Money
                </h3>
              </div>
              <div className='flex items-end justify-between mt-12'>
                <div>
                  <span className='text-xs uppercase text-gray-500 block'>
                    Duration
                  </span>
                  <span className='text-sm font-medium'>5 months</span>
                </div>
                <div className='w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 transform group-hover:scale-110'>
                  <span className='material-icons transform -rotate-45'>
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className='lg:col-span-8 bg-surface-dark relative overflow-hidden flex items-center justify-center p-8'>
              <div className='absolute inset-0 bg-black'></div>
              <svg
                className='absolute inset-0 w-full h-full opacity-20'
                preserveAspectRatio='none'
                viewBox='0 0 100 100'
              >
                <path d='M0 100 C 20 0 50 0 100 100 Z' fill='#333'></path>
              </svg>
              <div className='relative z-10 flex flex-col items-center project-image-container'>
                <img
                  alt='Fintech Web Mockup'
                  className='w-3/4 rounded-lg shadow-2xl transform'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuDiAlpHrOkl164OqIK1OZ8t94TR_wIAiv6t5C93fnGGXISapldBsiBCaxQt67cEN0PuAx3cgbevz3oKptQE43IKBd-WjFoaDMIFMqw2s0FY4Lu3Ce3SbL8qVH_NhCGwoxv35rzu0eL8U8A4RTIjLtIvCYjGymOEo4wTBwWbzUo97_U1gRrXks66mp28IqQYoYTuiTb3Indz-79ms7kVMgmsC_94X8ybDUaj1D5fq2k3ctNrj6gPdhPK96rRCBTVPX9RNk_FNpt_fChG'
                />
                <div className='mt-8 bg-gray-900 p-4 rounded border border-gray-700 max-w-sm transform group-hover:translate-y-2 transition-transform duration-300'>
                  <p className='text-sm text-gray-300'>
                    Worked as a UI/UX Designer at Benjamins Money (US-based
                    fintech company)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-24 bg-surface-dark dark:bg-[#080808] text-center relative overflow-hidden reveal-on-scroll'>
        <span className='hidden md:block absolute left-10 top-1/2 transform -translate-y-1/2 text-[20rem] text-gray-800 dark:text-[#141414] font-display leading-none z-0 opacity-50'>
          “
        </span>
        <span className='hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2 text-[20rem] text-gray-800 dark:text-[#141414] font-display leading-none z-0 rotate-180 opacity-50'>
          “
        </span>
        <div className='relative z-10'>
          <h3 className='text-3xl md:text-4xl font-medium mb-8 text-white'>
            But my work doesn&apos;t stop here.
          </h3>
          <a
            className='inline-block px-8 py-3 rounded-full border border-gray-500 text-white hover:bg-white hover:text-black hover:scale-110 hover:shadow-lg transition-all duration-300 uppercase text-sm tracking-widest'
            href='#etcetra'
          >
            Check out ETCETRA →
          </a>
        </div>
      </section>
      <section
        className='relative py-32 overflow-hidden bg-background-light dark:bg-background-dark scroll-mt-20'
        id='etcetra'
      >
        <div className='absolute inset-0 bg-grid-light dark:bg-grid-dark bg-grid opacity-20 pointer-events-none'></div>
        <div className='container mx-auto px-6 relative z-10 min-h-[600px] flex items-center justify-center reveal-on-scroll'>
          <h2 className='text-5xl md:text-7xl font-display font-bold text-center leading-tight bg-background-light/50 dark:bg-background-dark/50 p-4 relative z-20 backdrop-blur-sm rounded-xl'>
            Not always working
            <br />
            <span className='text-gray-500 dark:text-gray-400'>
              (but always curious)
            </span>
          </h2>
          <div
            className='absolute top-0 left-4 md:top-10 md:left-20 max-w-[200px] p-4 border border-dashed border-gray-400 bg-background-light dark:bg-black transform -rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-help shadow-lg reveal-on-scroll'
            style={{ transitionDelay: '200ms' }}
          >
            <p className='text-sm font-mono text-gray-600 dark:text-gray-300'>
              born with a pencil in hand (always sketching!)
            </p>
          </div>
          <div
            className='absolute bottom-10 left-4 md:bottom-20 md:left-32 max-w-[180px] p-4 bg-background-light dark:bg-black border border-gray-700 hover:border-primary transition-colors duration-300 shadow-xl reveal-on-scroll'
            style={{ transitionDelay: '300ms' }}
          >
            <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
              falling down TED-Ed video rabbit holes
            </p>
          </div>
          <div
            className='absolute bottom-0 md:bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:translate-y-0 reveal-on-scroll'
            style={{ transitionDelay: '400ms' }}
          >
            <div className='w-32 h-32 rounded-full bg-yellow-900/20 flex items-center justify-center p-2 animate-spin-slow hover:animate-none'>
              <div className='text-center text-[10px] uppercase font-bold tracking-tight text-primary p-2 border border-primary rounded-full bg-background-light dark:bg-black'>
                Questions
                <br />
                no one knows
                <br />
                the answer to
              </div>
            </div>
          </div>
          <div
            className='absolute top-20 right-4 md:right-20 flex -space-x-4 reveal-on-scroll'
            style={{ transitionDelay: '500ms' }}
          >
            <img
              alt='Person'
              className='w-16 h-16 rounded-full border-2 border-background-dark object-cover hover:z-10 hover:scale-125 transition-transform'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuC9HcI-HWTdiW5kEdBKlxdEHOXSKn1FgQV4jYBdr6GV3HebKtMO9pUpe6Xh1M0t2ZE31Zf0CGl6qbHxjMKuCJdHnsiWXWwGaZuDDkIJ7Dh-SBtoi8wu4kuDcQE39tZg-naITo4OfuF9s_minrz0nIKm-9NAAQBeifwKAgwwMncxYJ1ZkWDmaFnchjJeR9v7Py1HyhSQ69z8vxY_Y2uN-iANYkuVhQquHNJLZdpX3CVJmHP4eT2hyT71aFJ5W-vf6jOQaBSaYr3qpg1h'
            />
            <img
              alt='Person'
              className='w-16 h-16 rounded-full border-2 border-background-dark object-cover grayscale hover:grayscale-0 hover:z-10 hover:scale-125 transition-all'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuCNhOmSPlVO7Jur0utAveRqaRY1DuIxj-GXVIcn4jhf_Hgd6XBkIe_o1VyfZJa2w4Efv5YKqC9GbZAFr9kiVz9n2Jf1cN-zTDJJCIYAbrf6afsOSDNHhtxmvgAINQ8RHGCoyjkglEbHdVpo--cLoTN29TgJjMAx3pvvCvmeMo_QK9ZTFnrL5tfd887wDFEmiLvX265maqbkSVRyanIB1PJ-l_yYihOxVLEDmU85YiAaobH6Yj5EbWT04vT_vx6OquZ5AUEFDDRrYbQ1'
            />
            <img
              alt='Person'
              className='w-16 h-16 rounded-full border-2 border-background-dark object-cover hover:z-10 hover:scale-125 transition-transform'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuC6tsEQAITpX4LVtjN8_fxxhqqypIBoX0Ipw28iL-07rfxSfhXEPzURfhN9GQA7eEZeqV1aIh4DBpXnXa3oFXdzNJEPII6OjrvmEeIGcn9DXtBZT6NOIz5Z8xhhkmiP2gj7Z164bjATQDaRBLH-SgEbJtT0KHOyI7Ge5W4Ph7gDz8skrlxgr_peVyBLulFTN_51ruhE-RTHHuURXpCAs7Jcz-H8ZSmdXjBtDg3RZLCD29toOkE803RjUejmutAPgIhnkF-DL-bhm-7I'
            />
            <div className='absolute top-16 right-0 bg-background-light dark:bg-black p-2 border border-gray-700 text-xs w-32 shadow-lg rotate-3 hover:rotate-0 transition-transform'>
              dropping movie quotes &apos;wherever whenever&apos;
            </div>
          </div>
          <div
            className='absolute bottom-20 right-10 md:right-32 max-w-[150px] text-right group cursor-pointer reveal-on-scroll'
            style={{ transitionDelay: '600ms' }}
          >
            <span className='text-4xl inline-block group-hover:animate-bounce'>
              🍫
            </span>
            <p className='text-xs font-mono mt-2 bg-background-light dark:bg-black inline-block p-1 group-hover:text-primary transition-colors'>
              Always on the hunt for the perfect chocolate
            </p>
          </div>
        </div>
      </section>
      <section className='py-24 border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark'>
        <div className='container mx-auto px-6 reveal-on-scroll'>
          <div className='flex items-center mb-16'>
            <div className='mr-4 text-primary'>
              <svg
                className='fill-current'
                height='60'
                viewBox='0 0 24 24'
                width='60'
              >
                <path d='M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z'></path>
              </svg>
            </div>
            <h2 className='text-5xl md:text-7xl font-display font-bold uppercase'>
              What They Say
            </h2>
          </div>
          <div className='max-w-4xl'>
            <p className='text-xl md:text-3xl font-light leading-relaxed mb-12 text-gray-700 dark:text-gray-200'>
              Sanjana has a been an exemplary person in shaping our UX Design
              curriculum at Tutedude, which embarks her skills and deep
              knowledge in the UX domain. Her decisive approach and ability to
              commit towards task completion was commendable.
            </p>
            <div className='flex items-center justify-between border-t border-border-light dark:border-border-dark pt-8'>
              <div className='flex items-center space-x-4'>
                <img
                  alt='Mohit Naroune'
                  className='w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuDS0ij420hVgxTaaWXDpOTwcGE7IOf9LYqhXYmaSs7X66NVd5I-0DqNrP4OT1u8hbm7VquChSPZ74PhHbQkMkVAWHld26rPQWQ8S3O50x67B-dy7tZPwMdsA1i2GxuTEsibebw2BoWaxo1rsxP30U8QJfUeae-rJAGjD6D4X6DOzD9uwX2h87EkzeZ__xXgImtxbJZv5jgF0BjpRt7PEKALm8t0kZ2WT7UxdUM2ZXHjvpiuuppUokq-Wjh6yOj2x6jBLt-7hyVJeTwa'
                />
                <div>
                  <h4 className='font-bold text-lg text-gray-900 dark:text-white'>
                    Mohit Naroune
                  </h4>
                  <p className='text-xs uppercase tracking-wider text-gray-500'>
                    Product Designer @Tutedude
                  </p>
                </div>
              </div>
              <div className='flex space-x-2'>
                <button className='w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors transform hover:scale-110'>
                  <span className='material-icons text-sm'>chevron_left</span>
                </button>
                <button className='w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors transform hover:scale-110'>
                  <span className='material-icons text-sm'>chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='bg-surface-dark dark:bg-black text-white pt-20 pb-8 border-t border-border-dark'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-20'>
            <div>
              <h5 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-6'>
                Get In Touch
              </h5>
              <a
                className='block text-xl md:text-2xl hover:text-primary transition-colors mb-2'
                href='mailto:sanjanabaweja1@gmail.com'
              >
                sanjanabaweja1@gmail.com
              </a>
              <p className='text-xl text-gray-400 font-light'>
                <span className='text-primary font-bold'>+</span>91 9890690762
              </p>
            </div>
            <div>
              <h5 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-6'>
                Location
              </h5>
              <p className='text-xl font-light'>Gandhinagar, Gujarat</p>
              <p className='text-xl font-light'>Pune, Maharashtra</p>
            </div>
            <div>
              <h5 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-6'>
                Find Me Here
              </h5>
              <div className='flex space-x-4'>
                <a
                  className='w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300'
                  href='#'
                >
                  <span className='font-bold text-sm'>IG</span>
                </a>
                <a
                  className='w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300'
                  href='#'
                >
                  <span className='font-bold text-sm'>in</span>
                </a>
                <a
                  className='w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300'
                  href='#'
                >
                  <span className='font-bold text-sm'>Bē</span>
                </a>
                <a
                  className='w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all duration-300'
                  href='#'
                >
                  <span className='material-icons text-sm'>mail</span>
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-900 pt-8 uppercase tracking-widest'>
            <p>© 2025 Sanjana. All right reserved</p>
            <div className='flex space-x-6 my-4 md:my-0'>
              <a className='hover:text-white transition-colors' href='#about'>
                About
              </a>
              <a
                className='hover:text-white transition-colors'
                href='#projects'
              >
                Projects
              </a>
              <a className='hover:text-white transition-colors' href='#etcetra'>
                Etcetra
              </a>
            </div>
            <div className='flex items-center space-x-2 bg-white text-black px-3 py-1 rounded cursor-pointer hover:bg-gray-200 transition-colors'>
              <span className='material-icons text-sm'>design_services</span>
              <span className='font-bold text-[10px]'>Duong Minh Le</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

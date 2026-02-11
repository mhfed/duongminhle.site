'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  content: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
}

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
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
          <h2 className='text-4xl md:text-7xl font-display font-bold uppercase'>
            What They Say
          </h2>
        </div>

        <div className='relative w-full'>
          <div className='min-h-[300px] md:min-h-[160px] mb-12 relative'>
            <AnimatePresence mode='wait' custom={direction}>
              <motion.p
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='text-lg md:text-3xl font-light leading-relaxed text-gray-700 dark:text-gray-200 absolute top-0 left-0 w-full'
              >
                {currentTestimonial.content}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className='flex items-center justify-between border-t border-border-light dark:border-border-dark pt-8'>
            <div className='flex items-center space-x-4 min-w-[240px] min-h-[56px]'>
              <AnimatePresence mode='wait' custom={direction}>
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className='flex items-center space-x-4 w-full'
                >
                  <Image
                    alt={currentTestimonial.authorName}
                    className='rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                    src={currentTestimonial.authorImage}
                    width={56}
                    height={56}
                  />
                  <div>
                    <h4 className='font-bold text-lg text-gray-900 dark:text-white'>
                      {currentTestimonial.authorName}
                    </h4>
                    <p className='text-xs uppercase tracking-wider text-gray-500'>
                      {currentTestimonial.authorRole}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className='flex space-x-2 z-10'>
              <button
                onClick={handlePrev}
                className='w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors transform hover:scale-110'
              >
                <span className='material-icons text-sm'>chevron_left</span>
              </button>
              <button
                onClick={handleNext}
                className='w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors transform hover:scale-110'
              >
                <span className='material-icons text-sm'>chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

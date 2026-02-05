'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Testimonial {
  id: number;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    content:
      'Duong has a been an exemplary person in shaping our UX Design curriculum at Tutedude, which embarks his skills and deep knowledge in the UX domain. His decisive approach and ability to commit towards task completion was commendable.',
    author: {
      name: 'Mohit Naroune',
      role: 'Product Designer @Tutedude',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDS0ij420hVgxTaaWXDpOTwcGE7IOf9LYqhXYmaSs7X66NVd5I-0DqNrP4OT1u8hbm7VquChSPZ74PhHbQkMkVAWHld26rPQWQ8S3O50x67B-dy7tZPwMdsA1i2GxuTEsibebw2BoWaxo1rsxP30U8QJfUeae-rJAGjD6D4X6DOzD9uwX2h87EkzeZ__xXgImtxbJZv5jgF0BjpRt7PEKALm8t0kZ2WT7UxdUM2ZXHjvpiuuppUokq-Wjh6yOj2x6jBLt-7hyVJeTwa',
    },
  },
  {
    id: 2,
    content:
      'Working with Duong was an absolute pleasure. His attention to detail and creative solutions elevated our project to a new level. He consistently delivered high-quality work and was always open to feedback.',
    author: {
      name: 'Sarah Johnson',
      role: 'CTO @ TechFlow',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    },
  },
  {
    id: 3,
    content:
      "I was impressed by Duong's ability to translate complex requirements into intuitive user interfaces. His technical skills are matched only by his professional work ethic. A true asset to any team.",
    author: {
      name: 'David Chen',
      role: 'Senior Developer @ Construct',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    },
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

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
          <h2 className='text-5xl md:text-7xl font-display font-bold uppercase'>
            What They Say
          </h2>
        </div>

        <div className='relative'>
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`max-w-4xl transition-all duration-500 ease-in-out ${index === currentIndex ? 'block opacity-100 translate-x-0' : 'hidden opacity-0 translate-x-4'}`}
            >
              <p className='text-xl md:text-3xl font-light leading-relaxed mb-12 text-gray-700 dark:text-gray-200 min-h-[120px]'>
                {testimonial.content}
              </p>
              <div className='flex items-center justify-between border-t border-border-light dark:border-border-dark pt-8'>
                <div className='flex items-center space-x-4'>
                  <Image
                    alt={testimonial.author.name}
                    className='rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
                    src={testimonial.author.image}
                    width={56}
                    height={56}
                  />
                  <div>
                    <h4 className='font-bold text-lg text-gray-900 dark:text-white'>
                      {testimonial.author.name}
                    </h4>
                    <p className='text-xs uppercase tracking-wider text-gray-500'>
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
                <div className='flex space-x-2'>
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
                    <span className='material-icons text-sm'>
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

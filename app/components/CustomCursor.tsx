'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.group') // Assuming portfolio items have .group
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className='fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-[9999] hidden md:block mix-blend-difference'
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'var(--color-primary)' : 'transparent',
        }}
      />
      <motion.div
        className='fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] hidden md:block'
        style={{
          x: cursorX,
          y: cursorY,
          translateX: 12, // Center dot inside the larger circle (32px / 2 - 8px / 2 + offset?)
          // Actually, 32px circle, center is 16. Dot is 8px.
          // cursorX set to e.clientX - 16. center of circle is at mouse.
          // Dot wants to be at mouse. e.clientX.
          // So dot X should be e.clientX - 4 (half width).
          // Let's rely on transform helper or just offset useSpring vs direct value.
          // Simplified: The dot follows exactly, the ring follows with spring.
          // X/Y vars are set to -16 offset. So dot needs +12 to be centered (16 - 4 = 12).
          translateY: 12,
        }}
      />
      <style jsx global>{`
        @media (min-width: 768px) {
          body {
            cursor: none;
          }
          a,
          button,
          [role='button'] {
            cursor: none;
          }
        }
      `}</style>
    </>
  );
}

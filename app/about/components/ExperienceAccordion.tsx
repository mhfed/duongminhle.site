'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

const items: AccordionItem[] = [
  {
    id: 'background',
    title: 'Background',
    content:
      'Sketched my way through childhood, wireframing my way through adulthood. I studied science in school—who knew reactions and formulas would lead me to design? Currently in my 3rd Year of B.Des in Interaction Design at UID, Gujarat.',
  },
  {
    id: 'philosophy',
    title: 'Design Philosophy',
    content:
      'Designing is just structured overthinking—done effortlessly. To me, design is aligning business strategies with user expectations in a way that feels seamless and intuitive.',
  },
  {
    id: 'things-i-love',
    title: 'Things I love',
    content:
      "From negotiating screen time as a kid to calling every film 'creative fuel'—I've always found reasons to watch. I love listening to people talk about things they love. Water color paintings are my favorite form of therapy.",
  },
];

export default function ExperienceAccordion({ items = [] }: { items: any[] }) {
  const [expanded, setExpanded] = useState<string | null>(
    items?.[0]?.id || null, // Default expand first item if available, or null
  );

  return (
    <div className='w-full max-w-2xl mx-auto space-y-4'>
      {items.map((item, index) => {
        // Fallback ID if missing
        const itemId = item.id || `item-${index}`;
        return (
          <div
            key={itemId}
            className='border-b border-white/20 pb-4 overflow-hidden'
          >
            <button
              onClick={() => setExpanded(expanded === itemId ? null : itemId)}
              className='w-full flex justify-between items-center text-left py-2 group'
            >
              <h3 className='text-lg font-medium text-white group-hover:text-primary transition-colors'>
                {item.title}
              </h3>
              <span
                className={`text-sm text-gray-400 transition-transform duration-300 ${
                  expanded === itemId ? 'rotate-45' : ''
                }`}
              >
                <span className='material-icons text-base'>add</span>
              </span>
            </button>
            <AnimatePresence>
              {expanded === itemId && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p className='text-sm text-gray-400 font-light leading-relaxed pt-2 pb-4'>
                    {item.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

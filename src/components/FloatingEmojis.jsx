import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CONTENT } from '../config';

const POSITIONS = [
  { top: '8%',  left: '5%',  size: 'text-2xl', delay: 0 },
  { top: '15%', left: '88%', size: 'text-3xl', delay: 0.4 },
  { top: '25%', left: '2%',  size: 'text-xl',  delay: 0.8 },
  { top: '35%', left: '92%', size: 'text-2xl', delay: 1.2 },
  { top: '50%', left: '4%',  size: 'text-3xl', delay: 0.2 },
  { top: '60%', left: '90%', size: 'text-xl',  delay: 0.6 },
  { top: '70%', left: '7%',  size: 'text-2xl', delay: 1.0 },
  { top: '80%', left: '86%', size: 'text-3xl', delay: 0.3 },
  { top: '88%', left: '12%', size: 'text-xl',  delay: 0.9 },
  { top: '92%', left: '80%', size: 'text-2xl', delay: 1.5 },
];

export default function FloatingEmojis() {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {POSITIONS.map((pos, i) => {
        const emoji = CONTENT.floatingEmojis[i % CONTENT.floatingEmojis.length];
        return (
          <motion.span
            key={i}
            className={`absolute ${pos.size} select-none`}
            style={{ top: pos.top, left: pos.left }}
            animate={{
              y: [0, -18, 0, 12, 0],
              x: [0, 6, -4, 8, 0],
              opacity: [0.55, 0.85, 0.6, 0.9, 0.55],
              rotate: [0, 8, -5, 10, 0],
            }}
            transition={{
              duration: 5 + i * 0.7,
              delay: pos.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {emoji}
          </motion.span>
        );
      })}
    </div>
  );
}

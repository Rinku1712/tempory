import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTENT } from '../config';

export default function ApologyLetter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="letter"
      ref={ref}
      className="relative py-20 px-4 flex flex-col items-center"
    >
      {/* Section label */}
      <motion.div
        className="mb-6 inline-flex items-center gap-2 bg-white/70 backdrop-blur px-5 py-2 rounded-full text-sm font-bold text-pink-500 shadow-soft border border-pink-100"
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        💌 My Apology Note
      </motion.div>

      {/* Letter card */}
      <motion.div
        className="relative max-w-2xl w-full glass-card letter-paper rounded-4xl shadow-card p-8 sm:p-12 border border-purple-100"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
      >
        {/* Decorative corner doodles */}
        <span className="absolute top-4 left-5 text-2xl opacity-40 select-none" aria-hidden="true">🌸</span>
        <span className="absolute top-4 right-5 text-2xl opacity-40 select-none" aria-hidden="true">⭐</span>
        <span className="absolute bottom-4 left-5 text-2xl opacity-40 select-none" aria-hidden="true">✨</span>
        <span className="absolute bottom-4 right-5 text-2xl opacity-40 select-none" aria-hidden="true">🌼</span>

        {/* Red margin line (left side) */}
        <div className="absolute left-16 top-0 bottom-0 w-px bg-pink-200/60 rounded-full" aria-hidden="true" />

        {/* Greeting */}
        <motion.h2
          className="font-cursive text-3xl sm:text-4xl text-purple-500 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {CONTENT.letter.greeting}
        </motion.h2>

        {/* Body paragraphs */}
        <div className="space-y-4">
          {CONTENT.letter.body.map((para, i) => (
            <motion.p
              key={i}
              className="text-slate-700 font-semibold text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Sign-off */}
        <motion.p
          className="mt-8 font-display text-xl text-purple-400 text-right"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          {CONTENT.letter.signoff}
        </motion.p>

        {/* Wax seal decoration */}
        <motion.div
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg"
          style={{ background: 'linear-gradient(135deg, #c084fc, #f472b6)' }}
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0, type: 'spring' }}
          aria-hidden="true"
        >
          🤝
        </motion.div>
      </motion.div>
    </section>
  );
}

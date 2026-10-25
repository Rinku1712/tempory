import React from 'react';
import { motion } from 'framer-motion';
import TeddyBear from './TeddyBear';
import { CONTENT } from '../config';

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};

const starVariants = {
  animate: (custom) => ({
    scale: [1, 1.4, 1],
    opacity: [0.6, 1, 0.6],
    rotate: [0, 20, 0],
    transition: {
      duration: 2.2,
      delay: custom * 0.35,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

export default function HeroSection({ onOpenNote }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-pastel-mesh"
    >
      {/* Decorative blobs */}
      <motion.div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, #c084fc, #93c5fd)' }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #fda4af, #fdba74)' }}
        animate={{ scale: [1, 1.12, 1], rotate: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Smiling clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[
          { top: '12%', left: '8%',  scale: 0.9, delay: 0 },
          { top: '18%', left: '72%', scale: 1.1, delay: 0.8 },
          { top: '70%', left: '5%',  scale: 0.7, delay: 1.3 },
          { top: '75%', left: '80%', scale: 0.8, delay: 0.4 },
        ].map((cloud, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl sm:text-5xl select-none"
            style={{ top: cloud.top, left: cloud.left, scale: cloud.scale }}
            animate={{ x: [0, 12, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6 + i, delay: cloud.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            ☁️
          </motion.div>
        ))}
      </div>

      {/* Sparkle stars around teddy */}
      {['top-1/4 left-1/4', 'top-1/4 right-1/4', 'bottom-1/3 left-1/3', 'bottom-1/3 right-1/3'].map((pos, i) => (
        <motion.span
          key={i}
          className={`absolute text-2xl sm:text-3xl ${pos} pointer-events-none select-none`}
          custom={i}
          variants={starVariants}
          animate="animate"
          aria-hidden="true"
        >
          {['⭐', '✨', '🌟', '💫'][i]}
        </motion.span>
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Label badge */}
        <motion.div
          className="mb-4 inline-flex items-center gap-2 bg-white/70 backdrop-blur px-5 py-2 rounded-full text-sm font-bold text-purple-600 shadow-soft border border-purple-100"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {CONTENT.hero.label}
        </motion.div>

        {/* Teddy */}
        <motion.div variants={floatVariants} animate="animate" className="my-4">
          <TeddyBear />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl text-gradient leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {CONTENT.hero.heading}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg text-slate-600 font-semibold max-w-lg leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {CONTENT.hero.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          id="open-note-btn"
          onClick={onOpenNote}
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white shadow-glow overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
          style={{
            background: 'linear-gradient(135deg, #c084fc, #f472b6, #fb923c)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(192,132,252,0.5)' }}
          whileTap={{ scale: 0.97 }}
          aria-label="Open the apology letter"
        >
          <motion.span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, #a855f7, #ec4899, #f97316)',
            }}
          />
          <span className="relative z-10">{CONTENT.hero.cta}</span>
        </motion.button>
      </motion.div>
    </section>
  );
}

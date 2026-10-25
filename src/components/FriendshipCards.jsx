import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTENT } from '../config';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.93 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const colorMap = {
  'from-lavender-100 to-skyblue-100': 'from-purple-50 to-sky-100',
  'from-skyblue-100 to-blush-100':    'from-sky-100 to-pink-100',
  'from-blush-100 to-peach-100':      'from-pink-100 to-orange-100',
};

const borderMap = {
  'border-lavender-200': 'border-purple-200',
  'border-skyblue-200':  'border-sky-200',
  'border-blush-200':    'border-pink-200',
};

const glowMap = [
  'rgba(196,132,252,0.3)',
  'rgba(125,211,252,0.3)',
  'rgba(253,164,175,0.3)',
];

export default function FriendshipCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="cards"
      ref={ref}
      className="py-20 px-4"
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block bg-white/70 backdrop-blur px-5 py-2 rounded-full text-sm font-bold text-sky-500 border border-sky-100 shadow-soft mb-4">
          🌸 Friendship Promises
        </span>
        <h2 className="font-display text-4xl sm:text-5xl text-gradient-blue">
          What Good Friends Do 💙
        </h2>
      </motion.div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {CONTENT.cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: `0 16px 48px ${glowMap[i]}`,
              transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.98 }}
            className={`
              glass-card rounded-4xl p-7 border-2 cursor-default
              bg-gradient-to-br ${colorMap[card.color] ?? card.color}
              ${borderMap[card.border] ?? card.border}
              flex flex-col items-center text-center gap-4
            `}
          >
            {/* Emoji bubble */}
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-md"
              style={{ background: 'rgba(255,255,255,0.7)' }}
              animate={{ rotate: [0, 8, -6, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
            >
              {card.emoji}
            </motion.div>

            <h3 className="font-display text-xl text-slate-800 leading-snug">
              {card.title}
            </h3>
            <p className="text-slate-600 font-semibold text-sm leading-relaxed">
              {card.body}
            </p>

            {/* Bottom accent line */}
            <div
              className="w-12 h-1 rounded-full mt-1"
              style={{
                background: ['linear-gradient(90deg,#c084fc,#93c5fd)', 'linear-gradient(90deg,#7dd3fc,#fda4af)', 'linear-gradient(90deg,#fda4af,#fdba74)'][i],
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CONTENT } from '../config';

export default function FunnySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [stamped, setStamped] = useState(false);

  return (
    <section
      id="funny"
      ref={ref}
      className="py-20 px-4"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-5xl text-gradient">
            {CONTENT.funnySection.heading}
          </h2>
        </motion.div>

        {/* File / report card */}
        <motion.div
          className="glass-card rounded-4xl shadow-card border-2 border-purple-100 p-8 sm:p-10 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Header bar */}
          <div
            className="absolute top-0 left-0 right-0 h-2 rounded-t-4xl"
            style={{ background: 'linear-gradient(90deg, #c084fc, #f472b6, #fb923c)' }}
          />

          {/* Report title */}
          <div className="flex items-center gap-3 mb-6 pt-2">
            <span className="text-3xl">📂</span>
            <div>
              <p className="font-display text-lg text-purple-600">Official Apology Department</p>
              <p className="text-xs text-slate-400 font-semibold">Case File #001 — Friendship Division</p>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-5">
            {CONTENT.funnySection.items.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-4 bg-white/60 rounded-2xl border border-purple-50"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.14 }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <span className="font-bold text-purple-500 text-sm uppercase tracking-wide">
                    {item.label}
                  </span>
                  <p className="text-slate-700 font-semibold mt-0.5">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stamp area */}
          <div className="mt-8 flex justify-center sm:justify-end">
            <motion.button
              onClick={() => setStamped(true)}
              className={`stamp px-7 py-4 rounded-xl text-center font-display text-lg leading-snug transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 ${
                stamped
                  ? 'bg-purple-50 border-purple-500 text-purple-600 cursor-default'
                  : 'bg-white hover:bg-purple-50 text-purple-500 cursor-pointer'
              }`}
              whileHover={!stamped ? { scale: 1.04 } : {}}
              whileTap={!stamped ? { scale: 0.97 } : {}}
              animate={stamped ? { rotate: [-4, -6, -4], scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.4 }}
              aria-label="Stamp the apology as submitted"
              aria-pressed={stamped}
            >
              {stamped ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                  className="block whitespace-pre-line"
                >
                  {CONTENT.funnySection.stamp}
                </motion.span>
              ) : (
                <span>🖊️ Click to stamp!</span>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

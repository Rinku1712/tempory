import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 px-4 text-center">
      <motion.div
        className="max-w-lg mx-auto glass-card rounded-4xl p-8 border border-purple-100 shadow-soft"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Flower row */}
        <motion.div
          className="flex justify-center gap-3 text-2xl mb-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          {['🌸', '⭐', '😊', '✨', '🌼'].map((e, i) => (
            <motion.span
              key={i}
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>

        <p className="font-display text-xl text-gradient mb-2">
          Made with friendship & a little bit of courage 🤝
        </p>
        <p className="text-slate-500 font-semibold text-sm">
          No drama, no pressure — just a genuine sorry from a friend.
        </p>
        <p className="text-slate-400 text-xs mt-4 font-semibold">
          © 2025 · Friendship Apology Site
        </p>
      </motion.div>
    </footer>
  );
}

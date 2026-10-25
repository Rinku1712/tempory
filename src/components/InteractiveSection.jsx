import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import TeddyBear from './TeddyBear';
import { CONTENT } from '../config';

// Lightweight canvas-based confetti
function Confetti({ active }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const rafId = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const COLORS = ['#c084fc', '#f472b6', '#38bdf8', '#fdba74', '#fda4af', '#a3e635'];
    particles.current = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 5 + 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vy: Math.random() * 3 + 2,
      vx: (Math.random() - 0.5) * 2,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 6,
      opacity: 1,
    }));

    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        p.rotation += p.rotSpeed;
        if (frame > 90) p.opacity -= 0.012;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });
      frame++;
      if (frame < 180) {
        rafId.current = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    rafId.current = requestAnimationFrame(draw);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [active]);

  if (!active) return null;
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default function InteractiveSection() {
  const [clicked, setClicked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  function handleOkay() {
    setClicked(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  }

  function handleReset() {
    setClicked(false);
    setShowConfetti(false);
  }

  return (
    <section
      id="interactive"
      ref={ref}
      className="py-24 px-4"
    >
      <Confetti active={showConfetti} />

      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl text-gradient mb-4">
            {CONTENT.interactive.heading}
          </h2>
          <p className="text-slate-500 font-semibold text-base sm:text-lg max-w-md mx-auto">
            {CONTENT.interactive.subtitle}
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="glass-card rounded-4xl shadow-card border-2 border-purple-100 p-8 sm:p-12 flex flex-col items-center gap-8"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Teddy bear */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <TeddyBear />
          </motion.div>

          {/* Response or Button */}
          <AnimatePresence mode="wait">
            {clicked ? (
              <motion.div
                key="response"
                className="text-center"
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.45, type: 'spring' }}
              >
                <div className="text-xl sm:text-2xl font-bold rounded-3xl px-8 py-5 shadow-soft border-2 bg-purple-50 border-purple-200 text-purple-700">
                  {CONTENT.interactive.okayMsg}
                </div>

                <motion.button
                  onClick={handleReset}
                  className="mt-5 text-sm text-slate-400 hover:text-purple-500 underline font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 rounded"
                  whileHover={{ scale: 1.05 }}
                  aria-label="Reset the interaction"
                >
                  ↩ Go back
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="button"
                className="flex justify-center w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Okay button */}
                <motion.button
                  id="okay-friend-btn"
                  onClick={handleOkay}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-lg text-white shadow-glow focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
                  style={{
                    background: 'linear-gradient(135deg, #c084fc, #a855f7)',
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 36px rgba(192,132,252,0.55)' }}
                  whileTap={{ scale: 0.96 }}
                  aria-label="Okay Friend button"
                >
                  {CONTENT.interactive.okayBtn}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Disclaimer note */}
        <motion.p
          className="text-center text-xs text-slate-400 font-semibold mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          🌸 This button is just a fun interaction — no pressure at all, Parchi!
        </motion.p>
      </div>
    </section>
  );
}

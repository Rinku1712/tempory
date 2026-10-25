import React from 'react';
import { motion } from 'framer-motion';

// CSS-based teddy bear — no external images needed
export default function TeddyBear({ className = '' }) {
  return (
    <motion.div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
    >
      {/* Teddy SVG — drawn entirely with inline SVG */}
      <svg
        viewBox="0 0 200 260"
        xmlns="http://www.w3.org/2000/svg"
        className="w-40 h-52 sm:w-48 sm:h-64 drop-shadow-lg"
        aria-label="Cute teddy bear"
        role="img"
      >
        {/* Body */}
        <ellipse cx="100" cy="185" rx="58" ry="62" fill="#e8c9a0" />
        {/* Tummy patch */}
        <ellipse cx="100" cy="195" rx="32" ry="36" fill="#f5e0c0" />

        {/* Left Arm */}
        <motion.g
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '60px 170px' }}
        >
          <ellipse cx="42" cy="175" rx="22" ry="14" fill="#e8c9a0" transform="rotate(-25 42 175)" />
          {/* Left paw */}
          <circle cx="26" cy="183" r="10" fill="#d4a574" />
          <circle cx="21" cy="177" r="4" fill="#c8956a" />
          <circle cx="29" cy="175" r="4" fill="#c8956a" />
        </motion.g>

        {/* Right Arm */}
        <motion.g
          animate={{ rotate: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ transformOrigin: '140px 170px' }}
        >
          <ellipse cx="158" cy="175" rx="22" ry="14" fill="#e8c9a0" transform="rotate(25 158 175)" />
          {/* Right paw */}
          <circle cx="174" cy="183" r="10" fill="#d4a574" />
          <circle cx="178" cy="177" r="4" fill="#c8956a" />
          <circle cx="170" cy="175" r="4" fill="#c8956a" />
        </motion.g>

        {/* Left Leg */}
        <ellipse cx="73" cy="242" rx="18" ry="22" fill="#e8c9a0" />
        <ellipse cx="73" cy="258" rx="20" ry="10" fill="#d4a574" />

        {/* Right Leg */}
        <ellipse cx="127" cy="242" rx="18" ry="22" fill="#e8c9a0" />
        <ellipse cx="127" cy="258" rx="20" ry="10" fill="#d4a574" />

        {/* Head */}
        <circle cx="100" cy="108" r="55" fill="#e8c9a0" />

        {/* Left ear */}
        <circle cx="55" cy="65" r="20" fill="#e8c9a0" />
        <circle cx="55" cy="65" r="12" fill="#f5c0a0" />

        {/* Right ear */}
        <circle cx="145" cy="65" r="20" fill="#e8c9a0" />
        <circle cx="145" cy="65" r="12" fill="#f5c0a0" />

        {/* Eyes */}
        <circle cx="82" cy="103" r="8" fill="#3d2b1f" />
        <circle cx="118" cy="103" r="8" fill="#3d2b1f" />
        {/* Eye shine */}
        <circle cx="85" cy="100" r="3" fill="white" />
        <circle cx="121" cy="100" r="3" fill="white" />

        {/* Nose */}
        <ellipse cx="100" cy="118" rx="9" ry="6" fill="#8b5e3c" />

        {/* Smile */}
        <path
          d="M 85 128 Q 100 142 115 128"
          stroke="#8b5e3c"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Cheek blushes */}
        <ellipse cx="72" cy="122" rx="10" ry="6" fill="rgba(251,147,147,0.4)" />
        <ellipse cx="128" cy="122" rx="10" ry="6" fill="rgba(251,147,147,0.4)" />

        {/* Waving hand / sign */}
        <g>
          {/* Sign */}
          <rect x="118" y="148" width="72" height="38" rx="8" fill="#fff" stroke="#d8b4fe" strokeWidth="2" />
          <text x="154" y="163" textAnchor="middle" fontSize="9" fill="#a855f7" fontFamily="Nunito, sans-serif" fontWeight="800">SORRY,</text>
          <text x="154" y="177" textAnchor="middle" fontSize="9" fill="#a855f7" fontFamily="Nunito, sans-serif" fontWeight="800">FRIEND!</text>
        </g>

        {/* Bow tie / scarf */}
        <path d="M 88 155 Q 100 162 112 155 Q 100 168 88 155 Z" fill="#c084fc" />
        <circle cx="100" cy="160" r="5" fill="#a855f7" />
      </svg>
    </motion.div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";

import { VIDS } from "./vids";


function VideoBackground() {
  return (
    <video
      id="bg-video"
      autoPlay
      muted
      playsInline
      preload="auto"
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        objectFit: "cover",
        zIndex: 0,
      }}
    />
  );
}

function Float({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      style={{ zIndex: 3 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function FigureOverhead() {
  return (
    <svg width="60" height="105" viewBox="0 0 60 105">
      <g stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7">
        <line x1="4" y1="16" x2="56" y2="16" />
        <circle cx="30" cy="30" r="9" />
        <line x1="30" y1="39" x2="30" y2="68" />
        <line x1="30" y1="47" x2="4" y2="19" />
        <line x1="30" y1="47" x2="56" y2="19" />
        <line x1="30" y1="68" x2="14" y2="98" />
        <line x1="30" y1="68" x2="46" y2="98" />
      </g>
    </svg>
  );
}

function FigureWarrior() {
  return (
    <svg width="85" height="95" viewBox="0 0 85 95">
      <g stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7">
        <line x1="8" y1="48" x2="77" y2="22" />
        <circle cx="42" cy="16" r="9" />
        <line x1="42" y1="25" x2="42" y2="58" />
        <line x1="42" y1="36" x2="8" y2="48" />
        <line x1="42" y1="36" x2="77" y2="25" />
        <line x1="42" y1="58" x2="10" y2="88" />
        <line x1="42" y1="58" x2="74" y2="88" />
      </g>
    </svg>
  );
}

function FigureLunge() {
  return (
    <svg width="80" height="105" viewBox="0 0 80 105">
      <g stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7">
        <line x1="62" y1="10" x2="48" y2="95" />
        <circle cx="30" cy="20" r="9" />
        <line x1="30" y1="29" x2="32" y2="62" />
        <line x1="31" y1="40" x2="10" y2="52" />
        <line x1="31" y1="40" x2="56" y2="28" />
        <line x1="32" y1="62" x2="8" y2="88" />
        <line x1="32" y1="62" x2="55" y2="85" />
      </g>
    </svg>
  );
}

function FigureSideStretch() {
  return (
    <svg width="75" height="110" viewBox="0 0 75 110">
      <g stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7">
        <line x1="8" y1="12" x2="70" y2="42" />
        <circle cx="28" cy="30" r="9" />
        <line x1="28" y1="39" x2="30" y2="70" />
        <line x1="29" y1="48" x2="8" y2="15" />
        <line x1="29" y1="48" x2="68" y2="42" />
        <line x1="30" y1="70" x2="12" y2="100" />
        <line x1="30" y1="70" x2="50" y2="100" />
      </g>
    </svg>
  );
}

function FigureSpin() {
  return (
    <svg width="80" height="100" viewBox="0 0 80 100">
      <g stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7">
        <line x1="5" y1="38" x2="75" y2="28" />
        <circle cx="35" cy="18" r="9" />
        <line x1="35" y1="27" x2="32" y2="60" />
        <line x1="34" y1="38" x2="5" y2="38" />
        <line x1="34" y1="38" x2="72" y2="30" />
        <line x1="32" y1="60" x2="14" y2="88" />
        <line x1="32" y1="60" x2="54" y2="85" />
      </g>
    </svg>
  );
}

function FigureSquat() {
  return (
    <svg width="72" height="95" viewBox="0 0 72 95">
      <g stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7">
        <line x1="8" y1="50" x2="64" y2="50" />
        <circle cx="36" cy="15" r="9" />
        <line x1="36" y1="24" x2="36" y2="52" />
        <line x1="36" y1="38" x2="8" y2="50" />
        <line x1="36" y1="38" x2="64" y2="50" />
        <line x1="36" y1="52" x2="14" y2="75" />
        <line x1="14" y1="75" x2="10" y2="90" />
        <line x1="36" y1="52" x2="58" y2="75" />
        <line x1="58" y1="75" x2="62" y2="90" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden">

      <VideoBackground />
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1, pointerEvents: "none" }} />

      <Float delay={0} className="absolute top-10 left-8 sm:left-16">
        <FigureOverhead />
      </Float>
      <Float delay={0.8} className="absolute top-10 right-8 sm:right-16">
        <FigureWarrior />
      </Float>
      <Float delay={1.4} className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2">
        <FigureLunge />
      </Float>
      <Float delay={0.4} className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2">
        <FigureSpin />
      </Float>
      <Float delay={1.0} className="absolute bottom-10 left-8 sm:left-16">
        <FigureSideStretch />
      </Float>
      <Float delay={1.8} className="absolute bottom-10 right-8 sm:right-16">
        <FigureSquat />
      </Float>

      <div className="relative" style={{ zIndex: 3 }}>
        <h1
          className="text-7xl sm:text-9xl uppercase leading-none"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          STICK<br />TOGETHER
        </h1>
        <p className="mt-6 text-lg sm:text-xl font-medium text-zinc-200 tracking-widest uppercase">
          Let&apos;s Stick Together!
        </p>
        <p className="mt-4 text-sm sm:text-base font-medium text-zinc-300 tracking-wide">
          Meetups: Domino Park Sundays @ 10, McGolrick Park Saturdays @ 10, Columbus Park Mondays @ 7
        </p>
        <a href="/gallery" className="mt-8 inline-block hover:opacity-75 transition-opacity">
          <img src="/pics.png" alt="Gallery" className="w-16 h-16 mx-auto" />
        </a>
      </div>
    </div>
  );
}

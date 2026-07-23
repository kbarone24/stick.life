"use client";
import React from "react";
import { motion } from "framer-motion";

import { VIDS } from "./vids";


function VideoBackground() {
  const style: React.CSSProperties = {
    position: "fixed",
    top: 0, left: 0,
    width: "100vw", height: "100vh",
    objectFit: "cover",
    zIndex: 0,
  };
  return (
    <>
      <video id="bg-video-a" autoPlay muted playsInline preload="auto" suppressHydrationWarning style={{ ...style, opacity: 1 }} />
      <video id="bg-video-b"        muted playsInline preload="auto" suppressHydrationWarning style={{ ...style, opacity: 0 }} />
    </>
  );
}

function Float({ children, delay = 0, className = "", scale = 1, flip = false }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  scale?: number;
  flip?: boolean;
}) {
  return (
    <motion.div
      className={className}
      style={{ zIndex: 3 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div style={{ transform: `scale(${scale})${flip ? " scaleX(-1)" : ""}`, transformOrigin: "center top" }}>
        {children}
      </div>
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
    <>
      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 10, background: "rgba(18,18,18,0.8)", backdropFilter: "blur(6px)" }} className="h-24 flex flex-col relative">
        <a href="/calendar" className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 text-xl text-white/70 hover:text-white transition-colors">📅</a>
        <div className="flex-1 flex items-end justify-center pb-0">
          <img src="/1708.gif" alt="Longevity Stick" className="h-11 w-auto" />
        </div>
        <div className="h-12 overflow-hidden flex items-center">
          <div className="marquee-track text-base text-white/90 font-bold tracking-wide">
            {[0, 1].map((i) => (
              <span key={i} className="marquee-item" style={{ paddingRight: "2rem" }}>
                <span className="meetup-label">🎋 Find your Meetup! 🎋</span>
                {"     🌅 Transmitter, Thursdays @ 8a     🌅 Transmitter, Fridays @ 730p    🌳 HVK, Saturdays @ 10a     🌁 Domino, Sundays @ 10a     🐉 Columbus Park, Mondays @ 630a"}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* Fixed video + overlay — stays behind everything */}
      <VideoBackground />
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.2)", zIndex: 1, pointerEvents: "none" }} />

      {/* Hero — full viewport height */}
      <div className="relative h-screen flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden">
        {/* Row 1 — 20vh down */}
        <Float delay={0} scale={0.48} className="absolute top-[20%] left-1 sm:left-2 -translate-y-1/2">
          <FigureOverhead />
        </Float>
        <Float delay={0.8} scale={0.48} flip className="absolute top-[20%] right-1 sm:right-2 -translate-y-1/2">
          <FigureWarrior />
        </Float>

        {/* Row 2 — 50vh down */}
        <Float delay={1.4} scale={0.48} className="absolute top-[50%] left-1 sm:left-2 -translate-y-1/2">
          <FigureLunge />
        </Float>
        <Float delay={0.4} scale={0.48} flip className="absolute top-[50%] right-1 sm:right-2 -translate-y-1/2">
          <FigureSpin />
        </Float>

        {/* Row 3 — 80vh down */}
        <Float delay={1.0} scale={0.48} flip className="absolute top-[80%] left-1 sm:left-2 -translate-y-1/2">
          <FigureSideStretch />
        </Float>
        <Float delay={1.8} scale={0.48} className="absolute top-[80%] right-1 sm:right-2 -translate-y-1/2">
          <FigureSquat />
        </Float>

        <div className="relative" style={{ zIndex: 3 }}>
          <h1
            className="text-7xl sm:text-[8rem] uppercase leading-[1.5] text-white"
            style={{ fontFamily: "var(--font-archivo-narrow)", fontWeight: 700 }}
          >
            LET&apos;S<br />STICK<br />TOGETHER
          </h1>
        </div>
      </div>

      {/* Below-fold content — solid background covers the fixed video */}
      <div style={{ background: "#121212", position: "relative", zIndex: 5 }} className="min-h-[110vh] text-white px-6 pt-10 pb-24 flex flex-col items-center overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white/90 text-center" style={{ zIndex: 3, position: "relative" }}>
          Feel better.<br />Move more freely.
        </h2>
        <p className="mt-6 max-w-lg text-base sm:text-lg text-white/70 text-center leading-relaxed" style={{ zIndex: 3, position: "relative" }}>
          Longevity Stick is a fun and mindful exercise routine for people of all ages and mobility levels!<br /><br />Using a lightweight wooden stick you&apos;ll move through gentle, flowing stretches that help improve balance, flexibility, and energy — without putting strain on your body.
        </p>
        <div className="mt-20 text-center" style={{ zIndex: 3, position: "relative" }}>
          <p className="text-2xl sm:text-3xl font-semibold text-white/90">🎋 Community meetups 🎋</p>
          <p className="mt-1 text-sm text-white/50">Free + sticks provided!</p>
          <ul className="mt-6 space-y-2 text-base sm:text-lg text-white/80">
            <li>🌅 Transmitter, Thursdays 8a</li>
            <li>🌅 Transmitter, Fridays 7:30p</li>
            <li>🌳 HVK, Saturdays 10a</li>
            <li>🌁 Domino, Sundays 10a</li>
            <li>🐉 Columbus, Mondays 6:30a</li>
          </ul>
          <p className="mt-4 text-sm text-white/50">Does your community need a meetup?<br /><a href="https://www.instagram.com/longevitysticknyc?igsh=MTZhZDVnbDRobGQzcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Reach out</a></p>
          <img src="/0708.gif" alt="Longevity Stick moves" className="mt-10 max-w-xs sm:max-w-sm rounded-xl" style={{ zIndex: 3, position: "relative" }} />
          <p className="mt-8 text-sm text-white/50">Want to bring Longevity to your group, team, or event?<br /><a href="https://www.instagram.com/longevitysticknyc?igsh=MTZhZDVnbDRobGQzcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Book a private class</a></p>
        </div>

        {/* Row 4 — 9% (≈10vh into section) */}
        <Float delay={0.3} scale={0.48} flip className="absolute top-[9%] left-1 sm:left-2 -translate-y-1/2">
          <FigureSquat />
        </Float>
        <Float delay={1.1} scale={0.48} className="absolute top-[9%] right-1 sm:right-2 -translate-y-1/2">
          <FigureOverhead />
        </Float>

        {/* Row 5 — 36% (≈40vh into section) */}
        <Float delay={0.7} scale={0.48} className="absolute top-[36%] left-1 sm:left-2 -translate-y-1/2">
          <FigureWarrior />
        </Float>
        <Float delay={1.5} scale={0.48} flip className="absolute top-[36%] right-1 sm:right-2 -translate-y-1/2">
          <FigureSideStretch />
        </Float>

        {/* Row 6 — 64% (≈70vh into section) */}
        <Float delay={0.2} scale={0.48} className="absolute top-[64%] left-1 sm:left-2 -translate-y-1/2">
          <FigureSpin />
        </Float>
        <Float delay={1.2} scale={0.48} flip className="absolute top-[64%] right-1 sm:right-2 -translate-y-1/2">
          <FigureLunge />
        </Float>
      </div>
    </>
  );
}

"use client";
import React from "react";

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

export default function Home() {
  const fridayPaused = new Date() < new Date(2026, 8, 1);
  const meetupSegments = [
    "🌅 Transmitter, Thursdays @ 8a",
    ...(fridayPaused ? [] : ["🌅 Transmitter, Fridays @ 730p"]),
    "🌳 HVK, Saturdays @ 10a",
    "🌅 Transmitter, Sundays @ 830a",
    "🌁 Domino, Sundays @ 10a",
    "🐉 Columbus Park, Mondays @ 630a",
  ];
  return (
    <>
      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 10, background: "rgba(18,18,18,0.8)", backdropFilter: "blur(6px)" }} className="h-24 flex flex-col relative">
        <a href="/calendar" className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 text-xl text-white/70 hover:text-white transition-colors">📅</a>
        <a
          href="https://www.instagram.com/longevitysticknyc?igsh=MTZhZDVnbDRobGQzcQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Longevity Stick on Instagram"
          className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-white/70 hover:text-white transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <div className="flex-1 flex items-end justify-center gap-2 pb-0">
          <img src="/1708.gif" alt="Longevity Stick" width={59} height={44} className="h-11 w-auto" />
          <img src="/0723-2.gif" alt="Longevity Stick" width={59} height={44} className="h-11 w-auto" />
          <img src="/0723-1.gif" alt="Longevity Stick" width={59} height={44} className="h-11 w-auto" />
        </div>
        <div className="h-12 overflow-hidden flex items-center">
          <div className="marquee-track text-base text-white/90 font-bold tracking-wide">
            {[0, 1].map((i) => (
              <span key={i} className="marquee-item" style={{ paddingRight: "2rem" }}>
                <span className="meetup-label">🎋 Find your Meetup! 🎋</span>
                {"     " + meetupSegments.join("    ")}
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
            {!fridayPaused && <li>🌅 Transmitter, Fridays 7:30p</li>}
            <li>🌳 HVK, Saturdays 10a</li>
            <li>🌅 Transmitter, Sundays 8:30a</li>
            <li>🌁 Domino, Sundays 10a</li>
            <li>🐉 Columbus, Mondays 6:30a</li>
          </ul>
          <p className="mt-4 text-sm text-white/50">Does your community need a meetup?<br /><a href="https://www.instagram.com/longevitysticknyc?igsh=MTZhZDVnbDRobGQzcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Reach out</a></p>
          <img src="/0708.gif" alt="Longevity Stick moves" className="mt-10 max-w-xs sm:max-w-sm rounded-xl" style={{ zIndex: 3, position: "relative" }} />
          <p className="mt-8 text-sm text-white/50">Want to bring Longevity to your group, team, or event?<br /><a href="https://www.instagram.com/longevitysticknyc?igsh=MTZhZDVnbDRobGQzcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Book a private class</a></p>
        </div>
      </div>
    </>
  );
}

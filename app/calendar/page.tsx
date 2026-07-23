"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const MEETUPS: Record<number, { emoji: string; name: string; time: string; neighborhood: string }> = {
  5: { emoji: "🌅", name: "WNYC Transmitter Park", time: "7:30p", neighborhood: "Greenpoint" },
  6: { emoji: "🌳", name: "Herbert Von King Park", time: "10a",   neighborhood: "Bed-Stuy" },
  0: { emoji: "🌁", name: "Domino Park",           time: "10a",   neighborhood: "Williamsburg" },
  1: { emoji: "🐉", name: "Columbus Park",          time: "6:30a", neighborhood: "Chinatown" },
};

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function CalendarContent() {
  const searchParams = useSearchParams();
  const now = new Date();
  const year  = parseInt(searchParams.get("y") ?? String(now.getFullYear()));
  const month = parseInt(searchParams.get("m") ?? String(now.getMonth()));

  const prevUrl = month === 0
    ? `/calendar?y=${year - 1}&m=11`
    : `/calendar?y=${year}&m=${month - 1}`;
  const nextUrl = month === 11
    ? `/calendar?y=${year + 1}&m=0`
    : `/calendar?y=${year}&m=${month + 1}`;

  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const todayDate  = now.getDate();
  const todayMonth = now.getMonth();
  const todayYear  = now.getFullYear();

  return (
    <div className="flex-1 px-4 pt-32 pb-16 max-w-lg mx-auto w-full">
      {/* Month header */}
      <div className="flex items-center justify-between mb-6">
        <a href={prevUrl} className="flex items-center justify-center w-12 h-12 text-3xl text-white/60 hover:text-white transition-colors">‹</a>
        <h1 className="text-2xl font-semibold text-white/90 tracking-wide">
          {MONTH_NAMES[month]} {year}
        </h1>
        <a href={nextUrl} className="flex items-center justify-center w-12 h-12 text-3xl text-white/60 hover:text-white transition-colors">›</a>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 mb-2">
        {DAY_NAMES.map(d => (
          <div key={d} className="text-center text-xs text-white/40 font-medium py-1 uppercase tracking-wider">{d}</div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />;
          const dow    = (firstDay + day - 1) % 7;
          const meetup = MEETUPS[dow];
          const isToday = day === todayDate && month === todayMonth && year === todayYear;
          return (
            <div
              key={i}
              className="flex flex-col items-center py-1.5 rounded-lg"
              style={{ background: meetup ? "rgba(255,255,255,0.06)" : "transparent" }}
            >
              <span
                className="text-sm font-medium w-8 h-8 flex items-center justify-center rounded-full"
                style={{
                  background: isToday ? "white" : "transparent",
                  color: isToday ? "#121212" : meetup ? "white" : "rgba(255,255,255,0.4)",
                }}
              >
                {day}
              </span>
              {meetup && (
                <span className="text-xs mt-0.5 leading-tight text-center text-white/60">
                  {meetup.emoji}<br />{meetup.time}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 space-y-2 border-t border-white/10 pt-6">
        {Object.values(MEETUPS).map(m => (
          <div key={m.name} className="flex items-baseline gap-2 text-sm text-white/70">
            <span>{m.emoji}</span>
            <span>{m.name} · {m.time}</span>
            <span className="text-white/40 text-xs">{m.neighborhood}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CalendarPage() {
  return (
    <div style={{ background: "#121212", minHeight: "100vh", color: "white" }} className="flex flex-col">
      {/* Nav */}
      <nav
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 10, background: "rgba(18,18,18,0.8)", backdropFilter: "blur(6px)" }}
        className="h-24 flex flex-col relative"
      >
        <a href="/calendar" className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 text-xl text-white">📅</a>
        <a href="/" className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 text-xl text-white/70 hover:text-white transition-colors">←</a>
        <div className="flex-1 flex items-end justify-center pb-0">
          <img src="/0708.gif" alt="Longevity Stick" className="h-11 w-auto" />
        </div>
        <div className="h-12 overflow-hidden flex items-center">
          <div className="marquee-track text-base text-white/90 font-bold tracking-wide">
            {[0, 1].map((i) => (
              <span key={i} className="marquee-item" style={{ paddingRight: "2rem" }}>
                {"🎋 Find your Meetup! 🎋     🌅 Transmitter, Fridays @ 730p    🌳 HVK, Saturdays @ 10a     🌁 Domino, Sundays @ 10a     🐉 Columbus Park, Mondays @ 630a"}
              </span>
            ))}
          </div>
        </div>
      </nav>

      <Suspense fallback={<div className="flex-1 pt-32" />}>
        <CalendarContent />
      </Suspense>
    </div>
  );
}

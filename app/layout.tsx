import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import { VIDS } from "./vids";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stick Life",
  description: "Longevity Stick Art",
};

const marqueeScript = `(function(){
  var DURATION=28000;
  var track=document.querySelector('.marquee-track');
  if(!track)return;
  track.style.animation='none';
  var offset=0,lastTime=null,paused=false,dragging=false,dragStartX=0,dragStartOffset=0;
  var label=track.querySelector('.meetup-label');
  var container=track.parentElement;
  if(label&&container){
    var containerRect=container.getBoundingClientRect();
    var labelRect=label.getBoundingClientRect();
    offset=(containerRect.left+containerRect.width/2)-(labelRect.left+labelRect.width/2);
    track.style.transform='translateX('+offset+'px)';
  }
  function loop(time){
    if(!paused&&!dragging){
      var hw=track.scrollWidth/2;
      if(lastTime!==null&&hw>0){
        offset-=(hw/DURATION)*(time-lastTime);
        if(offset<-hw)offset+=hw;
      }
      lastTime=time;
      track.style.transform='translateX('+offset+'px)';
    }else{lastTime=null;}
    requestAnimationFrame(loop);
  }
  track.addEventListener('pointerdown',function(e){
    paused=true;dragging=true;
    dragStartX=e.clientX;dragStartOffset=offset;
    track.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  track.addEventListener('pointermove',function(e){
    if(!dragging)return;
    var hw=track.scrollWidth/2;
    offset=dragStartOffset+(e.clientX-dragStartX);
    if(offset>0)offset-=hw;
    if(offset<-hw)offset+=hw;
    track.style.transform='translateX('+offset+'px)';
  });
  function release(){dragging=false;paused=false;}
  track.addEventListener('pointerup',release);
  track.addEventListener('pointercancel',release);
  requestAnimationFrame(loop);
})();`;

const cycleScript = `(function(){
  var VIDS=${JSON.stringify(VIDS)};
  var isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var prefix=isMobile?'/videos/':'/videos/desktop/';
  var FADE=600;
  var els=[document.getElementById('bg-video-a'),document.getElementById('bg-video-b')];
  if(!els[0]||!els[1])return;
  var active=0,playIdx=0,preloadIdx=0,advancing=false;
  function unlock(){els[0].play().catch(function(){});els[1].play().catch(function(){});}
  document.addEventListener('touchstart',unlock,{once:true,passive:true});
  document.addEventListener('pointerdown',unlock,{once:true});
  function pick(not){var n;do{n=Math.floor(Math.random()*VIDS.length)}while(VIDS.length>1&&n===not);return n;}
  function playWhenReady(el){
    if(el.readyState>=3){el.play().catch(function(){});return;}
    var handler=function(){el.removeEventListener('canplay',handler);el.play().catch(function(){});};
    el.addEventListener('canplay',handler);
  }
  function preload(){
    preloadIdx=pick(playIdx);
    var b=els[1-active];b.src=prefix+VIDS[preloadIdx];b.load();
  }
  function advance(){
    if(advancing)return;advancing=true;
    var next=1-active;
    playWhenReady(els[next]);
    els[active].style.opacity='0';
    els[next].style.opacity='1';
    playIdx=preloadIdx;active=next;
    setTimeout(function(){preload();advancing=false;},FADE+200);
  }
  els[0].src=prefix+VIDS[0];els[0].load();playWhenReady(els[0]);
  preload();
  setInterval(function(){
    if(advancing)return;
    var v=els[active];
    if(!v||!(v.duration>0)||!isFinite(v.duration))return;
    if(v.currentTime>=v.duration-0.6)advance();
  },250);
  els[0].addEventListener('ended',function(){if(active===0&&!advancing)advance();});
  els[1].addEventListener('ended',function(){if(active===1&&!advancing)advance();});
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${archivoNarrow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: cycleScript }} />
        <script dangerouslySetInnerHTML={{ __html: marqueeScript }} />
      </body>
    </html>
  );
}

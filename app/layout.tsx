import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { VIDS } from "./vids";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stick Life",
  description: "Longevity Stick Art",
};

const cycleScript = `(function(){
  var VIDS=${JSON.stringify(VIDS)};
  var isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var prefix=isMobile?'/videos/':'/videos/desktop/';
  var idx=0,advancing=false;
  function pick(not){var n;do{n=Math.floor(Math.random()*VIDS.length)}while(VIDS.length>1&&n===not);return n;}
  function advance(){
    if(advancing)return;advancing=true;
    var next=pick(idx);idx=next;
    var v=document.getElementById('bg-video');
    if(!v){advancing=false;return;}
    v.src=prefix+VIDS[next];v.load();
    v.play().then(function(){advancing=false;}).catch(function(){advancing=false;});
  }
  var v=document.getElementById('bg-video');
  if(v){
    v.src=prefix+VIDS[0];v.load();v.play().catch(function(){});
    setInterval(function(){
      if(advancing)return;
      var v=document.getElementById('bg-video');
      if(!v||!(v.duration>0)||!isFinite(v.duration))return;
      if(v.currentTime>=v.duration-0.5)advance();
    },250);
    v.addEventListener('ended',advance);
    v.addEventListener('error',advance);
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: cycleScript }} />
      </body>
    </html>
  );
}

import Link from "next/link";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight leading-none">
        Gallery
      </h1>
      <p className="mt-4 text-zinc-500 tracking-widest uppercase text-sm">Coming soon</p>
      <Link href="/" className="mt-10 text-zinc-400 hover:text-white text-sm tracking-widest uppercase transition-colors">
        ← Back
      </Link>
    </div>
  );
}

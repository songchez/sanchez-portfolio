import dynamic from "next/dynamic";
import { Suspense } from "react";
import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

const Globe = dynamic(() => import("@/components/Globe"), { ssr: true });

export default function Home() {
  return (
    <main className="relative bg-black">
      <Suspense fallback={<div>Loading...</div>}>
        <Globe />
      </Suspense>
      <Hero />
      <div className="relative z-10 select-none">
        <Profile />
        <Projects />
      </div>
    </main>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import type React from "react";

const Profile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24">
      <div
        ref={ref}
        className={`max-w-4xl w-full mx-auto relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-10 border border-white/20 shadow-xl">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 mb-10">
            <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0">
              <img
                src="/profile.jpeg"
                alt="나성채 프로필 사진"
                className="rounded-full w-full h-full object-cover border-2 border-white/30 shadow-lg"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                나성채. Sanchez, Na
              </h1>
              <p className="text-lg text-blue-200 mb-3">AI 풀스택 개발자</p>
              <p className="text-white/80 leading-relaxed max-w-lg">
                비즈니스를 먼저 이해하고 Product Market Fit에 맞게 사용자의
                문제를 해결하는 것에 가치를 두는 개발자입니다. AI 기술과 웹 개발
                역량을 융합하여 실질적인 솔루션을 만듭니다.
              </p>
            </div>
          </div>

          {/* Experience and Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-300">
                Work Experience
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-300/50 pl-4">
                  <p className="font-semibold text-white">Hermes Solution</p>
                  <p className="text-sm text-white/70">
                    연구원 / 풀스택 개발자
                  </p>
                  <p className="text-sm text-white/60">2025.05 ~ 재직중</p>
                </div>

                <div className="border-l-2 border-blue-300/50 pl-4">
                  <p className="font-semibold text-white">VISUALITY AI</p>
                  <p className="text-sm text-white/70">풀스택 개발자</p>
                  <p className="text-sm text-white/60">2024.10 ~ 참여중</p>
                </div>

                <div className="border-l-2 border-white/30 pl-4">
                  <p className="font-semibold text-white">
                    멋쟁이사자처럼 스타트업 스쿨 4기
                  </p>
                  <p className="text-sm text-white/70">기획 및 개발</p>
                  <p className="text-sm text-white/60">2022.10 ~ 2022.12</p>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-300">
                Featured Projects
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors">
                  <p className="font-semibold text-white">SchedAI</p>
                  <p className="text-sm text-white/70 mt-1">
                    Google Calendar API 연동 자연어 스케줄관리 서비스
                  </p>
                  <a
                    href="https://schedai.my/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-300 hover:text-blue-200 hover:underline mt-2 inline-block"
                  >
                    서비스 바로가기
                  </a>
                </div>

                <div className="p-4 bg-white/5 rounded-lg border border-white/20 hover:bg-white/10 transition-colors">
                  <p className="font-semibold text-white">
                    Visuality LandingPage
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    Image Generation AI 기반 건축설계 및 커뮤니케이션 분야 혁신
                    스타트업
                  </p>
                  <a
                    href="https://www.visuality.co.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-300 hover:text-blue-200 hover:underline mt-2 inline-block"
                  >
                    랜딩페이지 바로가기
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <h3 className="text-xl font-bold mb-4 text-center text-green-300">
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "JavaScript",
                "Python",
                "LangGraph",
                "FastAPI",
                "Linux",
                "React",
                "Vite",
                "Tauri",
                "Rust",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind CSS",
                "C#",
              ].map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 border border-white/30 rounded-full text-sm text-white/90 hover:bg-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

"use client";

import { useState, useRef, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "SchedAI",
    description:
      "AI 기반 스케줄 최적화 플랫폼으로, 사용자의 일정을 분석하여 최적의 시간 배분을 제안합니다.",
    serviceUrl: "https://schedai.my/",
    githubUrl: "https://github.com/songchez/SchedAI",
    tech: [
      "Next.js",
      "AISDK",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "Tailwind CSS",
    ],
    category: "AI/Productivity",
  },
  {
    title: "Burpee Master",
    description:
      "AI 자세 인식을 활용한 운동 트래킹 앱으로, 정확한 버피 자세를 실시간으로 분석합니다.",
    serviceUrl: "https://burpee-master.vercel.app/",
    githubUrl: null,
    tech: ["React"],
    category: "AI/Health",
  },
  {
    title: "Visuality",
    description:
      "데이터 시각화 전문 플랫폼으로, 복잡한 데이터를 직관적인 차트와 그래프로 변환합니다.",
    serviceUrl: "http://visuality.co.kr",
    githubUrl: null,
    tech: ["Next.js", "TailwindCss"],
    category: "Data Visualization",
  },
  {
    title: "Mood Island",
    description:
      "감정 분석 AI를 활용한 개인 감정 관리 플랫폼으로, 일상의 감정 패턴을 분석하고 개선 방안을 제시합니다.",
    serviceUrl: "https://moodisland-deploy.pages.dev/",
    githubUrl: null,
    tech: ["React.js", "Firebase"],
    category: "AI/Mental Health",
  },
  {
    title: "Streamlit Knobs",
    description:
      "Streamlit 앱에 직관적인 노브(knob) 컨트롤을 추가하는 커스텀 컴포넌트입니다.",
    serviceUrl: null,
    githubUrl: "https://github.com/songchez/streamlit_knobes",
    tech: ["Streamlit", "Python", "Custom Component", "OpenSource"],
    category: "UI Component",
  },
  {
    title: "StockSageAI",
    description:
      "AI를 활용하여 주식 시장 데이터를 분석하고 투자 전략을 제안하는 플랫폼입니다.",
    serviceUrl: null,
    githubUrl: "https://github.com/songchez/StockSageAI",
    tech: ["Streamlit", "Python", "Gemini", "LangGraph"],
    category: "AI/FinanceAnalysis",
  },
  {
    title: "Crypto Trade Bot",
    description:
      "암호화폐 시장의 변동성을 활용하는 터틀 트레이딩 전략을 구현한 자동 매매 봇입니다.",
    serviceUrl: null,
    githubUrl: "https://github.com/songchez/crypto_trade_bot",
    tech: ["Python", "Trading Bot", "API"],
    category: "Trading Bot",
  },
  {
    title: "ChromOps",
    description:
      "타오바오에서의 쇼핑 경험을 개선하고 유용한 기능을 제공하는 크롬 확장 프로그램입니다.",
    serviceUrl: "https://chrom-ops.vercel.app/",
    githubUrl: "https://github.com/songchez/ChromOps/tree/main",
    tech: ["Next.js", "Prisma", "TailwindCSS"],
    category: "Shopping Mall",
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Featured Projects
        </h2>

        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors duration-50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.serviceUrl && (
                    <a
                      href={project.serviceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 flex justify-center items-center rounded-full hover:bg-blue-500/20 transition-colors"
                      title="Visit Service"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 flex justify-center items-center rounded-full hover:bg-purple-500/20 transition-colors"
                      title="View on GitHub"
                    >
                      <Image
                        src="/github-mark.svg"
                        width={24}
                        height={24}
                        alt="git-mark"
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 rounded-md text-xs text-white/80 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Category */}
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-400/30">
                {project.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

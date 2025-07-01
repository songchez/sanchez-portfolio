"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 select-none pointer-events-none min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-2xl md:text-4xl font-bold mb-8 text-zinc-50 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          "What I cannot create, I do not understand."
        </motion.h1>
        <motion.div
          className="mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xs text-zinc-50 mb-3">- Richard Feynman</p>
          <h2 className="text-sm md:text-base font-medium text-white">
            AI 풀스택 개발자, <span className="text-blue-400">나성채</span>
            입니다.
          </h2>
        </motion.div>
        <motion.p
          className="text-xs md:text-sm text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          직접 비즈니스를 구성하고 운영하며 시장을 이해했습니다.
          <br />
          창조를 통해 얻은 깊은 이해로 AI 기술과 비즈니스를 연결합니다.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="animate-bounce">
            <svg
              className="w-4 h-4 mx-auto text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

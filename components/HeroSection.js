"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const AgentScene = dynamic(() => import("./AgentScene"), {
  ssr: false,
  loading: () => <div className="agent-scene-fallback" aria-hidden="true" />,
});

export default function HeroSection() {
  return (
    <section className="hero section--full" id="home">
      <div className="hero-scene" aria-hidden="true">
        <AgentScene />
      </div>
      <div className="hero-shade" />

      <div className="container hero-content">
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          GUANGZHOU AGENTIC INTELLIGENCE
        </motion.p>
        <motion.h1
          className="display hero-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          让每一个年轻人
          <br />
          都拥有进入AI时代的机会
        </motion.h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          我们通过真实项目、智能体工具与商业实践，
          <br />
          帮助高校毕业生和年轻创业者构建属于自己的AI事业路径。
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            className="button button--primary"
            type="button"
            onClick={() => document.getElementById("opc-model")?.scrollIntoView({ behavior: "smooth" })}
          >
            探索OPC模式
            <ArrowDown size={18} />
          </button>
          <a className="button" href="mailto:xiedyllen@gmail.com">
            联系我们
            <Mail size={18} />
          </a>
        </motion.div>
      </div>

      <button
        className="scroll-cue"
        type="button"
        onClick={() => document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={18} />
      </button>
    </section>
  );
}

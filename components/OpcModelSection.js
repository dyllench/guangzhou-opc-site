"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const steps = ["发现方向", "学习工具", "进入项目", "完成交付", "建立能力", "形成个人事业"];
const nodes = ["AI智能体", "自动化工具", "项目资源", "企业客户", "运营支持", "社区协作"];

export default function OpcModelSection() {
  return (
    <section className="section opc-section" id="opc-model">
      <div className="orbital-bg" aria-hidden="true" />
      <div className="container opc-layout">
        <SectionReveal>
          <h2 className="section-title">
            一个人
            <br />
            也可以是一家公司
          </h2>
          <p className="section-copy">
            OPC并不代表一个人完成所有工作。它代表一个人可以借助AI智能体、自动化工具、共享服务与协作网络，形成轻量、高效、可持续的商业单元。
          </p>
        </SectionReveal>

        <SectionReveal className="opc-network">
          <div className="opc-center">个人创业者</div>
          {nodes.map((node, index) => (
            <motion.div
              className="opc-node"
              data-index={index}
              key={node}
              animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
            >
              {node}
            </motion.div>
          ))}
          <svg className="opc-lines" viewBox="0 0 520 520" aria-hidden="true">
            {nodes.map((_, index) => {
              const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
              const x = 260 + Math.cos(angle) * 188;
              const y = 260 + Math.sin(angle) * 188;
              return <line key={index} x1="260" y1="260" x2={x} y2={y} />;
            })}
            <circle cx="260" cy="260" r="188" />
          </svg>
        </SectionReveal>
      </div>

      <div className="container opc-flow">
        {steps.map((step, index) => (
          <SectionReveal className="flow-step" delay={index * 0.05} key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

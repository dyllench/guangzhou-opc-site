"use client";

import { useEffect, useRef, useState } from "react";
import SectionReveal from "./SectionReveal";

const journey = [
  ["STEP 01", "方向识别", "了解个人经历、能力与兴趣，确定适合的AI发展方向。"],
  ["STEP 02", "能力训练", "学习AI工具、智能体、自动化与商业项目基础能力。"],
  ["STEP 03", "项目实战", "参与真实企业项目，形成作品、经验与交付能力。"],
  ["STEP 04", "商业验证", "尝试获得第一位客户、第一笔项目收入或第一份AI工作。"],
  ["STEP 05", "OPC孵化", "建立自己的服务体系、产品方向或一人公司。"],
];

export default function JourneySection() {
  const rootRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = rootRef.current?.querySelectorAll("[data-step]");
    if (!nodes?.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number(visible.target.getAttribute("data-step")));
      },
      { threshold: [0.25, 0.45, 0.7] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section journey-section" id="journey" ref={rootRef}>
      <div className="container">
        <SectionReveal>
          <h2 className="section-title">
            从零开始
            <br />
            走向真实成果
          </h2>
        </SectionReveal>

        <div className="timeline" style={{ "--active-step": active }}>
          {journey.map(([step, title, text], index) => (
            <SectionReveal
              className={active === index ? "timeline-step is-active" : "timeline-step"}
              delay={index * 0.05}
              key={step}
            >
              <article data-step={index}>
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

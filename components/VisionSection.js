import SectionReveal from "./SectionReveal";

const lines = [
  "AI正在降低创业、开发、设计、运营和内容生产的门槛。",
  "一个人借助智能体、自动化工具和专业能力，可以完成过去需要一个团队才能完成的工作。",
  "我们希望帮助更多年轻人，从“等待一份工作”，转变为“创造自己的机会”。",
];

export default function VisionSection() {
  return (
    <section className="section vision-section" id="vision">
      <div className="grid-bg" aria-hidden="true" />
      <div className="container">
        <SectionReveal>
          <h2 className="section-title">
            不是学习一个工具
            <br />
            而是建立一种新的工作方式
          </h2>
        </SectionReveal>
        <div className="vision-lines">
          {lines.map((line, index) => (
            <SectionReveal className="vision-line" delay={index * 0.06} key={line}>
              {line}
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionReveal from "./SectionReveal";

const problems = [
  ["01", "学了很多AI工具", "却不知道如何形成真实能力"],
  ["02", "缺少企业项目", "无法积累可以展示的成果"],
  ["03", "想尝试创业", "却没有产品、客户和交付经验"],
];

export default function ProblemSection() {
  return (
    <section className="section problem-section" id="problem">
      <div className="container">
        <SectionReveal>
          <h2 className="section-title">
            年轻人缺少的
            <br />
            往往不是努力
          </h2>
          <p className="section-copy">而是缺少进入AI产业的真实路径。</p>
        </SectionReveal>

        <div className="problem-grid">
          {problems.map(([number, title, text], index) => (
            <SectionReveal className="problem-item" delay={index * 0.08} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

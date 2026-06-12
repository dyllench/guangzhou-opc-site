import SectionReveal from "./SectionReveal";

const advantages = [
  ["十年以上电商实战经验", "理解真实企业的运营、销售、客户与交付问题。"],
  ["五年以上团队与项目经验", "具备从需求、规划、执行到验收的完整项目管理能力。"],
  ["软件与智能体开发能力", "拥有App、网站、自动化系统与AI Agent项目实践。"],
  ["强调真实业务成果", "不以课程数量衡量价值，而以能力、作品、项目和收入结果衡量。"],
];

export default function AdvantageSection() {
  return (
    <section className="section advantage-section" id="advantages">
      <div className="container">
        <SectionReveal>
          <h2 className="section-title">
            经验不是口号
            <br />
            而是解决问题的能力
          </h2>
        </SectionReveal>

        <div className="advantage-list">
          {advantages.map(([title, text], index) => (
            <SectionReveal className="advantage-item" delay={index * 0.06} key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

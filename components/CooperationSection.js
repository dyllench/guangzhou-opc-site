import SectionReveal from "./SectionReveal";

const directions = ["高校就业与创新创业中心", "人工智能产业园区", "政府与社区服务机构", "电商与品牌企业", "AI工具与技术服务商", "创业孵化器与投资机构"];
const forms = ["共建OPC训练营", "联合举办AI创业活动", "企业真实项目合作", "青年就业创业项目", "AI数字化转型服务", "创业项目孵化合作"];

export default function CooperationSection() {
  return (
    <section className="section cooperation-section" id="cooperation">
      <div className="grid-bg" aria-hidden="true" />
      <div className="container cooperation-layout">
        <SectionReveal>
          <h2 className="section-title">寻找共同推动AI青年创业的伙伴</h2>
        </SectionReveal>

        <SectionReveal className="cooperation-column" delay={0.08}>
          <h3>合作方向</h3>
          {directions.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </SectionReveal>

        <SectionReveal className="cooperation-column" delay={0.16}>
          <h3>合作形式</h3>
          {forms.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}

import SectionReveal from "./SectionReveal";

const services = [
  {
    title: "AI与OPC训练营",
    text: "面向高校毕业生和年轻创业者，围绕真实业务场景学习AI工具、智能体与自动化能力。",
  },
  {
    title: "真实企业项目实战",
    text: "通过电商、内容、运营、软件和企业自动化项目，建立可展示、可交付、可转化的实践经验。",
  },
  {
    title: "OPC项目孵化",
    text: "帮助参与者从个人技能出发，逐步形成自己的服务、产品或一人公司。",
  },
  {
    title: "企业AI解决方案",
    text: "为企业提供AI电商、内容生产、智能客服、业务自动化与智能体落地服务。",
  },
];

export default function ServiceSection() {
  return (
    <section className="service-section" id="services">
      <div className="section service-intro">
        <div className="container">
          <SectionReveal>
            <h2 className="section-title">
              我们正在构建的
              <br />
              不是传统培训机构
            </h2>
            <p className="section-copy">而是一个连接人才、项目、工具与商业机会的AI创业生态。</p>
          </SectionReveal>
        </div>
      </div>

      {services.map((service, index) => (
        <article className="service-row" key={service.title}>
          <div className="container service-row-inner">
            <SectionReveal className="service-copy">
              <span>0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </SectionReveal>
            <SectionReveal className="service-visual" delay={0.1}>
              <div className="abstract-core">
                <i />
                <i />
                <i />
              </div>
            </SectionReveal>
          </div>
        </article>
      ))}
    </section>
  );
}

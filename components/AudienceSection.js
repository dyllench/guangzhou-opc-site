import SectionReveal from "./SectionReveal";

const audiences = [
  ["01", "高校毕业生", "获得AI实战、项目经验与职业方向。"],
  ["02", "年轻创业者", "以更低成本验证产品、服务和商业模式。"],
  ["03", "中小企业", "获得可落地的AI与业务自动化解决方案。"],
  ["04", "高校、园区与政府机构", "共同建设青年就业创业与AI人才培养项目。"],
];

export default function AudienceSection() {
  return (
    <section className="section audience-section" id="audience">
      <div className="container">
        <SectionReveal>
          <h2 className="section-title">
            为不同角色
            <br />
            建立连接
          </h2>
        </SectionReveal>
        <div className="audience-list">
          {audiences.map(([number, title, text]) => (
            <SectionReveal className="audience-item" key={number}>
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

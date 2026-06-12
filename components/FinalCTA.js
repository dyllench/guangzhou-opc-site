import { Mail } from "lucide-react";
import SectionReveal from "./SectionReveal";

export default function FinalCTA() {
  return (
    <section className="section section--full final-cta" id="contact">
      <div className="orbital-bg" aria-hidden="true" />
      <div className="container">
        <SectionReveal>
          <h2 className="display">
            AI时代
            <br />
            每个人都可以重新定义自己的可能
          </h2>
          <p className="section-copy">
            如果你关注AI、创业、青年发展或企业数字化，
            <br />
            欢迎与广州类智能体科技有限公司建立联系。
          </p>
          <a className="button button--primary final-mail" href="mailto:xiedyllen@gmail.com">
            发送邮件
            <Mail size={20} />
          </a>
          <p className="email-line">xiedyllen@gmail.com</p>
        </SectionReveal>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section section--full">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="section-title">页面没有进入轨道</h1>
        <p className="section-copy">你访问的页面不存在。返回首页继续探索OPC生态。</p>
        <Link className="button button--primary" href="/">
          返回首页
        </Link>
      </div>
    </main>
  );
}

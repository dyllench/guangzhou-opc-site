"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "首页", id: "home" },
  { label: "OPC模式", id: "opc-model" },
  { label: "核心业务", id: "services" },
  { label: "成长路径", id: "journey" },
  { label: "合作生态", id: "cooperation" },
  { label: "联系我们", id: "contact" },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-38% 0px -48% 0px", threshold: [0.12, 0.3, 0.56] }
    );

    navItems.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="广州类智能体科技有限公司首页">
        <span className="brand-mark" aria-hidden="true" />
        <span>
          <strong>OPC Guangzhou</strong>
          <small>Agentic Intelligence</small>
        </span>
      </a>

      <nav className="desktop-nav" aria-label="主导航">
        {navItems.map((item) => (
          <button
            className={active === item.id ? "nav-link is-active" : "nav-link"}
            key={item.id}
            type="button"
            onClick={() => handleNav(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button className="nav-cta" type="button" onClick={() => handleNav("opc-model")}>
        探索OPC
      </button>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "关闭菜单" : "打开菜单"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={open ? "mobile-menu is-open" : "mobile-menu"}>
        {navItems.map((item) => (
          <button key={item.id} type="button" onClick={() => handleNav(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}

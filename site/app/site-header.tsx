"use client";

import { useLanguage } from "./language";
import { withBasePath } from "./paths";

const navigation = {
  en: { experience: "Experience", education: "Education", projects: "Projects", skills: "Skills", contact: "Contact" },
  zh: { experience: "经历", education: "教育", projects: "项目", skills: "技术", contact: "联系" },
} as const;

export function SiteHeader() {
  const { language, toggleLanguage } = useLanguage();
  const nav = navigation[language];

  return (
    <header className="site-header">
      <a href={withBasePath("/#about")} className="identity" aria-label={language === "en" ? "Vincent Wang, home" : "Vincent Wang 王泽森，首页"}>
        <span className="identity-mark">VW</span>
        <span><strong>Vincent Wang</strong><small>王泽森</small></span>
      </a>
      <nav className="main-nav" aria-label={language === "en" ? "Primary navigation" : "主要导航"}>
        <a href={withBasePath("/#experience")}>{nav.experience}</a>
        <a href={withBasePath("/#education")}>{nav.education}</a>
        <a href={withBasePath("/#project-atlas")}>{nav.projects}</a>
        <a href={withBasePath("/#project-atlas")}>{nav.skills}</a>
        <a href={withBasePath("/#contact")}>{nav.contact}</a>
      </nav>
      <div className="header-actions">
        <button
          className="language-toggle"
          type="button"
          onClick={toggleLanguage}
          aria-label={language === "en" ? "Switch to Chinese" : "切换到英文"}
          title={language === "en" ? "切换到中文" : "Switch to English"}
        >
          <span className={language === "en" ? "active" : ""}>EN</span>
          <i aria-hidden="true" />
          <span className={language === "zh" ? "active" : ""}>中文</span>
        </button>
        <a href="https://github.com/oldkingzz" target="_blank" rel="noreferrer">GitHub</a>
        <a className="header-cv" href="https://raw.githubusercontent.com/oldkingzz/profile/main/static/VincentWangCV.docx" target="_blank" rel="noreferrer">CV ↗</a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><strong>Vincent Wang · 王泽森</strong><span>Penn MEAM · Robotics, Controls & VLA Post-training</span></div>
      <div className="footer-links">
        <a href="https://github.com/oldkingzz" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/sansenpai/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://raw.githubusercontent.com/oldkingzz/profile/main/static/VincentWangCV.docx" target="_blank" rel="noreferrer">CV</a>
        <a href="mailto:Wang2003@seas.upenn.edu">Wang2003@seas.upenn.edu</a>
      </div>
    </footer>
  );
}

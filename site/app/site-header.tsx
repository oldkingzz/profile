import { withBasePath } from "./paths";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href={withBasePath("/#about")} className="identity" aria-label="Vincent Wang 王泽森，首页">
        <span className="identity-mark">VW</span>
        <span><strong>Vincent Wang</strong><small>王泽森</small></span>
      </a>
      <nav className="main-nav" aria-label="主要导航">
        <a href={withBasePath("/#experience")}>经历</a>
        <a href={withBasePath("/#education")}>教育</a>
        <a href={withBasePath("/#project-atlas")}>项目</a>
        <a href={withBasePath("/#project-atlas")}>技术</a>
        <a href={withBasePath("/#contact")}>联系</a>
      </nav>
      <div className="header-actions">
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

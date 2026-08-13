"use client";

import { InlineProjectAtlas } from "../inline-project-atlas";
import { useLanguage } from "../language";
import { SiteFooter, SiteHeader } from "../site-header";

export default function ProjectsPage() {
  const { language } = useLanguage();

  return (
    <main>
      <SiteHeader />
      <section className="page-intro projects-intro section-shell">
        <p className="section-kicker">PROJECTS</p>
        <h1>{language === "en" ? "Projects & Technology Stack" : "项目与技术栈"}</h1>
        <p>{language === "en" ? "Projects spanning robotic systems, control, visual learning, operating systems, and research practice." : "项目覆盖机器人系统、控制、视觉学习、操作系统与研究实践。"}</p>
      </section>
      <InlineProjectAtlas />
      <SiteFooter />
    </main>
  );
}

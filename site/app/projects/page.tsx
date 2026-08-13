import { InlineProjectAtlas } from "../inline-project-atlas";
import { SiteFooter, SiteHeader } from "../site-header";

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-intro projects-intro section-shell">
        <p className="section-kicker">PROJECTS</p>
        <h1>项目与技术栈</h1>
        <p>项目覆盖机器人系统、控制、视觉学习、操作系统与研究实践。</p>
      </section>
      <InlineProjectAtlas />
      <SiteFooter />
    </main>
  );
}

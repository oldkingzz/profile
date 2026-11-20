"use client";

import { useLanguage } from "../language";
import { SiteFooter, SiteHeader } from "../site-header";

const copy = {
  en: { kicker: "MEGASTRUCTURES", title: "Megastructures" },
  zh: { kicker: "MEGASTRUCTURES", title: "Megastructures" },
} as const;

export default function MegastructuresPage() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <main>
      <SiteHeader />
      <section className="page-intro section-shell">
        <p className="section-kicker">{text.kicker}</p>
        <h1>{text.title}</h1>
      </section>
      <SiteFooter />
    </main>
  );
}

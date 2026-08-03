"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import {
  awards,
  education,
  navItems,
  profileUrl,
  publications,
  researchTracks,
  scholarUrl,
  type Filter,
  type Language,
  type Localized,
  type LocalizedList,
} from "./site-data";

function localize(value: Localized, language: Language) {
  return value[language];
}

function localizeList(value: LocalizedList, language: Language) {
  return value[language];
}

function ResearchGallery({
  track,
  language,
  figureLabel,
  figureSource,
}: {
  track: (typeof researchTracks)[number];
  language: Language;
  figureLabel: string;
  figureSource: string;
}) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const scrollGallery = (direction: number) => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    gallery.scrollBy({ left: direction * (gallery.clientWidth + 24), behavior: "smooth" });
  };

  return (
    <div className="research-gallery-wrap">
      <button className="gallery-arrow gallery-arrow-prev" type="button" onClick={() => scrollGallery(-1)} aria-label={language === "zh" ? "上一张论文图" : "View previous paper figure"}>←</button>
      <div className="research-gallery" ref={galleryRef} role="region" tabIndex={0} aria-label={language === "zh" ? `${localize(track.title, language)}论文图示，可横向滚动` : `${localize(track.title, language)} paper figures, horizontally scrollable`}>
        <div className="research-gallery-track">
          {track.figures.map((figure, index) => <figure className="research-figure" key={figure.src}>
            <a className="research-figure-image" href={figure.url} target="_blank" rel="noreferrer" aria-label={`${figureSource}: ${figure.paper}`}>
              <img src={figure.src} alt={localize(figure.alt, language)} loading={index > 1 ? "lazy" : undefined} />
            </a>
            <figcaption><span>0{index + 1}</span><div className="research-figure-meta"><p><b>{figureLabel}</b> · {localize(figure.caption, language)}</p><small>{figure.paper}</small><a href={figure.url} target="_blank" rel="noreferrer">{figureSource} ↗</a></div></figcaption>
          </figure>)}
        </div>
      </div>
      <button className="gallery-arrow gallery-arrow-next" type="button" onClick={() => scrollGallery(1)} aria-label={language === "zh" ? "下一张论文图" : "View next paper figure"}>→</button>
    </div>
  );
}

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") return "zh";
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  const savedLanguage = window.localStorage.getItem("academic-language");
  return queryLanguage === "en" || savedLanguage === "en" ? "en" : "zh";
}

function subscribeToLanguage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("academic-language-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("academic-language-change", onChange);
  };
}

export default function Home() {
  const language = useSyncExternalStore(subscribeToLanguage, getLanguageSnapshot, () => "zh");
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    window.localStorage.setItem("academic-language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const filteredPublications = useMemo(
    () => publications.filter((paper) => filter === "all" || paper.category === filter),
    [filter],
  );

  const toggleLanguage = () => {
    const nextLanguage = language === "zh" ? "en" : "zh";
    window.localStorage.setItem("academic-language", nextLanguage);
    window.history.replaceState({}, "", `${window.location.pathname}?lang=${nextLanguage}`);
    window.dispatchEvent(new Event("academic-language-change"));
  };

  const copy = {
    navLabel: language === "zh" ? "主导航" : "Primary navigation",
    institution: language === "zh" ? "清华大学 · 土木工程" : "Tsinghua University · Civil Engineering",
    role: language === "zh" ? "博士研究生 / 防灾减灾工程" : "Ph.D. researcher / Disaster mitigation",
    intro: language === "zh" ? "关注结构健康监测、计算机视觉与土木基础设施的智能感知。" : "Working on structural health monitoring, computer vision, and intelligent sensing for civil infrastructure.",
    scholar: "Google Scholar",
    email: language === "zh" ? "发送邮件" : "Email",
    researchTitle: language === "zh" ? "研究方向" : "Research",
    researchIntro: language === "zh" ? "围绕视觉结构感知与桥梁监测数据分析展开研究。" : "Research at the intersection of vision-based structural sensing and bridge monitoring data.",
    figureLabel: language === "zh" ? "论文图示" : "Paper figure",
    figureSource: language === "zh" ? "查看论文" : "View paper",
    publicationsTitle: language === "zh" ? "论文发表" : "Publications",
    publicationsIntro: language === "zh" ? "论文题目保留正式发表语言；被引量为 OpenAlex 公开索引值，Google Scholar 提供完整作者档案。" : "Titles are preserved in their original language. Citation counts are from the public OpenAlex index; Google Scholar provides the full author profile.",
    educationTitle: language === "zh" ? "教育经历" : "Education",
    honorsTitle: language === "zh" ? "荣誉奖励" : "Honors",
    contactTitle: language === "zh" ? "联系我" : "Contact",
    contactIntro: language === "zh" ? "欢迎就结构健康监测、视觉测量及相关研究交流。" : "I welcome conversations about structural health monitoring, vision-based measurement, and related research.",
    all: language === "zh" ? "全部" : "All",
    vision: language === "zh" ? "视觉感知" : "Vision",
    bridge: language === "zh" ? "桥梁监测" : "Bridge SHM",
    source: language === "zh" ? "来源" : "Source",
    citations: language === "zh" ? "被引" : "Cited by",
    current: language === "zh" ? "在读" : "Current",
    phone: language === "zh" ? "电话 / 微信" : "Phone / WeChat",
    profile: language === "zh" ? "研究主页" : "Research profile",
  };

  return (
    <main className="site-shell" id="main-content">
      <a className="skip-link" href="#main-content">{language === "zh" ? "跳转到主要内容" : "Skip to main content"}</a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="侯佳乐 / Jiale Hou">
            <strong>侯佳乐</strong>
            <span>Jiale Hou</span>
          </a>
          <nav className="main-nav" aria-label={copy.navLabel}>
            {navItems.map((item) => <a href={`#${item.id}`} key={item.id}>{language === "zh" ? item.zh : item.en}</a>)}
          </nav>
          <button className="language-switch" type="button" onClick={toggleLanguage} aria-label={language === "zh" ? "Switch to English" : "切换到中文"}>
            {language === "zh" ? "EN" : "中文"}
          </button>
        </div>
      </header>

      <aside className="profile-rail" id="top" aria-label={language === "zh" ? "个人信息" : "Profile information"}>
        <div className="profile-rail-inner">
          <a className="profile-rail-name" href="#top">
            <strong>侯佳乐</strong>
            <span>Jiale Hou</span>
          </a>
          <div className="profile-rail-block">
            <span className="profile-rail-label">{language === "zh" ? "身份" : "Position"}</span>
            <p>{language === "zh" ? "清华大学 · 土木工程" : "Tsinghua University · Civil Engineering"}</p>
            <p>{language === "zh" ? "博士研究生 · 防灾减灾工程" : "Ph.D. researcher · Disaster mitigation"}</p>
          </div>
          <div className="profile-rail-block">
            <span className="profile-rail-label">{language === "zh" ? "导师" : "Advisors"}</span>
            <p>{language === "zh" ? "张熠教授" : "Prof. Yi Zhang"}</p>
            <p>{language === "zh" ? "顾辰教授" : "Prof. Chen Gu"}</p>
          </div>
          <div className="profile-rail-block profile-rail-contact">
            <span className="profile-rail-label">{language === "zh" ? "联系方式" : "Contact"}</span>
            <a href="mailto:hjl23@mails.tsinghua.edu.cn">hjl23@mails.tsinghua.edu.cn</a>
            <a href="tel:+8619909676556">19909676556</a>
            <p>{language === "zh" ? "微信同号" : "WeChat: same number"}</p>
          </div>
          <div className="profile-rail-block profile-rail-research">
            <span className="profile-rail-label">{language === "zh" ? "研究方向" : "Research"}</span>
            <a href="#research"><b>01</b>{language === "zh" ? "灾后结构视觉感知与非接触响应测量" : "Vision-based structural sensing"}</a>
            <a href="#research"><b>02</b>{language === "zh" ? "桥梁结构健康监测与数据驱动状态识别" : "Data-driven bridge monitoring"}</a>
          </div>
        </div>
      </aside>

      <section className="hero-section" id="legacy-hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="overline">Academic homepage / 01</p>
            <h1 id="hero-title">侯佳乐</h1>
            <p className="hero-name">Jiale Hou</p>
            <p className="hero-role">{copy.institution}<br />{copy.role}</p>
            <p className="hero-intro">{copy.intro}</p>
            <div className="hero-links">
              <a href={scholarUrl} target="_blank" rel="noreferrer">{copy.scholar} <span>↗</span></a>
              <a href="mailto:hjl23@mails.tsinghua.edu.cn">{copy.email} <span>↗</span></a>
            </div>
          </div>
          <aside className="hero-aside" aria-label={language === "zh" ? "研究关键词" : "Research keywords"}>
            <p className="aside-label">Research interests</p>
            <div className="aside-item"><span>01</span><p>{language === "zh" ? "灾后结构视觉感知与非接触响应测量" : "Vision-based structural sensing and post-disaster assessment"}</p></div>
            <div className="aside-item"><span>02</span><p>{language === "zh" ? "桥梁结构健康监测与数据驱动状态识别" : "Data-driven bridge structural health monitoring"}</p></div>
          </aside>
        </div>
      </section>

      <section className="content-section" id="research" aria-labelledby="research-title">
        <div className="container">
          <div className="section-heading"><span className="section-number">01</span><div><h2 id="research-title">{copy.researchTitle}</h2><p>{copy.researchIntro}</p></div></div>
          <div className="research-list">
            {researchTracks.map((track) => <article className="research-item" key={track.number}>
              <span className="item-number">{track.number}</span>
              <div className="research-item-body">
                <h3>{localize(track.title, language)}</h3>
                <p>{localize(track.description, language)}</p>
                <ul>{localizeList(track.methods, language).map((method) => <li key={method}>{method}</li>)}</ul>
              <ResearchGallery track={track} language={language} figureLabel={copy.figureLabel} figureSource={copy.figureSource} />
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="content-section paper-section" id="publications" aria-labelledby="publications-title">
        <div className="container">
          <div className="section-heading"><span className="section-number">02</span><div><h2 id="publications-title">{copy.publicationsTitle}</h2><p>{copy.publicationsIntro} <a href={scholarUrl} target="_blank" rel="noreferrer">Google Scholar ↗</a></p></div></div>
          <div className="filter-row" role="tablist" aria-label={language === "zh" ? "论文筛选" : "Publication filters"}>
            {(["all", "vision", "bridge"] as Filter[]).map((option) => {
              const label = option === "all" ? copy.all : option === "vision" ? copy.vision : copy.bridge;
              return <button type="button" role="tab" aria-selected={filter === option} className={filter === option ? "selected" : ""} onClick={() => setFilter(option)} key={option}>{label}</button>;
            })}
            <span>{filteredPublications.length} / {publications.length}</span>
          </div>
          <div className="publication-list">
            {filteredPublications.map((paper) => <article className="publication-item" key={paper.title}>
              <span className="publication-year">{paper.year}</span>
              <div><h3>{paper.title}</h3><p>{paper.authors}</p><span className="publication-citation">{copy.citations} {paper.citationCount ?? "—"}</span></div>
              <span className="publication-venue">{paper.venue}</span>
              <a href={paper.url} target="_blank" rel="noreferrer" aria-label={`${copy.source}: ${paper.title}`}>{paper.doi ? "DOI" : "↗"}</a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="content-section" id="education" aria-labelledby="education-title">
        <div className="container split-section">
          <div className="section-heading compact-heading"><span className="section-number">03</span><div><h2 id="education-title">{copy.educationTitle}</h2></div></div>
          <div className="education-list">
            {education.map((item) => <article className="education-item" key={item.period}><span>{item.period}</span><div><h3>{localize(item.institution, language)}</h3><p>{localize(item.degree, language)}</p>{item.current && <em>{copy.current}</em>}</div></article>)}
          </div>
        </div>
      </section>

      <section className="content-section honors-section" id="honors" aria-labelledby="honors-title">
        <div className="container">
          <div className="section-heading"><span className="section-number">04</span><div><h2 id="honors-title">{copy.honorsTitle}</h2></div></div>
          <div className="honors-list">
            {awards.map((award, index) => <article className="honor-item" key={`${award.year}-${award.zh}`}><span>{award.year}</span><strong>{String(index + 1).padStart(2, "0")}</strong><div><h3>{language === "zh" ? award.zh : award.en}</h3><p>{language === "zh" ? award.orgZh : award.orgEn}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="container contact-grid">
          <div><span className="section-number">05</span><h2 id="contact-title">{copy.contactTitle}</h2><p>{copy.contactIntro}</p></div>
          <div className="contact-list">
            <a href="mailto:hjl23@mails.tsinghua.edu.cn"><span>{copy.email}</span><strong>hjl23@mails.tsinghua.edu.cn</strong><b>↗</b></a>
            <a href="tel:+8619909676556"><span>{copy.phone}</span><strong>19909676556</strong><b>↗</b></a>
            <a href={profileUrl} target="_blank" rel="noreferrer"><span>{copy.profile}</span><strong>ResearchGate / Jiale Hou</strong><b>↗</b></a>
          </div>
        </div>
      </section>

      <footer className="site-footer"><div className="container"><span>© 2026 侯佳乐 / Jiale Hou</span><span>Academic homepage · Civil engineering</span></div></footer>
    </main>
  );
}

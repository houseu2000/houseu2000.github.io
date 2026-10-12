"use client";
/* eslint-disable @next/next/no-img-element -- Native images work without an image optimization server on GitHub Pages. */
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import {
  publications,
  scholarUrl,
  profileUrl,
  type Language,
} from "./site-data";
import { researchProjects } from "./research-data";
import {
  activities,
  experiences,
  introduction,
  publicationSummary,
  resumeEducation,
  resumeHonors,
  resumeSections,
} from "./resume-data";
import {
  BulletList,
  LanguageSwitch,
  RichText,
  useLanguage,
} from "./resume-components";
const selectedPapers = [publications[16], publications[1], publications[2]];
function Section({
  id,
  language,
  children,
  extra,
}: {
  id: string;
  language: Language;
  children: ReactNode;
  extra?: ReactNode;
}) {
  const section = resumeSections.find((item) => item.id === id)!;
  return (
    <section className="resume-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <div>
          <span className="eyebrow">{section.en}</span>
          <h2 id={`${id}-title`}>{section[language]}</h2>
        </div>
        {extra}
      </div>
      {children}
    </section>
  );
}
export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const zh = language === "zh";
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    if (!mobileNavOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileNavOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [mobileNavOpen]);
  function navigate(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setMobileNavOpen(false);
    window.history.pushState({}, "", `#${id}`);
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
  }
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {zh ? "跳转到主要内容" : "Skip to main content"}
      </a>
      <header className="site-header">
        <a className="mobile-wordmark" href="#top">
          侯佳乐<span>Jiale Hou</span>
        </a>
        <nav
          className="desktop-nav"
          aria-label={zh ? "主导航" : "Primary navigation"}
        >
          {resumeSections.slice(1, 6).map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section[language]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch language={language} onClick={toggleLanguage} />
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={mobileNavOpen}
            aria-label={zh ? "页面导航" : "Page navigation"}
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? "×" : "☰"}
          </button>
        </div>
        <nav
          className="mobile-navigation"
          id="mobile-navigation"
          hidden={!mobileNavOpen}
          aria-label={zh ? "页面导航" : "Page navigation"}
        >
          {resumeSections.map((section) => (
            <a
              href={`#${section.id}`}
              key={section.id}
              onClick={(event) => navigate(event, section.id)}
            >
              {section[language]}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </header>
      <aside
        className="profile-rail"
        id="top"
        aria-label={zh ? "个人信息" : "Profile information"}
      >
        <div className="profile-identity">
          <img
            className="profile-photo"
            src="/profile.jpg"
            alt={zh ? "侯佳乐个人照片" : "Portrait of Jiale Hou"}
            width="112"
            height="140"
          />
          <div>
            <h1>侯佳乐</h1>
            <p className="english-name">Jiale Hou</p>
          </div>
        </div>
        <p className="profile-role">
          {zh
            ? "清华大学 · 土木工程"
            : "Tsinghua University · Civil Engineering"}
          <br />
          {zh ? "工学博士研究生" : "Ph.D. candidate"}
        </p>
        <p className="graduation">
          <span aria-hidden="true" />
          {zh ? "预计 2027 年 6 月毕业" : "Graduating in June 2027"}
        </p>
        <div className="rail-block">
          <span className="eyebrow">
            {zh ? "研究兴趣" : "Research interests"}
          </span>
          <p>
            {zh ? "计算机视觉 / 视觉智能体" : "Computer vision / Visual agents"}
            <br />
            {zh
              ? "基础设施感知 / Agent 工程"
              : "Infrastructure sensing / Agent engineering"}
          </p>
        </div>
        <div className="rail-block rail-contact">
          <span className="eyebrow">{zh ? "联系方式" : "Contact"}</span>
          <a href="mailto:hjl23@mails.tsinghua.edu.cn">
            hjl23@mails.tsinghua.edu.cn
          </a>
          <a href="tel:+8619909676556">+86 19909676556</a>
          <span className="muted">
            {zh ? "微信同号" : "WeChat: same number"}
          </span>
        </div>
        <div className="profile-links">
          <a href={scholarUrl} target="_blank" rel="noreferrer">
            Google Scholar ↗
          </a>
          <a href={profileUrl} target="_blank" rel="noreferrer">
            ResearchGate ↗
          </a>
          <a
            href="https://github.com/houseu2000"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
        <a className="rail-back-top" href="#top">
          {zh ? "回到顶部" : "Back to top"} ↑
        </a>
      </aside>
      <main className="resume-main" id="main-content">
        <section
          className="intro-section"
          id="about"
          aria-labelledby="about-title"
        >
          <span className="eyebrow">Jiale Hou / Research</span>
          <h2 id="about-title">{zh ? "个人简介" : "Profile"}</h2>
          <p className="intro-copy">
            <RichText text={introduction[language]} />
          </p>
          <p className="intro-publications">{publicationSummary[language]}</p>
          <div className="intro-tags">
            <span>Computer Vision</span>
            <span>Visual Agents</span>
            <span>Infrastructure</span>
          </div>
        </section>
        <Section id="education" language={language}>
          <div className="education-list">
            {resumeEducation.map((item, index) => (
              <article className="education-item" key={item.school.en}>
                <span className="timeline-dot" aria-hidden="true" />
                <div className="entry-heading">
                  <h3>{item.school[language]}</h3>
                  <span className="entry-date">{item.period[language]}</span>
                </div>
                <p className="education-degree">
                  {item.degree[language]}
                  {index === 0 && (
                    <span className="small-badge">
                      {zh ? "在读" : "Current"}
                    </span>
                  )}
                </p>
                <p className="entry-note">{item.note[language]}</p>
              </article>
            ))}
          </div>
        </Section>
        <Section
          id="research"
          language={language}
          extra={
            <span className="section-aside">
              {zh ? "研究项目 / 03" : "03 research projects"}
            </span>
          }
        >
          <div className="research-intent">
            <h3>{zh ? "看见灾害中的结构、物体与人" : "Understanding structures, objects and people in disasters"}</h3>
            <p>{zh
              ? "从建筑位移、室内构件运动到人员行为，三个方向共同回答：灾害发生时，它们经历了什么？"
              : "From building displacement and indoor object motion to human behavior, three directions ask what happens during a disaster."}</p>
          </div>
          <div className="research-list">
            {researchProjects.map((project, index) => (
              <article className="research-card" key={project.slug}>
                <div className="research-meta">
                  <span>
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {project.showcase.subject[language]}
                  </span>
                  <span>{project.period[language]}</span>
                </div>
                <h3>
                  <a
                    className="research-title-link"
                    href={`/research/${project.slug}/?lang=${language}`}
                  >
                    {project.title[language]}
                    <span aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p className="research-summary">
                  {project.showcase.summary[language]}
                </p>
                <div className="research-gallery" role="group" aria-label={zh ? "研究图片预览" : "Research image previews"}>
                  {project.showcase.images.map((figure) => (
                    <a
                      className="research-preview"
                      key={figure.src}
                      href={`/research/${project.slug}/?lang=${language}`}
                      aria-label={`${project.title[language]} · ${figure.label[language]}`}
                    >
                      <div className="research-preview-image">
                        <img src={figure.src} alt={figure.alt[language]} width={figure.width} height={figure.height} loading="lazy" />
                      </div>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>
        <Section id="experience" language={language}>
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-item" key={item.title.en}>
                <div className="entry-heading">
                  <h3>{item.title[language]}</h3>
                  <span className="entry-date">
                    {item.period}
                    {item.period.endsWith("–")
                      ? zh
                        ? " 至今"
                        : " Present"
                      : ""}
                  </span>
                </div>
                <p className="experience-role">{item.role[language]}</p>
                <BulletList bullets={item.bullets} language={language} />
              </article>
            ))}
          </div>
        </Section>
        <Section
          id="publications"
          language={language}
          extra={
            <a
              className="inline-link"
              href={scholarUrl}
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar ↗
            </a>
          }
        >
          <p className="section-intro">
            {zh
              ? "第一作者或导师一作本人二作 SCI 期刊论文 7 篇，以下选列 3 篇代表作。"
              : "Three selected papers from seven SCI publications as first author or second author with my advisor as first author."}
          </p>
          <ol className="publication-list">
            {selectedPapers.map((paper) => (
              <li key={paper.title}>
                <h3>
                  <a href={paper.url} target="_blank" rel="noreferrer">
                    {paper.title}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                </h3>
                <p>
                  {paper.authors
                    .split(/(Jiale Hou)/g)
                    .map((part, index) =>
                      part === "Jiale Hou" ? (
                        <strong key={index}>{part}</strong>
                      ) : (
                        part
                      ),
                    )}
                </p>
                <p className="publication-venue">
                  {paper.venue}
                  <span> · {paper.year}</span>
                </p>
              </li>
            ))}
          </ol>
          <details className="more-publications">
            <summary>
              {zh ? "查看完整论文列表" : "View all publications"}
              <span>{publications.length}</span>
            </summary>
            <ol className="publication-list">
              {publications.map((paper) => (
                <li key={paper.title}>
                  <h3>
                    <a href={paper.url} target="_blank" rel="noreferrer">
                      {paper.title} ↗
                    </a>
                  </h3>
                  <p>{paper.authors}</p>
                  <p className="publication-venue">
                    {paper.venue} · {paper.year}
                  </p>
                </li>
              ))}
            </ol>
          </details>
        </Section>
        <Section id="honors" language={language}>
          <div className="honors-list">
            {resumeHonors.map((honor) => (
              <article className="honor-item" key={honor.title.en}>
                <span className="entry-date">{honor.year}</span>
                <div>
                  <h3>{honor.title[language]}</h3>
                  <p>{honor.org[language]}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
        <Section id="activities" language={language}>
          <div className="activities-list">
            {activities.map((activity) => (
              <article key={activity.label!.en}>
                <h3>{activity.label![language]}</h3>
                <p>{activity.text[language]}</p>
                {activity.href && (
                  <a
                    className="inline-link"
                    href={activity.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Zen ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </Section>
        <footer className="site-footer">
          <span>© 2026 侯佳乐 · Jiale Hou</span>
          <a href="mailto:hjl23@mails.tsinghua.edu.cn">
            {zh ? "联系我" : "Get in touch"} ↗
          </a>
        </footer>
      </main>
    </div>
  );
}

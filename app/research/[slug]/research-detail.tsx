"use client";
/* eslint-disable @next/next/no-img-element -- Research media is served directly from static GitHub Pages assets. */

import {
  researchProjects,
  type ResearchProject,
  type ResearchVideo,
} from "../../research-data";
import { LanguageSwitch, RichText, useLanguage } from "../../resume-components";
import { navigateToAnchor } from "../../anchor-navigation";

function VideoFigure({
  video,
  language,
}: {
  video: ResearchVideo;
  language: "zh" | "en";
}) {
  const zh = language === "zh";
  return (
    <figure className="research-video">
      {video.title && <h3>{video.title[language]}</h3>}
      <video
        width={video.width}
        height={video.height}
        style={
          video.width && video.height
            ? { aspectRatio: `${video.width} / ${video.height}` }
            : undefined
        }
        controls
        muted
        preload="metadata"
        playsInline
        poster={video.poster}
        aria-label={(video.title ?? video.caption)[language]}
      >
        <source src={video.src} type="video/mp4" />
        {video.captionsSrc && (
          <track
            kind="captions"
            src={video.captionsSrc}
            srcLang={video.captionsLanguage ?? "zh"}
            label={zh ? "字幕" : "Captions"}
          />
        )}
        <a href={video.src}>{zh ? "打开视频" : "Open video"}</a>
      </video>
      <figcaption>{video.caption[language]}</figcaption>
      <a
        className="inline-link video-open"
        href={video.src}
        target="_blank"
        rel="noreferrer"
      >
        {zh ? "单独打开视频" : "Open video separately"} ↗
      </a>
    </figure>
  );
}

export default function ResearchDetail({
  project,
}: {
  project: ResearchProject;
}) {
  const { language, toggleLanguage } = useLanguage();
  const zh = language === "zh";
  const chapters = project.details.filter((block) => block.type === "chapter");
  return (
    <div className="detail-shell">
      <a
        className="skip-link"
        href="#research-content"
        onClick={(event) => navigateToAnchor(event, "research-content", true)}
      >
        {zh ? "跳转到研究内容" : "Skip to research content"}
      </a>
      <nav
        className="detail-nav"
        aria-label={zh ? "研究页面导航" : "Research navigation"}
      >
        <a href={`/?lang=${language}#research`}>
          ← {zh ? "返回简历" : "Back to CV"}
        </a>
        <LanguageSwitch language={language} onClick={toggleLanguage} />
      </nav>
      <main id="research-content" tabIndex={-1}>
        <header className="detail-header">
          <h1>{project.title[language]}</h1>
          <span className="entry-date">{project.period[language]}</span>
          <p>
            <RichText
              text={(project.overview ?? project.bullets[0].text)[language]}
            />
          </p>
        </header>
        {chapters.length > 0 && (
          <nav
            className="research-toc"
            aria-label={zh ? "本页目录" : "On this page"}
          >
            {chapters.map((chapter) => (
              <a
                href={`#${chapter.id}`}
                key={chapter.id}
                onClick={(event) => navigateToAnchor(event, chapter.id)}
              >
                {chapter.label[language]}
              </a>
            ))}
          </nav>
        )}
        {project.publication && (
          <aside
            className="research-publication"
            aria-label={zh ? "论文信息" : "Publication information"}
          >
            <div className="publication-status">
              <span>{project.publication.status[language]}</span>
              <span>{project.publication.venue}</span>
            </div>
            <p>{project.publication.title}</p>
            {project.publication.href && (
              <a
                className="inline-link"
                href={project.publication.href}
                target="_blank"
                rel="noreferrer"
              >
                {zh ? "阅读原论文" : "Read the paper"} ↗
              </a>
            )}
          </aside>
        )}
        {project.details.length === 0 ? (
          <section className="detail-empty" aria-labelledby="pending-title">
            <span className="empty-mark" aria-hidden="true">
              ↗
            </span>
            <h2 id="pending-title">
              {zh ? "研究详情，待补充" : "Research details coming soon"}
            </h2>
            <p>
              {zh
                ? "后续将在这里分享研究方法、实验结果与相关资料。"
                : "Methods, experimental results and supporting materials will be shared here."}
            </p>
          </section>
        ) : (
          <div className="detail-content">
            {project.details.map((block, index) => {
              switch (block.type) {
                case "chapter":
                  return (
                    <section
                      className="research-chapter"
                      id={block.id}
                      key={block.id}
                    >
                      <h2>{block.heading[language]}</h2>
                      <p>
                        <RichText text={block.body[language]} />
                      </p>
                      {block.publication && (
                        <div className="chapter-publication">
                          <div className="publication-status">
                            <span>{block.publication.status[language]}</span>
                            <span>{block.publication.venue}</span>
                          </div>
                          <p>{block.publication.title}</p>
                          {block.publication.href && (
                            <a
                              className="inline-link"
                              href={block.publication.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {zh ? "阅读原论文" : "Read the paper"} ↗
                            </a>
                          )}
                        </div>
                      )}
                    </section>
                  );
                case "steps":
                  return (
                    <section className="detail-block" key={index}>
                      <h2>{block.heading[language]}</h2>
                      <ol className="research-steps">
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <span className="step-number" aria-hidden="true">
                              {String(itemIndex + 1).padStart(2, "0")}
                            </span>
                            <h3>{item.title[language]}</h3>
                            <p>
                              <RichText text={item.body[language]} />
                            </p>
                          </li>
                        ))}
                      </ol>
                    </section>
                  );
                case "table":
                  return (
                    <details className="detail-block research-data" key={index}>
                      <summary>
                        {block.heading[language]}
                        <span>{zh ? "展开数据" : "View data"}</span>
                      </summary>
                      <div
                        className="research-table-wrap"
                        role="region"
                        aria-label={block.heading[language]}
                        tabIndex={0}
                      >
                        <table className="research-table">
                          <caption>{block.heading[language]}</caption>
                          <thead>
                            <tr>
                              {block.columns.map((column, columnIndex) => (
                                <th key={columnIndex} scope="col">
                                  {column[language]}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                {row.map((cell, cellIndex) =>
                                  cellIndex === 0 ? (
                                    <th scope="row" key={cellIndex}>
                                      {cell}
                                    </th>
                                  ) : (
                                    <td key={cellIndex}>{cell}</td>
                                  ),
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {block.note && (
                        <p className="research-table-note">
                          {block.note[language]}
                        </p>
                      )}
                    </details>
                  );
                case "note":
                  return (
                    <aside className="detail-block research-note" key={index}>
                      <h2>{block.heading[language]}</h2>
                      <p>
                        <RichText text={block.body[language]} />
                      </p>
                    </aside>
                  );
                case "text":
                  return (
                    <section className="detail-block" key={index}>
                      {block.heading && <h2>{block.heading[language]}</h2>}
                      <p>
                        <RichText text={block.body[language]} />
                      </p>
                    </section>
                  );
                case "image":
                  return (
                    <figure
                      className={`detail-block research-figure${block.width && block.height && block.height > block.width ? " research-figure-portrait" : ""}`}
                      key={index}
                    >
                      <a
                        className="research-image-link"
                        href={block.src}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${zh ? "查看大图" : "View full-size figure"}: ${block.alt[language]}`}
                      >
                        <img
                          src={block.src}
                          alt={block.alt[language]}
                          loading="lazy"
                          width={block.width}
                          height={block.height}
                        />
                        <span className="image-expand">
                          {zh ? "查看大图" : "View full size"} ↗
                        </span>
                      </a>
                      {block.caption && (
                        <figcaption>{block.caption[language]}</figcaption>
                      )}
                    </figure>
                  );
                case "video":
                  return (
                    <VideoFigure
                      key={index}
                      video={block}
                      language={language}
                    />
                  );
                case "videos":
                  return (
                    <div className="research-video-grid" key={index}>
                      {block.items.map((video) => (
                        <VideoFigure
                          key={video.src}
                          video={video}
                          language={language}
                        />
                      ))}
                    </div>
                  );
                case "link":
                  return (
                    <p className="detail-block" key={index}>
                      <a
                        className="inline-link"
                        href={block.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {block.label[language]} ↗
                      </a>
                    </p>
                  );
              }
            })}
          </div>
        )}
      </main>
      <nav
        className="related-research"
        aria-label={zh ? "其他研究项目" : "Other research projects"}
      >
        <h2>{zh ? "其他研究项目" : "Other research projects"}</h2>
        {researchProjects
          .filter((item) => item.slug !== project.slug)
          .map((item) => (
            <a
              href={`/research/${item.slug}/?lang=${language}`}
              key={item.slug}
            >
              {item.title[language]}
              <span aria-hidden="true">→</span>
            </a>
          ))}
      </nav>
      <footer className="site-footer">
        <span>侯佳乐 · Jiale Hou</span>
        <a href={`/?lang=${language}`}>{zh ? "个人主页" : "Home"} ↗</a>
      </footer>
    </div>
  );
}

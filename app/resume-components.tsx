"use client";
import { useEffect, useSyncExternalStore } from "react";
import type { Language } from "./site-data";
import type { ResumeBullet } from "./research-data";
const languageKey = "academic-language-v2";
function getLanguage(): Language {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (query === "en" || query === "zh") return query;
  try {
    return window.localStorage.getItem(languageKey) === "en" ? "en" : "zh";
  } catch {
    return "zh";
  }
}
function subscribe(callback: () => void) {
  const events = ["storage", "popstate", "academic-language-change"];
  events.forEach((event) => window.addEventListener(event, callback));
  return () =>
    events.forEach((event) => window.removeEventListener(event, callback));
}
export function useLanguage() {
  const language = useSyncExternalStore(
    subscribe,
    getLanguage,
    () => "zh" as const,
  );
  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    try {
      window.localStorage.setItem(languageKey, language);
    } catch {
      /* Storage is optional. */
    }
  }, [language]);
  function toggleLanguage() {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language === "zh" ? "en" : "zh");
    window.history.replaceState({}, "", url);
    window.dispatchEvent(new Event("academic-language-change"));
  }
  return { language, toggleLanguage };
}
// Only bold emphasis is supported; content remains escaped React text.
export function RichText({ text }: { text: string }) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, index) =>
      part.startsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );
}
export function BulletList({
  bullets,
  language,
}: {
  bullets: ResumeBullet[];
  language: Language;
}) {
  return (
    <ul className="resume-bullets">
      {bullets.map((bullet, index) => (
        <li key={index}>
          {bullet.label && (
            <strong>
              {bullet.label[language]}
              {language === "zh" ? "：" : ": "}
            </strong>
          )}
          <RichText text={bullet.text[language]} />
          {bullet.href && (
            <>
              {" "}
              <a
                className="inline-link"
                href={bullet.href}
                target="_blank"
                rel="noreferrer"
              >
                {language === "zh" ? "访问项目" : "Visit project"} ↗
              </a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
export function LanguageSwitch({
  language,
  onClick,
}: {
  language: Language;
  onClick: () => void;
}) {
  return (
    <button
      className="language-switch"
      type="button"
      onClick={onClick}
      aria-label={language === "zh" ? "Switch to English" : "切换到中文"}
    >
      {language === "zh" ? "EN" : "中文"}
    </button>
  );
}

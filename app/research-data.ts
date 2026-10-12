import projects from "./research-projects.json";
import type { Localized } from "./site-data";

export type ResumeBullet = {
  label?: Localized;
  text: Localized;
  href?: string;
};

type ResearchPublication = {
  title: string;
  venue: string;
  status: Localized;
  href?: string;
};

export type ResearchVideo = {
  src: string;
  width?: number;
  height?: number;
  caption: Localized;
  poster?: string;
  title?: Localized;
  captionsSrc?: string;
  captionsLanguage?: string;
};

// Add approved content to a project's details array; empty arrays render the placeholder.
export type ResearchBlock =
  | {
      type: "chapter";
      id: string;
      heading: Localized;
      label: Localized;
      body: Localized;
      publication?: ResearchPublication;
    }
  | { type: "text"; heading?: Localized; body: Localized }
  | {
      type: "steps";
      heading: Localized;
      items: { title: Localized; body: Localized }[];
    }
  | {
      type: "table";
      heading: Localized;
      columns: Localized[];
      rows: string[][];
      note?: Localized;
    }
  | { type: "note"; heading: Localized; body: Localized }
  | {
      type: "image";
      src: string;
      alt: Localized;
      caption?: Localized;
      width?: number;
      height?: number;
    }
  | ({ type: "video" } & ResearchVideo)
  | { type: "videos"; items: ResearchVideo[] }
  | { type: "link"; href: string; label: Localized };

export type ResearchProject = {
  slug: string;
  title: Localized;
  area: Localized;
  period: Localized;
  showcase: {
    subject: Localized;
    summary: Localized;
    images: {
      src: string;
      alt: Localized;
      label: Localized;
      width: number;
      height: number;
    }[];
  };
  bullets: ResumeBullet[];
  overview?: Localized;
  publication?: ResearchPublication;
  details: ResearchBlock[];
};

export const researchProjects = projects as ResearchProject[];

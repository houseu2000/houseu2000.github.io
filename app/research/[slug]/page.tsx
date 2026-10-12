import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { researchProjects } from "../../research-data";
import ResearchDetail from "./research-detail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return researchProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = researchProjects.find((item) => item.slug === slug);
  if (!project) return { title: "研究项目未找到 | 侯佳乐" };
  return {
    title: `${project.title.zh} | 侯佳乐`,
    description: (project.overview ?? project.bullets[0].text).zh.replaceAll(
      "**",
      "",
    ),
    alternates: { canonical: `/research/${project.slug}/` },
    openGraph: {
      title: `${project.title.zh} | 侯佳乐`,
      description: project.bullets[0].text.zh,
      url: `/research/${project.slug}/`,
    },
  };
}

export default async function ResearchPage({ params }: Props) {
  const { slug } = await params;
  const project = researchProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <ResearchDetail project={project} />;
}

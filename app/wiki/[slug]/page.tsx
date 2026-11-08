import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { articles, getArticle } from "@/lib/articles";
import HistoryContent from "@/content/wiki/history.mdx";
import OriginsContent from "@/content/wiki/origins.mdx";
import PappulavaripalemContent from "@/content/wiki/pappulavaripalem.mdx";
import FamilyTreeContent from "@/content/wiki/family-tree.mdx";
import PersonalitiesContent from "@/content/wiki/personalities.mdx";
import AchievementsContent from "@/content/wiki/achievements.mdx";
import ReferencesContent from "@/content/wiki/references.mdx";

function ArticleContent({ slug }: { slug: string }) {
  switch (slug) {
    case "history":
      return <HistoryContent />;
    case "origins":
      return <OriginsContent />;
    case "pappulavaripalem":
      return <PappulavaripalemContent />;
    case "family-tree":
      return <FamilyTreeContent />;
    case "personalities":
      return <PersonalitiesContent />;
    case "achievements":
      return <AchievementsContent />;
    case "references":
      return <ReferencesContent />;
    default:
      return null;
  }
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
  };
}

export default function WikiArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="page-shell article-page" aria-busy="true">
          <p role="status">Loading article…</p>
        </div>
      }
    >
      <ArticlePageContent params={params} />
    </Suspense>
  );
}

async function ArticlePageContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = article.related
    .map((relatedId) => getArticle(relatedId))
    .filter((relatedArticle) => relatedArticle !== undefined);
  const firstSource = article.sources[0];

  return (
    <div className="page-shell article-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-separator" aria-hidden="true">
          /
        </span>
        <Link href="/wiki/references">Knowledge collection</Link>
        <span className="breadcrumb-separator" aria-hidden="true">
          /
        </span>
        <span aria-current="page">{article.title}</span>
      </nav>

      <header className="article-heading">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          {article.category}
        </div>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
      </header>

      <div className="article-layout">
        <nav className="article-toc" aria-label="Table of contents">
          <h2 className="aside-label">On this page</h2>
          {article.sections.map((section) => (
            <a className="toc-link" href={`#${section.id}`} key={section.id}>
              {section.title}
            </a>
          ))}
        </nav>

        <div>
          <div className="article-prose">
            <ArticleContent slug={slug} />
          </div>

          <section className="article-sources" id="sources">
            <h2>Sources</h2>
            <ol>
              {article.sources.map((source) => (
                <li key={source.id}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                  . {source.accessedNote}
                </li>
              ))}
            </ol>
          </section>

          <section className="related-section" aria-labelledby="related-title">
            <h2 id="related-title">Related articles</h2>
            <div className="related-links">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  className="related-link"
                  href={`/wiki/${relatedArticle.id}`}
                  key={relatedArticle.id}
                >
                  {relatedArticle.title} <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="article-infobox">
          <div className="infobox-title">At a glance</div>
          <div className="infobox-content">
            <div className="infobox-category">{article.infobox.label}</div>
            <div className="infobox-value">{article.infobox.value}</div>
            <p className="infobox-note">{article.infobox.note}</p>
            {firstSource && (
              <div className="infobox-source">
                Source:{" "}
                <a href={firstSource.url} target="_blank" rel="noreferrer">
                  [{firstSource.id}]
                </a>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

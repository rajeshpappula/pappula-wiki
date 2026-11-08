import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "A name. A place. A community.",
  description:
    "Explore the Pappula community and its shared connection to Pappulavaripalem, with source-linked articles and a careful record of what is not yet documented.",
};

export default function Home() {
  return (
    <div className="page-shell home-page">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            A community, connected
          </div>
          <h1 id="home-title">
            A name. A place.
            <br />
            <em>Many journeys.</em>
          </h1>
          <p className="hero-description">
            Pappula is a shared thread rooted in Pappulavaripalem and carried
            by people who have made homes around the world. Begin with the
            place, then explore the stories the sources can tell.
            <a href="https://www.pappula.com/" aria-label="Source: Pappula community website">
              {" "}
              [1]
            </a>
          </p>
          <div className="hero-actions">
            <Link className="button-primary" href="/wiki/history">
              Explore the history <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" href="/wiki/pappulavaripalem">
              Discover the village <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Decorative heritage illustration">
          <Image
            src="/heritage-motif.svg"
            alt="Decorative botanical illustration, not a historical photograph"
            width={320}
            height={320}
            priority
          />
          <span className="hero-art-label">A shared connection</span>
        </div>
      </section>

      <section className="home-intro" aria-labelledby="intro-title">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Welcome to Pappula Wiki
          </div>
          <h2 className="section-heading" id="intro-title">
            One name, many journeys. A connection that travels.
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            The Pappula community website describes Pappulavaripalem in Andhra
            Pradesh as the place where the community&apos;s roots run deep. It
            also speaks of people from the village settling across the world.
            <a href="https://www.pappula.com/" aria-label="Source: Pappula community website">
              {" "}
              [1]
            </a>
          </p>
          <p>
            This wiki is a starting point for that shared story. It separates
            what the published source says from what remains undocumented, so
            that names, dates, and family relationships are never guessed.
          </p>
          <div className="source-note">
            <strong>Source note.</strong> The available primary source is a
            community introduction, not a detailed historical archive. Each
            article links back to it and identifies where evidence is limited.
          </div>
        </div>
      </section>

      <section aria-labelledby="articles-title">
        <div className="collection-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              The knowledge collection
            </div>
            <h2 className="section-heading" id="articles-title">
              Explore the articles
            </h2>
          </div>
          <p>{articles.length} source-led articles</p>
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <Link
              className="article-card"
              href={`/wiki/${article.id}`}
              key={article.id}
            >
              <div className="card-topline">
                <span className="card-category">{article.category}</span>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <aside className="editorial-note">
        <span className="editorial-icon" aria-hidden="true">
          “
        </span>
        <div>
          <strong>A living record, built with care</strong>
          <p>
            Family histories deserve accuracy. Every historical claim here
            points to a source, and gaps are left open until they can be
            responsibly filled.
          </p>
        </div>
        <Link className="text-link" href="/wiki/references">
          Our sources <span aria-hidden="true">→</span>
        </Link>
      </aside>
    </div>
  );
}

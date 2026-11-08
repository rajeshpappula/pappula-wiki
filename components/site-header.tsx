import Link from "next/link";
import { articles } from "@/lib/articles";
import { SearchBox } from "@/components/search-box";

const navigation = [
  { label: "History", id: "history" },
  { label: "Origins", id: "origins" },
  { label: "Pappulavaripalem", id: "pappulavaripalem" },
  { label: "Family Tree", id: "family-tree" },
  { label: "Personalities", id: "personalities" },
  { label: "Achievements", id: "achievements" },
  { label: "References", id: "references" },
];

export function SiteHeader() {
  const searchItems = articles.map(({ id, title, summary, searchTerms }) => ({
    id,
    title,
    summary,
    searchTerms,
  }));

  return (
    <header className="site-header">
      <div className="header-main">
        <Link className="brand" href="/" aria-label="Pappula Wiki home">
          <span className="brand-mark" aria-hidden="true">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20.25V11.5m0 0C12 7.7 14.45 4.65 19 3.75c.4 4.75-1.8 7.75-7 7.75Zm0 3.5C12 11.6 9.55 8.55 5 7.65c-.4 4.75 1.8 7.75 7 7.75Z"
                stroke="currentColor"
                strokeWidth="1.45"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            <span className="brand-title">Pappula Wiki</span>
            <span className="brand-kicker">A COMMUNITY ARCHIVE</span>
          </span>
        </Link>
        <SearchBox items={searchItems} />
      </div>
      <nav className="primary-nav" aria-label="Main navigation">
        <div className="primary-nav-inner">
          {navigation.map((item) => (
            <Link className="nav-link" href={`/wiki/${item.id}`} key={item.id}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

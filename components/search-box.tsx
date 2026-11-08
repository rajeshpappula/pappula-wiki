"use client";

import Link from "next/link";
import { useState } from "react";

type SearchItem = {
  id: string;
  title: string;
  summary: string;
  searchTerms: string[];
};

export function SearchBox({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const results = normalizedQuery
    ? items
        .filter((item) =>
          [item.title, item.summary, ...item.searchTerms]
            .join(" ")
            .toLocaleLowerCase()
            .includes(normalizedQuery),
        )
        .slice(0, 5)
    : [];

  return (
    <div className="search-wrap">
      <label className="search-field">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="10.8"
            cy="10.8"
            r="6.8"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="m16 16 4.2 4.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setQuery("");
          }}
          placeholder="Search the wiki…"
          aria-label="Search Pappula Wiki"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={normalizedQuery.length > 0}
          aria-controls="wiki-search-results"
        />
      </label>
      {normalizedQuery && (
        <div className="search-results" id="wiki-search-results" role="listbox">
          {results.length > 0 ? (
            results.map((item) => (
              <Link
                className="search-result"
                href={`/wiki/${item.id}`}
                key={item.id}
                role="option"
                aria-selected="false"
                onClick={() => setQuery("")}
              >
                <span className="search-result-title">{item.title}</span>
                <span className="search-result-description">
                  {item.summary}
                </span>
              </Link>
            ))
          ) : (
            <div className="search-empty" role="status">
              No articles match “{query.trim()}”.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

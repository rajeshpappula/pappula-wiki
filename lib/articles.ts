export type WikiSection = {
  id: string;
  title: string;
};

export type WikiSource = {
  id: number;
  label: string;
  url: string;
  accessedNote: string;
};

export type WikiArticle = {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  searchTerms: string[];
  sections: WikiSection[];
  related: string[];
  sources: WikiSource[];
  infobox: {
    label: string;
    value: string;
    note: string;
  };
};

const primarySource: WikiSource = {
  id: 1,
  label: "Pappula community website",
  url: "https://www.pappula.com/",
  accessedNote:
    "The site's introductory page is the primary source used for the claims in this collection.",
};

export const articles: WikiArticle[] = [
  {
    id: "history",
    title: "History of the Pappula community",
    category: "Community",
    summary:
      "What the available source says about shared roots and journeys—and what it leaves open.",
    description:
      "A source-limited overview of the Pappula community, its roots in Pappulavaripalem, and the limits of the published historical record.",
    searchTerms: ["past", "heritage", "shared roots", "journeys", "history"],
    sections: [
      { id: "overview", title: "Overview" },
      { id: "documented-context", title: "Documented context" },
      { id: "historical-limits", title: "Historical limits" },
      { id: "sources", title: "Sources" },
    ],
    related: ["origins", "pappulavaripalem", "family-tree"],
    sources: [primarySource],
    infobox: {
      label: "Source scope",
      value: "Community introduction",
      note: "The cited page gives a broad community overview, not a dated chronicle.",
    },
  },
  {
    id: "origins",
    title: "Origins",
    category: "Background",
    summary:
      "The place identified as a shared root, with no unsupported claim about surname origins.",
    description:
      "What the primary source says about the community's roots in Pappulavaripalem, and which questions about the name and its origins remain unanswered.",
    searchTerms: ["name", "surname", "roots", "origin", "etymology", "ancestry"],
    sections: [
      { id: "what-the-source-says", title: "What the source says" },
      { id: "open-questions", title: "Open questions" },
      { id: "sources", title: "Sources" },
    ],
    related: ["history", "pappulavaripalem", "family-tree"],
    sources: [primarySource],
    infobox: {
      label: "Place named by the source",
      value: "Pappulavaripalem",
      note: "The source does not provide an etymology or a dated account of the name.",
    },
  },
  {
    id: "pappulavaripalem",
    title: "Pappulavaripalem",
    category: "Place",
    summary:
      "The village described by the primary source as a place at the heart of shared roots.",
    description:
      "A source-led article about Pappulavaripalem, the Andhra Pradesh village identified by the Pappula community website as central to its shared heritage.",
    searchTerms: [
      "village",
      "Andhra Pradesh",
      "hometown",
      "community",
      "place",
      "Pappula",
    ],
    sections: [
      { id: "the-place-described", title: "The place described" },
      { id: "community-connection", title: "Community connection" },
      { id: "what-is-not-specified", title: "What is not specified" },
      { id: "sources", title: "Sources" },
    ],
    related: ["origins", "history", "personalities"],
    sources: [primarySource],
    infobox: {
      label: "Location named by the source",
      value: "Andhra Pradesh, India",
      note: "The source names the state but does not specify a district or coordinates.",
    },
  },
  {
    id: "family-tree",
    title: "Family tree",
    category: "Genealogy",
    summary:
      "A responsible starting point for genealogy: no individual relationships are assumed.",
    description:
      "The available source does not publish named ancestors or documented family relationships. This article records that limit rather than presenting a speculative family tree.",
    searchTerms: ["genealogy", "ancestors", "relationships", "family", "lineage"],
    sections: [
      {
        id: "documented-relationships",
        title: "Documented relationships",
      },
      { id: "building-a-tree", title: "Building a sourced family tree" },
      { id: "sources", title: "Sources" },
    ],
    related: ["origins", "personalities", "references"],
    sources: [primarySource],
    infobox: {
      label: "Published genealogy",
      value: "Not available in the cited source",
      note: "No individual names or relationships are supplied by the source.",
    },
  },
  {
    id: "personalities",
    title: "Personalities",
    category: "People",
    summary:
      "No named biographies are added without reliable, attributable documentation.",
    description:
      "A note on biographical coverage: the primary source introduces a community but does not identify individual Pappula personalities or provide biographies.",
    searchTerms: ["people", "biographies", "individuals", "contributors"],
    sections: [
      { id: "published-information", title: "Published information" },
      { id: "biography-standard", title: "Standard for biographies" },
      { id: "sources", title: "Sources" },
    ],
    related: ["achievements", "family-tree", "references"],
    sources: [primarySource],
    infobox: {
      label: "Named biographies",
      value: "None in the cited source",
      note: "Names and life details require reliable, attributable sources.",
    },
  },
  {
    id: "achievements",
    title: "Achievements",
    category: "Community",
    summary:
      "A placeholder for well-sourced contributions, not an invented list of accomplishments.",
    description:
      "The primary source expresses an interest in celebrating the community, but does not document individual achievements or name award recipients.",
    searchTerms: ["contributions", "awards", "recognition", "accomplishments"],
    sections: [
      { id: "published-record", title: "Published record" },
      {
        id: "standard-for-inclusion",
        title: "Standard for inclusion",
      },
      { id: "sources", title: "Sources" },
    ],
    related: ["personalities", "history", "references"],
    sources: [primarySource],
    infobox: {
      label: "Documented achievements",
      value: "Not listed in the cited source",
      note: "No awards, dates, or named recipients are stated on the source page.",
    },
  },
  {
    id: "references",
    title: "References and editorial notes",
    category: "Sources",
    summary:
      "The primary source behind this collection and the editorial standard for citing it.",
    description:
      "Sources for Pappula Wiki articles and the editorial approach used to distinguish published information from undocumented details.",
    searchTerms: [
      "citations",
      "references",
      "sources",
      "methodology",
      "editorial",
    ],
    sections: [
      { id: "primary-source", title: "Primary source" },
      { id: "editorial-standard", title: "Editorial standard" },
      { id: "sources", title: "Sources" },
    ],
    related: ["history", "origins", "family-tree"],
    sources: [primarySource],
    infobox: {
      label: "Primary reference",
      value: "Pappula community website",
      note: "Every article identifies the source used and the limits of its claims.",
    },
  },
];

export function getArticle(id: string) {
  return articles.find((article) => article.id === id);
}

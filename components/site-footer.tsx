import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">Pappula Wiki</div>
          <div className="footer-copy">
            A shared name. A shared connection. A record guided by sources.
          </div>
        </div>
        <Link className="footer-link" href="/wiki/references">
          Sources &amp; editorial notes <span aria-hidden="true">→</span>
        </Link>
      </div>
    </footer>
  );
}

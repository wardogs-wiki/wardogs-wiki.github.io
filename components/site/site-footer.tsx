import { ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { routePath } from "@/lib/urls";

export function SiteFooter({ coreLinks, legalLinks }: { coreLinks: InternalLink[]; legalLinks: InternalLink[] }) {
  return (
    <footer className="mt-20 border-t border-border bg-card/45">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="mb-3 text-lg font-black text-foreground">{siteConfig.siteName}</p>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">{siteConfig.description}</p>
          <p className="mt-4 text-xs text-muted-foreground">
            Independent, fan-made and not affiliated with the game developer or platform owner.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-widest text-foreground">Explore</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {coreLinks.map((link) => (
              <li key={link.slug}><Link className="hover:text-primary" href={routePath(link.slug)}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-widest text-foreground">Site</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {legalLinks.map((link) => (
              <li key={link.slug}><Link className="hover:text-primary" href={routePath(link.slug)}>{link.label}</Link></li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-2">
            {siteConfig.contact.email ? (
              <a className="inline-flex items-center gap-2 text-sm font-bold text-primary" href={`mailto:${siteConfig.contact.email}`}>
                <Mail size={16} />
                {siteConfig.contact.email}
              </a>
            ) : null}
            {siteConfig.contact.url ? (
              <a
                className="inline-flex items-center gap-2 text-sm font-bold text-primary"
                href={siteConfig.contact.url}
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Public contact page
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Calculator, ExternalLink, Gamepad2, Map } from "lucide-react";
import Link from "next/link";
import { NativeAdSlot } from "@/components/integrations/native-ad-slot";
import { ResponsiveBannerAdSlot } from "@/components/integrations/responsive-banner-ad-slot";
import { Faq } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { PageSections } from "@/components/site/page-sections";
import { WikiHomePage } from "@/components/site/wiki-home-page";
import { siteConfig } from "@/config/site";
import { siteSkin } from "@/config/skin";
import { homePage } from "@/content/home";
import { visibleCorePages } from "@/content/registry";
import { homeSchemas } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { assetPath, routePath } from "@/lib/urls";

export const metadata = pageMetadata(homePage);

export default function HomePage() {
  if (siteSkin() === "wiki") return <WikiHomePage />;

  return (
    <>
      <JsonLd data={homeSchemas(homePage)} />
      <main>
        <section className="hero-surface relative overflow-hidden border-b border-border">
          <p className="tactical-hero-watermark" aria-hidden="true">
            WARDOGS
          </p>
          <div className="site-container relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="eyebrow">{homePage.hero.eyebrow}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem]">{homePage.hero.heading}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{homePage.hero.lead}</p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">{homePage.hero.supportingText}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {homePage.hero.primaryLink ? (
                  <Link href={routePath(homePage.hero.primaryLink.slug)} className="button-primary">
                    <Map size={18} />{homePage.hero.primaryLink.label}
                  </Link>
                ) : null}
                {homePage.hero.secondaryInternalLink ? (
                  <Link href={routePath(homePage.hero.secondaryInternalLink.slug)} className="button-secondary">
                    <Calculator size={18} />{homePage.hero.secondaryInternalLink.label}
                  </Link>
                ) : null}
                {siteConfig.game.officialUrl && homePage.hero.secondaryLink ? (
                  <a href={siteConfig.game.officialUrl} rel="noopener noreferrer" className="button-secondary">
                    <Gamepad2 size={18} />{homePage.hero.secondaryLink.label}<ExternalLink size={15} />
                  </a>
                ) : null}
              </div>
            </div>
            <aside className="content-card overflow-hidden p-0" aria-label="Game summary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(siteConfig.assets.cover)}
                alt={`${siteConfig.game.name} Steam artwork`}
                className="aspect-[460/215] w-full object-cover"
              />
              <dl className="grid grid-cols-2 gap-3 p-4 text-sm">
                {[
                  ["Game", siteConfig.game.name],
                  ["Platform", siteConfig.game.platform],
                  ["Developer", siteConfig.game.developer],
                  ["Genre", siteConfig.game.genre],
                ].map(([term, value]) => (
                  <div key={term} className="rounded-[calc(var(--radius)*.65)] bg-secondary p-3">
                    <dt className="text-xs text-muted-foreground">{term}</dt>
                    <dd className="mt-1 font-bold text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <div className="site-container"><ResponsiveBannerAdSlot /></div>

        {visibleCorePages.length ? (
          <section className="border-b border-border bg-card/40" aria-label="Quick page links">
            <div className="site-container py-8 sm:py-10">
              <p className="eyebrow">Quick access</p>
              <h2 className="mt-2 text-2xl">Open a WARDOGS guide or tool</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {visibleCorePages.map((page) => (
                  <Link
                    key={page.slug}
                    href={routePath(page.slug)}
                    className="content-card block p-4 transition hover:border-primary/50"
                  >
                    <strong className="block text-sm font-black text-foreground">{page.navLabel}</strong>
                    <span className="mt-1 block text-xs leading-5 text-muted-foreground">{page.hero.heading}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <div className="site-container"><NativeAdSlot /></div>

        <div className="site-container space-y-20 py-14 sm:py-20">
          <PageSections sections={homePage.sections} />
          {homePage.screenshots.length ? (
            <section>
              <p className="eyebrow">Visual reference</p>
              <h2>Example Game Screenshots</h2>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {homePage.screenshots.map((shot) => (
                  <figure key={shot.src} className="content-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={assetPath(shot.src)} alt={shot.alt} className="w-full rounded-[calc(var(--radius)*.7)]" />
                    {shot.caption ? <figcaption className="mt-3 text-sm text-muted-foreground">{shot.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            </section>
          ) : null}
          {homePage.faq.length ? <Faq items={homePage.faq} /> : null}
        </div>
      </main>
    </>
  );
}

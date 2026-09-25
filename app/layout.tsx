import type { CSSProperties, ReactNode } from "react";
import { Barlow } from "next/font/google";
import { Analytics } from "@/components/integrations/analytics";
import { SocialBar } from "@/components/integrations/social-bar";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteConfig } from "@/config/site";
import { themes } from "@/config/themes";
import { enabledLegalPages, globalCorePages } from "@/content/registry";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
  fallback: ["Arial Narrow", "Helvetica Neue", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata = rootMetadata();

const navLinks = globalCorePages.map((page) => ({ label: page.navLabel, slug: page.slug }));
const legalLinks = enabledLegalPages.map((page) => ({ label: page.navLabel, slug: page.slug }));

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const theme = themes[siteConfig.theme.preset] ?? themes["obsidian-red"] ?? themes["midnight-red"] ?? Object.values(themes)[0];
  const headerStyle = siteConfig.theme.headerStyle ?? "solid";
  const componentStyle = siteConfig.theme.componentStyle ?? "rounded";
  const style = Object.fromEntries(
    Object.entries({ ...(theme?.tokens ?? {}), ...(siteConfig.theme.overrides ?? {}) }).map(([key, value]) => [`--${key}`, value]),
  ) as CSSProperties;

  return (
    <html
      lang={siteConfig.language}
      data-theme={theme?.name ?? siteConfig.theme.preset}
      data-skin={siteConfig.theme.skin ?? "portal"}
      data-header-style={headerStyle}
      data-component-style={componentStyle}
      className={barlow.variable}
      style={style}
    >
      <body className="font-sans">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader links={navLinks} />
        <div id="main-content">{children}</div>
        <SiteFooter coreLinks={navLinks} legalLinks={legalLinks} />
        <Analytics />
        <SocialBar />
      </body>
    </html>
  );
}

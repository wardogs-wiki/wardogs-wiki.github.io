import type { SiteConfig, ThemePresetName } from "./types";
import rawSiteConfig from "../content/generated/site.json";

const generated = rawSiteConfig as SiteConfig;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || generated.hosting.basePath || "";
const environmentTheme = process.env.NEXT_PUBLIC_THEME_PRESET as ThemePresetName | undefined;

function parseReadyForLaunch(raw: string | undefined, fallback: boolean) {
  if (raw == null || raw.trim() === "") return fallback;
  return raw.trim().toLowerCase() === "true";
}

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || generated.contact.email;
const contactUrl = process.env.NEXT_PUBLIC_CONTACT_URL?.trim() || generated.contact.url;

export const siteConfig: SiteConfig = {
  ...generated,
  readyForLaunch: parseReadyForLaunch(process.env.NEXT_PUBLIC_READY_FOR_LAUNCH, generated.readyForLaunch),
  theme: { ...generated.theme, preset: environmentTheme || generated.theme.preset },
  hosting: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || generated.hosting.siteUrl,
    basePath,
    customDomain: process.env.NEXT_PUBLIC_CUSTOM_DOMAIN?.trim() || generated.hosting.customDomain,
  },
  contact: {
    email: contactEmail || null,
    url: contactUrl || null,
  },
};

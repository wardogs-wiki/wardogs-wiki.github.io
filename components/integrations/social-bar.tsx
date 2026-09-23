"use client";

import { useEffect } from "react";
import { adsterra } from "@/config/ads";

const SCRIPT_ATTR = "data-adsterra-social-bar";

/**
 * Adsterra Social Bar — a site-wide floating unit initialized exactly once per
 * browser document. The script lives on <body> so client-side navigation never
 * unmounts it, and the attribute guard blocks double injection from hydration,
 * remounts or React Strict Mode effect replays.
 */
export function SocialBar() {
  useEffect(() => {
    if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return;
    const script = document.createElement("script");
    script.src = adsterra.socialBar.invokeSrc;
    script.async = true;
    script.setAttribute(SCRIPT_ATTR, "");
    document.body.appendChild(script);
  }, []);

  return null;
}

"use client";

import { useEffect, useState } from "react";
import { adsterra } from "@/config/ads";
import { BannerAdClient } from "./banner-ad-client";

const MOBILE_QUERY = "(max-width: 767.98px)";

function useIsMobileViewport() {
  // null until the client reports the real viewport: SSR/first paint renders
  // only the reserved frame, so no ad script exists before hydration.
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function ResponsiveBannerAdSlot() {
  const isMobile = useIsMobileViewport();
  const code = isMobile === null ? null : isMobile ? adsterra.mobileBanner : adsterra.desktopBanner;
  const reservedHeight = isMobile ? adsterra.mobileBanner.height : adsterra.desktopBanner.height;

  return (
    <aside className="ad-slot" data-ad-slot="banner" aria-label="Advertisement">
      <p className="ad-slot-label">Advertisement</p>
      <div className="ad-slot-frame" style={{ minHeight: reservedHeight }}>
        {code ? <BannerAdClient code={code} /> : null}
      </div>
    </aside>
  );
}

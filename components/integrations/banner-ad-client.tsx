"use client";

import { useEffect, useRef } from "react";

export type BannerCode = {
  key: string;
  format: string;
  height: number;
  width: number;
  params: Record<string, never>;
  invokeSrc: string;
};

export function BannerAdClient({ code }: { code: BannerCode }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const options = document.createElement("script");
    options.textContent = `atOptions = ${JSON.stringify({
      key: code.key,
      format: code.format,
      height: code.height,
      width: code.width,
      params: code.params,
    })};`;
    host.appendChild(options);

    const invoke = document.createElement("script");
    invoke.src = code.invokeSrc;
    invoke.onerror = () => {
      // Ad blocker or network failure: hide the whole slot, page keeps working.
      host.closest("[data-ad-slot]")?.setAttribute("hidden", "");
    };
    host.appendChild(invoke);

    return () => {
      host.replaceChildren();
    };
  }, [code]);

  return <div ref={hostRef} style={{ maxWidth: "100%", overflow: "hidden" }} />;
}

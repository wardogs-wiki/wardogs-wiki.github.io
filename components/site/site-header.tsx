"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { assetPath, routePath } from "@/lib/urls";

export function SiteHeader({ links }: { links: InternalLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header relative sticky top-0 z-50">
      <div className="site-container flex h-[4.25rem] items-center justify-between gap-3 sm:h-[4.5rem]">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath(siteConfig.assets.logo)} alt="" className="h-8 w-8 rounded-theme" />
          <span className="truncate text-sm font-black tracking-tight text-foreground sm:text-base">
            {siteConfig.shortName}
          </span>
        </Link>

        <button
          type="button"
          className="site-nav-toggle border border-border p-2 text-foreground md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          aria-label="Primary navigation"
          className={`site-nav ${open ? "flex" : "hidden"} absolute inset-x-0 top-[4.25rem] flex-col gap-1 border-b border-border p-4 shadow-theme sm:top-[4.5rem] md:static md:flex md:flex-row md:flex-wrap md:items-center md:justify-end md:gap-0.5 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map((link) => (
            <Link
              key={link.slug}
              href={routePath(link.slug)}
              className="site-nav-link px-2 py-1.5 text-[12px] font-bold leading-tight text-muted-foreground transition hover:bg-secondary hover:text-foreground lg:text-[13px]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

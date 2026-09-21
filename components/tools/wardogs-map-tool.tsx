"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { routePath } from "@/lib/urls";

type MapId = "bakurani" | "ozeti" | "zestafona";

const MAPS: Array<{
  id: MapId;
  label: string;
  focus: string;
  planning: string;
}> = [
  {
    id: "bakurani",
    label: "Bakurani",
    focus: "Large industrial mountain fighting space used in Early Access matches.",
    planning: "Plan Control Zone approaches, FOB pockets, and vehicle lanes before you spend cash.",
  },
  {
    id: "ozeti",
    label: "Ozeti",
    focus: "Current Early Access map name commonly loaded in player matches.",
    planning: "Mark sightlines, logistics routes, and hold ground before your squad commits.",
  },
  {
    id: "zestafona",
    label: "Zestafona",
    focus: "Another Early Access map name players currently rotate through.",
    planning: "Use it to prep flank corridors and support positions for the next zone push.",
  },
];

export function WardogsMapTool() {
  const [mapId, setMapId] = useState<MapId>("bakurani");
  const activeMap = useMemo(() => MAPS.find((map) => map.id === mapId) ?? MAPS[0], [mapId]);

  return (
    <section className="content-card space-y-5" aria-label="WARDOGS map reference">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">Map reference</p>
          <p className="mt-2 text-xl font-black text-foreground sm:text-2xl">Map Reference Board</p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
            Switch between current Early Access map names, review planning focus, then open the mortar calculator when
            your crew already has in-game positions to work from.
          </p>
        </div>
        <Link href={routePath("wardogs-mortar-calculator")} className="button-primary text-sm">
          Open Mortar Calculator
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        {MAPS.map((map) => (
          <button
            key={map.id}
            type="button"
            className={`rounded-theme border px-3 py-2 text-sm font-bold transition ${
              map.id === mapId
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-secondary text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setMapId(map.id)}
          >
            {map.label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[calc(var(--radius)*.7)] border border-border bg-secondary/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Selected map</p>
          <p className="mt-2 text-lg font-black text-foreground">{activeMap.label}</p>
        </div>
        <div className="rounded-[calc(var(--radius)*.7)] border border-border bg-secondary/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Category</p>
          <p className="mt-2 text-lg font-black text-foreground">Reference</p>
        </div>
        <div className="rounded-[calc(var(--radius)*.7)] border border-border bg-secondary/40 p-4 sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Match focus</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{activeMap.focus}</p>
        </div>
        <div className="rounded-[calc(var(--radius)*.7)] border border-border bg-secondary/40 p-4 sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Planning tip</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{activeMap.planning}</p>
        </div>
      </div>

      <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
        <li className="rounded-[calc(var(--radius)*.65)] border border-border bg-card px-3 py-2">Confirm the map your server loaded before planning routes.</li>
        <li className="rounded-[calc(var(--radius)*.65)] border border-border bg-card px-3 py-2">Mark Control Zones, FOB candidates, and one safe approach.</li>
        <li className="rounded-[calc(var(--radius)*.65)] border border-border bg-card px-3 py-2">Recheck pins after zone flips or major rebuilds.</li>
        <li className="rounded-[calc(var(--radius)*.65)] border border-border bg-card px-3 py-2">Feed mortar crews positions from the live match, not guesses.</li>
      </ul>
    </section>
  );
}

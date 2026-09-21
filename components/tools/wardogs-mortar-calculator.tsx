"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { routePath } from "@/lib/urls";

type CoordPair = {
  fireX: string;
  fireY: string;
  targetX: string;
  targetY: string;
};

const EMPTY: CoordPair = {
  fireX: "",
  fireY: "",
  targetX: "",
  targetY: "",
};

function parseCoord(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const num = Number(trimmed);
  return Number.isFinite(num) ? num : null;
}

function normalizeBearing(degrees: number) {
  const normalized = degrees % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

function formatNumber(value: number, digits = 1) {
  return value.toFixed(digits);
}

function readQueryCoords(): Partial<CoordPair> {
  const params = new URLSearchParams(window.location.search);
  const fireX = params.get("fx") ?? params.get("fireX") ?? undefined;
  const fireY = params.get("fy") ?? params.get("fireY") ?? undefined;
  const targetX = params.get("tx") ?? params.get("targetX") ?? undefined;
  const targetY = params.get("ty") ?? params.get("targetY") ?? undefined;
  return {
    ...(fireX != null ? { fireX } : {}),
    ...(fireY != null ? { fireY } : {}),
    ...(targetX != null ? { targetX } : {}),
    ...(targetY != null ? { targetY } : {}),
  };
}

export function WardogsMortarCalculator() {
  const [coords, setCoords] = useState<CoordPair>(EMPTY);
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const fromQuery = readQueryCoords();
    if (Object.keys(fromQuery).length) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate calculator inputs once on mount
      setCoords((current) => ({ ...current, ...fromQuery }));
      setHydrated(true);
      return;
    }
    try {
      const raw = window.localStorage.getItem("wardogs-mortar-coords");
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<CoordPair>;
        setCoords((current) => ({ ...current, ...parsed }));
      }
    } catch {
      // Ignore malformed local storage.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem("wardogs-mortar-coords", JSON.stringify(coords));
    } catch {
      // Ignore quota / private mode failures.
    }
  }, [coords, hydrated]);

  const result = useMemo(() => {
    const fx = parseCoord(coords.fireX);
    const fy = parseCoord(coords.fireY);
    const tx = parseCoord(coords.targetX);
    const ty = parseCoord(coords.targetY);
    if (fx == null || fy == null || tx == null || ty == null) return null;

    const dx = tx - fx;
    const dy = ty - fy;
    const distance = Math.hypot(dx, dy);
    const bearing = normalizeBearing((Math.atan2(dx, dy) * 180) / Math.PI);

    return { distance, bearing };
  }, [coords]);

  const update = useCallback((key: keyof CoordPair, value: string) => {
    setCoords((current) => ({ ...current, [key]: value }));
    setCopied(false);
  }, []);

  const reset = useCallback(() => {
    setCoords(EMPTY);
    setCopied(false);
  }, []);

  const swap = useCallback(() => {
    setCoords((current) => ({
      fireX: current.targetX,
      fireY: current.targetY,
      targetX: current.fireX,
      targetY: current.fireY,
    }));
    setCopied(false);
  }, []);

  const copyResult = useCallback(async () => {
    if (!result) return;
    const text = [
      `Firing: ${coords.fireX}, ${coords.fireY}`,
      `Target: ${coords.targetX}, ${coords.targetY}`,
      `Coordinate distance: ${formatNumber(result.distance, 1)}`,
      `Bearing: ${formatNumber(result.bearing, 1)}°`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }, [coords, result]);

  return (
    <section className="content-card space-y-5" aria-label="WARDOGS mortar calculator tool">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">Live tool</p>
          <p className="mt-2 text-xl font-black text-foreground sm:text-2xl">Distance &amp; Bearing Board</p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
            Enter firing and target coordinates to get coordinate distance and bearing from point A to point B. Use the
            bearing with the in-game sighting information available to your crew.
          </p>
        </div>
        <Link href={routePath("wardogs-map")} className="button-secondary text-sm">
          Open WARDOGS Map
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <fieldset className="rounded-[calc(var(--radius)*.7)] border border-border bg-secondary/40 p-4">
          <legend className="px-1 text-sm font-bold text-foreground">Firing position</legend>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              X
              <input
                inputMode="decimal"
                className="mt-1 w-full rounded-[calc(var(--radius)*.55)] border border-border bg-card px-3 py-2 text-sm text-foreground"
                value={coords.fireX}
                onChange={(event) => update("fireX", event.target.value)}
                placeholder="Firing X"
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Y
              <input
                inputMode="decimal"
                className="mt-1 w-full rounded-[calc(var(--radius)*.55)] border border-border bg-card px-3 py-2 text-sm text-foreground"
                value={coords.fireY}
                onChange={(event) => update("fireY", event.target.value)}
                placeholder="Firing Y"
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="rounded-[calc(var(--radius)*.7)] border border-border bg-secondary/40 p-4">
          <legend className="px-1 text-sm font-bold text-foreground">Target position</legend>
          <div className="mt-2 grid grid-cols-2 gap-3">
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              X
              <input
                inputMode="decimal"
                className="mt-1 w-full rounded-[calc(var(--radius)*.55)] border border-border bg-card px-3 py-2 text-sm text-foreground"
                value={coords.targetX}
                onChange={(event) => update("targetX", event.target.value)}
                placeholder="Target X"
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Y
              <input
                inputMode="decimal"
                className="mt-1 w-full rounded-[calc(var(--radius)*.55)] border border-border bg-card px-3 py-2 text-sm text-foreground"
                value={coords.targetY}
                onChange={(event) => update("targetY", event.target.value)}
                placeholder="Target Y"
              />
            </label>
          </div>
        </fieldset>
      </div>

      <div className="flex flex-wrap gap-2">
        <button type="button" className="button-secondary text-sm" onClick={swap}>
          Swap firing / target
        </button>
        <button type="button" className="button-secondary text-sm" onClick={reset}>
          Reset
        </button>
        <button type="button" className="button-primary text-sm" onClick={copyResult} disabled={!result}>
          {copied ? "Copied" : "Copy result"}
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-[calc(var(--radius)*.7)] border border-border bg-card p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Coordinate distance</p>
          <p className="mt-2 text-2xl font-black text-foreground">
            {result ? formatNumber(result.distance, 1) : "—"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Grid units between the two points</p>
        </div>
        <div className="rounded-[calc(var(--radius)*.7)] border border-border bg-card p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Bearing from A to B</p>
          <p className="mt-2 text-2xl font-black text-foreground">
            {result ? `${formatNumber(result.bearing, 1)}°` : "—"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Clockwise from north (0° north, 90° east)</p>
        </div>
      </div>

      <p className="text-sm leading-6 text-muted-foreground">
        Pair this board with the{" "}
        <Link href={routePath("wardogs-map")} className="font-semibold text-primary underline-offset-2 hover:underline">
          WARDOGS map reference
        </Link>{" "}
        so your squad shares the same layer names before dialing sights in the mortar nest.
      </p>
    </section>
  );
}

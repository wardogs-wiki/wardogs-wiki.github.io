import type { SeoPageDefinition } from "@/config/types";
import { WardogsMapTool } from "@/components/tools/wardogs-map-tool";
import { WardogsMortarCalculator } from "@/components/tools/wardogs-mortar-calculator";

export function PageTool({ page }: { page: SeoPageDefinition }) {
  if (page.pageType !== "tool" || !page.toolKind) return null;

  return (
    <div className="site-container pt-10 sm:pt-12">
      {page.toolKind === "wardogs-map" ? <WardogsMapTool /> : null}
      {page.toolKind === "wardogs-mortar-calculator" ? <WardogsMortarCalculator /> : null}
    </div>
  );
}

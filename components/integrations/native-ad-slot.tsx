import { adsterra } from "@/config/ads";
import { NativeAdClient } from "./native-ad-client";

export function NativeAdSlot() {
  return (
    <aside className="ad-slot ad-slot-native" data-ad-slot="native" aria-label="Advertisement">
      <p className="ad-slot-label">Advertisement</p>
      <div className="ad-slot-frame">
        <NativeAdClient scriptUrl={adsterra.native.invokeSrc} containerId={adsterra.native.containerId} />
      </div>
    </aside>
  );
}

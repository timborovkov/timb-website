import { sendGAEvent } from "@next/third-parties/google";

type OutboundLinkType = "email" | "social" | "cal";

export function trackOutboundClick(label: string, url: string, type: OutboundLinkType) {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  sendGAEvent("event", "outbound_click", {
    link_label: label,
    link_url: url,
    link_type: type,
  });
}

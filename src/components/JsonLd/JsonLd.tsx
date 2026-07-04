import type { FaqEntry } from "@/lib/seo";
import { faqPageSchema } from "@/lib/seo";

/**
 * JsonLd — server-emitted structured data (DS §12, T7). Renders a native <script
 * type="application/ld+json">. `<` is escaped to < to prevent XSS injection.
 * E1 guard: pass only E1-safe graphs (no aggregateRating / review / outcome metric).
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/**
 * FaqJsonLd — convenience wrapper. FAQPage entries derive from the SSR'd disclosure
 * accordion content (§10) — one authoring surface, two consumers.
 */
export function FaqJsonLd({ entries }: { entries: FaqEntry[] }) {
  return <JsonLd data={faqPageSchema(entries)} />;
}

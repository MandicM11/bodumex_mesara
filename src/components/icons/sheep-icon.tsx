import type { SVGProps } from "react";

/**
 * Custom ikonica ovčice (u lucide-react stilu — stroke, bez fill-a)
 * jer lucide-react nema gotovu ikonicu ovce/jagnjeta.
 */
export function SheepIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* runasto telo */}
      <rect x="8" y="8" width="12" height="7" rx="3.5" />
      {/* glava */}
      <circle cx="5" cy="11.5" r="2.5" />
      {/* uvo */}
      <path d="M4.3 9.3 3.6 7.6" />
      {/* noge */}
      <line x1="10" y1="15" x2="10" y2="20" />
      <line x1="13.3" y1="15" x2="13.3" y2="20" />
      <line x1="16.7" y1="15" x2="16.7" y2="20" />
      <line x1="20" y1="15" x2="20" y2="20" />
    </svg>
  );
}

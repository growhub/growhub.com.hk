// Inline SVG markup for each pipeline step, in dictionary order:
// discovery/design, prototyping, review, build/test, ship/operate.
export const flowIcons: string[] = [
  // clipboard (discovery & design)
  '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h6"/>',
  // layout (prototyping)
  '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  // refresh (review & iterate)
  '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v5h-5"/>',
  // code (build & test)
  '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  // send / launch (ship & operate)
  '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4Z"/>',
];

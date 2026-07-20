/**
 * Cover visual per capability group, in the same order as capabilities.groups.
 * Placeholder abstract SVGs — swap for richer artwork when available.
 */
export const capabilityImages = [
  '/images/capabilities/frontend.svg',
  '/images/capabilities/backend.svg',
  '/images/capabilities/mobile.svg',
  '/images/capabilities/cloud.svg',
  '/images/capabilities/ai.svg',
];

/** SVG stroke path per capability group, in the same order as capabilities.groups. */
export const capabilityIconPaths = [
  // Frontend — code brackets
  'M8 6l-4 6 4 6M16 6l4 6-4 6',
  // Backend — database
  'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  // Mobile — phone
  'M7 3h10v18H7zM11 18h2',
  // Cloud & DevOps — cloud
  'M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 18 18H7z',
  // AI — spark
  'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18',
];

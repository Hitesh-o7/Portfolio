/**
 * Application constants
 * Centralized location for magic numbers and configuration values
 */

// Debounce delay for the /work resize handler
export const RESIZE_DEBOUNCE_DELAY = 150; // ms

// Intersection Observer settings for the mobile "centered card" reveal on /work
export const OBSERVER_THRESHOLD = [0.5, 0.7];
export const OBSERVER_ROOT_MARGIN = "-15% 0px -15% 0px";

// Home intro: sessionStorage key + <html> attribute shared by the Preloader and the inline script in app/layout.tsx.
// When the attribute is present the CSS shows the finished hero instead of replaying the ~7s intro.
export const INTRO_SEEN_KEY = "intro-seen";
export const INTRO_SKIP_ATTR = "data-intro-skip";

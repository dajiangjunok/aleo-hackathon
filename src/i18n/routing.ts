import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["zh", "en"],
  defaultLocale: "zh",
  localeDetection: false,
  alternateLinks: false,
});

export type Locale = (typeof routing.locales)[number];

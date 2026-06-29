"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const localeLabels: Record<Locale, string> = {
  zh: "中",
  en: "EN",
};

export default function LocaleSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    if (nextLocale !== locale) {
      router.replace(`${pathname}${window.location.hash}`, {
        locale: nextLocale,
      });
    }
  }

  return (
    <div
      aria-label={label}
      className="locale-switcher"
      role="group"
    >
      {Object.entries(localeLabels).map(([value, text]) => {
        const nextLocale = value as Locale;
        const isActive = nextLocale === locale;

        return (
          <button
            key={nextLocale}
            aria-pressed={isActive}
            className={isActive ? "is-active" : ""}
            onClick={() => switchLocale(nextLocale)}
            type="button"
          >
            {text}
          </button>
        );
      })}
    </div>
  );
}

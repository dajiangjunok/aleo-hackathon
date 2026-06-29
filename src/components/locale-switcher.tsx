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
      className="flex rounded-full border border-black/10 bg-white/70 p-1 shadow-sm"
      role="group"
    >
      {Object.entries(localeLabels).map(([value, text]) => {
        const nextLocale = value as Locale;
        const isActive = nextLocale === locale;

        return (
          <button
            key={nextLocale}
            aria-pressed={isActive}
            className={`min-w-8 rounded-full px-2 py-1 font-mono text-[11px] font-bold transition ${
              isActive
                ? "bg-[var(--ink)] text-white"
                : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
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

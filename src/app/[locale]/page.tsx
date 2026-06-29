import LocaleSwitcher from "@/components/locale-switcher";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Track = {
  key: string;
  title: string;
  summary: string;
  ideas: string[];
};

type ScheduleItem = {
  phase: string;
  date: string;
  detail: string;
};

type Stat = {
  label: string;
  value: string;
};

function ProofPanel({
  eyebrow,
  line1,
  line2,
  output,
}: {
  eyebrow: string;
  line1: string;
  line2: string;
  output: string;
}) {
  const nodes = ["AI", "PAY", "DEF", "DEV", "SOC", "ZK"];

  return (
    <div className="relative overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--ink)] p-5 text-white shadow-[0_30px_90px_rgba(17,23,11,0.22)]">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(209,255,76,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(209,255,76,0.24)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -right-20 -top-20 size-48 rounded-full bg-[var(--aleo-green)] opacity-20 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--aleo-green)]">
              {eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-black tracking-tight">
              {line1}
              <br />
              {line2}
            </h2>
          </div>
          <div className="grid size-14 place-items-center rounded-full border border-[var(--aleo-green)] bg-[var(--aleo-green)]/10 font-mono text-sm text-[var(--aleo-green)]">
            ZK
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {nodes.map((node, index) => (
            <div
              key={node}
              className="proof-pulse rounded-[6px] border border-white/10 bg-white/[0.06] p-3"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="font-mono text-xs text-[var(--aleo-green)]">
                {node}
              </span>
              <div className="mt-8 h-1.5 rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-[var(--aleo-green)]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[6px] border border-white/10 bg-black/20 p-4 font-mono text-xs leading-6 text-white/70">
          <p>
            <span className="text-[var(--aleo-green)]">aleo.verify</span>
            {"({ track: \"privacy\", region: \"APAC\", prize: 5000 })"}
          </p>
          <p className="mt-2 text-white/40">{output}</p>
        </div>
      </div>
    </div>
  );
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const tracks = t.raw("tracks") as Track[];
  const schedule = t.raw("schedule") as ScheduleItem[];
  const benefits = t.raw("benefits") as string[];
  const builders = t.raw("builders") as string[];
  const domains = t.raw("domains") as string[];
  const stats = t.raw("hero.stats") as Stat[];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--ink)]">
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-[var(--background)]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--aleo-green)] hover:bg-white"
          >
            <span
              aria-hidden="true"
              className="block h-[21px] w-[57px] bg-[var(--ink)] [mask-image:url(/logo.svg)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url(/logo.svg)] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
            />
            <span
              aria-hidden="true"
              className="h-5 w-px bg-black/15 transition group-hover:bg-[var(--aleo-green)]"
            />
            <span className="font-mono text-[11px] font-bold uppercase leading-none tracking-[0.18em] text-[var(--ink)]">
              Hackathon
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[var(--muted)] md:flex">
            <a className="transition hover:text-[var(--ink)]" href="#tracks">
              {t("nav.tracks")}
            </a>
            <a className="transition hover:text-[var(--ink)]" href="#schedule">
              {t("nav.schedule")}
            </a>
            <a className="transition hover:text-[var(--ink)]" href="#about">
              {t("nav.about")}
            </a>
            <a className="transition hover:text-[var(--ink)]" href="#apply">
              {t("nav.apply")}
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <LocaleSwitcher
              locale={locale === "en" ? "en" : "zh"}
              label={t("languageSwitcher")}
            />
            <a
              href="#apply"
              className="hidden rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-bold text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-[var(--aleo-green)] focus:ring-offset-2 focus:ring-offset-[var(--background)] sm:block"
            >
              {t("nav.applyNow")}
            </a>
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="relative isolate overflow-hidden border-b border-[var(--line)]"
      >
        <div className="absolute inset-0 -z-10 [background-image:radial-gradient(circle_at_22%_18%,rgba(209,255,76,0.48),transparent_28%),radial-gradient(circle_at_90%_10%,rgba(184,255,210,0.56),transparent_26%),linear-gradient(180deg,#ffffff_0%,var(--paper)_100%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)] shadow-sm">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-8 max-w-4xl font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[var(--ink)] sm:text-7xl lg:text-8xl">
              {t("hero.title")}
              <span className="block text-[var(--green-deep)]">
                {t("hero.titleAccent")}
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-[var(--ink)] sm:text-2xl">
              {t("hero.lead")}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {t("hero.body")}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-2 focus:ring-[var(--aleo-green)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              >
                {t("nav.applyNow")}
              </a>
              <a
                href="#tracks"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-6 py-3 text-base font-bold text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[var(--aleo-green)] focus:outline-none focus:ring-2 focus:ring-[var(--aleo-green)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              >
                {t("hero.viewTracks")}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-[8px] border border-[var(--line)] bg-white/75 p-4 shadow-sm"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {label}
                  </p>
                  <p className="mt-2 font-display text-xl font-black tracking-tight">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-6">
            <ProofPanel
              eyebrow={t("proof.eyebrow")}
              line1={t("proof.line1")}
              line2={t("proof.line2")}
              output={t("proof.output")}
            />
          </div>
        </div>
      </section>

      <section id="apply" className="bg-[var(--paper)] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[8px] border border-[var(--line)] bg-white px-6 py-8 shadow-[0_18px_60px_rgba(17,23,11,0.07)] sm:px-8 sm:py-10 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14 lg:px-12">
            <div className="absolute inset-y-0 left-0 w-1 bg-[var(--aleo-green)]" />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--green-deep)]">
                {t("apply.eyebrow")}
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-black tracking-[-0.03em] sm:text-5xl">
                {t("apply.title")}
              </h2>
            </div>
            <p className="mt-6 max-w-3xl border-t border-[var(--line)] pt-6 text-base leading-8 text-[var(--muted)] lg:mt-0 lg:border-l lg:border-t-0 lg:py-2 lg:pl-14">
              {t("apply.body")}
            </p>
          </div>
        </div>
      </section>

      <section id="tracks" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-[var(--line)] pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--green-deep)]">
                {t("tracksSection.eyebrow")}
              </p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.03em] sm:text-6xl">
                {t("tracksSection.title")}
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
              {t("tracksSection.body")}
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
            {tracks.map((track, index) => (
              <article
                key={track.title}
                className={`group relative isolate flex h-full overflow-hidden rounded-[8px] border border-[var(--line)] bg-white/90 shadow-[0_18px_60px_rgba(17,23,11,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[var(--aleo-green)] hover:shadow-[0_28px_90px_rgba(17,23,11,0.13)] ${
                  index === tracks.length - 1 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(209,255,76,0.28),transparent_34%),radial-gradient(circle_at_92%_12%,rgba(209,255,76,0.34),transparent_24%),linear-gradient(180deg,#fff,rgba(241,246,233,0.64))]" />
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--ink),var(--aleo-green),transparent)] opacity-80" />
                <div className="absolute right-0 top-0 -z-10 size-32 translate-x-10 -translate-y-10 rounded-full bg-[var(--aleo-green)]/30 blur-3xl transition duration-300 group-hover:bg-[var(--aleo-green)]/45" />

                <div className="flex w-full flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="grid size-14 place-items-center rounded-[6px] bg-[var(--ink)] font-mono text-base font-black text-[var(--aleo-green)] shadow-[0_16px_40px_rgba(17,23,11,0.22)]">
                        {track.key}
                      </span>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--green-deep)]">
                          {t("tracksSection.trackLabel", {
                            number: String(index + 1).padStart(2, "0"),
                          })}
                        </p>
                        <span className="mt-2 inline-flex rounded-full border border-[var(--line)] bg-white/80 px-3 py-1 text-sm font-black text-[var(--ink)] shadow-sm">
                          {t("tracksSection.prize")}
                        </span>
                      </div>
                    </div>
                    <span className="mt-1 hidden h-10 w-10 shrink-0 rounded-full border border-[var(--aleo-green)] bg-[var(--aleo-green)]/25 shadow-[0_0_35px_rgba(209,255,76,0.45)] sm:block" />
                  </div>

                  <div className="mt-7 grid flex-1 gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                    <div>
                      <h3 className="font-display text-3xl font-black leading-tight tracking-tight text-[var(--ink)]">
                        {track.title}
                      </h3>
                      <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                        {track.summary}
                      </p>
                    </div>

                    <ul className="flex flex-wrap content-start gap-2 border-t border-[var(--line)] pt-5 text-sm text-[var(--ink)] lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                      {track.ideas.map((idea) => (
                        <li
                          key={idea}
                          className="rounded-full border border-[var(--line)] bg-white/75 px-3 py-2 font-bold shadow-sm transition group-hover:border-[var(--aleo-green)]"
                        >
                          {idea}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="bg-[var(--ink)] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--aleo-green)]">
                {t("scheduleSection.eyebrow")}
              </p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.03em] sm:text-6xl">
                {t("scheduleSection.title")}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/60">
                {t("scheduleSection.body")}
              </p>
            </div>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={item.phase}
                  className="grid gap-4 rounded-[8px] border border-white/10 bg-white/[0.06] p-5 sm:grid-cols-[120px_1fr]"
                >
                  <div className="font-mono text-sm text-[var(--aleo-green)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="font-display text-2xl font-black tracking-tight">
                        {item.phase}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/50">
                        {item.date}
                      </p>
                    </div>
                    <p className="mt-3 leading-7 text-white/70">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--green-deep)]">
              {t("about.eyebrow")}
            </p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.03em] sm:text-6xl">
              {t("about.title")}
            </h2>
          </div>
          <div className="text-base leading-8 text-[var(--muted)]">
            <p>{t("about.paragraph1")}</p>
            <p className="mt-5">{t("about.paragraph2")}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {domains.map((domain) => (
                <div
                  key={domain}
                  className="rounded-[8px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 font-bold text-[var(--ink)]"
                >
                  {domain}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3">
          <div className="rounded-[8px] bg-[var(--paper)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--green-deep)]">
              {t("whyJoin.eyebrow")}
            </p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight">
              {t("whyJoin.title")}
            </h2>
            <ul className="mt-6 space-y-3 text-[var(--muted)]">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 grid size-5 place-items-center rounded-full bg-[var(--aleo-green)] text-xs font-black text-[var(--ink)]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[8px] bg-[var(--ink)] p-6 text-white">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--aleo-green)]">
              {t("whatWeWant.eyebrow")}
            </p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight">
              {t("whatWeWant.title")}
            </h2>
            <p className="mt-6 leading-8 text-white/70">
              {t("whatWeWant.body")}
            </p>
          </div>

          <div className="rounded-[8px] bg-[var(--green-soft)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--green-deep)]">
              {t("whoCanJoin.eyebrow")}
            </p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight">
              {t("whoCanJoin.title")}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {builders.map((builder) => (
                <span
                  key={builder}
                  className="rounded-full border border-[var(--line)] bg-white/70 px-3 py-2 text-sm font-bold"
                >
                  {builder}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
              {t("whoCanJoin.body")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--paper)] py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-[var(--line)]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[8px] bg-[var(--ink)] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--aleo-green)]">
              {t("cta.eyebrow")}
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-4xl font-display text-4xl font-black leading-tight tracking-[-0.03em] sm:text-6xl">
                  {t("cta.title")}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  {t("cta.body")}
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-[var(--aleo-green)] px-6 py-3 text-base font-black text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[#cfff5f] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--ink)]"
              >
                {t("cta.button")}
              </a>
            </div>
          </div>
          <footer className="flex flex-col justify-between gap-4 py-8 text-sm text-[var(--muted)] sm:flex-row">
            <span>Aleo Hackathon · OpenBuild</span>
            <span>{t("cta.footer")}</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

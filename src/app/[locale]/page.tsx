import LocaleSwitcher from "@/components/locale-switcher";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Track = { key: string; title: string; summary: string; ideas: string[] };
type ScheduleItem = { phase: string; date: string; detail: string };
type Stat = { label: string; value: string };

const REGISTRATION_URL =
  "https://hackathon.xyz/events/public/e7ad6199-0078-42ee-9846-b82c385e4c0e";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function ProofOrbit({ output }: { output: string }) {
  const nodes = ["AI", "PAY", "DEFI", "DEV", "SOC"];

  return (
    <div className="proof-orbit" aria-label={output}>
      <div className="orbit-cross orbit-cross-x" />
      <div className="orbit-cross orbit-cross-y" />
      <div className="orbit-ring orbit-ring-one" />
      <div className="orbit-ring orbit-ring-two" />
      <div className="orbit-core">
        <span className="orbit-core-pulse" />
        <strong>ZK</strong>
        <small>VERIFIED</small>
      </div>
      {nodes.map((node, index) => (
        <span
          className={`orbit-node orbit-node-${index + 1}`}
          key={node}
        >
          <i /> {node}
        </span>
      ))}
      <span className="orbit-coordinate orbit-coordinate-top">Y 24.071</span>
      <span className="orbit-coordinate orbit-coordinate-bottom">X 121.473</span>
      <p className="orbit-output">{output}</p>
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
    <main className="site-shell">
      <nav className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top" aria-label="Aleo Hackathon">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-divider" />
            <span>HACKATHON / 26</span>
          </a>
          <div className="nav-links">
            <a href="#tracks">{t("nav.tracks")}</a>
            <a href="#schedule">{t("nav.schedule")}</a>
            <a href="#about">{t("nav.about")}</a>
          </div>
          <div className="nav-actions">
            <LocaleSwitcher
              locale={locale === "en" ? "en" : "zh"}
              label={t("languageSwitcher")}
            />
            <a
              className="nav-apply"
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
            >
              {t("nav.applyNow")} <Arrow diagonal />
            </a>
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-rail" aria-hidden="true">
          <span>PROGRAMMABLE PRIVACY</span>
          <span>APAC / 2026</span>
          <span>ZERO KNOWLEDGE</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span />{t("hero.eyebrow")}</p>
            <h1>
              <span>{t("hero.title")}</span>
              <em>{t("hero.titleAccent")}</em>
            </h1>
            <div className="hero-intro">
              <p className="hero-lead">{t("hero.lead")}</p>
              <p className="hero-body">{t("hero.body")}</p>
            </div>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href={REGISTRATION_URL}
                target="_blank"
                rel="noreferrer"
              >
                {t("nav.applyNow")} <Arrow diagonal />
              </a>
              <a className="button button-line" href="#tracks">
                {t("hero.viewTracks")} <Arrow />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-label">
              <span>{t("proof.eyebrow")}</span>
              <span>LIVE / 00:00:26</span>
            </div>
            <ProofOrbit output={t("proof.output")} />
            <h2>{t("proof.line1")}<br />{t("proof.line2")}</h2>
          </div>
        </div>
        <div className="stat-strip">
          {stats.map(({ label, value }, index) => (
            <div className="stat" key={label}>
              <span>0{index + 1} / {label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="apply-band" id="apply">
        <div className="apply-index">OPEN<br />CALL</div>
        <div>
          <p className="eyebrow eyebrow-light"><span />{t("apply.eyebrow")}</p>
          <h2>{t("apply.title")}</h2>
        </div>
        <p>{t("apply.body")}</p>
        <a
          className="apply-band-link"
          href={REGISTRATION_URL}
          target="_blank"
          rel="noreferrer"
          aria-label={t("nav.applyNow")}
        >
          <span>{t("nav.applyNow")}</span>
          <Arrow diagonal />
        </a>
      </section>

      <section className="section tracks-section" id="tracks">
        <header className="section-header">
          <div>
            <p className="eyebrow"><span />{t("tracksSection.eyebrow")}</p>
            <h2>{t("tracksSection.title")}</h2>
          </div>
          <p>{t("tracksSection.body")}</p>
        </header>
        <div className="track-list">
          {tracks.map((track, index) => (
            <article className="track-row" key={track.title}>
              <div className="track-number">0{index + 1}</div>
              <div className="track-code"><span>{track.key}</span></div>
              <div className="track-main">
                <p className="track-prize">{t("tracksSection.prize")}</p>
                <h3>{track.title}</h3>
                <p>{track.summary}</p>
              </div>
              <ul>
                {track.ideas.map((idea) => <li key={idea}>{idea}</li>)}
              </ul>
              <div className="track-arrow"><Arrow diagonal /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="schedule-section" id="schedule">
        <div className="schedule-heading">
          <p className="eyebrow eyebrow-light"><span />{t("scheduleSection.eyebrow")}</p>
          <h2>{t("scheduleSection.title")}</h2>
          <p>{t("scheduleSection.body")}</p>
          <div className="schedule-signal" aria-hidden="true"><i /><i /><i /></div>
        </div>
        <div className="timeline">
          {schedule.map((item, index) => (
            <article className="timeline-item" key={item.phase}>
              <div className="timeline-marker"><i />0{index + 1}</div>
              <div>
                <p className="timeline-date">{item.date}</p>
                <h3>{item.phase}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <header className="section-header about-header">
          <div>
            <p className="eyebrow"><span />{t("about.eyebrow")}</p>
            <h2>{t("about.title")}</h2>
          </div>
          <div className="about-copy">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
          </div>
        </header>
        <div className="domain-grid">
          {domains.map((domain, index) => (
            <div key={domain}><span>0{index + 1}</span><strong>{domain}</strong><i /></div>
          ))}
        </div>
      </section>

      <section className="info-grid">
        <article className="info-card info-card-paper">
          <p className="eyebrow"><span />{t("whyJoin.eyebrow")}</p>
          <h2>{t("whyJoin.title")}</h2>
          <ul>{benefits.map((item) => <li key={item}><i />{item}</li>)}</ul>
        </article>
        <article className="info-card info-card-dark">
          <p className="eyebrow eyebrow-light"><span />{t("whatWeWant.eyebrow")}</p>
          <h2>{t("whatWeWant.title")}</h2>
          <p>{t("whatWeWant.body")}</p>
          <div className="wire-corner" aria-hidden="true" />
        </article>
        <article className="info-card info-card-white">
          <p className="eyebrow"><span />{t("whoCanJoin.eyebrow")}</p>
          <h2>{t("whoCanJoin.title")}</h2>
          <div className="builder-list">
            {builders.map((builder) => <span key={builder}>{builder}</span>)}
          </div>
          <p>{t("whoCanJoin.body")}</p>
        </article>
      </section>

      <section className="closing">
        <div className="closing-orbit" aria-hidden="true"><i /><i /><i /></div>
        <p className="eyebrow eyebrow-light"><span />{t("cta.eyebrow")}</p>
        <h2>{t("cta.title")}</h2>
        <div className="closing-bottom">
          <p>{t("cta.body")}</p>
          <a
            className="button button-white"
            href={REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
          >
            {t("cta.button")} <Arrow diagonal />
          </a>
        </div>
      </section>
      <footer className="footer">
        <span>© 2026 ALEO × OPENBUILD</span>
        <span>{t("cta.footer")}</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

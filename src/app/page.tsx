const tracks = [
  {
    key: "AI",
    title: "AI x Privacy Track",
    summary: "探索 AI 与隐私计算的结合，让智能工具在保护数据自主权的前提下运行。",
    ideas: [
      "AI Agent",
      "Personal AI Assistant",
      "AI 数据市场",
      "AI 工作流工具",
      "AI 推理与隐私保护解决方案",
    ],
  },
  {
    key: "PAY",
    title: "Payments Track",
    summary: "打造下一代隐私支付应用，让支付、工资和跨境结算不再公开暴露。",
    ideas: [
      "隐私支付系统",
      "Payroll 工具",
      "跨境支付解决方案",
      "Stablecoin 支付应用",
      "商户支付工具",
    ],
  },
  {
    key: "DEF",
    title: "DeFi with Privacy Track",
    summary: "探索隐私与 DeFi 的结合，构建更安全、更可验证的链上金融体验。",
    ideas: [
      "Privacy DEX",
      "Lending Protocol",
      "Yield Products",
      "Privacy Stablecoin Solutions",
      "On-chain Financial Applications",
    ],
  },
  {
    key: "DEV",
    title: "Infrastructure & Developer Tools Track",
    summary: "建设 Aleo 生态的基础设施，降低开发者进入可编程隐私世界的门槛。",
    ideas: [
      "SDK",
      "API 服务",
      "Indexer",
      "Analytics 平台",
      "Wallet Tooling",
      "开发者工具",
    ],
  },
  {
    key: "SOC",
    title: "GameFi & SocialFi Track",
    summary: "打造下一代隐私游戏与社交应用，让身份、声誉和互动由用户掌控。",
    ideas: [
      "GameFi 应用",
      "SocialFi 产品",
      "Creator Economy 工具",
      "Reputation 系统",
      "社区与会员体系",
      "隐私社交网络",
    ],
  },
];

const schedule = [
  {
    phase: "报名 & 组队",
    date: "2026.07.01 - 2026.07.15",
    detail: "开放报名与组队，确认项目方向，开始项目开发。",
  },
  {
    phase: "开发阶段",
    date: "2026.07.01 - 2026.08.15",
    detail: "Hackathon 正式进行，期间提供 Office Hour、导师答疑与生态支持。",
  },
  {
    phase: "Demo Day",
    date: "2026.08.15 - 2026.08.16",
    detail: "项目线上 Demo 展示，向社区、导师和生态伙伴展示成果。",
  },
  {
    phase: "结果公布",
    date: "2026.08.21",
    detail: "公布获奖项目，优秀项目将获得生态支持、社区曝光、孵化机会与投融资对接。",
  },
];

const benefits = [
  "Aleo 核心团队技术支持",
  "与亚太地区开发者交流合作机会",
  "项目展示与曝光机会",
  "生态资源对接",
  "后续孵化与融资推荐机会",
];

const builders = [
  "Web2 开发者",
  "Web3 开发者",
  "AI 工程师",
  "产品经理",
  "设计师",
  "学生开发者",
  "创业团队",
];

const domains = [
  "AI + Privacy",
  "Privacy Payments",
  "Privacy DeFi",
  "GameFi & SocialFi",
  "Confidential Computing",
  "Developer Infrastructure",
];

const qrCells = [
  0, 1, 2, 4, 5, 6, 7, 9, 11, 13, 14, 15, 16, 18, 20, 22, 24, 25, 27, 28, 30,
  31, 33, 35, 36, 38, 40, 42, 43, 44, 46, 47, 48,
];

function QrPlaceholder({
  eyebrow,
  title,
  caption,
}: {
  eyebrow: string;
  title: string;
  caption: string;
}) {
  return (
    <div className="group rounded-[8px] border border-[var(--line)] bg-white p-4 shadow-[0_18px_60px_rgba(17,23,11,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[var(--aleo-green)]">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">
          {eyebrow}
        </span>
        <span className="rounded-full bg-[var(--green-soft)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink)]">
          QR
        </span>
      </div>
      <div className="mt-4 grid aspect-square grid-cols-7 gap-1 rounded-[6px] bg-[var(--paper)] p-3">
        {Array.from({ length: 49 }).map((_, index) => (
          <span
            key={index}
            className={`rounded-[2px] ${
              qrCells.includes((index * 7 + title.length) % 49)
                ? "bg-[var(--ink)]"
                : "bg-transparent"
            }`}
          />
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-display text-xl font-black tracking-tight text-[var(--ink)]">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{caption}</p>
      </div>
    </div>
  );
}

function ProofPanel() {
  const nodes = ["AI", "PAY", "DEF", "DEV", "SOC", "ZK"];

  return (
    <div className="relative overflow-hidden rounded-[8px] border border-[var(--line)] bg-[var(--ink)] p-5 text-white shadow-[0_30px_90px_rgba(17,23,11,0.22)]">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(209,255,76,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(209,255,76,0.24)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -right-20 -top-20 size-48 rounded-full bg-[var(--aleo-green)] opacity-20 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--aleo-green)]">
              Proof Window
            </p>
            <h2 className="mt-2 font-display text-2xl font-black tracking-tight">
              Build privately.
              <br />
              Prove publicly.
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
          <p className="mt-2 text-white/40">
            output: 5 tracks, 5 winners, programmable privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
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
              赛道
            </a>
            <a className="transition hover:text-[var(--ink)]" href="#schedule">
              时间安排
            </a>
            <a className="transition hover:text-[var(--ink)]" href="#about">
              什么是 Aleo
            </a>
            <a className="transition hover:text-[var(--ink)]" href="#apply">
              报名
            </a>
          </div>
          <a
            href="#apply"
            className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-bold text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-[var(--aleo-green)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          >
            立即报名
          </a>
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
              Aleo x OpenBuild · APAC Builders
            </p>
            <h1 className="mt-8 max-w-4xl font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-[var(--ink)] sm:text-7xl lg:text-8xl">
              Aleo Hackathon
              <span className="block text-[var(--green-deep)]">
                正式启动
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-[var(--ink)] sm:text-2xl">
              寻找下一代隐私应用 Builder，从 AI Agent 到隐私支付，从 DeFi 创新到开发者基础设施。
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              如果你相信未来互联网不仅需要开放与透明，更需要隐私与数据自主权，那么现在就是加入 Aleo 生态最好的时机。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-2 focus:ring-[var(--aleo-green)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              >
                立即报名
              </a>
              <a
                href="#tracks"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-6 py-3 text-base font-bold text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[var(--aleo-green)] focus:outline-none focus:ring-2 focus:ring-[var(--aleo-green)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              >
                查看 5 大赛道
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["奖金池", "$5,000"],
                ["赛道", "5 Tracks"],
                ["优胜项目", "5 Winners"],
                ["单项奖金", "$1,000"],
              ].map(([label, value]) => (
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
            <ProofPanel />
          </div>
        </div>
      </section>

      <section id="apply" className="bg-[var(--paper)] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--green-deep)]">
              Apply
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-black tracking-[-0.03em] sm:text-5xl">
              面向亚太地区开发者开放。
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              无论你是经验丰富的区块链开发者，还是刚刚接触 Aleo 的新 Builder，只要你对隐私计算、AI、支付、DeFi、游戏、社交或基础设施创新充满热情，都欢迎加入本次 Hackathon。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <QrPlaceholder
              eyebrow="Register"
              title="扫码报名"
              caption="替换为正式报名二维码后即可直接引导参赛者提交信息。"
            />
            <QrPlaceholder
              eyebrow="Community"
              title="扫码进入 Hacker 群"
              caption="用于组队、答疑、Office Hour 通知和赛程提醒。"
            />
          </div>
        </div>
      </section>

      <section id="tracks" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-[var(--line)] pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--green-deep)]">
                Prize Pool
              </p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.03em] sm:text-6xl">
                5 大赛道 · 5 位优胜者
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
              每个赛道评选出 1 个优胜项目，每个优胜项目获得 $1,000 奖金。
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {tracks.map((track, index) => (
              <article
                key={track.title}
                className={`rounded-[8px] border border-[var(--line)] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--aleo-green)] hover:shadow-[0_22px_70px_rgba(17,23,11,0.1)] ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="grid size-12 place-items-center rounded-[6px] bg-[var(--ink)] font-mono text-sm font-bold text-[var(--aleo-green)]">
                    {track.key}
                  </span>
                  <span className="rounded-full bg-[var(--green-soft)] px-3 py-1 text-sm font-bold text-[var(--ink)]">
                    $1,000
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-black leading-tight tracking-tight">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {track.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--ink)]">
                  {track.ideas.map((idea) => (
                    <li key={idea} className="flex gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-[var(--aleo-green)]" />
                      <span>{idea}</span>
                    </li>
                  ))}
                </ul>
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
                Timeline
              </p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.03em] sm:text-6xl">
                时间安排
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/60">
                从报名、组队到 Demo Day，围绕产品验证和隐私能力落地推进。
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
              About Aleo
            </p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.03em] sm:text-6xl">
              什么是 Aleo？
            </h2>
          </div>
          <div className="text-base leading-8 text-[var(--muted)]">
            <p>
              Aleo 是首个专为可编程隐私打造的 Layer1 区块链。通过零知识证明技术，Aleo 让开发者能够构建既保护用户隐私、又具备链上可验证性的应用。
            </p>
            <p className="mt-5">
              开发者可以使用 Leo 编程语言快速开发隐私应用，而无需深入理解复杂的密码学原理。随着 AI 时代的到来，隐私计算将成为未来应用的重要组成部分。
            </p>
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
              Why Join
            </p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight">
              为什么参加？
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
              What We Want
            </p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight">
              我们希望看到什么？
            </h2>
            <p className="mt-6 leading-8 text-white/70">
              我们希望看到的不只是 Demo，而是真正解决问题的产品、创新的隐私应用，以及能够吸引真实用户的新想法。
            </p>
          </div>

          <div className="rounded-[8px] bg-[var(--green-soft)] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--green-deep)]">
              Who Can Join
            </p>
            <h2 className="mt-3 font-display text-3xl font-black tracking-tight">
              谁可以参加？
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
              即使你从未接触过 Aleo，也可以快速上手并参与构建。
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--paper)] py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-[var(--line)]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-[8px] bg-[var(--ink)] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--aleo-green)]">
              Build the Future of Programmable Privacy
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-4xl font-display text-4xl font-black leading-tight tracking-[-0.03em] sm:text-6xl">
                  隐私不应是功能，而应成为互联网的默认选项。
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  加入 Aleo Hackathon，与来自亚太地区的开发者一起探索隐私计算的未来。
                </p>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-[var(--aleo-green)] px-6 py-3 text-base font-black text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[#cfff5f] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--ink)]"
              >
                Build on Aleo
              </a>
            </div>
          </div>
          <footer className="flex flex-col justify-between gap-4 py-8 text-sm text-[var(--muted)] sm:flex-row">
            <span>Aleo Hackathon · OpenBuild</span>
            <span>Build the Future of Programmable Privacy.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

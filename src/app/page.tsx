import type { Metadata } from "next";
import Link from "next/link";
import ChromeWord from "@/components/ChromeWord";

export const metadata: Metadata = {
  title: "RACO AI Technologies — Custom Software and Private AI",
  description:
    "RACO builds AI agents with human authority — systems that answer, sell, process, and report around the clock. Built on models we train ourselves.",
};

export default function HomePage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">
              <span className="idx">RACO AI TECHNOLOGIES LTD</span> BRISTOL × DHAKA
            </p>
            <h1>
              Your business clocks out at five. Your competition no longer{" "}
              <ChromeWord>does</ChromeWord>.
            </h1>
            <p className="lead">
              RACO builds AI agents with human authority — systems that answer,
              sell, process, and report around the clock. Built on models we
              train ourselves. Governed to European standards. Approved by you.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-solid" href="/#contact">
                Let&apos;s build your advantage
              </Link>
              <Link className="btn btn-ghost" href="#pain">
                See what staying manual costs
              </Link>
            </div>
          </div>
          <aside className="hero-meta" aria-label="What changes with RACO">
            <div>
              <span className="k">Your business runs</span>
              <span className="v">24 / 7</span>
            </div>
            <div>
              <span className="k">Agent authority</span>
              <span className="v">You approve</span>
            </div>
            <div>
              <span className="k">Compliance</span>
              <span className="v">UK / EU</span>
            </div>
            <div>
              <span className="k">The models</span>
              <span className="v">Ours</span>
            </div>
          </aside>
        </div>
      </section>

      {/* ============================== 01 · PAIN ============================== */}
      <section className="section-pad" id="pain">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">01</span> The hidden tax
            </p>
            <h2>
              Sound <ChromeWord>familiar</ChromeWord>?
            </h2>
            <p className="lead">
              None of this shows up as a line on your P&amp;L. All of it
              compounds — every quarter on manual operations widens the gap into
              permanent competitive disadvantage.
            </p>
          </div>
          <div className="research-grid">
            <div className="research">
              <span className="k" style={{ color: "var(--ember)" }}>
                COST-01
              </span>
              <h3>The 9pm enquiry</h3>
              <p>
                A buyer messages you tonight. Your team answers at 10am. Your
                competitor&apos;s agent answered in forty seconds — and took the
                deal.
              </p>
            </div>
            <div className="research">
              <span className="k" style={{ color: "var(--ember)" }}>
                COST-02
              </span>
              <h3>Slow execution</h3>
              <p>
                Quotes, follow-ups, and reports queued behind busy humans. Every
                delay is revenue leaking through the calendar.
              </p>
            </div>
            <div className="research">
              <span className="k" style={{ color: "var(--ember)" }}>
                COST-03
              </span>
              <h3>Flying blind</h3>
              <p>
                Decisions made on last month&apos;s numbers because nobody has a
                live picture of the operation.
              </p>
            </div>
            <div className="research">
              <span className="k" style={{ color: "var(--ember)" }}>
                COST-04
              </span>
              <h3>Wasted human capital</h3>
              <p>
                Your best people — the ones you fought to hire — spending their
                days on data entry, chasing, and copy-paste admin.
              </p>
            </div>
            <div className="research">
              <span className="k" style={{ color: "var(--ember)" }}>
                COST-05
              </span>
              <h3>The 5pm shutdown</h3>
              <p>
                Sixteen hours a day of dead air. Your business simply stops
                existing while the market keeps moving.
              </p>
            </div>
            <div className="research">
              <span className="k" style={{ color: "var(--ember)" }}>
                COST-06
              </span>
              <h3>Duct-taped systems</h3>
              <p>
                Fragile integrations and disconnected tools — not just
                inefficiency, but risk you&apos;ve learned to live with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 02 · NEW KIND OF COMPANY ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">02</span> A new kind of company
            </p>
            <h2>
              We&apos;re not an agency that uses AI. We&apos;re the company that{" "}
              <ChromeWord>makes it</ChromeWord>.
            </h2>
            <p className="lead">
              The first and only company in Bangladesh building true AI models
              natively — creators of RACO, Bangladesh&apos;s first
              general-purpose AI app — now building the same class of systems for
              businesses like yours.
            </p>
          </div>
          <div className="stack-grid">
            <article className="stack-cell">
              <span className="code">PROOF-01</span>
              <h3>We make the AI</h3>
              <p>
                APOLO, CASPER, and RACO-BEAST are trained and owned in-house.
                When we build your systems, there&apos;s no wrapper, no
                third-party dependency, no compromise.
              </p>
              <span className="role">Not a wrapper</span>
            </article>
            <article className="stack-cell">
              <span className="code">PROOF-02</span>
              <h3>European governance</h3>
              <p>
                A UK company with compliance engineered in from day one. Privacy
                is non-negotiable — we build digital fortresses around your data.
              </p>
              <span className="role">UK / EU compliant</span>
            </article>
            <article className="stack-cell">
              <span className="code">PROOF-03</span>
              <h3>Human authority</h3>
              <p>
                Agents execute; you command. Every consequential action passes
                an approval gate you define. Automation with a chain of command.
              </p>
              <span className="role">You stay in control</span>
            </article>
          </div>
        </div>
      </section>

      {/* ============================== 03 · THE ENGINE ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">03</span> The engine
            </p>
            <h2>
              Built in-house. Not <ChromeWord>wrapped</ChromeWord>.
            </h2>
            <p className="lead">
              Every system we deploy for you runs on models we trained, systems
              we architected, and infrastructure we own — end to end.
            </p>
          </div>
          <div className="stack-grid">
            <article className="stack-cell">
              <span className="code">LLM</span>
              <h3>APOLO</h3>
              <p>
                Our proprietary large language model. Purpose-built for
                enterprise reasoning, document understanding, and intelligent
                task execution.
              </p>
              <span className="role">The Brain</span>
            </article>
            <article className="stack-cell">
              <span className="code">Voice model</span>
              <h3>CASPER</h3>
              <p>
                Our proprietary voice AI. Natural speech synthesis and
                understanding for real-time conversational interfaces.
              </p>
              <span className="role">The Voice</span>
            </article>
            <article className="stack-cell">
              <span className="code">Agentic orchestration</span>
              <h3>RACO-BEAST</h3>
              <p>
                Our intelligent agent orchestration system. Coordinates
                multi-agent workflows, tool use, and autonomous decision-making
                at scale.
              </p>
              <span className="role">The Hands</span>
            </article>
          </div>
        </div>
      </section>

      {/* ============================== 04 · WHAT CHANGES ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">04</span> What changes
            </p>
            <h2>Your business, after RACO.</h2>
          </div>
          <div className="tile-band">
            <div
              className="tile"
              data-tip="<b>Around the clock</b><br>Agents answer, qualify, and execute while your team sleeps."
            >
              <span className="v">24/7</span>
              <span className="k">Never clocks out</span>
            </div>
            <div
              className="tile"
              data-tip="<b>Every enquiry answered</b><br>Captured, qualified, followed up — in seconds, not mornings."
            >
              <span className="v">0</span>
              <span className="k">Leads left waiting</span>
            </div>
            <div
              className="tile"
              data-tip="<b>Live visibility</b><br>A real-time picture of operations. No more deciding blind."
            >
              <span className="v">Live</span>
              <span className="k">Operational visibility</span>
            </div>
            <div
              className="tile"
              data-tip="<b>Human capital maximized</b><br>Your people on judgement and relationships — agents on the repetitive work."
            >
              <span className="v">100%</span>
              <span className="k">Of talent on real work</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 05 · OPERATING LAYER ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">05</span> The architecture
            </p>
            <h2>
              The Intelligent Business <ChromeWord>Operating Layer</ChromeWord>.
            </h2>
            <p className="lead">
              We don&apos;t sell chatbots, voice models, or automations
              individually. We configure an eight-layer operating system around
              your business — bespoke, every time.
            </p>
          </div>
          <div className="layer-stack">
            <div className="layer">
              <span className="code">L-08</span>
              <h3>Analytics Layer</h3>
              <p>Measures operational outcomes, performance metrics, and ROI.</p>
            </div>
            <div className="layer">
              <span className="code">L-07</span>
              <h3>Application Layer</h3>
              <p>Custom web and mobile interfaces for human-AI interaction.</p>
            </div>
            <div className="layer">
              <span className="code">L-06</span>
              <h3>Integration Layer</h3>
              <p>Connects seamlessly with existing business systems and databases.</p>
            </div>
            <div className="layer">
              <span className="code">L-05</span>
              <h3>Automation Layer</h3>
              <p>Executes strict logical actions and workflow steps across systems.</p>
            </div>
            <div className="layer">
              <span className="code">L-04</span>
              <h3>Orchestration Layer</h3>
              <p>Coordinates multiple autonomous agents and complex workflows.</p>
            </div>
            <div className="layer">
              <span className="code">L-03</span>
              <h3>Agent Layer</h3>
              <p>Specialized AI workers dedicated to discrete business functions.</p>
            </div>
            <div className="layer">
              <span className="code">L-02</span>
              <h3>Voice Layer</h3>
              <p>Enabling human-like, real-time conversational capabilities.</p>
            </div>
            <div className="layer">
              <span className="code">L-01</span>
              <h3>Reasoning Layer</h3>
              <p>Powered by advanced LLMs to process, understand, and decide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 06 · BUSINESS LINES ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">06</span> Four core business lines
            </p>
            <h2>How we deliver it.</h2>
          </div>
          <div className="lines-grid">
            <article className="line-cell">
              <span className="no">01</span>
              <h3>AI Consulting &amp; Transformation</h3>
              <p>
                Strategy, opportunity discovery, ROI roadmaps, and enterprise
                adoption planning.
              </p>
            </article>
            <article className="line-cell">
              <span className="no">02</span>
              <h3>AI Engineering</h3>
              <p>
                Custom AI systems, autonomous AI agents, voice AI solutions, and
                intelligent automation.
              </p>
            </article>
            <article className="line-cell">
              <span className="no">03</span>
              <h3>Software Engineering</h3>
              <p>
                Custom web applications, SaaS products, mobile apps, APIs, and
                enterprise integrations.
              </p>
            </article>
            <article className="line-cell">
              <span className="no">04</span>
              <h3>Managed AI Services</h3>
              <p>
                Ongoing optimization, system monitoring, governance, and
                continuous model improvement.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============================== 07 · SECTORS ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">07</span> Industry solutions
            </p>
            <h2>Whatever your sector, the gap is the same.</h2>
            <p className="lead">
              The businesses that win yours will be the ones whose systems never
              sleep. We make sure that&apos;s you.
            </p>
          </div>
          <div className="sector-grid">
            <div className="sector">
              <span>IND-01</span>Healthcare
            </div>
            <div className="sector">
              <span>IND-02</span>Legal
            </div>
            <div className="sector">
              <span>IND-03</span>Real Estate
            </div>
            <div className="sector">
              <span>IND-04</span>Manufacturing
            </div>
            <div className="sector">
              <span>IND-05</span>Retail
            </div>
            <div className="sector">
              <span>IND-06</span>Logistics
            </div>
            <div className="sector">
              <span>IND-07</span>Hospitality
            </div>
            <div className="sector">
              <span>IND-08</span>Education
            </div>
            <div className="sector">
              <span>IND-09</span>Construction
            </div>
            <div className="sector">
              <span>IND-10</span>Financial Services
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 08 · HUBS ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">08</span> Selective clients
            </p>
            <h2>
              You don&apos;t get a vendor. You get a technology partner with skin
              in the game.
            </h2>
            <p className="lead">
              We take on a deliberately limited number of clients — because
              exceptional delivery demands focus. Every engagement is long-term,
              high-touch, and built for compounding returns.
            </p>
          </div>
          <div className="hubs">
            <div className="hub">
              <span className="coords">HUB-01 · Strategy &amp; Sales</span>
              <h3>Bristol, UK</h3>
              <p>
                Beacon Tower — Bristol City Center, DeskLodge, Colston St,
                Bristol BS1 4XE.
              </p>
            </div>
            <div className="hub">
              <span className="coords">HUB-02 · Engineering &amp; R&amp;D</span>
              <h3>Dhaka, BD</h3>
              <p>
                House-40, Shahajalal Ave, Dhaka — model training, product
                engineering, and applied research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 09 · CTA ============================== */}
      <section className="cta-block" id="contact">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">09</span> The next move is yours
          </p>
          <h2>
            Every day manual is a day your competitors are{" "}
            <ChromeWord>pulling ahead</ChromeWord>.
          </h2>
          <p className="lead" style={{ marginBottom: 34 }}>
            Tell us where your business bleeds time and money. We&apos;ll show
            you the system that stops it — and what it earns you back.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="mailto:hello@racoai.io">
              Let&apos;s build your advantage
            </a>
            <Link className="btn btn-ghost" href="/services">
              See the services catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ChromeWord from "@/components/ChromeWord";

export const metadata: Metadata = {
  title: "About — RACO AI Technologies Ltd",
  description:
    "A Bristol-based intelligence technology company at the convergence of AI, software engineering, and digital transformation — with engineering roots in Dhaka.",
};

export default function AboutPage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">ABOUT</span> RACO AI Technologies Ltd
          </p>
          <h1>
            Solving hard problems.
            <br />
            Making <ChromeWord>cool stuff</ChromeWord>.
          </h1>
          <p className="lead" style={{ marginTop: 26 }}>
            A Bristol-based intelligence technology company operating at the
            convergence of artificial intelligence, software engineering, and
            digital transformation — with engineering roots in Dhaka,
            Bangladesh.
          </p>
        </div>
      </section>

      {/* ============================== STATS ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="stat-band">
            <div className="stat">
              <span className="v">~300</span>
              <span className="k">People globally — and growing</span>
            </div>
            <div className="stat">
              <span className="v">Decades</span>
              <span className="k">
                Combined software &amp; AI engineering experience
              </span>
            </div>
            <div className="stat">
              <span className="v">2 Hubs</span>
              <span className="k">Bristol, United Kingdom &amp; Dhaka, Bangladesh</span>
            </div>
          </div>
          <p
            style={{
              marginTop: 28,
              fontSize: 14,
              color: "var(--muted)",
              maxWidth: "70ch",
            }}
          >
            Our strength is our people. Senior developers and AI technicians
            with decades of real software experience, paired with young, driven
            minds — a combination that keeps our engineering rigorous and our
            thinking fresh.
          </p>
        </div>
      </section>

      {/* ============================== 01 · MISSION ============================== */}
      <section className="section-pad manifesto-intro">
        <div className="wrap">
          <p className="eyebrow" style={{ marginBottom: 40 }}>
            <span className="idx">01</span> Mission
          </p>
          <p>
            We are not the perfect squares that fit neatly into the grid; we are
            the erratic, sharp triangles that disrupt the pattern.
          </p>
          <p style={{ color: "var(--muted)" }}>
            The first and only company in Bangladesh building true AI models
            natively — from the ground up.
          </p>
        </div>
      </section>

      {/* ============================== 02 · MANIFESTO ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">02</span> Manifesto &amp; Constitution
            </p>
            <h2>Seven articles.</h2>
          </div>
          <div className="article-row">
            <span className="no">ART-01</span>
            <h3>The Misfits</h3>
            <p>
              RACO exists for the misfits — the bold who reject mediocrity and
              reshape the geometric landscape.
            </p>
          </div>
          <div className="article-row">
            <span className="no">ART-02</span>
            <h3>The Starting Limit</h3>
            <p>
              Our starting limit is where others drag the line — pushing beyond
              current boundaries through obsessive dedication.
            </p>
          </div>
          <div className="article-row">
            <span className="no">ART-03</span>
            <h3>Flawless Execution</h3>
            <p>
              Obsessed with perfectionism — delivering flawless execution in
              advanced technology, every time.
            </p>
          </div>
          <div className="article-row">
            <span className="no">ART-04</span>
            <h3>Human Multiplication</h3>
            <p>
              We challenge the belief that AI makes humans obsolete —
              technological leaps should multiply opportunity and sustain
              employment.
            </p>
          </div>
          <div className="article-row">
            <span className="no">ART-05</span>
            <h3>Non-Negotiable Privacy</h3>
            <p>
              We build digital fortresses to protect data with the same relentless
              focus we apply to innovation.
            </p>
          </div>
          <div className="article-row">
            <span className="no">ART-06</span>
            <h3>The Epicenter</h3>
            <p>
              We rise from the heart of Bangladesh as the nation&apos;s first true
              AI revolution — turning our homeland into the epicenter of
              intelligent disruption.
            </p>
          </div>
          <div className="article-row">
            <span className="no">ART-07</span>
            <h3>Relentless Research &amp; Agentic Intelligence</h3>
            <p>
              Continuously advancing agentic intelligence — fully autonomous,
              goal-oriented systems that turn the unknown into intelligent
              reality.
            </p>
          </div>
        </div>
      </section>

      {/* ============================== 03 · FOOTPRINT ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">03</span> Footprint
            </p>
            <h2>Dual-hub by design.</h2>
          </div>
          <div className="hubs">
            <div className="hub">
              <span className="coords">HUB-01 · Strategy &amp; Sales</span>
              <h3>Bristol, United Kingdom</h3>
              <p>
                Beacon Tower — Bristol City Center, DeskLodge, Colston St,
                Bristol BS1 4XE. Client partnerships, enterprise engagement,
                European compliance.
              </p>
            </div>
            <div className="hub">
              <span className="coords">HUB-02 · Engineering &amp; R&amp;D</span>
              <h3>Dhaka, Bangladesh</h3>
              <p>
                House-40, Shahajalal Ave, Dhaka. Model training, product
                engineering, and applied model research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 04 · CONTACT ============================== */}
      <section className="cta-block">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">04</span> Contact
          </p>
          <h2>Building something serious? So are we.</h2>
          <div className="hero-actions">
            <a className="btn btn-solid" href="mailto:hello@racoai.io">
              Get in touch
            </a>
            <Link className="btn btn-ghost" href="/careers">
              Join the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

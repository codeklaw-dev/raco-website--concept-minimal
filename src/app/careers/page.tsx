import type { Metadata } from "next";
import ChromeWord from "@/components/ChromeWord";

export const metadata: Metadata = {
  title: "Careers — Join the Misfits | RACO AI Technologies",
  description:
    "~300 people across two continents solving hard problems and making cool stuff. Founding-team leverage, real models, a national mission.",
};

export default function CareersPage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">CAREERS</span> Join the misfits
          </p>
          <h1>
            Do the work of a <ChromeWord>hundred</ChromeWord>.
          </h1>
          <p className="lead" style={{ marginTop: 26 }}>
            ~300 people across two continents, united by one purpose: solving
            hard problems and making cool stuff. We hire people who want their
            fingerprints on the foundation.
          </p>
        </div>
      </section>

      {/* ============================== 01 · OPEN ROLES ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">01</span> Open roles
            </p>
            <h2>Currently hiring.</h2>
          </div>
          <div className="role-row">
            <h3>Founding Account Executive</h3>
            <span className="meta">Bristol / Hybrid</span>
            <span className="meta">Sales · Full-time</span>
            <a
              className="btn btn-ghost apply"
              href="mailto:hello@racoai.io?subject=Founding%20AE"
            >
              Apply
            </a>
          </div>
          <div className="role-row">
            <h3>AI Engineer — Agents &amp; Orchestration</h3>
            <span className="meta">Dhaka / On-site</span>
            <span className="meta">Engineering · Full-time</span>
            <a
              className="btn btn-ghost apply"
              href="mailto:hello@racoai.io?subject=AI%20Engineer"
            >
              Apply
            </a>
          </div>
          <div className="role-row">
            <h3>Voice ML Engineer — CASPER</h3>
            <span className="meta">Dhaka / On-site</span>
            <span className="meta">Research · Full-time</span>
            <a
              className="btn btn-ghost apply"
              href="mailto:hello@racoai.io?subject=Voice%20ML%20Engineer"
            >
              Apply
            </a>
          </div>
          <div className="role-row">
            <h3>Product Designer</h3>
            <span className="meta">Remote / Any hub</span>
            <span className="meta">Design · Contract</span>
            <a
              className="btn btn-ghost apply"
              href="mailto:hello@racoai.io?subject=Product%20Designer"
            >
              Apply
            </a>
          </div>
        </div>
      </section>

      {/* ============================== 02 · WHY RACO ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">02</span> Why RACO
            </p>
            <h2>What you get here.</h2>
          </div>
          <div className="principles">
            <div className="principle">
              <span className="no">W-01</span>
              <h3>Real models, real stakes</h3>
              <p>
                Work on APOLO, CASPER, and RACO-BEAST — not prompt-wrapping. Your
                work ships in live products across three continents.
              </p>
            </div>
            <div className="principle">
              <span className="no">W-02</span>
              <h3>Founding-team leverage</h3>
              <p>
                Early enough that your decisions become the company&apos;s
                defaults.
              </p>
            </div>
            <div className="principle">
              <span className="no">W-03</span>
              <h3>Two-continent rhythm</h3>
              <p>Bristol strategy, Dhaka engineering. The sun never sets on the build.</p>
            </div>
            <div className="principle">
              <span className="no">W-04</span>
              <h3>A national mission</h3>
              <p>
                Help build Bangladesh&apos;s first true AI revolution. That&apos;s
                a career-defining line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 03 · APPLY ============================== */}
      <section className="cta-block">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">03</span> Apply
          </p>
          <h2>Don&apos;t see your role? Convince us we need it.</h2>
          <a
            className="btn btn-solid"
            href="mailto:hello@racoai.io?subject=Open%20application"
          >
            Send an open application
          </a>
        </div>
      </section>
    </>
  );
}

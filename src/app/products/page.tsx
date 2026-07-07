import type { Metadata } from "next";
import ChromeWord from "@/components/ChromeWord";

export const metadata: Metadata = {
  title: "Lab & Products — RACO AI Technologies",
  description:
    "APOLO, CASPER, RACO-BEAST, the RACO workspace, and AIVIT voice API — proprietary technology built and owned in-house.",
};

export default function ProductsPage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">THE LAB</span> Proprietary technology &amp;
            products
          </p>
          <h1>
            Intelligence beyond the <ChromeWord>chat window</ChromeWord>.
          </h1>
          <p className="lead" style={{ marginTop: 26 }}>
            Language models are only the beginning. Our Lab trains a family of
            in-house models built for the physical and operational world — and
            ships them as products.
          </p>
        </div>
      </section>

      {/* ============================== 01 · CORE TECH ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">01</span> Core technology
            </p>
            <h2>The brain, the voice, the hands.</h2>
          </div>
          <div className="prod-row">
            <span className="no">MDL-01</span>
            <h3>APOLO</h3>
            <p className="desc">
              Proprietary LLM purpose-built for enterprise reasoning, emotional
              intelligence, document understanding, and intelligent task
              execution.
            </p>
            <span className="cat">Reasoning LLM</span>
          </div>
          <div className="prod-row">
            <span className="no">MDL-02</span>
            <h3>CASPER</h3>
            <p className="desc">
              Proprietary voice AI — natural speech synthesis and understanding
              for real-time conversational interfaces. Powers AIVIT and our Voice
              AI Solutions line.
            </p>
            <span className="cat">Voice model</span>
          </div>
          <div className="prod-row">
            <span className="no">SYS-01</span>
            <h3>RACO-BEAST</h3>
            <p className="desc">
              Intelligent agent orchestration system coordinating multi-agent
              workflows, tool use, and autonomous decision-making at scale.
            </p>
            <span className="cat">Agentic orchestration</span>
          </div>
        </div>
      </section>

      {/* ============================== 02 · FLAGSHIP PRODUCTS ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">02</span> Flagship products
            </p>
            <h2>Deployed across three continents.</h2>
          </div>
          <div className="prod-row">
            <span className="no">APP-01</span>
            <h3>
              RACO<span className="flag">Flagship</span>
            </h3>
            <p className="desc">
              Our flagship SaaS workspace for workflow orchestration — agentic
              assistant, projects, tasks, editable memory, and custom skills.
              Desktop &amp; mobile.
            </p>
            <span className="cat">The Workspace</span>
          </div>
          <div className="prod-row">
            <span className="no">APP-02</span>
            <h3>AIVIT</h3>
            <p className="desc">
              High-fidelity voice API — our direct competitor to ElevenLabs.
              Text-to-speech, transcription, and real-time voice agents, built on
              CASPER.
            </p>
            <span className="cat">The Voice SaaS</span>
          </div>
        </div>
      </section>

      {/* ============================== 03 · APPLIED RESEARCH ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">03</span> Applied model research
            </p>
            <h2>
              Always in <ChromeWord>motion</ChromeWord>.
            </h2>
            <p className="lead">
              Compact, efficient, purpose-built models for environments where
              general-purpose AI falls short. Every model and architecture is a
              living system — continuously trained, evaluated, and improved as
              the frontier moves.
            </p>
          </div>
          <div className="research-grid">
            <div className="research">
              <span className="k">Small Language Models</span>
              <h3>Niche SLMs</h3>
              <p>
                Compact, domain-tuned language models for specialized verticals —
                fast, private, deployable on-premise or at the edge.
              </p>
            </div>
            <div className="research">
              <span className="k">Embodied Intelligence</span>
              <h3>Real-World Models for Robotics &amp; Vehicles</h3>
              <p>
                Perception, spatial reasoning, and control research for the next
                generation of robotics and automotive systems.
              </p>
            </div>
            <div className="research">
              <span className="k">Computer Vision</span>
              <h3>Smart Camera Vision</h3>
              <p>
                Real-time detection, tracking, and scene understanding for
                security, retail analytics, and industrial monitoring.
              </p>
            </div>
            <div className="research">
              <span className="k">Autonomy &amp; Logistics</span>
              <h3>Drone &amp; Smart Routing Models</h3>
              <p>
                Navigation and optimization models for aerial systems and
                logistics — routing that adapts in real time.
              </p>
            </div>
            <div className="research">
              <span className="k">Consumer Intelligence</span>
              <h3>Lifestyle Tech Models</h3>
              <p>
                Personal, adaptive models for wearables, connected living, and
                daily routines.
              </p>
            </div>
            <div className="research">
              <span className="k">Agentic Intelligence</span>
              <h3>Agentic Architectures</h3>
              <p>
                Multi-agent coordination, tool use, planning, and memory — the
                architectures that let AI act, not just answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 04 · ACCESS ============================== */}
      <section className="cta-block">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">04</span> Access
          </p>
          <h2>Private AI, trained on your company&apos;s data.</h2>
          <p className="lead" style={{ marginBottom: 34 }}>
            Per-seat plans with custom intelligence — on-premise or cloud, with
            privacy held as non-negotiable.
          </p>
          <a className="btn btn-solid" href="mailto:hello@racoai.io">
            Request access
          </a>
        </div>
      </section>
    </>
  );
}

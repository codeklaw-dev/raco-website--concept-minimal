import type { Metadata } from "next";
import ChromeWord from "@/components/ChromeWord";

export const metadata: Metadata = {
  title: "Research — Model & Agent Evaluations | RACO AI Technologies",
  description:
    "Measured, not marketed. Performance data from our internal evaluation harness across APOLO, CASPER, and RACO-BEAST.",
};

export default function ResearchPage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">RESEARCH</span> Model &amp; agent evaluations
          </p>
          <h1>
            Measured, not <ChromeWord>marketed</ChromeWord>.
          </h1>
          <p className="lead" style={{ marginTop: 26 }}>
            Performance data from our internal evaluation harness across APOLO,
            CASPER, and RACO-BEAST. Every model is a living system —
            continuously trained, evaluated, and improved as the frontier moves.
          </p>
        </div>
      </section>

      {/* ============================== 01 · APOLO ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">01</span> APOLO — Language model evaluations
            </p>
            <h2>Built for the enterprise. Benchmarked against the frontier.</h2>
          </div>

          <div className="chart-card">
            <div className="chart-head">
              <h3>Benchmark suite comparison</h3>
              <span className="unit">Score / 100 · higher is better</span>
            </div>
            <p className="chart-sub">
              APOLO 1.1 against a frontier-model average and an open-source
              70B-class baseline, across our four enterprise evaluation suites.
              APOLO is trained with an explicit focus on emotional intelligence
              and human understanding — the EQ suite is where that shows.
            </p>
            <div className="legend">
              <span>
                <i className="sw-apolo"></i>APOLO 1.1
              </span>
              <span>
                <i className="sw-frontier"></i>Frontier avg
              </span>
              <span>
                <i className="sw-oss"></i>OSS 70B class
              </span>
            </div>
            <div className="vbars">
              <div className="vgroup">
                <div className="bars-inner">
                  <div
                    className="vbar apolo"
                    style={{ height: "78.4%" }}
                    data-tip="<b>APOLO 1.1</b><br>Enterprise Reasoning: 78.4<br>5-run median, temp 0"
                  ></div>
                  <div
                    className="vbar frontier"
                    style={{ height: "82.1%" }}
                    data-tip="<b>Frontier avg</b><br>Enterprise Reasoning: 82.1"
                  ></div>
                  <div
                    className="vbar oss"
                    style={{ height: "64.3%" }}
                    data-tip="<b>OSS 70B class</b><br>Enterprise Reasoning: 64.3"
                  ></div>
                </div>
              </div>
              <div className="vgroup">
                <div className="bars-inner">
                  <div
                    className="vbar apolo"
                    style={{ height: "88.2%" }}
                    data-tip="<b>APOLO 1.1</b><br>Emotional Intelligence: 88.2<br>Our differentiating suite"
                  ></div>
                  <div
                    className="vbar frontier"
                    style={{ height: "81.5%" }}
                    data-tip="<b>Frontier avg</b><br>Emotional Intelligence: 81.5"
                  ></div>
                  <div
                    className="vbar oss"
                    style={{ height: "66.9%" }}
                    data-tip="<b>OSS 70B class</b><br>Emotional Intelligence: 66.9"
                  ></div>
                </div>
              </div>
              <div className="vgroup">
                <div className="bars-inner">
                  <div
                    className="vbar apolo"
                    style={{ height: "84.6%" }}
                    data-tip="<b>APOLO 1.1</b><br>Document Understanding: 84.6"
                  ></div>
                  <div
                    className="vbar frontier"
                    style={{ height: "85.0%" }}
                    data-tip="<b>Frontier avg</b><br>Document Understanding: 85.0"
                  ></div>
                  <div
                    className="vbar oss"
                    style={{ height: "71.2%" }}
                    data-tip="<b>OSS 70B class</b><br>Document Understanding: 71.2"
                  ></div>
                </div>
              </div>
              <div className="vgroup">
                <div className="bars-inner">
                  <div
                    className="vbar apolo"
                    style={{ height: "86.1%" }}
                    data-tip="<b>APOLO 1.1</b><br>Instruction Following: 86.1"
                  ></div>
                  <div
                    className="vbar frontier"
                    style={{ height: "88.4%" }}
                    data-tip="<b>Frontier avg</b><br>Instruction Following: 88.4"
                  ></div>
                  <div
                    className="vbar oss"
                    style={{ height: "74.8%" }}
                    data-tip="<b>OSS 70B class</b><br>Instruction Following: 74.8"
                  ></div>
                </div>
              </div>
            </div>
            <div className="vlabels">
              <span>Enterprise Reasoning</span>
              <span>Emotional Intelligence</span>
              <span>Document Understanding</span>
              <span>Instruction Following</span>
            </div>
            <p className="placeholder-note">
              Illustrative placeholder data — pending internal eval publication
            </p>
          </div>

          <div className="chart-card">
            <div className="chart-head">
              <h3>Composite eval index across APOLO versions</h3>
              <span className="unit">Index / 100 · internal harness</span>
            </div>
            <p className="chart-sub">
              Aggregate performance across all four suites, tracked per release.
              Hover the points for release detail.
            </p>
            <svg
              className="linechart"
              viewBox="0 0 640 250"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="APOLO composite eval index by version"
            >
              <line className="grid" x1="50" y1="20" x2="620" y2="20" />
              <text className="axis-lbl" x="14" y="24">
                100
              </text>
              <line className="grid" x1="50" y1="70" x2="620" y2="70" />
              <text className="axis-lbl" x="22" y="74">
                75
              </text>
              <line className="grid" x1="50" y1="120" x2="620" y2="120" />
              <text className="axis-lbl" x="22" y="124">
                50
              </text>
              <line className="grid" x1="50" y1="170" x2="620" y2="170" />
              <text className="axis-lbl" x="22" y="174">
                25
              </text>
              <line className="grid" x1="50" y1="220" x2="620" y2="220" />
              <text className="axis-lbl" x="30" y="224">
                0
              </text>
              <polyline className="series" points="120,98 280,84 440,68 600,52" />
              <circle
                className="pt"
                cx="120"
                cy="98"
                r="6"
                data-tip="<b>APOLO 0.8</b><br>Composite index: 61.0<br>Q3 2025"
              ></circle>
              <circle
                className="pt"
                cx="280"
                cy="84"
                r="6"
                data-tip="<b>APOLO 0.9</b><br>Composite index: 68.0<br>Q4 2025"
              ></circle>
              <circle
                className="pt"
                cx="440"
                cy="68"
                r="6"
                data-tip="<b>APOLO 1.0</b><br>Composite index: 76.0<br>Q1 2026"
              ></circle>
              <circle
                className="pt"
                cx="600"
                cy="52"
                r="6"
                data-tip="<b>APOLO 1.1</b><br>Composite index: 84.0<br>Q2 2026 — current"
              ></circle>
              <text className="axis-lbl" x="106" y="242">
                v0.8
              </text>
              <text className="axis-lbl" x="266" y="242">
                v0.9
              </text>
              <text className="axis-lbl" x="426" y="242">
                v1.0
              </text>
              <text className="axis-lbl" x="586" y="242">
                v1.1
              </text>
            </svg>
            <p className="placeholder-note">
              Illustrative placeholder data — pending internal eval publication
            </p>
          </div>
        </div>
      </section>

      {/* ============================== 02 · CASPER ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">02</span> CASPER — Voice model evaluations
            </p>
            <h2>Heard, understood, answered — in real time.</h2>
          </div>

          <div className="chart-card">
            <div className="chart-head">
              <h3>Speech recognition — word error rate</h3>
              <span className="unit">WER % · lower is better</span>
            </div>
            <p className="chart-sub">
              CASPER STT against a leading open-source transcription baseline
              across three audio conditions.
            </p>
            <div className="legend">
              <span>
                <i className="sw-casper"></i>CASPER
              </span>
              <span>
                <i className="sw-base"></i>OSS baseline
              </span>
            </div>
            <div className="vbars" style={{ height: 220 }}>
              <div className="vgroup">
                <div className="bars-inner">
                  <div
                    className="vbar casper"
                    style={{ height: "28%" }}
                    data-tip="<b>CASPER</b><br>Clean audio WER: 4.2%"
                  ></div>
                  <div
                    className="vbar base"
                    style={{ height: "34%" }}
                    data-tip="<b>OSS baseline</b><br>Clean audio WER: 5.1%"
                  ></div>
                </div>
              </div>
              <div className="vgroup">
                <div className="bars-inner">
                  <div
                    className="vbar casper"
                    style={{ height: "58%" }}
                    data-tip="<b>CASPER</b><br>Noisy audio WER: 8.7%"
                  ></div>
                  <div
                    className="vbar base"
                    style={{ height: "69%" }}
                    data-tip="<b>OSS baseline</b><br>Noisy audio WER: 10.4%"
                  ></div>
                </div>
              </div>
              <div className="vgroup">
                <div className="bars-inner">
                  <div
                    className="vbar casper"
                    style={{ height: "46%" }}
                    data-tip="<b>CASPER</b><br>Accented speech WER: 6.9%<br>incl. South Asian English"
                  ></div>
                  <div
                    className="vbar base"
                    style={{ height: "59%" }}
                    data-tip="<b>OSS baseline</b><br>Accented speech WER: 8.8%"
                  ></div>
                </div>
              </div>
            </div>
            <div className="vlabels">
              <span>Clean</span>
              <span>Noisy</span>
              <span>Accented</span>
            </div>
            <p className="placeholder-note">
              Illustrative placeholder data — pending internal eval publication
            </p>
          </div>

          <div className="chart-card">
            <div className="chart-head">
              <h3>Speech synthesis — key metrics</h3>
              <span className="unit">Hover for method</span>
            </div>
            <div
              className="tile-band"
              style={{ border: "none", borderTop: "1px solid #e7e7e3" }}
            >
              <div
                className="tile"
                data-tip="<b>Time to first byte</b><br>p50, streaming synthesis<br>UK region endpoint"
              >
                <span className="v">
                  320<span style={{ fontSize: ".45em" }}>ms</span>
                </span>
                <span className="k">TTFB · p50</span>
              </div>
              <div
                className="tile"
                data-tip="<b>Mean Opinion Score</b><br>Naturalness, 1–5 scale<br>Blind panel, n=placeholder"
              >
                <span className="v">4.31</span>
                <span className="k">MOS naturalness</span>
              </div>
              <div
                className="tile"
                data-tip="<b>Real-time factor</b><br>Synthesis speed vs audio length<br>Lower is faster"
              >
                <span className="v">0.18</span>
                <span className="k">Real-time factor</span>
              </div>
              <div
                className="tile"
                data-tip="<b>Full-duplex</b><br>Simultaneous STT + TTS<br>for live conversation"
              >
                <span className="v">Duplex</span>
                <span className="k">Conversation mode</span>
              </div>
            </div>
            <p className="placeholder-note">
              Illustrative placeholder data — pending internal eval publication
            </p>
          </div>
        </div>
      </section>

      {/* ============================== 03 · RACO-BEAST ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">03</span> RACO-BEAST — Agent evaluations
            </p>
            <h2>Architectures that act, not just answer.</h2>
          </div>

          <div className="chart-card">
            <div className="chart-head">
              <h3>End-to-end task completion by workflow category</h3>
              <span className="unit">Completion % · human-verified</span>
            </div>
            <p className="chart-sub">
              Multi-step business workflows executed by RACO-BEAST-orchestrated
              agents in production-mirror environments, with human-in-the-loop
              approval gates. Hover a bar for run detail.
            </p>
            <div className="hbar-row">
              <span className="lbl">Scheduling &amp; calendar ops</span>
              <div className="hbar-track">
                <div
                  className="hbar-fill"
                  style={{ width: "96.5%" }}
                  data-tip="<b>Scheduling</b><br>96.5% completion<br>n = placeholder runs"
                ></div>
              </div>
              <span className="val">96.5</span>
            </div>
            <div className="hbar-row">
              <span className="lbl">Lead qualification</span>
              <div className="hbar-track">
                <div
                  className="hbar-fill"
                  style={{ width: "94.2%" }}
                  data-tip="<b>Lead qualification</b><br>94.2% completion<br>n = placeholder runs"
                ></div>
              </div>
              <span className="val">94.2</span>
            </div>
            <div className="hbar-row">
              <span className="lbl">Report generation</span>
              <div className="hbar-track">
                <div
                  className="hbar-fill"
                  style={{ width: "92.7%" }}
                  data-tip="<b>Report generation</b><br>92.7% completion<br>n = placeholder runs"
                ></div>
              </div>
              <span className="val">92.7</span>
            </div>
            <div className="hbar-row">
              <span className="lbl">Invoice processing</span>
              <div className="hbar-track">
                <div
                  className="hbar-fill"
                  style={{ width: "91.8%" }}
                  data-tip="<b>Invoice processing</b><br>91.8% completion<br>n = placeholder runs"
                ></div>
              </div>
              <span className="val">91.8</span>
            </div>
            <div className="hbar-row">
              <span className="lbl">Support triage</span>
              <div className="hbar-track">
                <div
                  className="hbar-fill"
                  style={{ width: "89.3%" }}
                  data-tip="<b>Support triage</b><br>89.3% completion<br>n = placeholder runs"
                ></div>
              </div>
              <span className="val">89.3</span>
            </div>
            <p className="placeholder-note">
              Illustrative placeholder data — pending internal eval publication
            </p>
          </div>
        </div>
      </section>

      {/* ============================== 04 · METHODOLOGY ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">04</span> Methodology
            </p>
            <h2>How we evaluate.</h2>
          </div>
          <div className="principles">
            <div className="principle">
              <span className="no">M-01</span>
              <h3>Reproducible harness</h3>
              <p>
                All language evals run at temperature 0, 5-run median, fixed
                prompts, versioned datasets. Agent evals run in production-mirror
                sandboxes.
              </p>
            </div>
            <div className="principle">
              <span className="no">M-02</span>
              <h3>Human verification</h3>
              <p>
                Agent task completion is human-verified, not self-reported. A
                task counts as complete only when the output passes the same
                review a client would apply.
              </p>
            </div>
            <div className="principle">
              <span className="no">M-03</span>
              <h3>Honest baselines</h3>
              <p>
                We benchmark against the strongest available frontier and
                open-source baselines at time of evaluation, and we publish where
                we lose, not just where we win.
              </p>
            </div>
            <div className="principle">
              <span className="no">M-04</span>
              <h3>Living systems</h3>
              <p>
                None of this stands still. Every model and architecture is
                continuously trained, evaluated, and improved as the frontier
                moves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 05 · COLLABORATE ============================== */}
      <section className="cta-block">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">05</span> Collaborate
          </p>
          <h2>Research partnerships and eval access.</h2>
          <p className="lead" style={{ marginBottom: 34 }}>
            Working on agentic architectures, voice, or applied SLMs? Our Lab
            collaborates with researchers and enterprise partners.
          </p>
          <a
            className="btn btn-solid"
            href="mailto:hello@racoai.io?subject=Research"
          >
            Contact the Lab
          </a>
        </div>
      </section>
    </>
  );
}

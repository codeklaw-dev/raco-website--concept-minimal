import type { Metadata } from "next";
import ChromeWord from "@/components/ChromeWord";

export const metadata: Metadata = {
  title: "Services — The Full Catalog | RACO AI Technologies",
  description:
    "Twelve services, one proprietary engine behind every project — from AI Transformation to Managed AI and a dedicated software division.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">SERVICES</span> The full catalog
          </p>
          <h1>
            Business transformation through <ChromeWord>intelligent</ChromeWord>{" "}
            systems.
          </h1>
          <p className="lead" style={{ marginTop: 26 }}>
            You&apos;re not buying chatbots. You&apos;re buying back every hour
            your team loses to manual work, every lead that goes cold overnight,
            and every decision made blind — twelve services, one proprietary
            engine behind every project.
          </p>
        </div>
      </section>

      {/* ============================== 01 · CATALOG ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">01</span> Services catalog
            </p>
            <h2>Twelve ways in.</h2>
          </div>

          <div className="svc-row">
            <span className="no">01</span>
            <div>
              <h3>
                AI Transformation<span className="flag">Flagship</span>
              </h3>
              <span className="who">Premium offering</span>
            </div>
            <div>
              <p>We don&apos;t just build chatbots — we redesign how your company operates using AI.</p>
              <ul>
                <li>AI strategy &amp; opportunity assessment</li>
                <li>Process redesign &amp; ROI forecasting</li>
                <li>Strategy document, roadmap &amp; executive workshops</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">02</span>
            <div>
              <h3>Custom AI Systems</h3>
              <span className="who">Where our stack shines</span>
            </div>
            <div>
              <p>Completely bespoke AI systems built on your internal data.</p>
              <ul>
                <li>AI copilots &amp; internal knowledge assistants</li>
                <li>Industry-specific assistants — legal, healthcare, finance, HR, procurement, manufacturing</li>
                <li>Powered by LLMs, RAG, knowledge bases &amp; APIs</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">03</span>
            <div>
              <h3>AI Agent Development</h3>
              <span className="who">Entire AI workforces</span>
            </div>
            <div>
              <p>Deploying AI workforces, not isolated single agents.</p>
              <ul>
                <li>Sales — SDR agents, lead qualification, proposal generation</li>
                <li>Marketing — content, SEO, campaign management</li>
                <li>HR, finance, operations &amp; support agents</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">04</span>
            <div>
              <h3>Voice AI Solutions</h3>
              <span className="who">On proprietary voice models</span>
            </div>
            <div>
              <p>A specialized offering leveraging CASPER, our advanced proprietary voice model.</p>
              <ul>
                <li>AI receptionists &amp; call-center automation</li>
                <li>Appointment booking &amp; sales callers</li>
                <li>Support, follow-up &amp; outbound campaigns</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">05</span>
            <div>
              <h3>Intelligent Automation</h3>
              <span className="who">Deep workflow engineering</span>
            </div>
            <div>
              <p>Beyond conversational AI into workflow execution.</p>
              <ul>
                <li>CRM &amp; document automation</li>
                <li>Email &amp; approval workflows</li>
                <li>Finance/HR processes &amp; ERP synchronization</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">06</span>
            <div>
              <h3>Custom Software Development</h3>
              <span className="who">Dedicated division</span>
            </div>
            <div>
              <p>Many clients need robust software before they can fully leverage AI.</p>
              <ul>
                <li>Web applications &amp; SaaS platforms</li>
                <li>Dashboards, client portals &amp; mobile apps</li>
                <li>Cloud infrastructure &amp; APIs — all built AI-ready</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">07</span>
            <div>
              <h3>AI Product Development</h3>
              <span className="who">For startups &amp; innovators</span>
            </div>
            <div>
              <p>Your dedicated AI engineering team — we build the AI products you take to market.</p>
              <ul>
                <li>AI-native SaaS &amp; marketplaces</li>
                <li>AI CRMs &amp; healthcare systems</li>
                <li>Education &amp; fintech platforms</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">08</span>
            <div>
              <h3>Enterprise Integrations</h3>
              <span className="who">Connect the AI layer</span>
            </div>
            <div>
              <p>Across your entire software ecosystem.</p>
              <ul>
                <li>Salesforce, SAP &amp; Oracle</li>
                <li>Microsoft 365 &amp; Google Workspace</li>
                <li>Slack, Teams &amp; HubSpot</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">09</span>
            <div>
              <h3>AI Operations (Managed AI)</h3>
              <span className="who">Recurring partnership</span>
            </div>
            <div>
              <p>After deployment, we stay involved as your Managed AI provider.</p>
              <ul>
                <li>Monitoring, updates &amp; security</li>
                <li>Prompt &amp; agent improvements</li>
                <li>Cost optimization &amp; new features</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">10</span>
            <div>
              <h3>AI Training &amp; Enablement</h3>
              <span className="who">Adoption, not just purchase</span>
            </div>
            <div>
              <p>Bridging the gap between buying AI and using it effectively.</p>
              <ul>
                <li>Executive workshops &amp; team training</li>
                <li>Governance &amp; compliance frameworks</li>
                <li>Prompt engineering &amp; documentation</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">11</span>
            <div>
              <h3>Research &amp; Innovation Lab</h3>
              <span className="who">Innovation partner</span>
            </div>
            <div>
              <p>Prototyping emerging AI for unprecedented problems.</p>
              <ul>
                <li>Computer vision &amp; robotics integration</li>
                <li>Digital humans &amp; multi-agent systems</li>
                <li>Predictive AI &amp; autonomous workflows</li>
              </ul>
            </div>
          </div>

          <div className="svc-row">
            <span className="no">12</span>
            <div>
              <h3>Industry Solutions</h3>
              <span className="who">Tailored by sector</span>
            </div>
            <div>
              <p>Marketing by sector rather than by technology.</p>
              <ul>
                <li>Healthcare, legal &amp; real estate</li>
                <li>Manufacturing, retail &amp; logistics</li>
                <li>Hospitality, education, construction &amp; financial services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 02 · ENGAGEMENTS ============================== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              <span className="idx">02</span> How engagements run
            </p>
            <h2>Long-term. High-touch. Compounding.</h2>
          </div>
          <div className="engage-grid">
            <div className="engage">
              <span className="k">ENG-01</span>
              <h3>Transform</h3>
              <p>
                Start with AI Transformation — strategy, opportunity assessment,
                and a roadmap with forecast ROI.
              </p>
            </div>
            <div className="engage">
              <span className="k">ENG-02</span>
              <h3>Build</h3>
              <p>
                AI Engineering and Software Engineering deliver the systems —
                agents, automations, voice, and custom software.
              </p>
            </div>
            <div className="engage">
              <span className="k">ENG-03</span>
              <h3>Operate</h3>
              <p>
                Managed AI keeps it improving — monitoring, governance,
                optimization, and continuous model improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 03 · START ============================== */}
      <section className="cta-block">
        <div className="wrap">
          <p className="eyebrow">
            <span className="idx">03</span> Start
          </p>
          <h2>Every quarter on legacy systems widens the gap.</h2>
          <div className="hero-actions">
            <a className="btn btn-solid" href="mailto:hello@racoai.io">
              Let&apos;s build your advantage
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

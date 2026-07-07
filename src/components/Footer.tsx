import Link from "next/link";

/**
 * Footer — shared site footer. Server component.
 */
export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <p className="k">RACO AI Technologies Ltd</p>
            <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: "34ch" }}>
              Digitally transforming businesses with Custom Software and Private
              AI.
            </p>
          </div>
          <div>
            <p className="k">Company</p>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/products">Lab &amp; Products</Link>
            <Link href="/research">Research</Link>
            <Link href="/services">Services</Link>
          </div>
          <div>
            <p className="k">Bristol — HQ</p>
            <p className="addr">
              Beacon Tower, Bristol City Center
              <br />
              DeskLodge, Colston St
              <br />
              Bristol BS1 4XE
            </p>
            <a href="tel:+447405528294">+44 7405 528294</a>
          </div>
          <div>
            <p className="k">Dhaka — Engineering</p>
            <p className="addr">
              House-40, Shahajalal Ave
              <br />
              Dhaka, Bangladesh
            </p>
            <a href="tel:+8801343831119">+880 1343-831119</a>
            <a href="mailto:support@racoai.io">support@racoai.io</a>
          </div>
        </div>
        <p className="foot-tagline">
          The next move is{" "}
          <span className="chrome-word">yours</span>.
        </p>
        <div className="foot-legal">
          <span>© 2026 RACO AI Technologies Ltd</span>
          <span>Bristol · Dhaka</span>
          <a href="mailto:hello@racoai.io">hello@racoai.io</a>
        </div>
      </div>
    </footer>
  );
}

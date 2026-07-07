import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="wrap">
        <p className="eyebrow">
          <span className="idx">404</span> Off the map
        </p>
        <h1>That page never clocks in.</h1>
        <p className="lead" style={{ marginTop: 26 }}>
          The page you&apos;re looking for doesn&apos;t exist — or has moved.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-solid" href="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" href="/#contact">
            Talk to RACO
          </Link>
        </div>
      </div>
    </section>
  );
}

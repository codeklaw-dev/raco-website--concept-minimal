/**
 * ChromeWord — animated gradient "chrome sheen" text used across pages.
 * Server component. The motion is defined in globals.css under `.chrome-word`.
 */
export default function ChromeWord({
  children,
}: {
  children: React.ReactNode;
}) {
  return <span className="chrome-word">{children}</span>;
}

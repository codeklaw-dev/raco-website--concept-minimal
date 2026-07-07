"use client";

import { useEffect, useRef } from "react";

/**
 * Tooltip — global hover tooltip for any element carrying a `data-tip`
 * attribute (research charts, stat tiles, product cells).
 *
 * Faithful port of the original IIFE: delegated mouseover/mousemove/mouseout
 * on document; positions a fixed `#tip` element near the cursor and flips it
 * on screen edges. `data-tip` strings may contain HTML (e.g. <b>/<br>).
 */
export default function Tooltip() {
  const tipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tipEl = tipRef.current;
    if (!tipEl) return;
    const tip: HTMLDivElement = tipEl;

    function moveTip(e: MouseEvent) {
      const x = e.clientX + 14;
      const y = e.clientY + 14;
      const r = tip.getBoundingClientRect();
      const nx = x + r.width > window.innerWidth - 8 ? e.clientX - r.width - 14 : x;
      const ny = y + r.height > window.innerHeight - 8 ? e.clientY - r.height - 14 : y;
      tip.style.left = `${nx}px`;
      tip.style.top = `${ny}px`;
    }

    function onOver(e: MouseEvent) {
      const t = (e.target as HTMLElement | null)?.closest("[data-tip]");
      if (!t) return;
      tip.innerHTML = t.getAttribute("data-tip") ?? "";
      tip.style.opacity = "1";
      moveTip(e);
    }

    function onMove(e: MouseEvent) {
      if (tip.style.opacity === "1") moveTip(e);
    }

    function onOut(e: MouseEvent) {
      const related = e.relatedTarget as HTMLElement | null;
      if ((e.target as HTMLElement)?.closest("[data-tip]")) {
        // Hide when leaving the tip source; stay open while moving within it.
        if (!related || !related.closest("[data-tip]")) {
          tip.style.opacity = "0";
        }
      }
    }

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return <div id="tip" ref={tipRef} role="tooltip"></div>;
}

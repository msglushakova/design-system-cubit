import React from "react";

export function Card({ eyebrow, title, children, accent = false, footer, style, ...rest }) {
  return (
    <div style={{
      background: accent ? "var(--accent)" : "var(--surface-card)",
      color: accent ? "var(--text-on-accent)" : "var(--text-primary)",
      border: accent ? "1px solid transparent" : "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)", padding: "var(--space-5)",
      display: "flex", flexDirection: "column", gap: "var(--space-3)",
      boxShadow: accent ? "var(--shadow-accent)" : "var(--inner-hairline)", ...style
    }} {...rest}>
      {eyebrow && <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: accent ? "rgba(255,255,255,0.8)" : "var(--accent)" }}>{eyebrow}</div>}
      {title && <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "var(--ls-heading)", lineHeight: 1.15 }}>{title}</div>}
      {children && <div style={{ fontSize: 16, lineHeight: "var(--lh-body)", color: accent ? "rgba(255,255,255,0.9)" : "var(--text-secondary)" }}>{children}</div>}
      {footer && <div style={{ marginTop: "auto", paddingTop: "var(--space-3)" }}>{footer}</div>}
    </div>
  );
}

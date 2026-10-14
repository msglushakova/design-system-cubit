import React from "react";

export function Badge({ tone = "accent", children, style, ...rest }) {
  const tones = {
    accent: { background: "var(--accent-soft)", color: "var(--accent)" },
    neutral: { background: "var(--surface-card)", color: "var(--text-secondary)" },
    success: { background: "rgba(59,174,107,0.16)", color: "var(--success)" },
    solid: { background: "var(--accent)", color: "var(--text-on-accent)" }
  }[tone];
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: "var(--radius-pill)", fontSize: 12, fontWeight: 600, letterSpacing: "0.02em", ...tones, ...style }} {...rest}>{children}</span>;
}

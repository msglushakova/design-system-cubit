import React from "react";

const base = {
  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
  fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: "0.01em",
  border: "1px solid transparent", borderRadius: "var(--radius-pill)",
  cursor: "pointer", textDecoration: "none", whiteSpace: "nowrap",
  transition: "background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)"
};
const sizes = {
  sm: { fontSize: 14, padding: "8px 16px" },
  md: { fontSize: 16, padding: "12px 24px" },
  lg: { fontSize: 18, padding: "16px 32px" }
};
const variants = {
  primary: { background: "var(--accent)", color: "var(--text-on-accent)" },
  secondary: { background: "transparent", color: "var(--text-primary)", borderColor: "var(--border-strong)" },
  ghost: { background: "transparent", color: "var(--text-secondary)" },
  inverse: { background: "var(--text-primary)", color: "var(--ink-900)" }
};

export function Button({ variant = "primary", size = "md", disabled, href, icon, children, style, ...rest }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      disabled={!href ? disabled : undefined}
      style={{ ...base, ...sizes[size], ...variants[variant], opacity: disabled ? 0.4 : 1, pointerEvents: disabled ? "none" : undefined, ...style }}
      {...rest}
    >
      {icon}
      {children}
    </Tag>
  );
}

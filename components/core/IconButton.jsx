import React from "react";

export function IconButton({ label, size = 40, variant = "secondary", children, style, ...rest }) {
  const v = {
    primary: { background: "var(--accent)", color: "var(--text-on-accent)", borderColor: "transparent" },
    secondary: { background: "var(--surface-card)", color: "var(--text-primary)", borderColor: "var(--border-subtle)" },
    ghost: { background: "transparent", color: "var(--text-secondary)", borderColor: "transparent" }
  }[variant];
  return (
    <button aria-label={label} style={{
      width: size, height: size, display: "inline-flex", alignItems: "center", justifyContent: "center",
      borderRadius: "var(--radius-pill)", border: "1px solid", cursor: "pointer",
      transition: "background var(--duration-base) var(--ease-standard)", ...v, ...style
    }} {...rest}>{children}</button>
  );
}

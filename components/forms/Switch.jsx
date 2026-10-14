import React from "react";

export function Switch({ label, checked, onChange, style, ...rest }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 16, ...style }}>
      <span onClick={() => onChange && onChange(!checked)} style={{
        width: 44, height: 26, borderRadius: "var(--radius-pill)", padding: 3,
        background: checked ? "var(--accent)" : "var(--border-strong)",
        transition: "background var(--duration-base) var(--ease-standard)", display: "inline-flex"
      }} {...rest}>
        <span style={{ width: 20, height: 20, borderRadius: "var(--radius-pill)", background: "#fff", transform: checked ? "translateX(18px)" : "none", transition: "transform var(--duration-base) var(--ease-standard)" }} />
      </span>
      {label}
    </label>
  );
}

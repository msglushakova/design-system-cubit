import React from "react";

export function Checkbox({ label, checked, onChange, style, ...rest }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-primary)", ...style }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ appearance: "none", width: 20, height: 20, margin: 0, borderRadius: "var(--radius-sm)", border: "1px solid var(--border-strong)", background: checked ? "var(--accent)" : "transparent", display: "grid", placeItems: "center", cursor: "pointer" }} {...rest} />
      {checked && <span style={{ position: "absolute", width: 20, textAlign: "center", color: "#fff", fontSize: 13, pointerEvents: "none" }}>✓</span>}
      {label}
    </label>
  );
}

import React from "react";

export function Select({ label, options = [], style, ...rest }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-body)" }}>
      {label && <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{label}</span>}
      <select style={{
        background: "var(--bg-sunken)", color: "var(--text-primary)", border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)", padding: "12px 14px", fontSize: 16, fontFamily: "inherit", outline: "none", ...style
      }} {...rest}>
        {options.map(o => typeof o === "string" ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}

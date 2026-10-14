import React from "react";

export function Input({ label, hint, error, style, ...rest }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-body)" }}>
      {label && <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{label}</span>}
      <input style={{
        background: "var(--bg-sunken)", color: "var(--text-primary)",
        border: "1px solid " + (error ? "var(--danger)" : "var(--border-subtle)"),
        borderRadius: "var(--radius-md)", padding: "12px 14px", fontSize: 16,
        fontFamily: "inherit", outline: "none", ...style
      }} {...rest} />
      {(error || hint) && <span style={{ fontSize: 12, color: error ? "var(--danger)" : "var(--text-muted)" }}>{error || hint}</span>}
    </label>
  );
}

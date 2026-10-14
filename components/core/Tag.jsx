import React from "react";

export function Tag({ children, onRemove, style, ...rest }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-sm)", fontSize: 14, color: "var(--text-secondary)", fontFamily: "var(--font-mono)", ...style }} {...rest}>
      {children}
      {onRemove && <button onClick={onRemove} aria-label="Удалить" style={{ background: "none", border: 0, color: "var(--text-muted)", cursor: "pointer", fontSize: 14, lineHeight: 1 }}>×</button>}
    </span>
  );
}

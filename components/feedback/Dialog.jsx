import React from "react";

export function Dialog({ open, title, children, actions, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)", display: "grid", placeItems: "center", padding: 24, zIndex: 50 }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: "min(520px, 100%)", background: "var(--bg-elevated)", color: "var(--text-primary)",
        border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-raised)",
        padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-4)", fontFamily: "var(--font-body)"
      }}>
        {title && <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "var(--ls-heading)" }}>{title}</div>}
        <div style={{ fontSize: 16, lineHeight: "var(--lh-body)", color: "var(--text-secondary)" }}>{children}</div>
        {actions && <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>{actions}</div>}
      </div>
    </div>
  );
}

import React from "react";

export function Tabs({ items = [], value, onChange, style }) {
  return (
    <div role="tablist" style={{ display: "flex", gap: 4, borderBottom: "1px solid var(--border-subtle)", ...style }}>
      {items.map(it => {
        const key = typeof it === "string" ? it : it.value;
        const label = typeof it === "string" ? it : it.label;
        const active = key === value;
        return (
          <button key={key} role="tab" aria-selected={active} onClick={() => onChange && onChange(key)} style={{
            background: "none", border: 0, borderBottom: "2px solid " + (active ? "var(--accent)" : "transparent"),
            color: active ? "var(--text-primary)" : "var(--text-muted)",
            padding: "10px 16px", fontSize: 16, fontWeight: 600, fontFamily: "var(--font-body)", cursor: "pointer",
            transition: "color var(--duration-base) var(--ease-standard)"
          }}>{label}</button>
        );
      })}
    </div>
  );
}

import React from "react";

export function Ticks({ items, className = "", ...rest }) {
  return (
    <ul className={`ss-ticks ${className}`} {...rest}>
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  );
}

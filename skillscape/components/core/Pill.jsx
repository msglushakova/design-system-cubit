import React from "react";

const labels = { ok: "Готово", beta: "Бета", soon: "Скоро", warn: "Срок" };

export function Pill({ status = "ok", children, className = "", ...rest }) {
  return <span className={`ss-pill ss-pill--${status} ${className}`} {...rest}>{children ?? labels[status]}</span>;
}

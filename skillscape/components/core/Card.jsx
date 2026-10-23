import React from "react";

export function Card({ tag, title, children, compact, status, className = "", ...rest }) {
  return (
    <div className={`ss-card ${compact ? "ss-card--compact" : ""} ${className}`} {...rest}>
      {tag && <div className="ss-card__tag">{tag}</div>}
      {status}
      {title && <h3>{title}</h3>}
      {children && <p>{children}</p>}
    </div>
  );
}

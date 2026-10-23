import React from "react";

export function Button({ variant = "primary", size = "md", href, icon, children, className = "", ...rest }) {
  const Tag = href ? "a" : "button";
  const cls = ["ss-btn", `ss-btn--${variant}`, size === "lg" && "ss-btn--lg", className].filter(Boolean).join(" ");
  return <Tag href={href} className={cls} {...rest}>{icon}{children}</Tag>;
}

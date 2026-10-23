import React from "react";

export function Callout({ icon, children, className = "", ...rest }) {
  return <div className={`ss-callout ${className}`} {...rest}>{icon}{children}</div>;
}

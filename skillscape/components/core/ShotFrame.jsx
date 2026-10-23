import React from "react";

export function ShotFrame({ src, alt = "", url = "skillscape.ru", className = "", ...rest }) {
  return (
    <figure className={`ss-shot ${className}`} {...rest}>
      <div className="ss-shot__bar"><i /><i /><i /><span>{url}</span></div>
      <img src={src} alt={alt} />
    </figure>
  );
}

export function PhoneFrame({ src, alt = "", className = "", ...rest }) {
  return <figure className={`ss-phone ${className}`} {...rest}><img src={src} alt={alt} /></figure>;
}

import React from "react";

export function CycleSteps({ steps, className = "", ...rest }) {
  return (
    <div className={`ss-cycle ${className}`} style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }} {...rest}>
      {steps.map((s, i) => (
        <div className="ss-step" key={i}>
          <div className={`ss-dot ${s.done ? "ss-dot--done" : ""}`}>{String(i + 1).padStart(2, "0")}</div>
          {s.label && <div className="ss-step__label">{s.label}</div>}
          <h3 className="ss-h3">{s.title}</h3>
          {s.text && <p>{s.text}</p>}
        </div>
      ))}
    </div>
  );
}

import React from "react";

const qrTile = {
  background: "#fff", borderRadius: "var(--radius-lg)", padding: 16, boxSizing: "border-box",
  boxShadow: "var(--contact-qr-shadow)"
};

export function ContactCard({ name, role, phone, email, photo, qr, layout = "row", size = 300, style, ...rest }) {
  const who = (
    <div style={{ alignSelf: "start" }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, lineHeight: 1.1, color: "var(--text-primary)" }}>{name}</div>
      {role && <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, lineHeight: 1.15, marginTop: 8, color: "var(--text-primary)" }}>{role}</div>}
      {(phone || email) && (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.6, marginTop: layout === "row" ? 28 : 12, color: "var(--text-secondary)" }}>
          {phone}{phone && email && <br />}{email}
        </div>
      )}
    </div>
  );
  const media = (
    <>
      <img src={photo} alt={name} style={{ width: size, height: size, objectFit: "cover", display: "block", borderRadius: "var(--radius-lg)" }} />
      {qr && <div style={{ ...qrTile, width: size * 0.87, height: size * 0.87 }}><img src={qr} alt="QR-визитка" style={{ width: "100%", height: "100%", display: "block" }} /></div>}
    </>
  );
  if (layout === "stack") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24, ...style }} {...rest}>
        {who}
        <div style={{ display: "flex", gap: 24, alignItems: "flex-end" }}>{media}</div>
      </div>
    );
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: `${size}px ${size * 0.87}px 1fr`, gap: 32, alignItems: "end", ...style }} {...rest}>
      {media}
      {who}
    </div>
  );
}

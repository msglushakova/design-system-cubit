import React from "react";

export function ContactCard({ name, role, phone, email, photo, qr, compact, caption = "Наведите камеру, чтобы сохранить контакт", className = "", ...rest }) {
  return (
    <div className={`ss-contact ${compact ? "ss-contact--compact" : ""} ${className}`} {...rest}>
      <img className="ss-contact__photo" src={photo} alt={name} />
      <div>
        <div className="ss-contact__name">{name}</div>
        {role && <div className="ss-contact__role">{role}</div>}
        <div className="ss-contact__list">
          {phone && <><span>Телефон</span>{phone}</>}
          {phone && email && compact && <br />}
          {email && <><span>Почта</span>{email}</>}
        </div>
      </div>
      {qr && (
        <div>
          <div className="ss-contact__qr"><img src={qr} alt="QR-визитка" /></div>
          {caption && <div className="ss-contact__cap">{caption}</div>}
        </div>
      )}
    </div>
  );
}

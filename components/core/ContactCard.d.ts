import * as React from "react";

/**
 * Визитка для финального слайда: фото, QR-визитка, имя, должность, контакты.
 * @startingPoint section="Core" subtitle="Визитка: один человек в ряд или двое столбиками" viewport="1280x420"
 */
export interface ContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role?: string;
  phone?: string;
  email?: string;
  /** Квадратное фото по плечи */
  photo: string;
  /** SVG или PNG с QR-визиткой (vCard) */
  qr?: string;
  /** row — фото, QR и текст в ряд (один человек); stack — текст сверху, фото и QR под ним (двое на слайде) */
  layout?: "row" | "stack";
  /** Сторона фото в px; QR — 0.87 от неё */
  size?: number;
}
export function ContactCard(props: ContactCardProps): JSX.Element;

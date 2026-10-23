import * as React from "react";

/**
 * Визитка: фото, имя, должность, телефон, почта и QR-визитка в одной карточке.
 * @startingPoint section="Core" subtitle="Визитка для слайда «Контакты»" viewport="1400x440"
 */
export interface ContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role?: string;
  phone?: string;
  email?: string;
  /** Квадратное фото по плечи, на светлом фоне */
  photo: string;
  /** SVG или PNG с QR-визиткой (vCard) */
  qr?: string;
  /** Уменьшенная карточка — когда на слайде двое */
  compact?: boolean;
  /** Подпись под QR; пустая строка убирает её */
  caption?: string;
}
export function ContactCard(props: ContactCardProps): JSX.Element;

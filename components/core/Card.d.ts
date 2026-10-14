import * as React from "react";

/**
 * Карточка: услуга, продукт, показатель.
 * @startingPoint section="Core" subtitle="Карточка услуги / продукта" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  /** Оранжевая заливка — не более одной карточки в группе */
  accent?: boolean;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;

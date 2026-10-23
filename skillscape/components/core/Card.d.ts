import * as React from "react";

/**
 * Карточка: тег капсом, заголовок, короткий текст.
 * @startingPoint section="Core" subtitle="Карточка проблемы / функции" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Надпись капсом бирюзовым над заголовком */
  tag?: string;
  title?: React.ReactNode;
  /** Уменьшенные отступы и кегль — для сетки из 4 карточек */
  compact?: boolean;
  /** Обычно <Pill/> */
  status?: React.ReactNode;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;

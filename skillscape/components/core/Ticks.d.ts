import * as React from "react";

/**
 * Список с круглыми галочками.
 * @startingPoint section="Core" subtitle="Список преимуществ" viewport="700x200"
 */
export interface TicksProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Пункты; <b> внутри выделяет главное */
  items: React.ReactNode[];
}
export function Ticks(props: TicksProps): JSX.Element;

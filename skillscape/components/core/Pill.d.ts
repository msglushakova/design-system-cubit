import * as React from "react";

/**
 * Пилюля статуса функции или этапа.
 * @startingPoint section="Core" subtitle="Статусы: готово / бета / скоро / срок" viewport="700x80"
 */
export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "ok" | "beta" | "soon" | "warn";
  children?: React.ReactNode;
}
export function Pill(props: PillProps): JSX.Element;

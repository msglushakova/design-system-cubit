import * as React from "react";

/**
 * Выноска с главным выводом.
 * @startingPoint section="Core" subtitle="Вывод внизу слайда" viewport="700x100"
 */
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Callout(props: CalloutProps): JSX.Element;

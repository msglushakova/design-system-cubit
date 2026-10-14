import * as React from "react";

/**
 * Основная кнопка CUBIT: капсульная форма, оранжевый primary.
 * @startingPoint section="Core" subtitle="Кнопки: primary / secondary / ghost / inverse" viewport="700x120"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Рендерит <a> вместо <button> */
  href?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;

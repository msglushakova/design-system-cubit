import * as React from "react";

/**
 * Кнопка SkillScape: скругление 10px, бирюзовый primary.
 * @startingPoint section="Core" subtitle="Кнопки: primary / secondary / ghost" viewport="700x120"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  /** Рендерит <a> вместо <button> */
  href?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;

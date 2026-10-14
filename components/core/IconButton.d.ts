import * as React from "react";

/** Квадратная иконочная кнопка (навигация слайдов, тулбары). */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: number;
  variant?: "primary" | "secondary" | "ghost";
  children?: React.ReactNode;
}
export function IconButton(props: IconButtonProps): JSX.Element;

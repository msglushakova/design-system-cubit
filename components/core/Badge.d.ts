import * as React from "react";

/** Маленькая метка статуса («Сделано», «В работе»). */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "accent" | "neutral" | "success" | "solid";
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;

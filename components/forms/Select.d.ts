import * as React from "react";

/** Нативный select в оформлении бренда. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  options?: Array<string | { value: string; label: string }>;
}
export function Select(props: SelectProps): JSX.Element;

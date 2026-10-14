import * as React from "react";

/** Текстовое поле с подписью и подсказкой. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}
export function Input(props: InputProps): JSX.Element;

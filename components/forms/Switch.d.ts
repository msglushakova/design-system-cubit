import * as React from "react";

/** Переключатель режима. */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;

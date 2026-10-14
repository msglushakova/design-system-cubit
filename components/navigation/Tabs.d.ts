import * as React from "react";

/**
 * Горизонтальные табы с оранжевым подчёркиванием.
 * @startingPoint section="Navigation" subtitle="Табы раздела" viewport="700x80"
 */
export interface TabsProps {
  items?: Array<string | { value: string; label: React.ReactNode }>;
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;

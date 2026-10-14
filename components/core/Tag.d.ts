import * as React from "react";

/** Технологический/тематический тег — моно, прямоугольный, в отличие от Badge. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  onRemove?: () => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;

import * as React from "react";

/**
 * Этапы процесса на линии с номерами.
 * @startingPoint section="Core" subtitle="Этапы ревью / цикл" viewport="900x220"
 */
export interface CycleStep { title: React.ReactNode; label?: string; text?: React.ReactNode; done?: boolean; }
export interface CycleStepsProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: CycleStep[];
}
export function CycleSteps(props: CycleStepsProps): JSX.Element;

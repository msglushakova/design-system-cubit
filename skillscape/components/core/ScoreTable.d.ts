import * as React from "react";

/**
 * Таблица квартальной оценки: оценки по ролям и автоматическое среднее.
 * @startingPoint section="Data" subtitle="Квартальная оценка" viewport="900x300"
 */
export interface ScoreRow { name: string; scores: number[]; }
export interface ScoreTableProps extends React.HTMLAttributes<HTMLTableElement> {
  roles: string[];
  rows: ScoreRow[];
}
export function ScoreTable(props: ScoreTableProps): JSX.Element;

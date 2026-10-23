import React from "react";

export function ScoreTable({ roles, rows, className = "", ...rest }) {
  return (
    <table className={`ss-table ${className}`} {...rest}>
      <thead><tr><th>Сотрудник</th>{roles.map(r => <th key={r}>{r}</th>)}<th>Среднее</th></tr></thead>
      <tbody>
        {rows.map(row => {
          const avg = Math.round(row.scores.reduce((a, b) => a + b, 0) / row.scores.length);
          return (
            <tr key={row.name}>
              <td style={{ color: "var(--text-primary)" }}>{row.name}</td>
              {row.scores.map((s, i) => <td key={i}>{s}</td>)}
              <td className="ss-table__avg">{avg}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

import styles from "./Table.module.css";
import type { ReactNode } from "react";

const Table = ({ columns, data }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => 
            <th key={column}>
              {column}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => 
          <tr key={index}>
            {columns.map(column => <td key={column}>{row[column]}</td>)}
          </tr>
        )}
      </tbody>
    </table>
  )
}

type TableProps = {
  columns: string[];
  data: Record<string, ReactNode>[];
}

export default Table
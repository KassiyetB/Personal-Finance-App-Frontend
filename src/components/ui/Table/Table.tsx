import styles from "./Table.module.css";
import type { ReactNode } from "react";

const Table = ({ columns, data, className, id }: TableProps) => {
  return (
    <table className={`${styles.table} ${className ?? ""}`} id={id ?? ""}>
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
          <tr key={index} >
            {columns.map((column, index2) => {
              return (<td key={column} className={columns[index2]} >{row[column]}</td>);
            })}
          </tr>
        )}
      </tbody>
    </table>
  )
}

type TableProps = {
  columns: string[];
  data: Record<string, ReactNode>[];
  className?: string;
  id?: string;
}

export default Table
import styles from "./Table.module.css";
import { isValidElement, type ReactNode } from "react";

type TableProps<T extends object> = {
  data: T[];
  className?: string;
  id?: string;
};

export const Table = <T extends object>({
  data,
  className,
  id,
}: TableProps<T>) => {

  const columns = data.length > 0
    ? Object.keys(data[0])
    : [];

  return (
    <table className={`${styles.table} ${className ?? ""}`} id={id ?? ""}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>
              {column}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td
                key={column}
                className={column}
              >
                {renderValue(row[column as keyof T])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function renderValue(value: unknown): ReactNode {
  if (typeof value === "string" || typeof value === "number") {
    return <span>{value}</span>;
  }

  if (isValidElement(value)) {
    return value;
  }

  return null;
}
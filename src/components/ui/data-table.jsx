import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export function DataTable({ columns, data }) {
  const [sorting, setSorting] = useState({ key: "", order: "asc" });

  const sortData = (key) => {
    const order = sorting.key === key && sorting.order === "asc" ? "desc" : "asc";
    setSorting({ key, order });

    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return order === "asc" ? -1 : 1;
      if (a[key] > b[key]) return order === "asc" ? 1 : -1;
      return 0;
    });
  };

  const sortedData = sorting.key ? sortData(sorting.key) : data;

  return (
    <Table className="w-full text-sm">
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.accessorKey} onClick={() => sortData(col.accessorKey)} className="cursor-pointer">
              {col.header} {sorting.key === col.accessorKey ? (sorting.order === "asc" ? "↑" : "↓") : ""}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.length > 0 ? (
          sortedData.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((col) => (
                <TableCell key={col.accessorKey}>{row[col.accessorKey]}</TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="text-center">Aucun employé trouvé</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

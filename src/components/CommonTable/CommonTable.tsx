"use client";

import React, { ReactNode } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";

export type ColumnAlign = "left" | "right" | "center";

export interface Column<Row = any> {
  id: keyof Row | string;
  label: string;
  align?: ColumnAlign;
  render?: (value: any, row: Row) => ReactNode;
}

interface CommonTableProps<Row = any> {
  columns: Column<Row>[];
  data: Row[];
  actions?: (row: Row) => ReactNode;
}

export default function CommonTable<Row>({
  columns,
  data,
  actions,
}: CommonTableProps<Row>) {
  return (
    <TableContainer component={Paper} className="rounded-xl shadow-none">
      <Table>

        <TableHead className="bg-[#f8f9fa]">
          <TableRow className="border-b-2 border-[#e0e0e0]">
            {columns.map((col) => (
              <TableCell
                key={col.id as React.Key}
                align={col.align ?? "left"}
                className="p-3 text-left text-[13px] text-[#666] font-semibold"
              >
                {col.label}
              </TableCell>
            ))}

            {actions && (
              <TableCell
                align="center"
                className="p-3 text-left text-[13px] text-[#666] font-semibold"
              >
                Actions
              </TableCell>
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((col) => (
                <TableCell key={col.id as React.Key} align={col.align ?? "left"}>
                  {col.render
                    ? col.render(row[col.id as keyof Row], row)
                    : String(row[col.id as keyof Row] ?? "")}
                </TableCell>
              ))}
              {actions && <TableCell align="center">{actions(row)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

import * as React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { Activity } from "../types/activity";
import { Button } from "./ui/Button";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "timestamp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Timestamp
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("timestamp")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("action")}</div>
    ),
  },
  {
    accessorKey: "user",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitilize">{row.getValue("user")}</div>,
  },
];

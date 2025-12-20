"use client"

import { ColumnDef } from "@tanstack/react-table";

export type QuoteRequestColumn={
    id:string;
    fullName:string;
    email:string;
    type:string;
    status:string;
    createdAt: string;
}

export const column:ColumnDef<QuoteRequestColumn>[]=[
    {
        accessorKey:"fullName",
        header:"Name"
    },
    {
        accessorKey:"email",
        header:"Email"
    },
    {
        accessorKey:"type",
        header:"Service"
    },
    {
        accessorKey:"status",
        header:"Status"
    },
    {
        accessorKey:"createdAt",
        header:"Date"
    },
]
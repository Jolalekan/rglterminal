"use client"

import { ColumnDef } from "@tanstack/react-table";

export type MessageColumn={
    id:string;
    name:string;
    email:string;
    type:string;
    status:string;
    createdAt: string;
}

export const column:ColumnDef<MessageColumn>[]=[
    {
        accessorKey:"name",
        header:"Name"
    },
    {
        accessorKey:"email",
        header:"Email"
    },
    {
        accessorKey:"type",
        header:"Type"
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
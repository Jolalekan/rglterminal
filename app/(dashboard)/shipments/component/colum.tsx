"use client"

import { ColumnDef } from "@tanstack/react-table";

export type ShipmentColumn={
    id:string;
    status:string;
    trackingNumber:string;
    destination:string;
    currentLocation:string;
    createdAt: string;
}

export const column:ColumnDef<ShipmentColumn>[]=[
    {
        accessorKey:"status",
        header:"Status"
    },
    {
        accessorKey:"trackingNumber",
        header:"Tracking Number"
    },
    {
        accessorKey:"destination",
        header:"Destination"
    },
    {
        accessorKey:"currentLocation",
        header:"Current Location"
    },
    {
        accessorKey:"createdAt",
        header:"Date"
    },
]
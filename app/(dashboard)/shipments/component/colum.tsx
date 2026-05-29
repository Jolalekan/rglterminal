"use client"

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./action";

export type ShipmentColumn={
    id:string;
    status:string;
    trackingNumber:string;
    destination:string;
    currentLocation:string;
    estimatedDelivery:string;
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
        accessorKey:"estimatedDelivery",
        header:"Delivery Date"
    },
    {
        accessorKey:"createdAt",
        header:"Date"
    },
    {
        id:"action",
        cell:({row})=> <CellAction data={row.original}/>
    },
]
"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { Delete, Edit, MoreHorizontal } from "lucide-react"
import toast from "react-hot-toast"
import {  useRouter } from "next/navigation"
import { useState } from "react"
import axios from "axios"
import { AlertModal } from "@/components/alert-modal"
import { ShipmentColumn } from "./colum"

interface CellActionProps{
    data : ShipmentColumn
}
export const CellAction:React.FC<CellActionProps>=({
    data
})=>{
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const onDelete = async () => {
    
        try {
            setLoading(true)
            await axios.delete(`/api/shipments/${data.id}`)
            router.refresh()
            toast.success("Shipment deleted")
        } catch (error) {
              toast.error("Make sure you remove all products using this Shipment first")
            // handleError({error:"Make sure you remove all products using this shipments first"})
        } finally {
            setLoading(false)
            setOpen(false)
        }
    }

    return (
        <>
        <AlertModal 
            isOpen={open}
            onClose={()=>setOpen(false)}
            onConfirm={onDelete}
            loading={loading}
        />
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="w-4 h-4"/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>
                Action
            </DropdownMenuLabel>
         
            <DropdownMenuItem onClick={()=> router.push(`/shipments/${data.id}/update-tracking`)}>
                <Edit className="mr-2 h-4 w-4"/>
                Update
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=>setOpen(true)}>
                <Delete className="mr-2 h-4 w-4"/>
                Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>
        </>
    )
}
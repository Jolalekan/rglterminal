import prismadb from "@/lib/prismadb";
import ShippingForm from "./component/shipping-form";
import { notFound } from "next/navigation";

export default async function ShipmentPage({
    params
}:{
    params:{id:string}
}){
    const {id}=params;

    if(id === "new"){
        return(
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ShippingForm initialData ={null}/>
            </div>
        )
    }

    const shipping = await prismadb.shipment.findUnique({
        where:{
            id
        }
    })
    if(!shipping){
        return notFound()
    }

    
    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ShippingForm initialData={shipping}/>
                
            </div>
        </div>
    )
}
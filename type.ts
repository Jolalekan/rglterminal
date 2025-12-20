export interface QuoteRequest{
    id:string;
    fullName:string;
    email:string;
    body:string;
    phone?:string | null;
    status:string;
    serviceType:string;
    createdAt:Date;
}

export interface Contact{
    id:string;
    firstName:string;
    surname:string;
    email:string;
    phone?:string | null;
    message:string;
    createdAt:Date;
}
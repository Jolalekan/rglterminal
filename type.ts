export interface Message{
    id:string;
    name:string;
    email:string;
    body:string;
    phone?:string | null;
    status:string;
    type:string;
    createdAt:Date;
}

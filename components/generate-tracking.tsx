import { nanoid } from "nanoid";

export function generateTrackingNumber(): string {
  return `RGT${nanoid(10).toUpperCase()}`;
  

}
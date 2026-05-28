
import { Metadata } from "next";
import LandShippingClient from "./component/land-shipping-client";

export const metadata: Metadata = {
  title: "Land Shipping - Efficient Cargo Handling in Nigeria",
  description: "Professional land shipping services in Nigeria and across Afric. Secure handling, customs compliance, and efficient delivery of bulk commodities across Africa.",
  keywords: [
    "land shipping in Lagos",
    "efficient cargo handling",
    "customs compliant land transport",
    "bulk commodity shipping",
    "inland freight services",
    "cross-border land shipping",
    "reliable land logistics",
    "secure land transport solutions"
  ],
  openGraph: {
    title: "Land Shipping Services - RGL Terminal",
    description: "Secure and efficient land shipping services in Nigeria and across Africa",
    url: "https://rglterminal.com/land-shipping",
    images: ["/og-land-shipping.jpg"],
  },
  alternates: {
    canonical: "https://rglterminal.com/land-shipping",
  },
}

export default function LandShipping(){
  return<LandShippingClient/>
}
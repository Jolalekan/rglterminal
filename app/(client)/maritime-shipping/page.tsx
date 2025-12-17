
import { Metadata } from "next"
import MaritimeShippingClient from "./component/maritime-client"

export const metadata: Metadata = {
  title: 'Bonded Warehousing - Secure Storage with Customs Compliance',
  description: 'Professional bonded warehousing services in Lagos. Secure storage, customs compliance, duty deferment, and 24/7 monitoring for your imported goods.',
  keywords: [
    'bonded warehouse Lagos',
    'customs bonded storage',
    'duty deferment Nigeria',
    'secure warehousing',
    'import storage solutions'
  ],
  openGraph: {
    title: 'Bonded Warehousing Services - RGL Terminal',
    description: 'Secure bonded warehousing with full customs compliance',
    url: 'https://rglterminal.com/warehousing',
    images: ['/og-warehousing.jpg'],
  },
  alternates: {
    canonical: 'https://rglterminal.com/warehousing',
  },
}

export default function MaritimeShipping(){
  return<MaritimeShippingClient/>
}
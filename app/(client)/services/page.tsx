
import { Metadata } from 'next'
import ServicesClient from './component/service-client'

export const metadata: Metadata = {
  title: 'Our Services - Warehousing, Shipping & Logistics Solutions',
  description: 'Comprehensive logistics services: bonded warehousing, container storage, maritime shipping, customs clearance, and freight forwarding. Available 24/7 across Nigeria.',
  keywords: [
    'logistics services Nigeria',
    'bonded warehousing Lagos',
    'container storage services',
    'maritime shipping Nigeria',
    'customs clearance',
    'freight forwarding services',
    'cargo handling'
  ],
  openGraph: {
    title: 'Logistics Services - Rolling Grazing Bonded Terminal',
    description: 'Full range of logistics and shipping services in Nigeria',
    url: 'https://rglterminal.com/services',
    images: ['/og-services.jpg'],
  },
  alternates: {
    canonical: 'https://rglterminal.com/services',
  },
}

export default function ServicesPage(){
  return<ServicesClient/>
}

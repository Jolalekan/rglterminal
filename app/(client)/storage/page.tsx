
import { Metadata } from 'next'
import StorageClient from './component/storage-client'

export const metadata: Metadata = {
  title: 'Secure Storage - Secure Storage with Customs Compliance',
  description: 'Professional storage services in Lagos. Secure storage, customs compliance, duty deferment, and 24/7 monitoring for your imported goods.',
  keywords: [
    'bonded warehouse Lagos',
    'customs bonded storage',
    'duty deferment Nigeria',
    'import storage solutions'
  ],
  openGraph: {
    title: 'Storage Services - RGL Terminal',
    description: 'Secure storage with full customs compliance',
    url: 'https://rglterminal.com/storage',
    images: ['/og-warehousing.jpg'],
  },
  alternates: {
    canonical: 'https://rglterminal.com/storage',
  },
}

export default function StoragePage(){
  return<StorageClient/>
}

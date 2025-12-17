import { Metadata } from "next";
import AboutClient from "./component/about-client";

export const metadata: Metadata = {
  title: 'About Us - 15+ Years of Logistics Excellence',
  description: 'Learn about Rolling Grazing Bonded Terminal. With over 15 years of experience, we provide reliable, secure, and efficient logistics solutions across Nigeria and internationally.',
  keywords: [
    'about RGL Terminal',
    'logistics company Nigeria',
    'bonded terminal history',
    'shipping company Lagos',
    'freight forwarding experience'
  ],
  openGraph: {
    title: 'About Rolling Grazing Bonded Terminal',
    description: '15+ years of logistics excellence in Nigeria',
    url: 'https://rglterminal.com/about',
    images: ['/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://rglterminal.com/about',
  },
}

export default function ContactPage(){
  return<AboutClient/>
}

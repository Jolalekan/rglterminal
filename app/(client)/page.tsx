import ChooseUs from '@/components/choose-us'
import Frequently from '@/components/frequently'
import Hero from '@/components/hero'
import Monitor from '@/components/monitor'
import NeedUs from '@/components/need-us'
import Seamless from '@/components/seamless'
import Shipping from '@/components/shipping'
import Welcome from '@/components/welcome'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - Rolling Grazing Logistics & Bonded Terminal Services in Nigeria',
  description: 'Rolling Grazing Bonded Terminal offers comprehensive logistics solutions including warehousing, container storage, maritime shipping, and customs clearance in Lagos, Nigeria.',
  openGraph: {
    title: 'Rolling Grazing Bonded Terminal - Home',
    description: 'Premier logistics and bonded terminal services in Nigeria',
    url: 'https://rglbondedterminal.com',
    images: ['/og-home.jpg'],
  },
}

const HomePage
 = () => {
  return (
    <div>
        <Hero/>
        <Welcome/>
        <ChooseUs/>
        <Shipping/>
        <Seamless/>
        <Monitor/>
        <Frequently/>
        <NeedUs/>
    </div>
  )
}

export default HomePage

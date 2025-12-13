import ChooseUs from '@/components/choose-us'
import Frequently from '@/components/frequently'
import Hero from '@/components/hero'
import Monitor from '@/components/monitor'
import NeedUs from '@/components/need-us'
import Seamless from '@/components/seamless'
import Shipping from '@/components/shipping'
import Welcome from '@/components/welcome'

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

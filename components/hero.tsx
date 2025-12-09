
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img1.jpg" 
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay (optional) */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <h1 className="text-center text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          Seamless Shipping and
          <br />
          Goods Management
        </h1>
      </div>
    </div>
  )
}

export default Hero
import Image from 'next/image'

const Shipping = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/ship1.jpg" 
        alt="container background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay (optional) */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}

export default Shipping
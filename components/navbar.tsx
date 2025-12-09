
// import Container from './ui/container'
// import Image from 'next/image'
// import Link from 'next/link'

// const Navbar = () => {
//   return (
//     <div className="absolute top-0 left-0 right-0 z-50 bg-transparent">
//       <Container>
//         <div className="flex justify-between items-center py-4">
//           <Link href="/">
//             <Image
//               src="/logo1.png"
//               alt='logo'
//               height={100}
//               width={100}
//             />
//           </Link>
//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 <Link href="/" className="text-white hover:text-gray-200 font-medium">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-white hover:text-gray-200 font-medium">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-white hover:text-gray-200 font-medium">
//                   Contact 
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/careers" className="text-white hover:text-gray-200 font-medium">
//                   Careers 
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/request-quote" className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100 transition">
//                   Request a Quote
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </Container>
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import Container from './ui/container'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt='logo'
              height={100}
              width={100}
            />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-white hover:text-gray-200 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-gray-200 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-gray-200 font-medium">
                  Contact 
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white hover:text-gray-200 font-medium">
                  Careers 
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100 transition">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default Navbar

// import React from 'react'
// import Container from './ui/container'
// import Image from 'next/image'
// import Link from 'next/link'


// const Navbar = () => {
//   return (
//     <Container>
//         <div className="flex justify-between items-center">
//             <Link href="/">
//                 <Image
//                 src="/logo1.png"
//                 alt='logo'
//                 height={100}
//                 width={100}
//             />
//             </Link>
//             <nav>
//                 <ul className="flex space-x-6">
//                     <li>
//                         <Link href="/" className="text-gray-700 hover:text-gray-900">
//                         Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/about" className="text-gray-700 hover:text-gray-900">
//                         About Us
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/contact" className="text-gray-700 hover:text-gray-900">
//                         Contact 
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/careers" className="text-gray-700 hover:text-gray-900">
//                         Careers 
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/request-quote" className="text-gray-700 hover:text-gray-900">
//                         Request a Quote
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>

//     </Container>
//   )
// }

// export default Navbar
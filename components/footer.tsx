import Image from "next/image";
import Link from "next/link";
import Container from "./ui/container";
import {Button} from "./ui/button";
// import { Store } from "@/type";
interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter: string;
  youtube: string;
  tiktok: string;
  pinterest: string;
}

interface FooterProps {
  store: SocialMedia;
}

const Footer = () => {
  
 const socialMedia: SocialMedia = {
    facebook: "rglterminal",
    instagram: "rglterminal",
    twitter: "rglterminal",
    youtube: "rglterminal",
    tiktok: "rglterminal",
    pinterest: "rglterminal",
  };

  const facebook = socialMedia.facebook;
  const instagram = socialMedia.instagram;
  const tiktok = socialMedia.tiktok;
  const twitter = socialMedia.twitter;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-red-500 border-t  text-white tracking-tight leading-tight ">
      <Container>
        <div className="px-4 sm:px-6 py-4 lg:px-8 ">
          {/* TOP */}
          <div className="w-full gap-y-2 grid grid-cols-2 md:grid-cols-4 justify-between">
            {/* LEFT */}
           
              <div className="flex flex-col ">
                <Link href="/" className=" flex items-center font-bold text-lg uppercase">            
                  <Image
                    src="/logo1.png"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                  ROLLING GRAZING
                   <br/> Bonded Terminal
                </Link>

                <span className="flex flex-col gap-y-2">
                  {/* {store.address.addressLine1}, <br /> 
                  {store.address.city}, {store.address.state} <br /> 
                  
                  {store.address.postalCode}<br />
                  {store.address.country}<br /> */}
                  12, Olorunsogo street, <br/>
                  Victoria Island, <br/>
                  Lagos
                </span>

                <ul className="flex flex-col gap-y-1 font-medium">
                  <li className="text-sm">
                    <span>
                      {/* {store.email} */}
                    info@rglbondedterminal.com
                    </span>
                  </li>
                  <li className="text-sm">
                    <span>
                      {/* {store.phone} */}
                      0802323244
                      </span>
                  </li>
                </ul>

              </div>
          
            {/* CENTER */}

            <div>
              <h3 className="font-semibold text-base">COMPANY</h3>
              <ul className="flex flex-col">
                <li className="text-sm">
                  <Link href="/about">About us</Link>
                </li>
                <li className="text-sm">
                  <Link href="/contact"> Contact us</Link>
                </li>
                <li className="text-sm">
                  <Link href="/quote"> Quote</Link>
                </li>
                <li className="text-sm">
                  <Link href="/">Careers</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base">NEED HELP</h3>
              <ul className="flex flex-col">
                <li className="text-sm">
                  <Link href=""> How To Order</Link>
                </li>
                <li className="text-sm">
                  <Link href="">Shipping Guide</Link>
                </li>
                <li className="text-sm">
                  <Link href=""> Chat with us</Link>
                </li>
                <li className="text-sm">
                  <Link href=""> Track Order</Link>
                </li>
                <li className="text-sm">
                  <Link href="/"> All Product</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base">HELP</h3>
              <ul className="flex flex-col">
                <li className="text-sm">
                  <Link href=""> Customer Service</Link>
                </li>
                <li className="text-sm">
                  <Link href="/profile"> My Account</Link>
                </li>
                <li className="text-sm">
                  {" "}
                  <Link href=""> Find a Store</Link>
                </li>
                <li className="text-sm">
                  {" "}
                  <Link href="">Legal & Privacy</Link>
                </li>
                <li className="text-sm">
                  {" "}
                  <Link href="/company/privacy"> Return Policy</Link>
                </li>
              </ul>
            </div>

          </div>

          {/* MIDDLE */}
          <div className="my-2  flex flex-col md:flex-row items-center justify-between ">

                <div className="mb-2 flex gap-x-4">
                  {facebook && (
                    <Link
                      href={`https://facebook.com/${facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/facebook.png"
                        alt="facebook"
                        width={24}
                        height={24}
                      />
                    </Link>
                  )}

                  {instagram && (
                    <Link
                      href={`https://instagram.com/${instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/instagram.png"
                        alt="instagram"
                        width={24}
                        height={24}
                      />
                    </Link>
                  )}


                  
                  {tiktok && (
                    <Link
                      href={`https://tiktok.com/${tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/tiktok.png"
                        alt="tiktok"
                        width={24}
                        height={24}
                      />
                    </Link>
                  )}
                  {twitter && (
                    <Link
                      href={`https://twitter.com/${twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/x.png"
                        alt="twitter"
                        width={24}
                        height={24}
                      />
                    </Link>
                  )}
                
                </div>

                
            <div className="w-full md:w-auto flex items-center flex-col">
  <h3 className="font-semibold text-lg text-center">SUBSCRIBE</h3>
  <div className="w-full md:w-auto flex flex-col text-white">
    <input
      type="text"
      placeholder="Email address"
      className="p-2 bg-white text-black"
    />
    <Button className="p-2">JOIN</Button>
  </div>
</div>
                  </div>

          {/* BOTTOM */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 ">
            <div>&copy; {year} lekan.website.dev</div>
            <div className="flex gap-x-4 flex-col  md:flex-row">
              <div >
                <span className=" mr-4">Language</span>
                <span className="font-medium">Nigeria | English</span>
              </div>
              <div>
                <span className=" mr-4">Currency</span>
                <span>Naira</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

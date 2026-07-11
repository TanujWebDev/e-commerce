import { assets } from "../assets/assets"


const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        <div>
            <div className="flex items-center gap-1 mb-5"><span className="text-2xl font-bold tracking-widest text-black">STYLE<span className="text-gray-500 font-normal">NEST</span></span></div>
            <p className="w-full md:w-2/3 text-gray-600">
            StyleNest is your ultimate destination for premium clothing and fashion accessories. Explore curated collections designed to match your unique lifestyle.
            </p>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <p>+91 93508 51332</p>
                <p>tanujwebdev@gmail.com</p>
            </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2026@ stylenest.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer

import { assets } from "../assets/assets"


const OurPolicy = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-20 text-xs sm:text-sm text-zinc-700">

        <div className="border border-zinc-100 p-8 rounded bg-white shadow-sm hover:shadow transition-shadow duration-300">
            <img src={assets.exchange_icon} className="w-10 m-auto mb-5 opacity-80" alt="" />
            <p className="font-semibold text-zinc-900">Easy Exchange Policy</p>
            <p className="text-zinc-400 mt-1">We offer hassle-free exchange policy for all items</p>
        </div>

        <div className="border border-zinc-100 p-8 rounded bg-white shadow-sm hover:shadow transition-shadow duration-300">
            <img src={assets.quality_icon} className="w-10 m-auto mb-5 opacity-80" alt="" />
            <p className="font-semibold text-zinc-900">7 Days Return Policy</p>
            <p className="text-zinc-400 mt-1">We provide a 7-day free return policy on orders</p>
        </div>

        <div className="border border-zinc-100 p-8 rounded bg-white shadow-sm hover:shadow transition-shadow duration-300">
            <img src={assets.support_img} className="w-10 m-auto mb-5 opacity-80" alt="" />
            <p className="font-semibold text-zinc-900">Best Customer Support</p>
            <p className="text-zinc-400 mt-1">We provide 24/7 dedicated customer support</p>
        </div>
      
    </div>
  )
}

export default OurPolicy

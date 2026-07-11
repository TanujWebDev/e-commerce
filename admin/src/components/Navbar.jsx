import { assets } from "../assets/assets"


const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <div className="flex items-center gap-1"><span className="text-xl font-bold tracking-widest text-black">STYLE<span className="text-gray-500 font-normal">NEST</span></span><span className="text-xs bg-black text-white px-2 py-0.5 rounded-full font-medium ml-2">ADMIN</span></div>
      <button onClick={() => setToken('')} className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">Logout</button>
    </div>
  )
}

export default Navbar

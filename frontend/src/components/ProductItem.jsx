import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import {Link} from 'react-router-dom'


const ProductItem = ({id, image, name, price}) => {

    const {currency} = useContext(ShopContext) 

  return (
    <Link className="text-gray-700 cursor-pointer border border-zinc-100 rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col" to={`/product/${id}`}>
      <div className="overflow-hidden aspect-square flex items-center justify-center bg-gray-50">
        <img className="hover:scale-105 transition duration-500 w-full h-full object-cover object-top" src={image[0]} alt="" />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-1">STYLENEST</p>
          <p className="text-sm font-medium text-gray-800 line-clamp-1">{name}</p>
        </div>
        <div className="flex justify-between items-center mt-3 pt-2 border-t border-zinc-50">
          <p className="text-sm font-semibold text-gray-900">{currency}{price}</p>
          <span className="text-xs font-medium text-gray-500 border border-zinc-200 rounded px-2.5 py-0.5 hover:bg-black hover:text-white hover:border-black transition-colors duration-200">View</span>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem

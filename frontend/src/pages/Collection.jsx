import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const {products, search, showSearch} = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {

    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    } else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice() 

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice()

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break   
    }

  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct()
  }, [sortType])



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-zinc-100'>
      
      {/* FILTER */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-lg font-semibold text-zinc-800 tracking-wider flex items-center cursor-pointer gap-2 uppercase">
          Filters
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category filter */}
        <div className={`border border-zinc-100 p-5 rounded-md bg-white shadow-sm mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-xs font-bold text-zinc-400 tracking-widest uppercase">Categories</p>
          <div className="flex flex-col gap-2.5 text-sm text-zinc-600">
            <p className="flex items-center gap-2.5 cursor-pointer">
              <input className="w-4 h-4 cursor-pointer accent-black" type="checkbox" value={'Men'} onChange={toggleCategory}/> <span>Men</span>
            </p>
            <p className="flex items-center gap-2.5 cursor-pointer">
              <input className="w-4 h-4 cursor-pointer accent-black" type="checkbox" value={'Women'} onChange={toggleCategory}/> <span>Women</span>
            </p>
            <p className="flex items-center gap-2.5 cursor-pointer">
              <input className="w-4 h-4 cursor-pointer accent-black" type="checkbox" value={'Kids'} onChange={toggleCategory}/> <span>Kids</span>
            </p>
          </div>
        </div>
        {/* Subcategories filter */}
        <div className={`border border-zinc-100 p-5 rounded-md bg-white shadow-sm my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-xs font-bold text-zinc-400 tracking-widest uppercase">Type</p>
          <div className="flex flex-col gap-2.5 text-sm text-zinc-600">
            <p className="flex items-center gap-2.5 cursor-pointer">
              <input className="w-4 h-4 cursor-pointer accent-black" type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> <span>Topwear</span>
            </p>
            <p className="flex items-center gap-2.5 cursor-pointer">
              <input className="w-4 h-4 cursor-pointer accent-black" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> <span>Bottomwear</span>
            </p>
            <p className="flex items-center gap-2.5 cursor-pointer">
              <input className="w-4 h-4 cursor-pointer accent-black" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> <span>Winterwear</span>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex-1'>

        <div className='flex justify-between items-center text-base sm:text-2xl mb-6'>
          <Title text1={'All'} text2={'Collections '}/>
          {/* Product sort */}
          <select onChange={(e) => setSortType(e.target.value)} className="border border-zinc-200 rounded px-3 py-1.5 text-xs sm:text-sm bg-white outline-none cursor-pointer text-zinc-700 hover:border-zinc-400 transition-colors">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Collection

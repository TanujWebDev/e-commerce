import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"


const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t border-zinc-100">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-16 mb-28">
        <img className="w-full md:max-w-[480px] rounded border border-zinc-100 shadow-sm" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-zinc-800 tracking-wide">Our Store</p>
          <p className="text-zinc-500 leading-relaxed">B-42, Connaught Place <br /> New Delhi, 110001, India</p>
          <p className="text-zinc-500 leading-relaxed">Tel: +91 93508 51332 <br /> Email: tanujwebdev@gmail.com</p>
          <p className="font-semibold text-xl text-zinc-800 tracking-wide">Careers at StyleNest</p>
          <p className="text-zinc-500 leading-relaxed">Learn more about our teams and job openings.</p>
          <button className="border border-zinc-300 px-8 py-4 text-xs font-semibold tracking-widest rounded-md hover:bg-black hover:text-white hover:border-black transition-all duration-300">EXPLORE JOBS</button>
        </div>
      </div>

      <NewsLetterBox />
      
    </div>
  )
}

export default Contact

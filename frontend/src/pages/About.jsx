import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded border border-zinc-100 shadow-sm"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-zinc-600">
          <p>
            Welcome to StyleNest, your premium destination for modern fashion and timeless style. We believe that dressing well should be effortless and inspiring. Our collections are carefully curated to bring you the highest quality fabrics, modern silhouettes, and comfortable fits that seamlessly integrate into your daily wardrobe.
          </p>
          <p>
            Since our launch, we have been committed to setting new benchmarks in the e-commerce shopping experience. By combining a user-friendly interface with advanced payment systems and reliable shipping partners, we make premium shopping accessible from the comfort of your home.
          </p>
          <b className="text-zinc-800">Our Mission</b>
          <p>
            Our mission is simple: to inspire confidence through fashion. We strive to provide premium clothing that empowers you to express your unique identity, while maintaining a strong commitment to ethical production, product integrity, and exceptional value.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6">
        <div className="border border-zinc-100 p-8 sm:p-12 flex flex-col gap-4 bg-white shadow-sm hover:shadow transition-shadow duration-300 rounded">
          <b className="text-zinc-800">Quality Assurance</b>
          <p className="text-zinc-500 leading-relaxed">Every garment is crafted from premium materials and undergoes strict quality control checks to guarantee durability, superior comfort, and a perfect fit.</p>
        </div>
        <div className="border border-zinc-100 p-8 sm:p-12 flex flex-col gap-4 bg-white shadow-sm hover:shadow transition-shadow duration-300 rounded">
          <b className="text-zinc-800">Convenience</b>
          <p className="text-zinc-500 leading-relaxed">With an intuitive browsing experience, multiple secure payment gateways, and real-time package tracking, we make your online shopping fast and hassle-free.</p>
        </div>
        <div className="border border-zinc-100 p-8 sm:p-12 flex flex-col gap-4 bg-white shadow-sm hover:shadow transition-shadow duration-300 rounded">
          <b className="text-zinc-800">Exceptional Customer Service</b>
          <p className="text-zinc-500 leading-relaxed">Our customer success team is available round-the-clock to guide you through sizes, shipping queries, and seamless returns, prioritizing your peace of mind.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  );
};

export default About;

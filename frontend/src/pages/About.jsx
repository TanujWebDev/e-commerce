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
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Discover a wide range of quality products designed to match your
            style and needs. Shop the latest trends at affordable prices and
            enjoy a smooth shopping experience. Get secure payments, fast
            delivery, and excellent customer support with every order.
          </p>
          <p>
            Explore our carefully selected collection of products made for
            quality and comfort. Find everything you need in one place at prices
            that fit your budget. Shop with confidence and enjoy a simple,
            secure, and reliable shopping experience.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Stay ahead of the latest trends with products designed to match your
            lifestyle. Discover exciting deals, trusted quality, and a wide
            variety of choices. Enjoy fast delivery and excellent service every
            time you shop with us.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Upgrade your style with quality products designed to fit your everyday needs.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">Discover quality products, amazing deals, and a seamless shopping experience all in one place.</p>
        </div>
         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
         <p className="text-gray-600">Shop smarter with trusted quality, great prices, and products designed for your everyday lifestyle.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  );
};

export default About;

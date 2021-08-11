import React from "react";
import ContactUsButton from "../ContactUsButton/ContactUsButton";
import Logo from "../Logo/Logo";
import "swiper/swiper-bundle.min.css";
import "./Main.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import About from "../About/About";
import OurServices from "../OurServices/OurServices";

SwiperCore.use([EffectCoverflow, Pagination]);

const Main = () => {
  return (
    <section className="bg-pattern min-h-screen w-full sm:w-3/4 overflow-hidden mx-auto bg-center p-6 sm:p-12">
      <div className="flex justify-between items-center">
        <Logo width="40%" />
        <ContactUsButton />
      </div>
      <p className="text-gray-100 text-2xl sm:text-3xl md:text-4xl sm:text-center sm:my-6 my-8">
        We help you to make your business enticing in the virtual world.
      </p>
      <OurServices />
      <About />
    </section>
  );
};

export default Main;

import React from "react";
import Card from "../Card/Card";
import ContactUsButton from "../ContactUsButton/ContactUsButton";
import Logo from "../Logo/Logo";
import "swiper/swiper-bundle.min.css";
import "./Main.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import servicesData from "../../data/services.json";
import useWindowDimensions from "../../hooks/custom-hooks";
import About from "../About/About";

SwiperCore.use([EffectCoverflow, Pagination]);

const Main = () => {
  const { width } = useWindowDimensions();

  const getServicesJsx = () => {
    return servicesData.map((e) => (
      <SwiperSlide key={e.id}>
        <Card title={e.name}>{e.about}</Card>
      </SwiperSlide>
    ));
  };

  return (
    <section className="bg-pattern h-full w-full sm:w-3/4 overflow-hidden mx-auto bg-center p-6 sm:p-12">
      <div className="flex justify-between items-center">
        <Logo width="40%" />
        <ContactUsButton />
      </div>
      <p className="text-gray-100 text-2xl sm:text-3xl md:text-4xl sm:text-center sm:my-6 my-8">
        We help you to make your business enticing in the virtual world.
      </p>
      <h1 className="text-gray-100 text-lg sm:text-xl md:text-2xl sm:mt-10 font-bold">
        Our Services
      </h1>
      <div className="py-3">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={width > 640 ? 3 : "auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
        >
          {getServicesJsx()}
        </Swiper>
      </div>
      <About />
    </section>
  );
};

export default Main;

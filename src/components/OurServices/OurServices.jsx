import React from "react";
import Card from "../Card/Card";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import servicesData from "../../data/services.json";
import useWindowDimensions from "../../hooks/custom-hooks";
import "./OurServices.css";

const OurServices = () => {
  const { width } = useWindowDimensions();

  const getServicesJsx = () => {
    return servicesData.map((e) => (
      <SwiperSlide key={e.id}>
        <Card title={e.name}>{e.about}</Card>
      </SwiperSlide>
    ));
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default OurServices;

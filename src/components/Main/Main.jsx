import React, { useState } from "react";
import ContactUsButton from "../ContactUsButton/ContactUsButton";
import Logo from "../Logo/Logo";
import "swiper/swiper-bundle.min.css";
import "./Main.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import About from "../About/About";
import OurServices from "../OurServices/OurServices";
import TeamCard from "../TeamCard/TeamCard";

import ContactUsModal from "../ContactUsModal/ContactUsModal";
import OurServicesNext from "../OurServicesNext/OurServicesNext";

SwiperCore.use([EffectCoverflow, Pagination]);

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <section className="bg-pattern min-h-screen w-full lg:w-3/4 overflow-hidden mx-auto bg-center p-6 sm:p-12">
      <div className="flex justify-between items-center">
        <Logo width="40%" />
        <ContactUsButton onClick={() => setModalVisible(true)} />
      </div>
      <p className="text-gray-100 text-2xl sm:text-3xl md:text-4xl sm:text-center sm:my-6 my-8">
        We help you to make your business enticing in the virtual world.
      </p>
      {/* <OurServices /> */}
      <OurServicesNext />
      <About />
      <h1 className="text-gray-100 text-lg sm:text-xl md:text-2xl mt-11 sm:mt-10 font-bold">
        Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <TeamCard name="Anjaney" designation="Chief Executive Officer" />
        <TeamCard
          name="Nishal"
          designation="Chief operating officer & financial manager"
        />
        <TeamCard
          name="Gaurav"
          designation="Chief technology officer and creative head"
        />
        <TeamCard name="Monesh" designation="Chief resource manager" />
      </div>
      {modalVisible && <ContactUsModal setModalVisible={setModalVisible} />}
    </section>
  );
};

export default Main;

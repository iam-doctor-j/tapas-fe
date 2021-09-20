import React from "react";
import styles from "./OurServicesNext.module.css";
import services from "../../data/servicesNext.json";
import ServiceCard from "../ServiceCard/ServiceCard";

const OurServicesNext = () => {
  return (
    <React.Fragment>
      <h1 className="text-gray-100 text-lg sm:text-xl md:text-2xl sm:mt-10 font-bold ">
        Our Services
      </h1>
      <div className="mt-4 flex md:flex-row flex-col justify-evenly items-start">
        {services &&
          services.map((e) => (
            <ServiceCard
              title={e.name}
              details={e.details}
              listItems={e.items}
              className="sm:mt-2 mx-2 md:w-80"
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default OurServicesNext;

import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";
import ForwardIcon from "../ForwardIcon/ForwardIcon";
import "./About.css";

const About = () => {
  const [isAboutMaxed, setAboutMaxed] = useState(false);

  const handleShowMoreClick = (show) => setAboutMaxed(show);

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerDirection: -1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <AnimateSharedLayout>
      <motion.h1
        layout
        className="text-gray-100 text-lg sm:text-xl md:text-2xl mt-11 sm:mt-10 font-bold"
      >
        About Us
      </motion.h1>
      <motion.article
        layout
        className="text-gray-100 about-us relative text-xl bg-monogray shadow-xlc rounded-md px-4 py-1 mt-4"
      >
        <p>
          In today's world, digital and virtual marketing and conveying vision
          through cinematography are taking over like world with power. And the
          digital marketing and visual contents are becoming the core of modern
          day success and it is undeniable.
        </p>
        <AnimatePresence>
          {isAboutMaxed && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={list}
            >
              <motion.p variants={item}>
                We, here, at Tapas, focus to make your business or your views to
                become multi dimensional with the ways of content creation mixed
                with marketing strategies with a side dish of trend values.
              </motion.p>
              <motion.p variants={item}>
                Tapas is the multifunctional waythrough which provides all the
                digital marketing, promotional services and content creation
                under one roof. Researching on the recent trends, updating on
                the latest ways of content creation and promotion, we provide
                marketing strategies along with different agendas to perform our
                functions with the help of cinematography functions.
              </motion.p>
              <motion.p variants={item}>
                We cover most of the social media sites (and constantly checking
                up on new social areas) for advertisements, select target
                audiences according to your businesses and your vision, promote
                modern ways to showcase your business, find potential local
                influencers to promote, converting traditional ways of
                advertising to modern like promoting digital pamphlets and
                brochures, giving a social face to your business and providing
                its management.
              </motion.p>
              <motion.p variants={item}>
                We provide emphasis on content creation services like logo
                designing, graphic designing, website designing, cinematography
                & videography, studio content creation and script writing and
                advertisement creation and management.
              </motion.p>
              <motion.p variants={item}>
                Keeping in touch with the traditional ways too, we provide
                traditional advertising and event promotion and management.
              </motion.p>
              <motion.p variants={item}>
                Your vision, Tapas' implementation, our creation.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => {
            handleShowMoreClick(!isAboutMaxed);
          }}
          className="flex items-center font-bold text-xs"
        >
          {isAboutMaxed ? "Less" : "Read more"}{" "}
          <ForwardIcon
            className={`ml-1 transform-gpu transition-transform duration-300 origin-center ${
              isAboutMaxed ? "rotate-180" : "rotate-0"
            }`}
            size={35}
          />
        </button>
      </motion.article>
    </AnimateSharedLayout>
  );
};

export default About;

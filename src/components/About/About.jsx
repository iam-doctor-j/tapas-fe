import React, { useState } from "react";
import ForwardIcon from "../ForwardIcon/ForwardIcon";

const About = () => {
  const [isAboutMaxed, setAboutMaxed] = useState(false);

  const handleShowMoreClick = (show) => setAboutMaxed(show);

  return (
    <React.Fragment>
      <h1 className="text-gray-100 text-lg sm:text-xl md:text-2xl mt-11 sm:mt-10 font-bold">
        About Us
      </h1>
      <article className="text-gray-100 about-us relative">
        <p>
          In today's world, digital and virtual marketing and conveying vision
          through cinematography are taking over like world with power. And the
          digital marketing and visual contents are becoming the core of modern
          day success and it is undeniable.
        </p>
        {isAboutMaxed && (
          <>
            <p>
              We, here, at Tapas, focus to make your business or your views to
              become multi dimensional with the ways of content creation mixed
              with marketing strategies with a side dish of trend values.
            </p>
            <p>
              Tapas is the multifunctional waythrough which provides all the
              digital marketing, promotional services and content creation under
              one roof. Researching on the recent trends, updating on the latest
              ways of content creation and promotion, we provide marketing
              strategies along with different agendas to perform our functions
              with the help of cinematography functions.
            </p>
            <p>
              We cover most of the social media sites (and constantly checking
              up on new social areas) for advertisements, select target
              audiences according to your businesses and your vision, promote
              modern ways to showcase your business, find potential local
              influencers to promote, converting traditional ways of advertising
              to modern like promoting digital pamphlets and brochures, giving a
              social face to your business and providing its management.
            </p>
            <p>
              We provide emphasis on content creation services like logo
              designing, graphic designing, website designing, cinematography &
              videography, studio content creation and script writing and
              advertisement creation and management.
            </p>
            <p>
              Keeping in touch with the traditional ways too, we provide
              traditional advertising and event promotion and management.
            </p>
            <p>Your vision, Tapas' implementation, our creation.</p>
          </>
        )}
        {!isAboutMaxed ? (
          <button
            onClick={() => {
              handleShowMoreClick(true);
            }}
            className="flex items-center font-bold text-xs"
          >
            Read more <ForwardIcon className="ml-1" size={35} />
          </button>
        ) : (
          <button
            onClick={() => {
              handleShowMoreClick(false);
            }}
            className="flex items-center font-bold text-xs"
          >
            Less <ForwardIcon className="ml-1" size={35} />
          </button>
        )}
      </article>
    </React.Fragment>
  );
};

export default About;

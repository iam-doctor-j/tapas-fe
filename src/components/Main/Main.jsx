import React from "react";
import ContactUsButton from "../ContactUsButton/ContactUsButton";
import Logo from "../Logo/Logo";
import "./Main.css";

const Main = () => (
  <section className="bg-pattern h-full w-full sm:w-3/4 mx-auto bg-center p-6 sm:p-12">
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
    <h1 className="text-gray-100 text-lg sm:text-xl md:text-2xl sm:mt-10 font-bold">
      About Us
    </h1>
    <article className="text-gray-100 about-us relative">
      <p>
        In today's world, digital and virtual marketing and conveying vision
        through cinematography are taking over like world with power. And the
        digital marketing and visual contents are becoming the core of modern
        day success and it is undeniable.
      </p>
      <p>
        We, here, at Tapas, focus to make your business or your views to become
        multi dimensional with the ways of content creation mixed with marketing
        strategies with a side dish of trend values.
      </p>
      <p>
        Tapas is the multifunctional waythrough which provides all the digital
        marketing, promotional services and content creation under one roof.
        Researching on the recent trends, updating on the latest ways of content
        creation and promotion, we provide marketing strategies along with
        different agendas to perform our functions with the help of
        cinematography functions.
      </p>
      <p>
        We cover most of the social media sites (and constantly checking up on
        new social areas) for advertisements, select target audiences according
        to your businesses and your vision, promote modern ways to showcase your
        business, find potential local influencers to promote, converting
        traditional ways of advertising to modern like promoting digital
        pamphlets and brochures, giving a social face to your business and
        providing its management.
      </p>
      <p>
        We provide emphasis on content creation services like logo designing,
        graphic designing, website designing, cinematography & videography,
        studio content creation and script writing and advertisement creation
        and management.
      </p>
      <p>
        Keeping in touch with the traditional ways too, we provide traditional
        advertising and event promotion and management.
      </p>
      <p>Your vision, Tapas' implementation, our creation.</p>
    </article>
  </section>
);

export default Main;

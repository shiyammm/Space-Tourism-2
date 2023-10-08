import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-home-patternMobile h-screen bg-no-repeat bg-cover md:bg-home-patternTablet lg:bg-home-patternDesktop flex justify-center lg:justify-start lg:pl-[9rem] items-center lg:pt-[17rem] ">
      <div className="text-white text-center lg:text-left lg:flex  ">
        <div>
          <h1 className="text-[#D0D6F9] font-Barlow-Condensed font-normal text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] tracking-[0.16875rem] md:tracking-[0.21094rem] lg:tracking-[0.29531rem]">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <p className="  uppercase text-[5rem] md:text-[9.375rem] font-Bellefair font-normal leading-[6.25rem] md:leading-[9.375rem] lg:leading-normal">
            Space
          </p>
          <p className="w-[20.4375rem] lg:w-[27.75rem] font-Barlow text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] text-[#D0D6F9] font-normal leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[2rem] mx-auto lg:mx-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="lg:absolute lg:right-[6rem]">
          <Link
            className="w-[9.375rem] md:w-[15.125rem] lg:w-[17.125rem] lg:h-[17.125rem] h-[9.375rem] md:h-[15.125rem] rounded-full bg-white mx-auto flex justify-center items-center mt-[5rem]"
            to="/destination"
          >
            <p className="uppercase text-[#0B0D17] text-[1.25rem] md:text-[2rem] font-Bellefair font-normal tracking-[0.07813rem] md:tracking-[0.125rem]">
              Explore
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

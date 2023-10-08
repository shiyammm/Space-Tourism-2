import { useState } from 'react';
import React from 'react';
import { technology } from  '../../public/data.json';
import { Link } from 'react-router-dom';

const Technology = () => {
  const [activeTerminology, setActiveTerminology] = useState(0);
  const [activeTerminologyButton, setActiveTerminologyButton] = useState(0);
  const currentTerminology = technology[activeTerminology];
  const handleTerminology = (index) => {
    setActiveTerminology(index);
    setActiveTerminologyButton(index);
  };
  return (
    <article className="bg-technology-patternMobile md:bg-technology-patternTablet lg:bg-technology-patternDesktop h-screen bg-no-repeat bg-cover text-white pt-[6rem]">
      <section>
        <h1 className="text-center md:text-left  lg:pl-[6rem] xl:pl-[10rem] font-normal font-Barlow-Condensed uppercase text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] tracking-[0.16875rem] md:tracking-[0.21094rem] lg:tracking-[0.29531rem]">
          <span className="font-bold tracking-[0.16875rem] md:tracking-[0.21094rem] lg:tracking-[0.29531rem] opacity-25 md:text-[1.25rem] lg:text-[1.75rem] ">
            03
          </span>{' '}
          SPACE LAUNCH 101{' '}
        </h1>
      </section>
      <main className="lg:flex lg:flex-row-reverse">
        <section className="my-9 lg:mt-[15rem] xl:mt-[10rem]  mx-auto ">
          <img
            src={currentTerminology.images.landscape}
            alt="Space-Launch"
            className="lg:hidden md:w-full"
          />
          <img
            src={currentTerminology.images.portrait}
            alt="Space-Launch"
            className="hidden lg:absolute lg:right-7 lg:inline-block lg:w-[20rem] xl:w-[30rem]"
          />
        </section>
        <section className="lg:pt-[15rem] lg:pl-[13rem] xl:pl-[16rem] 2xl:pl-[18rem]">
          <div className="text-center lg:absolute flex lg:grid lg:left-[6rem] xl:left-[9rem] lg:bottom-[20.5rem] 2xl:bottom-[16.5rem] justify-center gap-5 items-center">
            {technology.map((terminology, index) => (
              <Link key={terminology.id}>
                <button
                  className={`w-[2.5rem] md:w-[3.75rem] 2xl:w-[5rem] h-[2.5rem] md:h-[3.75rem] 2xl:h-[5rem] rounded-full text-[1rem] md:text-[1.5rem] 2xl:text-[2rem] tracking-[0.0625rem] md:tracking-[0.09375rem] 2xl:tracking-[0.125rem] font-Bellefair ${
                    activeTerminologyButton == index
                      ? 'bg-white text-[#0B0D17]'
                      : 'bg-[#0B0D17] border border-[#707071]'
                  }`}
                  onClick={() => {
                    handleTerminology(index);
                  }}
                >
                  {index + 1}
                </button>
              </Link>
            ))}
          </div>
          <div className="text-center lg:text-left mt-4 grid gap-1">
            <p className="text-[#D0D6F9] font-Barlow-Condensed uppercase text-[0.875rem] md:text-[1rem] tracking-[0.14763rem] md:tracking-[0.16875rem]">
              The Terminology...
            </p>
            <h2 className="text-[1.5rem] md:text-[2.5rem] 2xl:text-[3.5rem] font-Bellefair uppercase">
              {currentTerminology.name}
            </h2>
          </div>
          <div className="w-[20.4375rem] md:w-[28.625rem] lg:w-[27.75rem] mx-auto">
            <p className=" text-[#D0D6F9] text-[0.9375rem] md:text-[1rem] 2xl:text-[1.125rem] text-center lg:text-left font-Barlow leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[2rem]">
              {currentTerminology.description}
            </p>
          </div>
        </section>
      </main>
    </article>
  );
};

export default Technology;

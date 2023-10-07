import { React, useState } from 'react';
import { crew } from '../../public/data.json';
import { Link } from 'react-router-dom';

const Crew = () => {
  const [activeMember, setActiveMember] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const currentMember = crew[activeMember];
  const handleCrew = (index) => {
    setActiveMember(index);
    setActiveButton(index);
  };
  return (
    <article className=" bg-crew-patternMobile md:bg-crew-patternTablet lg:bg-crew-patternDesktop h-screen bg-no-repeat bg-cover text-white">
      <section className="pt-[9rem]">
        <h1 className="text-center lg:text-left lg:pl-[10rem] font-normal font-Barlow-Condensed uppercase text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] tracking-[0.16875rem] md:tracking-[0.21094rem] lg:tracking-[0.29531rem]">
          <span className="font-bold tracking-[0.16875rem] md:tracking-[0.21094rem] lg:tracking-[0.29531rem] opacity-25 md:text-[1.25rem] lg:text-[1.75rem] ">
            02
          </span>{' '}
          Meet your crew
        </h1>
      </section>
      <main className="md:flex md:flex-col md:flex-col-reverse lg:flex-row-reverse lg:pl-[10rem] ">
        <section className="w-[11.07019rem] md:w-[20.52325rem] lg:w-[35.5045rem]  h-[13.875rem] md:h-[35.75rem] lg:h-[44.5rem] mx-auto my-9 md:my-0 ">
          <img
            src={currentMember.images.webp}
            alt="Crew-Member"
            className="md:mt-[4rem]"
          />
        </section>
        <section>
          <div className="flex gap-5 md:absolute md:right-0 md:left-0 lg:left-[10rem] md:top-[20rem] lg:top-[48rem] justify-center lg:justify-start pt-[2rem] pb-7 md:mt-14 ">
            {crew.map((member, index) => (
              <Link key={member.id}>
                <button
                  className={`w-3 h-3 rounded-full ${
                    activeButton == index
                      ? 'bg-white'
                      : 'bg-white opacity-[0.4951]'
                  } `}
                  onClick={() => {
                    handleCrew(index);
                  }}
                ></button>
              </Link>
            ))}
          </div>
          <div className="lg:pt-[12rem]">
            <div className="text-center lg:text-left grid gap-2 mb-4 md:pt-5">
              <p className="text-[1rem] md:text-[1.5rem] lg:text-[2rem]  opacity-[0.4951] font-Bellefair uppercase">
                {currentMember.role}
              </p>
              <h2 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] uppercase font-Bellefair">
                {currentMember.name}
              </h2>
            </div>
            <div className="w-[20.4375rem] md:w-[28.625rem] lg:w-[27.75rem] mx-auto lg:mx-0 text-[#D0D6F9] leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[2rem]">
              <p className="text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] text-center lg:text-left">
                {currentMember.bio}
              </p>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
};

export default Crew;

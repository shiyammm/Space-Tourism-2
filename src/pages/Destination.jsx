import { React, useState } from 'react';
import { destinations } from '../data.json';
import { Link } from 'react-router-dom';

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState(0);
  const [activePlanetBar, setActivePlanetBar] = useState(0);
  const handlePlanet = (index) => {
    setActivePlanet(index);
    setActivePlanetBar(index);
  };
  const currentPlanet = destinations[activePlanet];
  return (
    <article className="bg-destination-patternMobile md:bg-destination-patternTablet lg:bg-destination-patternDesktop bg-cover h-screen text-white pt-[9rem]">
      <h1 className="text-center lg:text-left lg:pl-[10rem] font-normal font-Barlow-Condensed uppercase text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] tracking-[0.16875rem] md:tracking-[0.21094rem] lg:tracking-[0.29531rem]">
        <span className="font-bold tracking-[0.16875rem] md:tracking-[0.21094rem] lg:tracking-[0.29531rem] opacity-25 md:text-[1.25rem] lg:text-[1.75rem] ">
          01
        </span>{' '}
        Pick your destination
      </h1>
      <main className="lg:flex lg:pt-[9rem] lg:pl-[10rem] lg:gap-[9rem] xl:gap-[14rem] 2xl:gap-[20rem] ">
        <section>
          <img
            src={currentPlanet.images.webp}
            alt="planet"
            className="w-[16.1875rem] h-[16.1875rem] md:w-[21.5625rem] md:h-[21.5625rem] xl:w-[30.375rem] xl:h-[30.375rem] mx-auto my-9"
          />
        </section>
        <section>
          <div className="flex gap-9 leading-[1.5rem] item-center justify-center lg:justify-start ">
            {destinations.map((planet, index) => (
              <Link
                key={planet.id}
                onClick={() => {
                  handlePlanet(index);
                }}
                className={`text-[0.875rem] md:text-[1rem] tracking-[0.14763rem] md:tracking-[0.16875rem] font-Barlow-Condensed uppercase text-[#D0D6F9] pb-1 ${
                  activePlanetBar == index
                    ? 'border-b-2 border-white text-white'
                    : 'border-transparent text-[#D0D6F9]'
                } `}
              >
                {planet.name}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[6.25rem] font-Bellefair uppercase text-center lg:text-left">
              {currentPlanet.name}
            </h2>
            <p className="w-[20.4375rem] md:w-[35.8125rem] lg:w-[27.75rem] font-Barlow text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] text-[#D0D6F9] leading-[1.5625rem] md:leading-[1.75rem] lg:leading-[1.75rem] text-center lg:text-left mx-auto mb-5">
              {currentPlanet.description}
            </p>
          </div>
          <div className="w-[20.4375rem] md:w-[35.8125rem] lg:w-[27.75rem] h-[0.0625rem]  md:h-[0.0625rem] lg:h-[0.0625rem] bg-[#383B4B] mx-auto" />
          <div className="text-center lg:text-left justify-center lg:justify-start grid md:flex gap-4 md:gap-[6rem] mt-6">
            <div className="grid gap-1 md:gap-6">
              <span className="text-[#D0D6F9] font-Barlow-Condensed text-[0.875rem] tracking-[0.14763rem] lg:leading-[0.14763rem] uppercase">
                AVG. DISTANCE
              </span>
              <p className="text-[1.75rem] font-Bellefair uppercase">
                {currentPlanet.distance}
              </p>
            </div>
            <div className="grid gap-1 md:gap-6">
              <span className="text-[#D0D6F9] font-Barlow-Condensed text-[0.875rem] tracking-[0.14763rem] lg:leading-[0.14763rem] uppercase">
                Est. travel time
              </span>
              <p className="text-[1.75rem] font-Bellefair uppercase">
                {currentPlanet.travel}
              </p>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
};

export default Destination;

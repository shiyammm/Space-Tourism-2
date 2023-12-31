import { React, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import close from '../assets/shared/icon-close.svg';
import menu from '../assets/shared/icon-hamburger.svg';

const Navbar = () => {
  const [toggle, setToggle] = useState();
  const NavLinks = [
    {
      id: 'home',
      order: '00',
      title: 'HOME',
    },
    {
      id: 'destination',
      order: '01',
      title: 'DESTINATION',
    },
    {
      id: 'crew',
      order: '02',
      title: 'CREW',
    },
    {
      id: 'technology',
      order: '03',
      title: 'TECHNOLOGY',
    },
  ];
  return (
    <nav className="w-full absolute pt-5 md:pt-0 lg:pt-9 pl-8">
      <div className="flex justify-between">
        <Link className='md:pt-5 logo' to="/home">
          <img src={logo} alt="logo" className="w-[2.5rem]" />
        </Link>
        {/* Mobile view */}
        <div className="md:hidden ">
          <div className="absolute right-8 ">
            <img
              className="w-[2rem] relative z-10"
              src={toggle ? close : menu}
              alt="menu"
              onClick={() => setToggle((prev) => !prev)}
            />
          </div>
          {toggle && (
            <div className="absolute z-1 right-0 top-0 px-9 pt-[7rem] text-white bg-shadow bg-cover w-[15.875rem] h-screen">
              <ul className="grid gap-7 ">
                {NavLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={`/${link.id}`}
                      className="text-[1rem] font-Barlow-Condensed tracking-[0.16875rem] font-normal"
                    >
                      <span className="text-[1rem] font-bold">
                        {link.order}
                      </span>{' '}
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Desktop View */}
        <div className="line " />
        <div className="md:w-[28.125rem]  xl:w-[51.875rem] bg-shadow md:flex items-center text-[0.875rem] text-white font-Barlow-Condensed tracking-[0.14763rem] gap-9 pl-[3rem] hidden">
          {NavLinks.map((link)  => (
            <NavLink key={link.id} to={`/${link.id}`} className="py-[2rem] navLink">
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

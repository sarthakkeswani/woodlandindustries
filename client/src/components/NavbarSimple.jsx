import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {

  const location = useLocation();

  return (
    <ul className="flex flex-col  lg:mb-0 lg:mt-0 lg:flex-row  lg:gap-6  p-1">
      <Typography as="li" variant="h5" className="p-1 font-700 text-[#F3DEBA]">
        <Link
          to="/"
          className={`flex items-center hover:text-white transition-colors ${location.pathname ==='/'? "text-white" : null}`}
        >
          Home
        </Link>
      </Typography>
      <Typography as="li" variant="h5" className="p-1 font-700 text-[#F3DEBA]">
        <Link
          to="/products"
          className={`flex items-center hover:text-white transition-colors ${location.pathname ==='/products'? "text-white" : null}`}
        >
          Products
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-700 text-[#F3DEBA]"
      >
        <Link
          to="/services"
          className={`flex items-center hover:text-white transition-colors ${location.pathname ==='/services'? "text-white" : null}`}
        >
          Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-700 text-[#F3DEBA]"
      >
        <Link
          to="/about"
          className={`flex items-center hover:text-white transition-colors ${location.pathname ==='/about'? "text-white" : null}`}
        >
          About Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-700 text-[#F3DEBA]"
      >
        <Link
          to="/contact"
          className={`flex items-center hover:text-white transition-colors ${location.pathname ==='/contact'? "text-white" : null}`}
        >
          Contact Us
        </Link>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="bg-[#1b4343]">
      <Navbar className="max-w-screen-3xl fixed z-10 top-0 rounded-none bg-[#1b4343] border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography
              as="a"
              href="#"
              variant="h4"
              className="mr-4 cursor-pointer py-1.5 font-monsterrat uppercase text-white drop-shadow-lg"
            >
              Woodland Industries
            </Typography>
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}

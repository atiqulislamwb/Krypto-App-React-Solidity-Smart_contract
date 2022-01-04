import React, { useState } from "react";
import logo from "../../images/logo.png";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CgMenuMotion } from "react-icons/cg";

const NavItem = ({ title, classProps }) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex sm: justify-between md:justify-center items-center p-4">
      <div className="md:flex-[0.6] flex-initial justify-center items-center ">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="hidden text-white md:flex  list-none flex-row justify-between items-center flex-initial ">
        {["Market", "Exchange", "Tutorial", "Wallet"].map((item, index) => (
          <NavItem title={item} key={item + index} />
        ))}
        <button className=" bg-[#ca1fec] py-2 px-7 rounded-full cursor-pointer hover:bg-blue-900 ">
          login
        </button>
      </ul>

      <div className="md:hidden flex relative">
        <CgMenuMotion
          fontSize={33}
          className=" rounded-full  text-white"
          onClick={() => setToggle(true)}
        />
      </div>

      {toggle && (
        <ul
          className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
        >
          <li className="text-xl w-full my-2 right-0">
            <IoMdCloseCircleOutline
              fontSize={40}
              className="md:hidden cursor-pointer text-white "
              onClick={() => setToggle(false)}
            />
          </li>
          {["Market", "Exchange", "Tutorial", "Wallet"].map((item, index) => (
            <NavItem
              title={item}
              key={item + index}
              classProps="my-2 text-2xl"
            />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <p className="text-white text-[25px] font-bold cursor-pointer flex ">
            Jielin &nbsp;
            <span className="sm:block hidden">Wang</span>
          </p>
        </Link>
        {/* social medial icon groups */}
        <ul className="list-none sm:flex hidden gap-10">
          {/* email icon */}
          <li>
            <a href="mailto:jielinwang777@gmail.com">
              {" "}
              <AiOutlineMail className=" text-indigo-300 text-[28px] shadow-xl hover:shadow-violet-500 " />
            </a>
          </li>
          {/* linkedin icon */}
          <li>
            <a href="https://www.linkedin.com/in/jielinwang-/">
              {" "}
              <FiLinkedin className="text-indigo-300 text-[28px] shadow-xl hover:shadow-violet-500 " />
            </a>
          </li>
          {/* github icon */}
          <li>
            <a href="https://github.com/JielinWang">
              {" "}
              <BsGithub className="text-indigo-300 text-[28px] shadow-xl hover:shadow-violet-500 " />
            </a>
          </li>
          {/* instagram icon */}
          <li>
            <a href="https://www.instagram.com/lin_o928/">
              {" "}
              <BsInstagram className="text-indigo-300 text-[28px] shadow-xl hover:shadow-violet-500 " />
            </a>
          </li>
          {/* cell phone icon */}
          <li>
            <FiPhoneCall
              className="text-indigo-300 text-[28px] shadow-xl hover:shadow-violet-500 cursor-pointer "
              onClick={() => {
                alert("Please call 847-494-6507");
              }}
            />
          </li>
        </ul>

        {/* Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobie responsive */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

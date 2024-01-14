import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

import "./navbar.css";

const navLink = [
  {
    id: 1,
    title: "Menu",
    link: "/",
  },
  {
    id: 2,
    title: "Biz haqimizda",
    link: "/about",
  },
  {
    id: 3,
    title: "Mijozlar fikri",
    link: "/comments",
  },
];

const Navbar = () => {
  const [activeButton, setActiveButton] = useState(1);
  const location = useLocation();

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveButton(1);
    }
  }, [location.pathname]);

  return (
    <div className="navbar relative flex justify-center mx-auto pt-7">
      {location.pathname !== '/' && (
        <Link to={'/'} className="absolute top-5 left-5 z-[100] w-[36px] bg-white rounded-full h-[36px] flex justify-center items-center">
          <FaArrowLeft className="text-xl"  />
        </Link>
      )}
      <div className="absolute flex justify-center items-center flex-col w-full">
        <img
          className="logoImg"
          src="https://s3-alpha-sig.figma.com/img/c3bf/c590/d11ae23ae8637078b37336a9e74fdccd?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0LsB35tggBPe-UB5JD2I0r5d6eWoUSK~zEr762ceZUb65HJiLgSjL6RgTmlig3a4mpfYBYDFXB3ffMjFzNjlu9oxwjT9EHnEv4cC8qIdVQOSCjEXga1dgvEDRxmP0LrVNYcmENAkfniOro0ZpzkBuqT-7Okqqb8Q6GjUd7AExQCvpmUIVAa0iZ-hhKaje8h0SHhFkJiMSdfSVLk9GNBr2cT7VAXRio5pKDeIDZNjcel-3N-LAbWTyRZ5LUGOkkHlJ4XjRXTnu3QJDgF71fnbztZrcavZFfO~MWqJY0XHxq48eL4wQrbd0w7i6h~j8~qE-DO3-rLsahXLb-szPstvg__"
          alt="logo"
        />
        <div className="flex justify-end gap-3 w-full">
          <div className="flex justify-center items-center gap-3 mr-10">
            <button className="btn">Eng</button>
            <button className="btn">Rus</button>
          </div>
        </div>
      </div>
      <div className="resume flex justify-center flex-col absolute w-full bottom-0 py-4 rounded-t-[24px] gap-2 ">
        <h1 className="text-2xl px-4 font-bold">Bek Restaurant</h1>
        <p className="text-sm px-4 opacity-70">
          Muqimiy ko’chasi, 21-uy, Toshkent, Uzbekistan
        </p>
        <p className="text-xl px-4 font-bold opacity-70">+998(98) 812 22 66</p>
        <div className="flex gap-3 px-4">
          {navLink.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`btnMenu ${activeButton === item.id ? "active" : ""}`}
              onClick={() => handleButtonClick(item.id)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

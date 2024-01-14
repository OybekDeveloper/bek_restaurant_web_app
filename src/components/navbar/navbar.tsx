import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar relative flex justify-center mx-auto pt-10">
      <div className="absolute flex justify-center items-center flex-col w-full">
        <img
          className="logoImg"
          src="https://s3-alpha-sig.figma.com/img/c3bf/c590/d11ae23ae8637078b37336a9e74fdccd?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H0LsB35tggBPe-UB5JD2I0r5d6eWoUSK~zEr762ceZUb65HJiLgSjL6RgTmlig3a4mpfYBYDFXB3ffMjFzNjlu9oxwjT9EHnEv4cC8qIdVQOSCjEXga1dgvEDRxmP0LrVNYcmENAkfniOro0ZpzkBuqT-7Okqqb8Q6GjUd7AExQCvpmUIVAa0iZ-hhKaje8h0SHhFkJiMSdfSVLk9GNBr2cT7VAXRio5pKDeIDZNjcel-3N-LAbWTyRZ5LUGOkkHlJ4XjRXTnu3QJDgF71fnbztZrcavZFfO~MWqJY0XHxq48eL4wQrbd0w7i6h~j8~qE-DO3-rLsahXLb-szPstvg__"
          alt="logo"
        />
        <div className="flex justify-end  gap-3 w-full ">
          <div className="flex justify-center items-center gap-3 mr-10">
            <button className="btn">Eng</button>
            <button className="btn">Rus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
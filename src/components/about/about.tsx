import React from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-[500]">Bizning jamoamiz</h1>
      <div>
        Carusel
      </div>
      <div className="flex flex-col">
        <h1>Ish vaqtlari</h1>
        <div className="day flex items-center ">
          <MdOutlineCalendarToday className="text-base mr-[10px]" />
          <p className="text-base">Dushanba - Yakshanba</p>
        </div>
        <div className="time flex items-center ">
          <MdAccessTime className="text-base mr-[10px]" />
          <p className="text-base"> 10:00 - 23:00</p>
        </div>
      </div>
    </div>
  );
};

export default About;

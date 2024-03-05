import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto">
      <ul className="hidden md:flex">
        <li className="p-4">درباره ی ما</li>
        <li className="p-4">محصولات</li>
        <li className="p-4">سرویس ها</li>
        <li className="p-4">ارتباط با ما</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed right-0 top-[4rem] w-[25%] h-full border-r-gray-900 bg-[#FFFEFD] ease-in-out duration-500  "
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-1 pt-10">
          <li className="p-4 border-b-2   border-[#3FAC8D]">درباره ی ما</li>
          <li className="p-4 border-b-2 border-[#3FAC8D]">محصولات</li>
          <li className="p-4 border-b-2 border-[#3FAC8D]">سرویس ها</li>
          <li className="p-4 border-b-2 border-[#3FAC8D]">ارتباط با ما</li>
        </ul>
      </div>
    </div>
  );
}

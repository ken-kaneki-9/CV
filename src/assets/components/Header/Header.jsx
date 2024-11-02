import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="bg-black font-poppins h-50"></div>
      <header className="fixed top-0 left-0 w-full h-16 py-12 px-[9%] bg-black bg-opacity-70 flex justify-between items-center z-10">
        <a
          href="#"
          className="text-4xl text-red-500 font-extrabold cursor-pointer transition-all duration-500 ease-in-out transform translate-y-1 hover:scale-110 hover:text-red"
        >
          Sarvil
        </a>
        <nav className="navbar">
          <a
            className="text-[1.8rem] text-[#f0f8ff] ml-16 font-medium transition duration-300 ease-in-out no-underline border-b-2 border-transparent hover:border-red-500 hover:text-red-500"
            href="#"
          >
            Home
          </a>
          <a
            className="text-[1.8rem] text-[#f0f8ff] ml-16 font-medium transition duration-300 ease-in-out no-underline border-b-2 border-transparent hover:border-red-500 hover:text-red-500"
            href="#"
          >
            Services
          </a>
          <a
            className="text-[1.8rem] text-[#f0f8ff] ml-16 font-medium transition duration-300 ease-in-out no-underline border-b-2 border-transparent hover:border-red-500 hover:text-red-500"
            href="#"
          >
            Skills
          </a>
          <a
            className="text-[1.8rem] text-[#f0f8ff] ml-16 font-medium transition duration-300 ease-in-out no-underline border-b-2 border-transparent hover:border-red-500 hover:text-red-500"
            href="#"
          >
            Education
          </a>
          <a
            className="text-[1.8rem] text-[#f0f8ff] ml-16 font-medium transition duration-300 ease-in-out no-underline border-b-2 border-transparent hover:border-red-500 hover:text-red-500"
            href="#"
          >
            Contact
          </a>
          <a
            className="text-[1.8rem] text-[#f0f8ff] ml-16 font-medium transition duration-300 ease-in-out no-underline border-b-2 border-transparent hover:border-red-500 hover:text-red-500"
            href="#"
          >
            Experience
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;

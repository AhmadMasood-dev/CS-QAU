import React from "react";
import { qau_logo } from "../../assets/images";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-screen/2 md:h-1/2 imgnow">
      <div className="relative z-10 flex flex-col flex-wrap items-center w-full px-5 py-4 md:flex-row">
        <a
          href="/"
          className="flex items-center mb-4 font-medium title-font md:mb-0"
        >
          <img src={qau_logo} alt="QAU Logo" className="w-16 h-16 p-2" />
        </a>

        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <Link
            to="/home"
            className="px-3 py-2 font-medium text-white cursor-pointer hover:text-accent"
          >
            Home
          </Link>
          <Link
            to="/academics"
            className="px-3 py-2 font-medium text-white transition-all cursor-pointer hover:text-accent"
          >
            Academics
          </Link>
          <Link
            to="/research"
            className="px-3 py-2 font-medium text-white transition-all cursor-pointer hover:text-accent"
          >
            Research
          </Link>
          <Link
            to="/project"
            className="px-3 py-2 font-medium text-white transition-all cursor-pointer hover:text-accent"
          >
            Funded Project
          </Link>
          <Link
            to="/admission"
            className="px-3 py-2 font-medium text-white transition-all cursor-pointer hover:text-accent"
          >
            Admission
          </Link>
          <Link
            to="/faculty"
            className="px-3 py-2 font-medium text-white transition-all cursor-pointer hover:text-accent"
          >
            Faculty
          </Link>
        </nav>

        <a
          href="https://qau.edu.pk/"
          target="_blank"
          className="inline-flex items-center px-4 py-2 mt-4 text-base font-medium text-white transition-colors border rounded cursor-pointer border-accent-dark hover:text-accent focus:outline-none md:mt-0"
        >
          <span className="mr-2">QAU</span>
          <FaArrowRight />
        </a>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-64 px-4 text-center text-white md:h-72">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-5xl">
          Computer Science Department
        </h1>
        <span className="block mb-4 text-sm font-semibold sm:text-2xl md:text-4xl">
          Quaid-I-Azam University
        </span>
        <h3 className="text-sm font-semibold sm:text-lg md:text-xl">
          Be a force for good!
        </h3>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { qau_logo } from "../../assets/images";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    // <header className="flex justify-center bg-accent-dark top-banner">
    //   <div class="container w-full  flex flex-wrap px-5 flex-col md:flex-row items-center">
    //     <a class="flex title-font font-medium items-center  mb-4 md:mb-0">
    //       <img src={qau_logo} alt="" className="w-20 h-20 p-2 " />
    //     </a>
    //     <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    //       <Link class="mr-5 hover:text-secondary text-white cursor-pointer" to="/home">
    //         Home
    //       </Link>
    //       <Link class="mr-5 hover:text-secondary text-white cursor-pointer" to="/academics">
    //         Academics
    //       </Link>
    //       <a class="mr-5 hover:text-secondary text-white cursor-pointer">
    //         Research
    //       </a>
    //       <a class="mr-5 hover:text-secondary text-white cursor-pointer">
    //         Funded Project
    //       </a>
    //       <a class="mr-5 hover:text-secondary text-white cursor-pointer">
    //         Admission
    //       </a>
    //       <a class="mr-5 hover:text-secondary text-white cursor-pointer">
    //         Faulty
    //       </a>
    //     </nav>
    //     <a
    //       href="https://qau.edu.pk/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="inline-flex items-center px-3 py-1 mt-4 text-base text-white border-0 rounded cursor-pointer focus:outline-none md:mt-0"
    //     >
    //       <span className="mr-2">QAU</span>
    //       <FaArrowRight />
    //     </a>
    //   <div id="Home">
    //   <div className="h-[10rem] w-full p-10 "> </div>

    //   <div className="w-full text-white content">
    //     <h1 className="p-5 text-2xl font-bold sm:text-3xl md:text-5xl ">
    //      Computer Science Department
    //     </h1>
    //     <span className="pb-0 text-sm font-semibold sm:text-2xl md:text-4xl md:pb-5 ">
    //       Quaid-I-Azam University
    //     </span>
    //     <h3 className="pt-10 text-sm font-semibold sm:text-lg md:text-xl">
    //       Be a force for good!
    //     </h3>
    //   </div>
    // </div>
    //   </div>
    // </header>
    <div className="w-full h-screen/2 md:h-1/2 imgnow">
    {/* Header Navigation Bar - make it relative to appear above the overlay */}
    <div className="relative z-10 flex flex-col flex-wrap items-center w-full px-5 py-4 md:flex-row">
      <a href="/" className="flex items-center mb-4 font-medium title-font md:mb-0">
        <img src={qau_logo} alt="QAU Logo" className="w-16 h-16 p-2" />
      </a>
      
      <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
        <Link to="/home" className="px-3 py-2 font-medium text-white cursor-pointer hover:text-accent">Home</Link>
        <Link to="/academics" className="px-3 py-2 font-medium text-white transition-all cursor-pointer hover:text-accent">Academics</Link>
        <Link to="/research" className="px-3 py-2 font-medium text-white transition-all cursor-pointer hover:text-accent">Research</Link>
        <Link to="/projects" className="px-3 py-2 font-medium text-white transition-all cursor-pointer hover:text-accent">Funded Project</Link>
        <Link to="/admission" className="px-3 py-2 font-medium text-white transition-all cursor-pointer hover:text-accent">Admission</Link>
        <Link to="/faculty" className="px-3 py-2 font-medium text-white transition-all cursor-pointer hover:text-accent">Faculty</Link>
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
    
    {/* Center Content - University Information - make it relative to appear above the overlay */}
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
    // <div className="w-full bg-center bg-cover bg-accent-dark h-screen/2 md:h-1/2 imgnow">
    //   {/* Header Navigation Bar */}
    //   <div className="flex flex-col flex-wrap items-center w-full px-5 py-4 md:flex-row">
    //     <Link
    //       to="/"
    //       className="flex items-center mb-4 font-medium title-font md:mb-0"
    //     >
    //       <img src={qau_logo} alt="QAU Logo" className="w-16 h-16 p-2" />
    //     </Link>

    //     <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
    //       <Link
    //         to="/home"
    //         className="mr-5 text-white cursor-pointer hover:text-yellow-300"
    //       >
    //         Home
    //       </Link>
         
    //       <Link
    //         to="/academics"
    //         className="mr-5 text-white cursor-pointer hover:text-yellow-300"
    //       >
    //         Academics
    //       </Link>
    //       <Link
    //         to="/research"
    //         className="mr-5 text-white cursor-pointer hover:text-yellow-300"
    //       >
    //         Research
    //       </Link>
    //       <Link
    //         to="/projects"
    //         className="mr-5 text-white cursor-pointer hover:text-yellow-300"
    //       >
    //         Funded Project
    //       </Link>
    //       <Link
    //         to="/admission"
    //         className="mr-5 text-white cursor-pointer hover:text-yellow-300"
    //       >
    //         Admission
    //       </Link>
    //       <Link
    //         to="/faculty"
    //         className="mr-5 text-white cursor-pointer hover:text-yellow-300"
    //       >
    //         Faculty
    //       </Link>
    //     </nav>

    //     <a
    //       href="https://qau.edu.pk/"
    //       target="_blank"
    //       className="inline-flex items-center px-3 py-1 mt-4 text-base text-white transition-colors border border-white rounded cursor-pointer hover:bg-white hover:text-blue-900 focus:outline-none md:mt-0"
    //     >
    //       <span className="mr-2">QAU</span>
    //       <FaArrowRight />
    //     </a>
    //   </div>

    //   {/* Center Content - University Information */}
    //   <div className="flex flex-col items-center justify-center h-64 px-4 text-center text-white md:h-72">
    //     <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-5xl">
    //       Computer Science Department
    //     </h1>
    //     <span className="block mb-4 text-sm font-semibold sm:text-2xl md:text-4xl">
    //       Quaid-I-Azam University
    //     </span>
    //     <h3 className="text-sm font-semibold sm:text-lg md:text-xl">
    //       Be a force for good!
    //     </h3>
    //   </div>
    // </div>
  );
};

export default Navbar;

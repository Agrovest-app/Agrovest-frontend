"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { PiTelegramLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Navbar = () => {

      const [scrolled, setScrolled] = useState(false);
    
        useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 10); // 10px scroll before bg shows
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <header>
              <div className="absolute left-0 py-3 bg-[#314908] w-full z-30">
        <div className="flex w-11/12 m-auto items-center justify-between">
        <div className="flex items-center gap-x-9">
        <div className="flex items-center gap-x-3 cursor-pointer group border-r border-gray-400 pr-8">
        <FiPhoneCall size={18} className="text-white transition duration-500 ease-in-out group-hover:text-[#8cbb37]"/>  <p className="transition duration-500 ease-in-out group-hover:text-[#8cbb37] text-white font-medium text-md">+234 703 027 5140</p>
        </div>
        <div className="flex group items-center gap-x-3 cursor-pointer border-r border-gray-400 pr-8">
        <TfiEmail size={18} className="text-white transition duration-500 ease-in-out group-hover:text-[#8cbb37]"/>  <p className="transition duration-500 ease-in-out group-hover:text-[#8cbb37] text-white font-meduim text-md">info@agro-vest.com</p>
        </div>
        </div>
        <div className="flex items-center gap-x-5">
          <FaInstagram className="cursor-pointer text-[#AFE67F] transition duration-500 ease-in-out hover:text-[#ffffff]" size={20}/>
          <PiTelegramLogo className="cursor-pointer text-[#AFE67F] transition duration-500 ease-in-out hover:text-[#ffffff]" size={20}/>
          <FaFacebookF className="cursor-pointer text-[#AFE67F] transition duration-500 ease-in-out hover:text-[#ffffff]" size={20}/>
          <CiLinkedin className="cursor-pointer text-[#AFE67F] transition duration-500 ease-in-out hover:text-[#ffffff]" size={26}/>
          </div>
        </div>
      </div>
        <nav className={`flex justify-between items-center z-30 w-11/12 gap-x-5 fixed py-5 transition-colors duration-800 ease-in-out ${
        scrolled ? "bg-black shadow-md w-full left-0 px-9 top-0" : "bg-transparent left-14 top-18"}`}>
    <Link href="#" className="flex items-center gap-x-3">
    <Image src={"/imgs/logo.png"} 
    alt="logo"
    width={246}
    height={221}
    className="w-14 h-auto"
    />
    <span className="text-white text-3xl font-medium">Agrovest</span>
    </Link>
    <ul className="flex gap-x-9">
      <li className="relative group pb-1 text-white font-medium text-xl cursor-pointer transition duration-500 ease-in-out hover:text-[#AFE67F]"><Link href="#">About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#AFE67F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
      </Link></li>
      <li className="relative group pb-1 text-white font-medium text-xl cursor-pointer transition duration-500 ease-in-out hover:text-[#AFE67F]"><Link href="#">Services
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#AFE67F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
      </Link></li>
      <li className="relative group pb-1 text-white font-medium text-xl cursor-pointer transition duration-500 ease-in-out hover:text-[#AFE67F]"><Link href="#">FAQs
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#AFE67F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
      </Link></li>
      <li className="relative group pb-1 text-white font-medium text-xl cursor-pointer transition duration-500 ease-in-out hover:text-[#AFE67F]"><Link href="#">Contact
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#AFE67F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
      </Link></li>


    </ul>
            <button className="text-white border rounded-lg px-12 py-4 font-medium uppercase text-sm bg-white/10 hover:bg-white transition-all duration-500 cursor-pointer ease-in-out hover:text-black">Join Us</button>

        </nav>
      </header>
  )
}

export default Navbar
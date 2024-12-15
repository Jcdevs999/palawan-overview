"use client";
import React, { useState } from "react";

// Function to handle slow-motion scroll
const smoothScrollTo = (target: HTMLElement, duration: number) => {
  const start = window.pageYOffset;
  const end = target.offsetTop;
  const distance = end - start;
  let startTime: number | null = null;

  const scroll = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const scrollY = Math.min(start + (distance * progress) / duration, end);
    window.scrollTo(0, scrollY);

    if (progress < duration) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link: string, sectionId: string) => {
    setActiveLink(link);

    // Get the target section
    const section = document.getElementById(sectionId);
    if (section) {
      // Perform the custom slow scroll to the section
      smoothScrollTo(section, 1500); // 2000ms for slower scroll
    }
  };

  return (
    <div>
      <nav className="w-full fixed top-0 z-50 backdrop-blur-md p-4 rounded transition-all ease-in-out duration-500 bg-blue-300">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold text-black">
            Coron, Palawan
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`lg:flex lg:space-x-8 lg:items-center absolute lg:static top-0 left-0 w-full lg:w-auto backdrop-blur-md transition-all ease-in-out duration-500 ${
              isOpen ? "top-16" : "-top-64"
            }`}
          >
            <a
              href="#destination"
              onClick={() => handleLinkClick("destination", "destination")}
              className={`py-2 px-4 rounded-lg transition-all ${
                activeLink === "destination"
                  ? "bg-blue-200 text-white"
                  : "text-black"
              } hover:bg-white/50 text-black`}
            >
              Tourism Destination
            </a>
            <a
              href="#overview"
              onClick={() => handleLinkClick("overview", "overview")}
              className={`py-2 px-4 rounded-lg transition-all ${
                activeLink === "overview"
                  ? "bg-blue-200 text-white"
                  : "text-black"
              } hover:bg-white/50 text-black`}
            >
              Overview
            </a>
            <a
              href="#classification"
              onClick={() =>
                handleLinkClick("classification", "classification")
              }
              className={`py-2 px-4 rounded-lg transition-all ${
                activeLink === "classification"
                  ? "bg-blue-200 text-white"
                  : "text-black"
              } hover:bg-white/50 text-black`}
            >
              Classification
            </a>
            <a
              href="#impacts"
              onClick={() => handleLinkClick("impacts", "impacts")}
              className={`py-2 px-4 rounded-lg transition-all ${
                activeLink === "impacts"
                  ? "bg-blue-200 text-white"
                  : "text-black"
              } hover:bg-white/50 text-black`}
            >
              Impacts
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

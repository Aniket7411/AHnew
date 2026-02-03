"use client";

import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HomeContext } from "../../contextManager/homecontext";
import axios from "axios";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const { setHeaderData } = useContext(HomeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const dropdownItems = [
    {
      heading: "Writing",

      items: [
        {
          name: "Essay Help Services",
          link: 'essay-Help-Services',
          heading: "Essay Help- Expert Assignment Service",
          subheading: "Get urgent essay help for excellent grades.",
        },
        {
          name: "Article Writing Services",
          link: "Article-Writing-Services",
          heading: "Write My Professional Article Assignment Help",
          subheading:
            "Professional Article Assignment Help for Fast and reliable Assistance",
        },
        {
          name: "Blog Writing Services",
          link: "Blog-Writing-Services",
          heading: "Proficient Assistance for Blog Writing Services",
          subheading:
            "Write SEO-friendly and engaging Blogs for your target audience",
        },
        {
          name: "Report Writing Services",
          link: "Report-Writing-Services",
          heading: "Experienced Report Assignment Help For Me",
          subheading:
            "Hire Experienced writers for top quality report writing assistance",
        },
        {
          name: "Dissertation/Thesis Help Services",
          link: "Dissertation-Thesis-Help-Services",
          heading: "Expert Dissertation/Thesis Help",
          subheading:
            "Find Professional help for Dissertation/Thesis Assignment",
        },
        {
          name: "Case Study Help Services",
          link: "Case-Study-Help-Services",
          heading: "My Case Study Assignment Solutions",
          subheading:
            "Write my case study solutions elevating my academic grades",
        },
        {
          name: "Project Management Writing Services",
          link: "Project-Management-Writing-Services",
          heading: "Reliable Project Management Assignment Solutions",
          subheading:
            "Finding someone write my project management assignment. We are here.",
        },
        {
          name: "Annotated Bibliography Writing Services",
          link: "Annotated-Bibliography-Writing-Services",
          heading: "Annotated Bibliography Assignment Help",
          subheading:
            "Write Annotated Bibliography Assignment with Subject Matter Experts",
        },
        {
          name: "My Coursework Help Services",
          link: "My-Coursework-Help-Services",
          heading:
            "Coursework Help Guidance: Maximizing Your Academic Performance",
          subheading: "Achieve Higher grades with our coursework expertise",
        },
        {
          name: "Technical Writing Services",
          link: "Technical-Writing-Services",
          heading: "Technical/Programming Assignment Help",
          subheading:
            "Reach us out for authentic Technical/Programming assignment solutions",
        },
        {
          name: "Write My Research Paper Services",
          link: "Write-My-Research-Paper-Services",
          heading: "Please Write Research Paper For Me",
          subheading: "Avail your Research paper solutions hassle-free",
        },
        {
          name: "Research Proposal Writing Services",
          link: "Research-Proposal-Writing-Services",
          heading: "Research Proposal Assignment Service",
          subheading: "Receive your Research paper with PHD writing experts",
        },
      ],
    },
    {
      heading: "Our Domains",
      items: [
        {
          name: "Law Assignment",
          link: "Law-Assignment",
          heading: "Online Law Assignment Services",
          subheading:
            "Connect with our professionals for your Law Assignment solutions",
        },
        {
          name: "Science Assignment",
          link: "Science-Assignment",
          heading: "Science Assignment Help For Your Academic Excellence",
          subheading:
            "Call us Now for affordable yet best quality Science Assignments",
        },
        {
          name: "Nursing Assignment",
          link: "Nursing-Assignment",
          heading: "Write My Nursing Assignment for me",
          subheading:
            "Where can I get the best quality nursing assignments done? Yes we do.",
        },
        {
          name: "Civil Assignment",
          link: "Civil-Assignment",
          heading: "Pocket-friendly Civil Assignment Services",
          subheading:
            "Avail your civil assignment solutions in affordable prices.",
        },
        {
          name: "Engineering Assignment Help",
          link: "Engineering-Assignment-Help",
          heading: "Engineering Assignment Help for me",
          subheading:
            "Can I get help for my engineering assignment? Call Us Now!",
        },
        {
          name: "Management & HR Assignment",
          link: "Management-HR-Assignment",
          heading: "Do my Management & Human Resource Assignment for me",
          subheading:
            "Can someone write my Management & Human Resource Assignment? Our Subject matter experts do.",
        },
        {
          name: "Finance & Statistics Assignment",
          link: "Finance-Statistics-Assignment",
          heading:
            "Masters level Finance & Statistics Assignment Writing Services",
          subheading:
            "Enhance your academic potential with our Finance & Statistics assignment writing help.",
        },
        {
          name: "Calculus Assignment",
          link: "Calculus-Assignment",
          heading: "Receive Expert Solutions For Your Calculus Assignment",
          subheading:
            "Lets connect for availing you best calculus assignment help",
        },
        {
          name: "Psychology Assignment",
          link: "Psychology-Assignment",
          heading: "Perfect Solution For Your Psychology Assignment",
          subheading:
            "The best assignment writing with our psychology experts.",
        },
      ],
    },
    {
      heading: "More Services",
      items: [
        {
          name: "CV Writing Services",
          link: "CV-Writing-Services",
          heading: "Write CV For Me",
          subheading:
            "CV writing services to enhance your professional portfolio.",
        },
        {
          name: "Write My SOP (Statement of Purpose) Services",
          link: "Write-My-SOP-Services",
          heading: "Professional SOP writing services",
          subheading:
            "Say “Write my SOP for me” and get offer letters from top universities",
        },
        {
          name: "Diploma Work Help Services",
          link: "Diploma-Work-Help-Services",
          heading:
            "Diploma Work Help Online - Distinctive Diploma Assignment Writing Services",
          subheading:
            "Pocket-friendly, Expert and Reliable Writing Services for all your diploma works",
        },
        {
          name: "Corporate Profile Writing Services",
          link: "Corporate-Profile-Writing-Services",
          heading: "Smart Corporate Profile Writing Services For You",
          subheading:
            "Top-Notch Corporate Profiling Services for students and professionals",
        },
        {
          name: "Take My Online Exam Services",
          link: "Take-My-Online-Exam-Services",
          heading: "Take My Online Exam - Expert Assistance Offered",
          subheading: "Ace your grades in your Exam with us.",
        },
        {
          name: "Presentation/Infographics/Posters Services",
          link: "Presentation-Infographics-Posters-Services",
          heading: "Presentation/Poster/Infographics Writing Services",
          subheading:
            "Hire professionals for your Presentation/Poster/Infographics writing services.",
        },
      ],
    },
  ];

  useEffect(() => {
    if (selectedService) {
      setHeaderData(selectedService);
      router.push("/");
    }
  }, [selectedService, setHeaderData, router]);

  // const navigate = useNavigate();



  const getLocation = async () => {
    try {
      const response = await axios.get("http://ip-api.com/json");
      await setCountry(response.data.country); // Extract and set the country
    } catch (error) {
      setError("Unable to fetch location."); // Handle errors
      console.error("Error fetching location:", error);
    }
  };

  useEffect(() => {
    getLocation(); // Fetch location when the component mounts
  }, []);

  const getRoutePath = () => {
    const c = (country || "").toLowerCase().trim();
    switch (c) {
      case "australia":
        return "/australia";
      case "canada":
        return "/canada";
      case "united kingdom":
      case "uk":
        return "/uk";
      case "dubai":
        return "/dubai";
      case "germany":
        return "/germany";
      case "ireland":
        return "/ireland";
      case "newzealand":
      case "new zealand":
        return "/newzealand";
      case "india":
      default:
        return "/";
    }
  };

  return (
    <div>
      <div className="flex justify-between font-inter py-3 px-4 sm:px-8 lg:px-16 items-center headerMain relative min-h-[72px] gap-4">
        {/* Logo */}
        <Link href={getRoutePath()} className="links hidden md:block flex-shrink-0">
          <img
            src="/images/TahLogo.svg"
            alt="logo"
            className="logoImg cursor-pointer"
          />
        </Link>
        <img
          src="/images/imageOne.svg"
          alt="logo"
          className="block md:hidden cursor-pointer h-14 w-18"
          onClick={() => router.push("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && router.push("/")}
        />
        <div className="hidden lg:flex flex-1 min-w-0 one justify-center">
          <ul className="flex gap-4 xl:gap-6 font-bold text-[#000000] headUl flex-shrink-0 max-w-full">



            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {/* <button className="font-semibold">Services</button> */}
              <button
                className="text-gray-800 hover:text-[#65CBE4] cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center inline-flex items-center"
                type="button"
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* {isDropdownOpen && (
                <div className="absolute z-10 w-[50vw] h-[75vh] bg-white divide-y divide-gray-100 rounded-lg shadow-md py-3 font-semibold text-gray-700 overflow-auto">

                  <div className="flex dropdownDiv">
                    {dropdownItems.map((dropdown, index) => (
                      <ul key={index} className="py-2 text-sm text-dark dark:text-dark">
                        <p className="font-bold px-4 pb-4">{dropdown.heading}</p>
                        {dropdown.items.map((item, i) => (
                          <li key={i}>
                             
                            <Link
                              to={`/services/${item?.link}`}
                              onClick={() => setIsDropdownOpen(false)} // Close dropdown
                              className="block px-4 py-2 dark:hover:text-gray-300"
                            >
                              {item?.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              )} */}

              <div
                className={`absolute z-10 w-[50vw] h-[75vh] bg-white divide-y divide-gray-100 rounded-lg py-3 font-semibold text-gray-700 overflow-auto transition-opacity duration-200 ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                  }`}
              >
                <div className="flex dropdownDiv">
                  {dropdownItems.map((dropdown, index) => (
                    <ul key={index} className="py-2 text-sm text-dark dark:text-dark">
                      <p className="font-bold px-4 pb-4">{dropdown.heading}</p>
                      {dropdown.items.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={`/services/${item?.link.toLowerCase()}`}
                            onClick={() => setIsDropdownOpen(false)}
                            className="block px-4 py-2 dark:hover:text-gray-300"
                          >
                            {item?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </li>

            {/* Dropdown Menus */}

            {/* <li
              className="text-gray-800 hover:text-[#65CBE4] cursor-pointer"
              onClick={() => {
                Navigate("/about-us");
              }}
            >
              About Us
            </li> */}
            <li className="text-gray-800 hover:text-[#65CBE4] cursor-pointer">
              <Link href="/about-us" className="block w-full h-full">
                About Us
              </Link>
            </li>
            <li className="text-gray-800 hover:text-[#65CBE4] cursor-pointer">
              <Link href="/plans" className="block w-full h-full">
                Plans
              </Link>
            </li>
            <li className="text-gray-800 hover:text-[#65CBE4] cursor-pointer">
              <Link href="/privacy-policy" className="block w-full h-full">
                Privacy Policy
              </Link>
            </li>
            <li className="text-gray-800 hover:text-[#65CBE4] cursor-pointer">
              <Link href="/career" className="block w-full h-full">
                Career
              </Link>
            </li>

          </ul>
        </div>
        <div className="hidden lg:block flex-shrink-0 headUl">
          <div className="flex space-x-4">
            <Link
              href="/contact-us"
              className="text-white rounded-md bg-[#38419A] whitespace-nowrap"
              style={{
                padding: "8px 16px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 600,
                display: "inline-block",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Hamburger icon (visible only on small screens) */}
        <button
          className="lg:hidden text-gray-800 hover:text-[#65CBE4] cursor-pointer absolute right-8"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Full-Screen Sliding Menu for Mobile */}
      <div
        className={`${isMenuOpen ? "top-0 opacity-100" : "-top-full opacity-0"} 
    fixed left-0 right-0 bg-white z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
    h-full overflow-y-auto  px-4`}
      >
        {/* Close Icon */}
        <div className="flex justify-between p-6 items-center">
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-105"
            onClick={toggleMenu}
          >
            <img
              src="/images/imageOne.svg"
              alt="logo"
              className="h-14 w-18 transition-opacity hover:opacity-90"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800 hover:text-[#65CBE4] transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-start pb-6 px-6 space-y-1 h-full overflow-y-scroll">
          <li className="w-full">
            <button
              className="flex items-center justify-between w-full text-gray-800 hover:text-[#65CBE4] 
          font-semibold text-lg sm:text-xl ps-1 transition-colors duration-200"
              onClick={toggleDropdown}
            >
              Services
              <span className="ml-2">
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </button>

            <ul className={`space-y-1 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible hidden pointer-events-none"}`}>
              {dropdownItems.map((dropdown, index) => (
                <ul key={index} className="py-2 text-sm text-dark dark:text-dark">
                  <p className="font-bold px-4 pb-4">{dropdown.heading}</p>
                  {dropdown.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={`/services/${item?.link.toLowerCase()}`}
                        onClick={() => { setIsMenuOpen(false); setIsOpen(false); }}
                        className="block px-4 py-2 dark:hover:text-gray-300"
                      >
                        {item?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </ul>
          </li>

          <li className="w-full">
            <Link href="/about-us" className="block text-gray-800 hover:text-[#65CBE4] text-xl ps-1 py-1 transition-colors duration-200" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="w-full">
            <Link href="/plans" className="block text-gray-800 hover:text-[#65CBE4] text-xl ps-1 py-1 transition-colors duration-200" onClick={toggleMenu}>
              Plans
            </Link>
          </li>
          <li className="w-full">
            <Link href="/privacy-policy" className="block text-gray-800 hover:text-[#65CBE4] text-xl ps-1 py-1 transition-colors duration-200" onClick={toggleMenu}>
              Privacy Policy
            </Link>
          </li>
          <li className="w-full">
            <Link href="/career" className="block text-gray-800 hover:text-[#65CBE4] text-xl ps-1 py-1 transition-colors duration-200" onClick={toggleMenu}>
              Career
            </Link>
          </li>
          <li className="w-full">
            <Link href="/contact-us" className="block text-gray-800 hover:text-[#65CBE4] text-xl ps-1 py-1 transition-colors duration-200 hover:translate-x-1" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

"use client";

import React, { useState } from "react";
import "./career.css";
import ContactUs from "@/components/reactcomponents/contactusForm/ContactUs";
import Link from "next/link";


const Career = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  // const naviagte = useNavigate()

  const assignments = [
    {
      text: "Science Assignments",
      image: "/images/17.svg",
      description: "Detailed reports and research support in physics, chemistry, biology, and environmental science."
    },
    {
      text: "Management & Human Resource Assignments",
      image: "/images/176.svg",
      description: "Strategic case studies, HR practices, and organizational behavior analysis for management students."
    },
    {
      text: "Technical Report Assignments",
      image: "/images/1761.svg",
      description: "Professional technical documentation and structured reporting on engineering and scientific topics."
    },
    {
      text: "Project Management Assignments",
      image: "/images/1762.svg",
      description: "Tailored help with project planning, risk analysis, Gantt charts, and project lifecycle management."
    },
    {
      text: "Law Assignments",
      image: "/images/1763.svg",
      description: "Support in case law analysis, legal research, and structured legal writing with proper references."
    },
    {
      text: "Research Proposals/Papers",
      image: "/images/1764.svg",
      description: "Help with research formulation, hypothesis creation, literature review, and academic paper writing."
    },
    {
      text: "IT Related Assignments",
      image: "/images/1765.svg",
      description: "Expert help with system analysis, databases, cybersecurity, and emerging tech topics."
    },
    {
      text: "Programming Assignments",
      image: "/images/1766.svg",
      description: "Clean, commented code and solutions in Python, Java, C++, JavaScript, and more."
    },
    {
      text: "Diploma Works",
      image: "/images/1767.svg",
      description: "Complete support for diploma students with practical reports and academic write-ups."
    },
    {
      text: "Nursing Assignments",
      image: "/images/1768.svg",
      description: "Detailed assignments on patient care, nursing ethics, case studies, and medical scenarios."
    },
    {
      text: "Construction Based Assignments",
      image: "/images/1769.svg",
      description: "Assistance with building design, construction project reports, safety analysis, and CAD support."
    },
    {
      text: "Dissertation Help",
      image: "/images/17610.svg",
      description: "End-to-end guidance including proposal, literature review, methodology, and final submission."
    },
    {
      text: "Blogs & Updates",
      image: "/images/17611.svg",
      description: "Creative, SEO-optimized blog posts and timely updates for websites and student portals."
    },
    {
      text: "Case Studies",
      image: "/images/17612.svg",
      description: "In-depth analysis, real-world application, and structured formats for business and management topics."
    },
    {
      text: "CV Writing",
      image: "/images/17613.svg",
      description: "Professional resume and cover letter creation to highlight your skills and achievements."
    },
    {
      text: "Essay & Article Writing",
      image: "/images/17614.svg",
      description: "Well-researched, original essays and articles tailored to academic or general purposes."
    },
    {
      text: "Engineering Assignments",
      image: "/images/17615.svg",
      description: "Support across mechanical, electrical, civil, and computer engineering with calculations and design."
    },
    {
      text: "Finance & Statistics Assignments",
      image: "/images/17616.svg",
      description: "Help with financial modeling, ratio analysis, SPSS, Excel, and statistical interpretation."
    }
  ];


  return (
    <>
      <div className="min-h-screen relative mt-4">
        {/* Main Content */}
        <div className="flex items-center justify-start md:px-16">
          <div className="flex flex-col  mainHeadCareer">
            <h1 className="text-3xl font-bold leading-tight text-start">
              Join Our Team at <br />
              <span className="
              // text-[#0F7AA6]
               ahHub">The Assignment Hub</span>
            </h1>
            <p className="text-base font-normal leading-5">
              Empowering students worldwide with top-notch academic assistance.
            </p>
          </div>
          {/* <div className="hidden md:block md:w-1/2">
            <img
              src="/images/Rectangle 4819.svg" // Replace with your image URL
              alt="career"
              className="shadow-md w-full"
            />
          </div> */}
        </div>

        {/* Hiring Message */}
        {/* <div className="bg-[#F6F6F6] mt-12 py-4 text-center font-serif text-gray-500">
          <h1 className="text-4xl font-normal leading-tight">
            We are not hiring right now!
          </h1>
        </div> */}

        <div className="container  px-2 md:px-16 py-4 mainHeadCareer">
          {/* Job Listings */}
          <div className="w-full space-y-4 my-4">
            <Link
              className="w-full p-4 md:p-8 border-2 border-gray-500 hover:border-black hover:bg-slate-200 rounded-md flex flex-col md:flex-row justify-between items-start cursor-pointer transition-all"
              // onClick={() => { naviagte("/career/ACW") }}
              href="/career/ACW"
            >
              <div className="w-full md:w-3/4 mb-4 md:mb-4">
                <h1 className="text-lg md:text-xl font-medium mb-2">Academic Content Writer</h1>
                <p className="mb-3">Join our team as an Academic Content Writer / Research Analyst</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex p-2 items-center border border-black rounded-3xl gap-2">
                    <img src="/images/location.png" alt="" className="h-5 w-5" />
                    <span>100% remote</span>
                  </div>
                  <div className="flex p-2 items-center border border-black rounded-3xl gap-2">
                    <img src="/images/clock.png" alt="" className="h-5 w-5" />
                    <span>Full-time</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center font-semibold border-2 border-transparent p-2 rounded-md hover:border-[#38419a] hover:text-[#38419a] self-end md:self-auto">
                Apply
                <img src="/images/right-up.png" className="h-5 w-5 ml-1" alt="" />
              </button>
            </Link>

            <Link
              className="w-full p-4 md:p-8 border-2 border-gray-500 hover:border-black hover:bg-slate-200 rounded-md flex flex-col md:flex-row justify-between items-start cursor-pointer transition-all"
              // onClick={() => { naviagte("/career/ME") }}
              href="/career/ME"
            >
              <div className="w-full md:w-3/4 mb-4 md:mb-4">
                <h1 className="text-lg md:text-xl font-medium mb-2">Marketing Executive</h1>
                <p className="mb-3">Join our team as a Marketing Executive</p>
                <div className="flex flex-wrap gap-2">
                  <div className="flex p-2 items-center border border-black rounded-3xl gap-2">
                    <img src="/images/location.png" alt="" className="h-5 w-5" />
                    <span>Kota, Rajasthan</span>
                  </div>
                  <div className="flex p-2 items-center border border-black rounded-3xl gap-2">
                    <img src="/images/clock.png" alt="" className="h-5 w-5" />
                    <span>Full-time</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center font-semibold border-2 border-transparent p-2 rounded-md hover:border-[#38419a] hover:text-[#38419a] self-end md:self-auto">
                Apply
                <img src="/images/right-up.png" className="h-5 w-5 ml-1" alt="" />
              </button>
            </Link>
          </div>

        </div>

        {/* Job Listings */}


        {/* What We Offer */}
        <div className="container mx-auto">
          <div className="w-full mx-auto py-2">
            <h1 className="text-3xl lg:text-4xl font-semibold mainHeadCareer md:px-16">What we offer</h1>
            <div className="w-full mx-auto py-4">

              {/* <h2 className="text-xl font-semibold mb-4 px-16">What we offer</h2> */}
              {assignments.map((item, index) => (
                <div
                  key={index}
                  className=" justify-between flex p-2 flex-wrap items-center border-b text-3xl  transition-all duration-500 hover:bg-[#E5F3FD] cursor-pointer pl-2"
                  style={{ borderColor: "#B7B7B7" }}
                  onMouseEnter={() => setHoveredItem(item.image)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div>

                    <h3 className="text-3xl font-serif mb-2">{item.text}</h3>
                    <p className="text-sm text-[#000]">{item.description}</p>
                  </div>

                  <img alt={item.text}
                    src={item.image}
                    className={`border-amber-700 hidden lg:block transform w-64 h-44 mr-5 transition-opacity duration-700 rounded-lg ${hoveredItem === item.image ? "opacity-100" : "opacity-0"
                      }`}
                  />

                  <img alt={item.text}
                    src={item.image}
                    className={`border-amber-700 lg:hidden transform w-64 h-44 mr-5 transition-opacity duration-700 rounded-lg `}
                  />


                </div>


              ))}


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;

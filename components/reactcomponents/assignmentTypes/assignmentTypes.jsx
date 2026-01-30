"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "./assignmentTypes.css";

const services = [
  {
    title: "Essay/Article/Blog Writing",
    description:
      "We produce custom academic papers and general informative pieces that are informative and academic while still being audience-friendly.",
    icon: "/images/dissert.svg",
  },
  {
    title: "Report Writing",
    description:
      "Our reports are well-written, focused, and organized to produce findings, analysis, and recommendations for business, technical, or academic use.",
    icon: "/images/course.svg",
  },
  {
    title: "Dissertation/Thesis Writing",
    description:
      "This service covers all dissertation and thesis needs, from idea generation to writing and editing the document to meet academic specifications for the delivery of original research.",
    icon: "/images/home.svg",
  },
  {
    title: "CV Writing",
    description:
      "We provide you with well-developed, professional CVs and accompanying cover letters that will catch the attention of your potential employer.",
    icon: "/images/essayHelp.svg",
  },
  {
    title: "Case Studies Writing",
    description:
      "We produce detailed case compositions that examine typical issues, relating them to actual life scenarios, and provide recommendations for their solution which are applied in scholastic, commercial, or career-related contexts.",
    icon: "/images/caseStudies.svg",
  },
  {
    title: "Diploma Work",
    description:
      "We help students to make their diploma projects clear, structured, and backed by cited sources where necessary to meet the academic standard of presentation.",
    icon: "/images/diplomaWork.svg",
  },
  {
    title: "Project Management Writing",
    description:
      "Consulting on textual PM deliverables, such as business cases, proposals, project and program status reports, and project/project suite assessments and evaluations, in terms of purpose and content.",
    icon: "/images/promgmt.svg",
  },
  {
    title: "SOP (Statement of Purpose) Writing",
    description:
      "Our team assists in producing good SOPs that will emphasize your motivations, and achievements as well as your aspirations that will make your university or job application strong.",
    icon: "/images/sop.svg",
  },
  {
    title: "Annotated Bibliography Writing",
    description:
      "We help with the preparation of annotated bibliographies, that involve presenting sources alongside brief analyses of their usability and reliability in a given academic context.",
    icon: "/images/bibliography.svg",
  },
  {
    title: "Corporate Profile Writing",
    description:
      "We come up with professional corporate profiles that relay the image of a company to the public and this includes the scope of service delivery as well as its accomplishment in the supposed market.",
    icon: "/images/corpprofWriting.svg",
  },

];

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next`}
      style={{
        ...style,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        // background: "#3498db",
        border: '1px solid gray',

        borderRadius: "50%",
        height: "40px",
        width: "40px",
        zIndex: 10,
        right: "10px",
        top: "-27px",
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev`}
      style={{
        ...style,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        // background: "#3498db",
        border: '1px solid gray',

        borderRadius: "50%",
        height: "40px",
        width: "40px",
        zIndex: 10,
        left: "10px",
        top: "-27px",
      }}
      onClick={onClick}
    />
  );
};

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 425, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 2550,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <>

      <div className="relative bg-blue-100"
        style={{
          clipPath: "polygon(0% 0%, 100% 13%, 100% 100%, 0% 100%)",
          padding: '6rem 1.5rem 4rem 1.5rem',
          zIndex: '1'

        }}
      >
        <img src="./images/Blend Group 3.svg" style={{
          position: 'absolute',
          right: '0',
          top: '-2rem',
          zIndex: '1'
        }} alt="" />
        <h2 className="text-2xl font-bold text-center mb-4 highQualText mt-10 px-16"
        // style={{
        //   fontSize:'48px',
        //   fontWeight:600,
        //   lineHeight:'57px'
        // }}
        >
          Exceptional Assignment Support Help for all forms of Assignments
        </h2>
        <p className="text-center mb-14">
          Get excellent writing help from reputed assignment writers Globally
        </p>

        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-4" style={{
              // height:'maxContent',
              height: '316px'
            }}>
              <div
                className={`bg-white shadow-md rounded-lg p-6 text-center transition-all duration-300 ${index === currentIndex + 1 ? "transform scale-110 z-10" : "opacity-80"
                  }`}
                style={{
                  minHeight: '316px'
                }}
              >
                <img className="text-4xl mb-4" src={service?.icon} alt="" />
                <h3 className="text-start font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-start text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>

  );
};

export default CarouselComponent;

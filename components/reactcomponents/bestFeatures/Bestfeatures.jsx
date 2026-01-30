"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./bestfeatures.css";
import axios from "axios";

const services = [
  {
    title: "Fast Delivery",
    description:
      "Writing an essay assignment becomes a piece of cake when you hire our scholars to assist you with the task. These professionals can help you choose an essay topic, compose the outline, and conduct research.",
    icon: "/images/fastDelivery.svg",
  },
  {
    title: "Homework Help",
    description:
      "Our assignment help service provider is renowned across the country for assisting students with all kinds of homework. That's because MyAssignmentHelp hires the best scholars from every academic field imaginable.",
    icon: "/images/homework.svg",
  },
  {
    title: "Dissertation Help",
    description:
      "Our dissertation writing service can make all your writing troubles disappear. Hiring our assignment help experts means you get excellent dissertation proposals, literature reviews, data collection, and writing guidance.",
    icon: "/images/dissertation.svg",
  },
  {
    title: "Coursework Help",
    description:
      "Rely on our custom assignment help experts when your coursework becomes too much to handle. These professionals can assist you with different types of topics, editing, proofreading, and more so you can improve your grades.",
    icon: "/images/courseWork.svg",
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
        top: "-25px",
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
        top: "-25px",
      }}
      onClick={onClick}
    />
  );
};

const Bestfeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [country, setCountry] = useState(""); // State to store the user's country

  const [error, setError] = useState(null);  // State to handle errors

  const getLocation = async () => {
    try {
      const response = await axios.get("http://ip-api.com/json");
      await setCountry(response.data.country); // Extract and set the country
    } catch (error) {
      setError("Unable to fetch location."); // Handle errors
      console.error("Error fetching location:", error);
    }
  };

  console.log("anajanja", country)

  useEffect(() => {
    getLocation(); // Fetch location when the component mounts
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1220, // For screens up to 1220px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For screens up to 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For smaller screens (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div style={{
        // minHeight:'85vh'
      }}>

        <div className="relative mb-10"

        // style={{
        //   clipPath: "polygon(0% 0%, 100% 13%, 100% 100%, 0% 100%)",
        //   padding:'6rem 1.5rem 4rem 1.5rem',
        //   zIndex:'1'

        // }}
        >
          <img src="./images/Blend Group 3.svg" style={{
            position: 'absolute',
            right: '0',
            top: '-2rem',
            zIndex: '1'
          }} alt="" />
          <h2 className="text-2xl font-bold text-center mb-4 highQualText"
          // style={{
          //   fontSize:'48px',
          //   fontWeight:600,
          //   lineHeight:'57px'
          // }}
          >
            Our Best Features
          </h2>
          <p className="text-center mb-14">
            Get excellent writing help from reputed assignment writers in the {country}.
          </p>

          <Slider {...settings} style={{
            // height:'66vh'
          }}>
            {services.map((service, index) => (
              <div key={index} className="p-4" style={{
                // height:'maxContent',
                //  height:'66vh',
                marginBottom: '30px'
              }}>
                <div
                  className={`bg-white shadow-md rounded-lg p-6 text-center transition-all duration-300 flex flex-col justify-center items-center`}
                  style={{
                    minHeight: '500px',
                    border: '1px solid #65CBE4',
                    //  minHeight:'85vh'

                  }}
                >
                  {/* <div className="text-4xl mb-4">{service.icon}</div> */}
                  <img className="mb-4 z-20" style={{
                    height: '120px',
                    width: '120px'
                  }} src={service.icon} alt="" />
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

    </>

  );
};

export default Bestfeatures;

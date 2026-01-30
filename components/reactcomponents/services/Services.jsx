"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "./services.css";

const carouselData = [
  {
    title: "Science Assignments",
    description:
      "Our specialized team will cover the diverse aspect of science by conducting research and steady examination.",
    image: "/images/science.svg",
  },
  {
    title: "Math Assignments",
    description:
      "We provide expert assistance in solving complex mathematical problems with detailed explanations.",
    image: "/images/maths.svg",
  },
  {
    title: "History Assignments",
    description:
      "Explore and analyze historical events with our in-depth research and professional writing services.",
    image: "/images/history.svg",
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
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        zIndex: 10,
        right: "10px",
        top: "50%",
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
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        zIndex: 10,
        left: "10px",
        top: "50%",
      }}
      onClick={onClick}
    />
  );
};

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_, next) => setCurrentIndex(next),
  };

  return (
    <div className="py-10 mb-10" style={{ position: "relative" }}>
      <h2
        className="text-2xl font-bold text-center mb-4 highQualText"
      // style={{
      //   fontSize:'48px',
      //   fontWeight:600,
      //   lineHeight:'57px'
      // }}
      >
        Our Services
      </h2>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div
            key={index}
            className="relative flex justify-between items-center"
          >
            {/* Title Box */}
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "30px",
                // background: "#38419A",
                color: "#fff",
                opacity: '1',
                padding: "30px 35px",
                // borderRadius: "8px",
                fontSize: "24px",
                lineHeight: "30px",
                fontWeight: 500,
                zIndex: 10
              }}
            >
              {item.title}
            </div>
            <div className="mx-auto" style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '55px',
              width: '97%',
              backgroundColor: '#00000056',
              height: '370px'
            }}></div>
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
                marginTop: "40px",
                marginBottom: "30px",
              }}
            />

            {/* Description Box */}
            <div
              style={{
                position: "absolute",
                bottom: "-5px",
                right: "40px",
                backgroundColor: "#fff",
                opacity: "0.85",
                padding: "20px 25px",
                // borderRadius: "8px",
                maxWidth: "300px",
                // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#333",
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;

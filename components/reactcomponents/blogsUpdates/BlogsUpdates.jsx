"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "./blogUpload.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const carouselData = [
  {
    title: "10 Expert Tips for Crafting the Perfect Assignment",
    description:
      "Student writing assignments often are a tough grind. However, if a student irrespective of his academic stage wants to enhance his grades or finding an assignement writing service, must never overlook the venerable art of writing assignments.",
    buttonText: 1,
    image: "/images/slide1.svg",
  },
  {
    title: "Proactive Controversial Topics: 18 Ideas for Academic Discussion in 2025",
    description:
      "Student writing assignments often are a tough grind. However, if a student irrespective of his academic stage wants to enhance his grades or finding an assignement writing service, must never overlook the venerable art of writing assignments.",
    buttonText: 2,
    image: "/images/slide2.svg",
  },
  {
    title: "Mastering Research Assignments: A Guide to Writing a Perfect Paper",
    description:
      "Studies show research papers should not intimidate students! The combination of thoughtful strategy and some professional assignment writing tips for students enables you to develop impressive written work. A step-by-step approach in this research paper writing guide helps students create organized papers without complications.",
    buttonText: 3,
    image: "/images/slide3.svg",
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
        height: "50px",
        width: "50px",
        position: "absolute",
        right: "25%",
        top: "100%",
        transform: "translateY(-50%)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        cursor: "pointer",
        zIndex: 10,
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
        height: "50px",
        width: "50px",
        position: "absolute",
        left: "25%",
        top: "100%",
        transform: "translateY(-50%)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        cursor: "pointer",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
};

const BlogsUpdates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
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
    <div className="mt-10">
      <div className="flex justify-center gap-5">
        <img src="/images/Line 270.svg" className="lines" alt="" />
        <h1
          style={{
            // fontSize: "36px",
            // fontWeight: 600,
            // lineHeight: "50px",
          }}
          className="highQualText"
        >
          Blogs & Updates
        </h1>
        <img src="/images/Line 269.svg" className="lines" alt="" />
      </div>
      <div
        className="relative"
        style={{
          backgroundImage: "url('/images/Rectangle 4815.svg')", // Background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50" />
        <div
          className="relative z-10"
          style={{
            paddingTop: "4rem",
            paddingBottom: "4rem",
          }}
        >
          <Slider {...settings}>
            {carouselData.map((item, index) => (
              <div key={index} className="px-16 sliderMain">
                {/* Text Section */}
                <div className=" md:w-1/2">
                  <h2
                    className="text-3xl font-medium mb-4"
                    style={{
                      width: "50%",
                    }}
                  >
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-10 font-medium">
                    {item.description}
                  </p>

                  <Link
                    href={`/blog/${item.buttonText}`}
                    className="inline-block bg-black text-white px-6 py-2 rounded-md"
                  >
                    Read More
                  </Link>
                </div>
                {/* Image Section */}
                <div className=" md:w-1/2 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="imgCaros"
                    style={{
                      width: "60%",
                      // height:'maxContent'
                    }}
                  //   style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogsUpdates;

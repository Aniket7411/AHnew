"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "./carousel.css";

const testimonials = [
  {
    image: "/images/genry.svg",
    quote:
      "I am so grateful to the professionals from The Assignment Hub, who assisted with my psychology thesis, creating great research and possessing profound analysis skills. My final product was perfect!",
    name: "Sophia R.",
    role: "Psychology Student",
  },
  {
    image: "/images/daniel.svg",
    quote:
      "Overall, I had a problem with my technical report, but thanks to The Assignment Hub, it was simplified and written in concise language. They were able to help me meet my deadline and submit a very polished report.",
    name: "Daniel K.",
    role: "Engineering student",
  },
  {
    image: "/images/olivia.svg",
    quote:
      "I found the assignment help in writing my business case study and I found that their research work and input as a strategy was perfect. My dear professor praised me a lot and I couldn’t be any happier with my current result.",
    name: "Olivia M.",
    role: "Business Student",
  },
  {
    image: "/images/heeral.svg",
    quote:
      "I truly appreciate the dedicated team at The Assignment Hub, who supported me with my marketing dissertation, delivering well-structured content and showcasing excellent writing abilities. Their guidance helped me achieve top marks. I couldn’t be happier!",
    name: "Heeral P.",
    role: "Business Student",
  }, {
    image: "/images/indian.svg",
    quote:
      "A big thanks to The Assignment Hub for helping me with my nursing research project, offering in-depth insights and demonstrating strong academic knowledge. The entire process was smooth and professional. I highly recommend their service!",
    name: "Nikhil S.",
    role: "Business Student",
  },
  {
    image: "/images/Liam.svg",
    quote:
      "The Assignment Hub helped me structure my Human Resource essay with strong arguments and solid research. Their expertise ensured academic credibility and made the paper both insightful and engaging. Truly a valuable support!",
    name: "Liam H",
    role: "Human Resources Student",
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

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25%", // Adjust the padding to partially show left and right slides
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 425, // Mobile view
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "100%",
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "100%",
        },
      },
      {
        breakpoint: 1024, // Mobile view
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "100%",
        },
      },
      {
        breakpoint: 1440, // Mobile view
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "100%",
        },
      },
      {
        breakpoint: 2550, // Mobile view
        settings: {
          slidesToShow: 4,
          centerMode: false,
          centerPadding: "100%",
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading highQualText">Client's Feedback</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2">
            <div
              className={`flex flex-col justify-between rounded-md p-6 transition-all duration-300 h-[65vh] ${index === currentIndex ? 'bg-[#38419A] text-white' : 'bg-white text-black'
                }`}
            >
              <div className="relative testimonial-info pb-4 flex items-center gap-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image mt-3"
                />
                <div>

                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="" style={{
                    fontSize: '20px'
                  }}>{testimonial.role}</p>
                </div>
                <img className="absolute mt-3 left-4 m-auto privacyImg" src="./images/photoPri.svg" alt="" />

              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote flex flex-col flex-grow justify-between">
                <img src="/images/invertedOpen.svg" className="mb-2 w-5 h-5" alt="" />
                <p className="text-lg">{testimonial.quote}</p>
                <img
                  src="/images/inertedClose.svg"
                  alt=""
                  className="mt-4 w-5 h-5 self-end"
                />
              </blockquote>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default TestimonialCarousel;

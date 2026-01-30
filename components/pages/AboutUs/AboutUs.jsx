"use client";

import React from "react";
import "./aboutus.css";
import Bestfeatures from "@/components/reactcomponents/bestFeatures/Bestfeatures";
import Plans from "@/components/reactcomponents/plans/plans";
import FeedbackCarousel from "@/components/reactcomponents/feedbacks/Feedbacks";
import Services from "@/components/reactcomponents/services/Services";
import BlogsUpdates from "@/components/reactcomponents/blogsUpdates/BlogsUpdates";
import ContactUs from "@/components/reactcomponents/contactusForm/ContactUs";

const AboutUs = () => {
  return (
    <div>
      <div
      // className="py-5"
      // style={{
      //   backgroundImage: "url('/images/Blend Group 4.svg')", // Replace with your image path
      //         backgroundSize: "cover", // Makes the background image cover the whole div
      //         backgroundPosition: "center", // Center-aligns the background image
      //         backgroundRepeat: "no-repeat",
      // }}
      >
        <div
          className="flex justify-between items-center flex-wrap gap-6 px-16 bgi"
          style={
            {
              // Prevents the background from repeating
              // backgroundSize: "100% 100%",
              // minHeight: "70vh",

            }
          }
        >
          <div

          >
            <h1 className="aboutUs">About Us</h1>
            <h1 className="asHubText mb-3">THE ASSIGNMENT HUB</h1>
            <p className="text-[#5C5C5C] mb-5">
              We are providing online services related to <br /> personalized
              essays and writing suggestions with the <br />
              means to improve your writing and understanding <br /> skills
              alongside Proofreading and Writing Advisory.
            </p>
            <button
              type="button"
              className="flex items-center bg-black text-white rounded-full ps-2 pe-1 py-1 hover:bg-gray-800 transition-colors duration-300 relative mb-5"
            >
              <span className="text-[16px]">View Plan</span>
              {/* <MdArrowOutward className="text-white bg-red-500 rounded-full " /> */}
              {/* <img src="/images/ellipse 502.svg" alt="" /> */}
              <img src="/images/viewPlan.svg" style={{
                height: '2.5rem'
              }} alt="" />
            </button>
            <p className="mb-3 text-[12px]">
              Trusted by <span className="font-bold text-[#000]">1.5M+</span>{" "}
              happy customers
            </p>
            <div className="flex items-center mt-3 gap-4 socialHandles">
              <a
                target="_blank"
                href="https://www.facebook.com/theassignmenthub/"
                rel="noreferrer"
              >
                <img
                  src="/images/facebook.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </a>

              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=919352555548&text&type=phone_number&app_absent=0"
                rel="noreferrer"
              >
                <img
                  src="/images/whatsapp.svg"
                  className="cursor-pointer"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/the_assignment_hub/"
                rel="noreferrer"
              >
                <img
                  src="/images/insta.svg"
                  className="cursor-pointer"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/assignment-hub-research-pvt-ltd/"
                rel="noreferrer"
              >
                <img
                  src="/images/linkedin.svg"
                  className="cursor-pointer"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div
            className="w-[100%] md:w-[50%] d-flex justify-center formsStyle"
            style={
              {
                // outline: "1px solid gray",
                // opacity: "0.8",
                // backgroundColor: "#fff",
              }
            }
          >
            <img
              src="./images/girlTwo.png"
              style={{
                height: "60vh",
                // width: "100vw",
              }}
              alt=""
            />
          </div>
        </div>
        <Bestfeatures />
        <Services />
        <Plans />
        <BlogsUpdates />
        <FeedbackCarousel />
        <div style={{
          width: '100%',
          // display:'flex',
          // justifyContent:'center'
        }}
          className="flex items-center"
        >
          {/* <ContactUs /> */}
          <ContactUs />
        </div>

      </div>
    </div>
  );
};

export default AboutUs;

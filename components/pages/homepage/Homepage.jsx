"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Assignmenthelp from "@/components/reactcomponents/assignmenthelp/assignmenthelp";
import CarouselComponent from "@/components/reactcomponents/assignmentTypes/assignmentTypes";
import Bestquality from "@/components/reactcomponents/bestQuality/Bestquality";
import FaqSection from "@/components/reactcomponents/faqs/Faqs";
import FeedbackCarousel from "@/components/reactcomponents/feedbacks/Feedbacks";
import Section2 from "@/components/reactcomponents/section2/index";
import HomeSectionOne from "@/components/pages/HomeSectionOne/HomeSectionOne";


const Homepage = () => {
  const section2Ref = useRef(null);
  const feedbackRef = useRef(null);
  const faqsRef = useRef(null);
  const footerSubsRef = useRef(null);
  const [country, setCountry] = useState(""); // State to store the user's country

  const [error, setError] = useState(null);

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
  // Store reference in localStorage for Footer to access
  useEffect(() => {
    window.section2Ref = section2Ref;
    window.feedbackRef = feedbackRef;
    window.faqsRef = faqsRef;
    window.footerSubsRef = footerSubsRef;

  }, []);



  return (
    <>
      <div>
        {/* <Section1 /> */}
        <HomeSectionOne country={country} />
      </div>
      <div ref={section2Ref}>
        <Section2 country={country} />
      </div>
      <Assignmenthelp />
      <CarouselComponent />
      <Bestquality />
      {/* <Writingtools /> */}
      <div ref={feedbackRef}>
        <FeedbackCarousel />
      </div>
      <div ref={faqsRef}>
        <FaqSection />
      </div>

    </>
  );
};

export default Homepage;

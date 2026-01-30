"use client";

import React, { useEffect, useRef } from "react";
import Assignmenthelp from "@/components/reactcomponents/assignmenthelp/assignmenthelp";
import CarouselComponent from "@/components/reactcomponents/assignmentTypes/assignmentTypes";
import Bestquality from "@/components/reactcomponents/bestQuality/Bestquality";
import FaqSection from "@/components/reactcomponents/faqs/Faqs";
import FeedbackCarousel from "@/components/reactcomponents/feedbacks/Feedbacks";
import Section2 from "@/components/reactcomponents/section2/index";

const ServicesSingle = ({ id }) => {
  const section2Ref = useRef(null);
  const feedbackRef = useRef(null);
  const faqsRef = useRef(null);
  const footerSubsRef = useRef(null);



  // Store reference in localStorage for Footer to access
  useEffect(() => {
    window.section2Ref = section2Ref;
    window.feedbackRef = feedbackRef;
    window.faqsRef = faqsRef;
    window.footerSubsRef = footerSubsRef;

  }, []);

  return (
    <>
      <div ref={footerSubsRef} />
      <div ref={section2Ref}>
        <Section2 country="" />
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

export default ServicesSingle;

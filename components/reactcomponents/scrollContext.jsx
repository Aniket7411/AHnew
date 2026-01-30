import React, { createContext, useRef, useContext } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const section2Ref = useRef(null);
  const feedbackRef = useRef(null);
  const faqsRef = useRef(null)
  const footerSubsRef = useRef(null)


  return (
    <ScrollContext.Provider value={{ section2Ref, feedbackRef, faqsRef, footerSubsRef}}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);

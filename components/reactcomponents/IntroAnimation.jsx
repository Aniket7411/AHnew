import React, { useEffect } from "react";
import { motion } from "framer-motion";

const IntroAnimation = ({ onComplete }) => {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     onComplete(); // Notify parent after animation
  //   }, 90000); // Holds for 10 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Intro animation completed!"); // Debug log
      onComplete(); // Notify parent
    }, 5000); // Holds for 90 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white text-black z-50">
      {/* Logo Section */}
      <motion.div
        className="relative flex items-center "
        initial={{ y: 0 }}
        animate={{ y: -20 }} // Moves up by ~2rem (32px)
        transition={{ duration: 1, delay: 1.5 }} // Waits until all elements are visible
      >
        {/* A Logo - Slides in from left */}
        <motion.img
          src="/images/A.svg"
          alt="A Logo"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="h-20 relative z-10"
        />

        {/* H Logo - Slides in from right (slightly overlapping A) */}
        <motion.img
          src="/images/H.svg"
          alt="H Logo"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: -10 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="h-20 absolute left-[56px] z-0"
        />

        {/* Hat Logo - Slides in from top (at the top-right of H) */}
        <motion.img
          src="/images/hat.svg"
          alt="Hat Logo"
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: [0, -15, 5, -8, 0], // Creates the bounce effect
          }}
          transition={{
            duration: 1, // Extends the bounce duration
            delay: 1.5, // Waits for A & H to appear first
            ease: "easeInOut",
          }}
          className="w-14 absolute top-[-28px] left-[76px]"
        />
      </motion.div>

      {/* Text Animation (slides from top, one by one) */}
      <div
        className="flex space-x-2 text-5xl font-bold"
        style={{ marginBottom: "1.2rem" }}
      >
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          The
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Assignment
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Hub
        </motion.span>
      </div>

      {/* Loading Line */}
      {/* <motion.div
        initial={{ width: 0 }}
        animate={{ width: "50%" }}
        transition={{ duration: 5, ease: "easeInOut", delay: 4 }}
        className="h-1 bg-black mt-4"
      /> */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="relative w-[50%] h-1 bg-gray-300 mt-4 overflow-hidden"
      >
        {/* Moving gradient line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear", delay: 2 }}
          className="h-full"
          style={{
            background: "linear-gradient(90deg, #37419A 0%, #66CAE2 100%)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default IntroAnimation;

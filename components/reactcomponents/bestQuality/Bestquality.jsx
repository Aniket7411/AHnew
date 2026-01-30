import React from "react";
import "./bestquality.css";

const Bestquality = () => {
  return (
    <div
      style={{
        paddingTop: "4rem",
        paddingBottom: "1rem"
      }}
      className="px-16 bestQualHead"
    >
      <h2
        className="text-start mb-3 bestQualityText"
        // style={{
        //   fontSize: "48px",
        //   fontWeight: 600,
        //   lineHeight: "57px",
        // }}
      >
        Your Trusted Partner for High-Quality Assignment Help at Pocket Friendly Prices 
      </h2>
      <p
        style={{
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
          color: "#444444",
        }}
        className="mb-4"
      >
        Experience expert assistance without draining your wallet
      </p>
      <p
        style={{
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "30px",
        }}
        className="mb-4"
      >
        We Deliver solutions in the following domains:
      </p>

      <div className="flex items-center justify-center">
        <div className="container py-6 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <ul className="list-disc list-inside space-y-4">
              <li className="bg-white p-1 rounded-md">Law Assignment Writing</li>
              <li className="bg-white p-1 rounded-md">Science Assignment Writing</li>
              <li className="bg-white p-1 rounded-md">Nursing Assignment Writing</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4">
            <ul className="list-disc list-inside space-y-4">
              <li className="bg-white p-1 rounded-md">Construction Assignment Writing</li>
              <li className="bg-white p-1 rounded-md"> Engineering & Technical Assignment</li>
              <li className="bg-white p-1 rounded-md">Management & Human Resource Assignment Writing</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4">
            <ul className="list-disc list-inside space-y-4">
              <li className="bg-white p-1 rounded-md">Finance & Statistics Assignment Writing</li>
              <li className="bg-white p-1 rounded-md">Psychology Assignment Writing</li>
              <li className="bg-white p-1 rounded-md">Calculus Assignment Writing</li>
            </ul>
          </div>
          {/* <div className="col-span-12 md:col-span-4">
            <ul className="list-disc list-inside space-y-4">
              <li className="bg-white p-1 rounded-md">Psychology Assignment</li> 
            </ul>
          </div> */}
            {/* <div className="col-span-12 md:col-span-4 lg:col-span-2">
              <ul className="list-disc list-inside space-y-4">
                <li className="bg-white p-1 rounded-md">Mathematics</li>
                <li className="bg-white p-1 rounded-md">English</li>
                <li className="bg-white p-1 rounded-md">Physics</li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
              <ul className="list-disc list-inside space-y-4">
                <li className="bg-white p-1 rounded-md">Philosophy</li>
                <li className="bg-white p-1 rounded-md">Medicine</li>
                <li className="bg-white p-1 rounded-md">Psychology</li>
              </ul>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Bestquality;

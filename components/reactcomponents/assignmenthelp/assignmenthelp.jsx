import React from "react";
import "./assignmenthelp.css";

const Assignmenthelp = () => {
  return (
    <>
      <h2 className="text-center mb-4 myassignHelp px-16">
        The Assignment Hub : Reasons to Choose our Assignment Assistance
      </h2>
      <p
        className="text-center mb-4"
        style={{
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "27px",
        }}
      >
        Discover why we’re the top choice for professional Assignment writing assistance.
      </p>
      <div className="outer-container outerCont">
        <div className="grid-container">
          {/* Row 1 */}
          <div className="grid-item flex justify-evenly gap-4">
            <img
              src="/images/quality.svg"
              alt=""
              style={{
                height: "76px",
                width: "76px",
              }}
            />
            <div className="text-start">
              <p className="font-bold">AI-Free, Expert Writing</p>
              <p
                className="font-thin "
                style={{
                  color: "#8A8A8A",
                }}
              >
                With 100% originality and no AI guarantee, our work ensures plagiarism-free and high-quality solutions.
              </p>
            </div>
          </div>
          <div className="grid-item flex justify-evenly gap-4">
            <img
              src="/images/ontime.svg"
              alt=""
              style={{
                height: "76px",
                width: "76px",
              }}
            />
            <div className="text-start">
              <p className="font-bold">On-Time Delivery</p>
              <p
                className="font-thin "
                style={{
                  color: "#8A8A8A",
                }}
              >
                We are committed to the best quality assignment delivery on time matching your requirements.
              </p>
            </div>
          </div>
          <div className="grid-item flex justify-evenly gap-4">
            <img
              src="/images/policy.svg"
              alt=""
              style={{
                height: "76px",
                width: "76px",
              }}
            />
            <div className="text-start">
              <p className="font-bold">Flexible Policies</p>
              <p
                className="font-thin "
                style={{
                  color: "#8A8A8A",
                }}
              >
                We founded our services on customer-friendly policies for changes and amendments as per your needs.
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid-item flex justify-evenly gap-4">
            <img
              src="/images/reliable.svg"
              alt=""
              style={{
                height: "76px",
                width: "76px",
              }}
            />
            <div className="text-start">
              <p className="font-bold">Expert Writers</p>
              <p
                className="font-thin "
                style={{
                  color: "#8A8A8A",
                }}
              >
                A team of expert writers with qualified experiences in various academic domains is here to guide you.
              </p>
            </div>
          </div>
          <div className="grid-item flex justify-evenly gap-4">
            <img
              src="/images/pocketF.svg"
              alt=""
              style={{
                height: "76px",
                width: "76px",
              }}
            />
            <div className="text-start">
              <p className="font-bold">Affordable Prices</p>
              <p
                className="font-thin "
                style={{
                  color: "#8A8A8A",
                }}
              >
                We are committed to delivering equal opportunity to every student to get solutions at the minimum price possible.
              </p>
            </div>
          </div>
          <div className="grid-item flex justify-evenly gap-4">
            <img
              src="/images/available.svg"
              alt=""
              style={{
                height: "76px",
                width: "76px",
              }}
            />
            <div className="text-start">
              <p className="font-bold">24/7 Availability</p>
              <p
                className="font-thin "
                style={{
                  color: "#8A8A8A",
                }}
              >
                Our 24/7 customer support is always online to help you with anything you need help with and answer all your queries

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignmenthelp;

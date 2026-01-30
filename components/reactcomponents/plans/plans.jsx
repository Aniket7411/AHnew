"use client";

import React from "react";
import "./plans.css";
import { useRouter } from "next/navigation";

const Plans = () => {
  const router = useRouter();

  return (
    <div className="plansmain ">
      <h2 className="text-2xl font-bold text-center mb-6 highQualText">
        Our Plans
      </h2>
      <div className="bgImage" style={{}}>
        <div
        // style={{
        //   marginTop: "-15rem",
        // }}
        >
          <div className="flex flex-wrap justify-center gap-10">
            <div
              className="flex flex-col justify-center items-center p-5 shadow-md silver"
              style={{
                borderRadius: "10px",
                width: "auto",
                minWidth: "300px",
                marginTop: "5rem",
                zIndex: "1",
              }}
            >
              <img
                src="/images/Group 9220.svg"
                style={{
                  marginTop: "-4.5rem",
                  alignSelf: "center",
                }}
                alt=""
              />
              <div
                style={{
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                }}
              >
                <h1
                  className="michroma-regular"
                  style={{
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "68px",
                    color: "#000000",
                  }}
                >
                  Silver
                </h1>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                  }}
                >
                  Per Assignment
                </p>
                <div className="flex mb-3">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <span>2000 Words</span>
                </div>
                <div className="flex mb-3">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <p>5 time Revision</p>
                </div>
                <div className="flex mb-3">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <p>Mail delivery</p>
                </div>
                <div className="flex mb-4">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <p>Chat Support</p>
                </div>
              </div>

              <button
                style={{
                  border: "1px solid #AFAFAF80",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "30px",
                  width: "90%",
                  borderRadius: "10px",
                  backgroundColor: "#F9F9F9",
                  height: "40px",
                }}
                onClick={() => { router.push("/contact-us") }}
              >
                Order Now
              </button>
            </div>
            <div
              className="flex flex-col justify-center items-center p-5 shadow-md gold"
              style={{
                // backgroundColor: "#FFF9DF",
                borderRadius: "10px",
                width: "auto",
                minWidth: "300px",
                marginTop: "5rem",
                zIndex: "1",
              }}
            >
              <img
                src="/images/Group 9220 (1).svg"
                style={{
                  marginTop: "-4.5rem",
                  alignSelf: "center",
                }}
                alt=""
              />
              <div
                style={{
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                }}
              >
                <h1
                  className="michroma-regular"
                  style={{
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "68px",
                    color: "#835B12",
                  }}
                >
                  Gold
                </h1>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                  }}
                >
                  Per Assignment
                </p>
                {/* <div className="flex mb-3">
                <span className="me-2">
                  <img src="/images/charm_tick.svg" alt="" />
                </span>
                <span>2000 Words</span>
              </div>
              <div className="flex mb-3">
                <span className="me-2">
                  <img src="/images/charm_tick.svg" alt="" />
                </span>
                <p>2000 Words</p>
              </div>
              <div className="flex mb-3">
                <span className="me-2">
                  <img src="/images/charm_tick.svg" alt="" />
                </span>
                <p>2000 Words</p>
              </div>
              <div className="flex mb-4">
                <span className="me-2">
                  <img src="/images/charm_tick.svg" alt="" />
                </span>
                <p>2000 Words</p>
              </div> */}


                <div className="flex mb-3">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <span>5000 Words</span>
                </div>
                <div className="flex mb-3">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <p>10 time Revision</p>
                </div>
                <div className="flex mb-3">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <p>Mail delivery</p>
                </div>
                <div className="flex mb-4">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <p>Chat Support</p>
                </div>
              </div>

              <button
                style={{
                  border: "1px solid #FF8B0080",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "30px",
                  width: "90%",
                  borderRadius: "10px",
                  backgroundColor: "#FFF5C8",
                  height: "40px",
                }}
                onClick={() => { router.push("/contact-us") }}

              >
                Order Now
              </button>
            </div>
            <div
              className="flex flex-col justify-center items-center p-5 text-center shadow-md platinum"
              style={{
                // backgroundColor: "#EDFBFF",
                borderRadius: "10px",
                width: "auto",
                minWidth: "300px",
                marginTop: "5rem",
                zIndex: "1",
              }}
            >
              <img
                src="/images/Group 9220 (2).svg"
                style={{
                  marginTop: "-4.5rem",
                  alignSelf: "center",
                }}
                alt=""
              />
              <div
                style={{
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                }}
              >
                <h1
                  className="michroma-regular"
                  style={{
                    fontSize: "36px",
                    fontWeight: "400",
                    lineHeight: "68px",
                    color: "#03699D",
                  }}
                >
                  Platinum
                </h1>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                  }}
                >
                  Per Assignment
                </p>
                <div className="flex mb-3">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <span>10000 Words</span>
                </div>
                <div className="flex mb-3">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <p>Unlimited Revision</p>
                </div>
                <div className="flex mb-3">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <p>Mail delivery</p>
                </div>
                <div className="flex mb-4">
                  <span className="me-2">
                    <img src="/images/charm_tick.svg" alt="" />
                  </span>
                  <p>Unlimited Support</p>
                </div>



              </div>

              <button
                style={{
                  border: "1px solid #3B9DC7",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "30px",
                  width: "90%",
                  borderRadius: "10px",
                  backgroundColor: "#0092DD",
                  height: "40px",
                  color: '#fff'
                }}
                onClick={() => { router.push("/contact-us") }}

              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;

"use client";

import { MdArrowOutward } from "react-icons/md";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "@/components/reactcomponents/section1/section.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneCode from "@/components/utils/phoneCode";





const HomeSectionOne = props => {

  const { country } = props


  console.log()
  const [hoveredField, setHoveredField] = useState(null);
  //   const { headerData, setHeaderData } = useContext(HomeContext);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    countryCode: '+91',
    email: "",
    university: "",
    course: "",
    deadline: "",
    selectedOption: "Assignment",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const options = [
    "Assignment",
    "Dissertation/Thesis",
    "Presentation",
    "Others",
  ];

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.number.trim() || formData.number.length !== 10)
      newErrors.number = "Enter a valid 10-digit number";
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Enter a valid email";
    if (!formData.university.trim())
      newErrors.university = "University is required";
    if (!formData.course.trim()) newErrors.course = "Course is required";
    if (!formData.deadline) newErrors.deadline = "Deadline is required";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await emailjs.send(
        "service_dxt4g8n",
        "template_z8evgi6",
        formData,
        "AyAncl_8X35FdUqdm"
      );
      console.log(formData, "formm");

      setMessage("Form submitted successfully!");
      setFormData({
        name: "",
        number: "",
        countryCode: '+91',
        email: "",
        university: "",
        course: "",
        deadline: "",
        selectedOption: "Assignment",
        termsAccepted: false,
      });
    } catch (error) {
      setMessage("Failed to send email. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };


  //   useEffect(() => {
  //     if (location.state?.heading) {
  //       setHeaderData((prev) => ({ ...prev, heading: location.state.heading, subheading: location.state.subheading }));
  //     }
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, [location.state, setHeaderData]);



  return (
    <div>
      <div
        className="py-8 md:py-6"
        style={{
          backgroundImage: "url('/images/homePageOne.svg')", // Replace with your image path
          backgroundSize: "cover", // Makes the background image cover the whole div
          backgroundPosition: "center", // Center-aligns the background image
          backgroundRepeat: "no-repeat", // Prevents the background from repeating
        }}
      >
        <h1
          className="text-[#000] text-[3.5rem] px-16 weprovide lg:w-[85%] mb-2"
          style={{
            fontWeight: 600,
            lineHeight: "50px",
          }}
        >
          We Provide Online Assignment Help-
        </h1>
        <h1
          style={{
            fontWeight: 600,
            lineHeight: "60px",
          }}
          className="px-16 text-[3.5rem] pliagFreeText"
        >
          AI & Plagiarism Free
        </h1>

        <div
          className="flex justify-between flex-wrap gap-2  mt-2 px-16 textandForm"
          style={{
            paddingBottom: "3rem",
          }}
        >
          <div
            style={{
              height: "maxContent",
            }}
            className="mb-4 lg:w-[47%]"
          >
            {/* <button
              type="button"
              className="flex items-center bg-black text-white rounded-full ps-2 pe-1 hover:bg-gray-800 transition-colors duration-300 relative mb-3"
            >
              <span className="text-[16px] ms-2">View Plan</span> 
              <img
                src="/images/viewPlan.svg"
                style={{
                  height: "3rem",
                }}
                alt=""
              />
            </button> */}
            {/* <p className="mb-3 text-[20px] text-[#5C5C5C]">
              <span className="font-bold text-[#000]">10+</span> Years of
              Unmatched Expertise and Commitment
            </p> */}
            <p className="text-[20px] text-[#5C5C5C] mb-3">
              Expert Assignments Writing Service in {country} with AI-free Commitment

            </p>
            <p className="mb-10 text-[12px]">
              Delivered <span className="font-bold text-[#000]">3.5M+</span>{" "}
              Assignments
            </p>


            <div className="flex mt-4 gap-2 items-center">
              <img src="/images/image 2.svg" className="-ms-2" alt="" />
              <div class="w-px h-24 bg-[#8799DB] mx-1"></div>
              <div className="cursor-pointer rounded-3xl p-1 flex flex-col justify-center gap-1 px-2"
                onClick={() => window.open("https://www.sitejabber.com/reviews/theassignmenthub.com", "_blank")}
              >
                <div className="flex flex-col">
                  <img src="/images/siteJabber.svg" alt="" />
                </div>
                <div className="flex items-center gap-1 text-[#FCBC40] me-4">
                  <div className="flex flex-wrap me-1">
                    <img src="/images/star.svg" alt="" />
                    <img src="/images/star.svg" alt="" />
                    <img src="/images/star.svg" alt="" />
                    <img src="/images/star.svg" alt="" />
                    <div className="" style={{ clipPath: "inset(0 25% 0 0)" }}>
                      <img src="/images/star.svg" alt="" className="w-full h-auto" />
                    </div>
                  </div>
                  <span className="font-bold">
                    4.8
                  </span>
                </div>
              </div>
              <div class="w-px h-24 bg-[#8799DB] mx-1"></div>

              <div className="rounded-3xl cursor-pointer p-1 flex flex-col justify-center gap-1 px-2"
                onClick={() => window.open("https://www.trustpilot.com/search?query=The+Assignment+Hub", "_blank")}
              >
                <div className="flex flex-col mb-1 text-[#fff] text-lg">
                  <img src="/images/trustPilot.svg" alt="" />
                </div>
                <div className="flex items-center gap-1 text-[#FCBC40] me-4">
                  <div className="flex flex-wrap me-1">
                    <img src="/images/star.svg" alt="" />
                    <img src="/images/star.svg" alt="" />
                    <img src="/images/star.svg" alt="" />
                    <img src="/images/star.svg" alt="" />
                    <div className="" style={{ clipPath: "inset(0 25% 0 0)" }}>
                      <img src="/images/star.svg" alt="" className="w-full h-auto" />
                    </div>
                  </div>
                  <span className="font-bold">
                    4.8
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-5 gap-4 socialHandles mb-10 ps-2">
              <a
                target="_blank"
                href="https://www.facebook.com/theassignmenthub/"
                rel="noreferrer"
              >
                <img
                  src="/images/facebook.svg"
                  className="cursor-pointer"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=919352555548&text&type=phone_number&app_absent=0"
                rel="noreferrer"
              >
                <img
                  src="/images/whats.svg"
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

            <div className="flex fraudDiv rounded-2xl p-5 gap-5" >
              <img src="/images/hacker.svg" className="hidden md:block" alt="" />
              <div>
                <h2 className="text-[24px] font-medium text-[#EC1C24]"
                  style={{
                    fontFamily: 'poppins'
                  }}
                >
                  Beware From Frauds
                </h2>
                <p className="text-[16px] font-medium text-[#454545]">
                  Authenticate with the:
                </p>
                <div className="flex flex-wrap gap-2 md:gap-5">
                  <div className="flex gap-2 items-center">
                    <img src="/images/whats.svg" alt="" />
                    <p>+91-9352555548</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src="/images/gmail.svg" style={{
                      width: '27px',
                      height: '20px'
                    }} alt="" />
                    <p>contact@theassignmenthub.com
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div
            className="mb-4 shadow w-[100%] lg:w-[50%]  rounded-2xl formsStyle"
            style={
              {
                backgroundColor: "#fff",
                opacity: "0.97",
              }
            }
          >
            <form onSubmit={handleSubmit}>
              <div
                style={{

                }}
                className="p-4 rounded-2xl"
              >
                <p className="text-center text-black mb-2 text-lg font-medium">
                  AI-Free Assignment Help From 7000+ Real Experts in {country}
                </p>

                {/* Selectable Options */}
                <div className="flex flex-wrap mb-4 justify-between items-center">
                  {options.map((option) => (
                    <div
                      key={option}
                      onClick={() =>
                        setFormData({ ...formData, selectedOption: option })
                      }
                      className={`selectDiv px-3 py-2 rounded-lg flex items-center gap-2 mb-2 cursor-pointer border ${formData.selectedOption === option
                        ? "bg-[#D6F6FF] border-blue-500"
                        : "border-transparent"
                        }`}
                    >
                      {formData.selectedOption === option ? (
                        <img
                          src="/images/task-filled.png"
                          alt=""
                          className="w-5 h-5 text-gray-400"
                        />
                      ) : (
                        <img
                          src="/images/task.png"
                          alt=""
                          className="w-5 h-5 text-blue-500"
                        />
                      )}
                      {option}
                    </div>
                  ))}
                </div>

                {/* Input Fields */}
                {/* <div className="flex flex-wrap justify-between">
                  {[
                    { name: "name", type: "text", placeholder: "Name" },
                    { name: "number", type: "tel", placeholder: "WhatsApp Number" },
                    {
                      name: "email",
                      type: "email",
                      placeholder: "Enter email",
                    },
                    {
                      name: "university",
                      type: "text",
                      placeholder: "University",
                    },
                    { name: "course", type: "text", placeholder: "Course" },
                    { name: "deadline", type: "date", placeholder: "Deadline" },
                  ].map((field) => (
                    <div
                      key={field.name}
                      className="assignSubForm rounded-md mb-2 relative"
                      onMouseEnter={() =>
                        field.name === "deadline" && setHoveredField("deadline")
                      }
                      onMouseLeave={() => setHoveredField(null)}
                    >
                      <input
                        type={field.type}
                        value={formData[field.name]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.name]: e.target.value,
                          })
                        }
                        onFocus={(e) =>
                          field.type === "date"
                            ? (e.target.type = "date")
                            : null
                        }
                        onBlur={(e) =>
                          field.type === "date" && !e.target.value
                            ? (e.target.type = "text")
                            : null
                        }
                        className="w-full p-3 border outline-none rounded-md"
                        placeholder={
                          field.type === "date" ? "Deadline" : field.placeholder
                        }
                      />
                      {field.name === "deadline" &&
                        !formData.deadline &&
                        hoveredField === "deadline" && (
                          <p className="text-gray-500 text-sm mt-1 absolute left-0">
                            Enter Deadline
                          </p>
                        )}
                      {errors[field.name] && (
                        <p className="text-red-500 text-sm">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div> */}


                <div className="flex flex-wrap justify-between">
                  {[
                    { name: "name", type: "text", placeholder: "Name" },
                    { name: "number", type: "tel", placeholder: "WhatsApp Number" },
                    { name: "email", type: "email", placeholder: "Enter email" },
                    { name: "university", type: "text", placeholder: "University" },
                    { name: "course", type: "text", placeholder: "Course" },
                    { name: "deadline", type: "date", placeholder: "Deadline" },
                  ].map((field) => (
                    <div
                      key={field.name}
                      className="assignSubForm rounded-md mb-2 relative w-full sm:w-[48%]"
                      onMouseEnter={() =>
                        field.name === "deadline" && setHoveredField("deadline")
                      }
                      onMouseLeave={() => setHoveredField(null)}
                    >
                      {field.name === "number" ? (
                        // Custom field for WhatsApp number with country code
                        <div>
                          {/* <label className="block mb-1 font-medium">WhatsApp Number</label> */}
                          <div className="flex border rounded-md overflow-hidden">
                            <select
                              value={formData.countryCode}
                              onChange={(e) =>
                                setFormData({ ...formData, countryCode: e.target.value })
                              }
                              className="bg-gray-100 text-gray-800 p-3 pr-6 outline-none"
                            >
                              {/* {[
                                { code: "+91", label: "🇮🇳" },
                                { code: "+1", label: "🇺🇸" },
                                { code: "+44", label: "🇬🇧 UK" },
                                { code: "+61", label: "🇦🇺 AUS" },
                                { code: "+81", label: "🇯🇵" },
                                { code: "+971", label: "🇦🇪 UAE" },
                                { code: "+880", label: "🇧🇩 BD" },
                                { code: "+92", label: "🇵🇰 PK" },
                              ].map((country) => (
                                <option key={country.code} value={country.code}>
                                  {country.code} ({country.label})
                                </option>
                              ))} */}
                              {
                                PhoneCode.map((country) => (
                                  <option key={country.code} value={country.code}>
                                    {country.label}{country.code}
                                  </option>
                                ))}
                            </select>
                            <input
                              type="tel"
                              maxLength={10}
                              inputMode="numeric"
                              placeholder="WhatsApp number"
                              value={formData.number}
                              onChange={(e) => {
                                const onlyDigits = e.target.value.replace(/\D/g, "");
                                if (onlyDigits.length <= 10) {
                                  setFormData({ ...formData, number: onlyDigits });
                                }
                              }}
                              className="flex-1 p-3 outline-none"
                            />
                          </div>
                          {errors.number && (
                            <p className="text-red-500 text-sm mt-1">{errors.number}</p>
                          )}
                        </div>
                      ) : (
                        // All other fields
                        <div>
                          <input
                            type={field.type}
                            value={formData[field.name]}
                            onChange={(e) =>
                              setFormData({ ...formData, [field.name]: e.target.value })
                            }
                            onFocus={(e) =>
                              field.type === "date" ? (e.target.type = "date") : null
                            }
                            onBlur={(e) =>
                              field.type === "date" && !e.target.value
                                ? (e.target.type = "text")
                                : null
                            }
                            className="w-full p-3 border outline-none rounded-md"
                            placeholder={
                              field.type === "date" ? "Deadline" : field.placeholder
                            }
                          />
                          {field.name === "deadline" &&
                            !formData.deadline &&
                            hoveredField === "deadline" && (
                              <p className="text-gray-500 text-sm mt-1 absolute left-0">
                                Enter Deadline
                              </p>
                            )}
                          {errors[field.name] && (
                            <p className="text-red-500 text-sm">{errors[field.name]}</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>




              </div>

              {/* Terms & Conditions */}
              <div className="mt-4 px-4">
                <input
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      termsAccepted: e.target.checked,
                    })
                  }
                  className="mr-2 border cursor-pointer"
                />
                <label>
                  I accept the{" "}
                  <span className="text-[#4890A2] cursor-pointer">
                    Terms & Conditions
                  </span>
                  , agree to receive offers & updates
                </label>
                {errors.termsAccepted && (
                  <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="my-4 text-center">
                <button
                  type="submit"
                  className="w-56 h-12 text-white rounded-md bg-[#38419A]"
                >
                  Submit
                </button>
              </div>

              {/* Success/Error Message */}
              {message && (
                <p className="mt-2 text-center text-green-600">{message}</p>
              )}
            </form>
          </div>
        </div>

        <div className="flex flex-wrap justify-around w-[80%] mx-auto mb-8 gap-8 ">
          <img src="/images/iso.svg" alt="" />
          <div>
            <img src="/images/tenP.svg" alt="" />
            <p className="text-center" style={{
              fontSize: '32px',
              fontWeight: '500',
              color: '#38419A'
            }}>Years of Experience</p>
          </div>

          <img src="/images/privacy.svg" alt="" />



        </div>

      </div>
    </div>
  );
};

export default HomeSectionOne;

"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactus.css";
import PhoneCode from "@/components/utils/phoneCode";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    mobile: "",
    message: "",
    countryCode: '+91',
    package: ""

  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  console.log(formData)



  const validate = () => {
    const errors = {};
    if (!formData.user_name.trim()) errors.user_name = "Name is required";
    if (!formData.user_email.trim()) errors.user_email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = "Email is invalid";
    }
    if (!formData.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    // debugger
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Send email via EmailJS
      emailjs
        .send(
          "service_dxt4g8n",
          "template_2wy338m",
          formData,
          "AyAncl_8X35FdUqdm"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsSubmitted(true);
            setFormData({
              user_name: "",
              user_email: "",
              mobile: "",
              message: "",
              countryCode: '+91',
              package: ""

            });
            setErrors({})
          },
          (error) => {
            console.error("FAILED...", error);
            alert("Email sending failed. Please try again.");
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_4vp9i8f', 'template_9v3dzyo', form.current, {
  //       publicKey: '55uSXOb9JNrt5lq_p',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  return (
    <div className="flex flex-col items-center py-8 px-5 rounded-xl mt-16 bgiContact mx-auto min-w-[80%]">
      <h1 className="mb-4 contactUsHead">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className=" md:grid gap-2 w-full  px-2 contactForm"
      >
        <div>
          <div className="flex flex-col mb-2">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              className={`border p-2 rounded-md ${errors.name ? "border-red-500" : "border-gray-300"
                }`}
              style={{
                height: "60px",
              }}
            />
            {errors.user_name && (
              <span className="text-red-500 text-sm">{errors.user_name}</span>
            )}
          </div>
          <div className="flex flex-col mb-2">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              className={`border p-2 rounded-md ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
              style={{
                height: "60px",
              }}
            />
            {errors.user_email && (
              <span className="text-red-500 text-sm">{errors.user_email}</span>
            )}
          </div>


          {/* <div className="flex flex-col">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className={`border p-2 rounded-md ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              }`}
              style={{
                height: "60px",
              }}
            />
            {errors.mobile && (
              <span className="text-red-500 text-sm">{errors.mobile}</span>
            )}
          </div> */}

          <div className="mb-2 md:mb-0">
            {/* <label className="block mb-1 font-medium">WhatsApp Number</label> */}
            <div className="flex border rounded-md overflow-hidden border-gray-300">
              <select
                value={formData.countryCode}
                onChange={(e) =>
                  setFormData({ ...formData, countryCode: e.target.value })
                }
                className="bg-white border-r-2 text-gray-800 md:p-3 md:pr-6 outline-none w-[50%] md:w-1/4"
                style={{
                  height: "60px",
                }}
              >

                {

                  PhoneCode.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}({country.label})({country.code})
                    </option>
                  ))}
              </select>
              <input
                type="tel"
                maxLength={10}
                inputMode="numeric"
                placeholder="WhatsApp number"
                value={formData.mobile}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/\D/g, "");
                  if (onlyDigits.length <= 10) {
                    setFormData({ ...formData, mobile: onlyDigits });
                  }
                }}
                className="flex-1 p-3 outline-none w-[50%] md:w-3/4"
                style={{
                  height: "60px",
                }}
              />
            </div>
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>



        </div>
        <div className="flex w-full">
          <textarea
            name="message"
            placeholder="Type your message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`border p-2 rounded-md w-full ${errors.message ? "border-red-500" : "border-gray-300"
              }`}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}


        </div>
        <div className="col-span-1 flex flex-wrap  items-center md:col-span-2 text-center mb-2">

          <div className="flex items-center flex-wrap  gap-3 mt-2 mb-2 md:mb-0 w-full">
            <div

              className={`${formData.package === "Silver" ? "border-[#bcc6d0]" : "border-[#ded3d3]"
                } bg-[#d2dce7] border-2 rounded-md flex px-2 py-1  gap-2 items-center `}
            >

              <input
                type="radio"
                id="Silver"
                name="package"
                value="Silver"
                onChange={handleChange}

              />
              <label htmlFor="Silver" className="cursor-pointer">
                Silver
              </label>
            </div>
            <div
              className={`${formData.package === "Gold" ? "border-[#c58c26]" : "border-gray-300"
                } bg-[#ffb531] border-2 rounded-md flex px-2 py-1 gap-2  items-center `}
            >
              <input
                type="radio"
                id="Gold"
                name="package"
                value="Gold"
                onChange={handleChange}
              />
              <label htmlFor="Gold" className="cursor-pointer">
                Gold
              </label>
            </div>
            <div

              className={`${formData.package === "Platinum" ? "border-[#0092dd]" : "border-[#ded3d3]"
                } bg-[#92ddef] border-2 rounded-md flex px-2 py-1 gap-2 items-center `}

            >
              <input
                type="radio"
                id="Platinum"
                name="package"
                value="Platinum"
                onChange={handleChange}
              />
              <label htmlFor="Platinum" className="cursor-pointer">
                Platinum
              </label>
            </div>
          </div>
        </div>
        <div>

          <button
            type="submit"
            className="text-white  px-6 py-2 rounded-md"
            style={{
              backgroundColor: "#38419A",
            }}
          >
            Send Message
          </button>

        </div>
      </form>
      <hr
        style={{
          color: "#000",
          width: "80%",
          margin: "20px 2px",
        }}
      />
      {isSubmitted && (
        <p className="text-green-500 mt-4">Message sent successfully!</p>
      )}
      <div
        className="flex flex-wrap lg:flex-row justify-between gap-8 px-8 pb-8 w-full"
      // style={{
      //   width: "90%",
      // }}
      >
        {/* Left Section */}
        <div className="w-full md:basis-4/12">
          <div className="flex flex-col items-center lg:items-start">
            <p className=" flex mb-2 text-gray-700">
              <span role="img" aria-label="email" className="mr-2">
                📧
              </span>
              contact@theassignmenthub.com
            </p>
            {/* <p className="text-gray-700 flex items-start">
              <span role="img" aria-label="location" className="mr-2">
                📍
              </span>
              70/38 Patel Marg, Mansarovar, Jaipur, Rajasthan, 302020
            </p> */}
          </div>
        </div>

        {/* Center Section */}
        <div className="w-full md:basis-2/12 flex justify-center">
          <img src="/images/image-2.svg" alt="" className="" />
        </div>

        {/* Right Section */}
        <div className="w-full md:basis-4/12">
          <div className="flex flex-col items-center lg:items-end">
            {/* Phone Section */}
            <div className="flex items-center mb-4">
              <img src="/images/mdi-light_phone.svg" alt="" className="mr-2" />
              <span className="text-gray-700">+91-9352555548</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 socialHandlesContact">
              {/* <img
                src="/images/facebook.svg"
                alt="Facebook"
                className="w-6 h-6"
              /> */}
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

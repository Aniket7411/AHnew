import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdArrowOutward } from "react-icons/md";
import PhoneCode from "../../utils/phoneCode";


const ApplicationForm = ({ role }) => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    mobile: "",
    message: "",
    countryCode: "+91",
    location: "",
    experience: "",
    noticeperiod: "",
    currentsalary: "",
    expectedsalary: "",
    profile: role
  });

  const [errors, setErrors] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false); // For checkbox

  const openMo = () => {
    setOpenModal(true);
    console.log("modal OPen", openModal);

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.user_name.trim()) errors.user_name = "Name is required";
    if (!formData.user_email) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      errors.user_email = "Email is invalid";
    }
    if (!formData.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    if (!formData.location.trim()) errors.location = "Location is required";
    if (!formData.experience.trim()) errors.experience = "Experience is required";
    if (!formData.noticeperiod.trim()) errors.noticeperiod = "Notice period is required";
    if (!formData.currentsalary.trim()) errors.currentsalary = "Current salary is required";
    if (!formData.expectedsalary.trim()) errors.expectedsalary = "Expected salary is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (!agreed) {
      alert("You must agree to the terms and conditions to proceed.");
      return;
    }

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_ej1tr0f",
          "template_d54n2m8",
          formData,
          "Xg1e2xsDdIVQ5VuLh"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Form submitted successfully!", {
              position: "top-right",
              autoClose: 3000,
            });
            setIsSubmitted(true);
            // Add this line to open the modal
            setOpenModal(true);
            setFormData({
              user_name: "",
              user_email: "",
              mobile: "",
              message: "",
              countryCode: "+91",
              location: "",
              experience: "",
              noticeperiod: "",
              currentsalary: "",
              expectedsalary: "",
              profile: ""
            });
            setAgreed(false);
            setErrors({});
            // setOpenModal(true)
          },
          (error) => {
            console.error("FAILED...", error);
            toast.error("There was an error sending your message.", {
              position: "top-right",
              autoClose: 3000,
            });
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="w-full md:w-auto flex flex-col items-center py-2 px-3 border border-gray-600 rounded-2xl">
      <h1 className="mb-2 contactUsHead">{role}</h1>
      <form onSubmit={handleSubmit} className="gap-2 w-full px-8 contactForm flex mx-auto">
        <div className="flex flex-col w-[85%] m-auto ">

          {/* Name Input */}
          <div className="flex flex-col mb-2">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              className={`border p-2 rounded-md ${errors.user_name ? "border-red-500" : "border-gray-300"}`}
              style={{ height: "40px" }}
            />
            {errors.user_name && <span className="text-red-500 text-sm">{errors.user_name}</span>}
          </div>

          {/* Email Input */}
          <div className="flex flex-col mb-2">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              className={`border p-2 rounded-md ${errors.user_email ? "border-red-500" : "border-gray-300"}`}
              style={{ height: "40px" }}
            />
            {errors.user_email && <span className="text-red-500 text-sm">{errors.user_email}</span>}
          </div>

          {/* Location */}
          <div className="flex flex-col mb-2">
            <input
              type="text"
              name="location"
              placeholder="Current Location"
              value={formData.location}
              onChange={handleChange}
              className={`border p-2 rounded-md ${errors.location ? "border-red-500" : "border-gray-300"}`}
              style={{ height: "40px" }}
            />
            {errors.location && <span className="text-red-500 text-sm">{errors.location}</span>}
          </div>

          {/* Experience */}
          <div className="flex flex-col mb-2">
            <input
              type="text"
              name="experience"
              placeholder="Years of Experience"
              value={formData.experience}
              onChange={handleChange}
              className={`border p-2 rounded-md ${errors.experience ? "border-red-500" : "border-gray-300"}`}
              style={{ height: "40px" }}
            />
            {errors.experience && <span className="text-red-500 text-sm">{errors.experience}</span>}
          </div>

          {/* Notice Period */}
          <div className="flex flex-col mb-2">
            <input
              type="text"
              name="noticeperiod"
              placeholder="Notice Period"
              value={formData.noticeperiod}
              onChange={handleChange}
              className={`border p-2 rounded-md ${errors.noticeperiod ? "border-red-500" : "border-gray-300"}`}
              style={{ height: "40px" }}
            />
            {errors.noticeperiod && <span className="text-red-500 text-sm">{errors.noticeperiod}</span>}
          </div>

          {/* Current Salary */}
          <div className="flex flex-col mb-2">
            <input
              type="text"
              name="currentsalary"
              placeholder="Current Salary"
              value={formData.currentsalary}
              onChange={handleChange}
              className={`border p-2 rounded-md ${errors.currentsalary ? "border-red-500" : "border-gray-300"}`}
              style={{ height: "40px" }}
            />
            {errors.currentsalary && <span className="text-red-500 text-sm">{errors.currentsalary}</span>}
          </div>

          {/* Expected Salary */}
          <div className="flex flex-col mb-2">
            <input
              type="text"
              name="expectedsalary"
              placeholder="Expected Salary"
              value={formData.expectedsalary}
              onChange={handleChange}
              className={`border p-2 rounded-md ${errors.expectedsalary ? "border-red-500" : "border-gray-300"}`}
              style={{ height: "40px" }}
            />
            {errors.expectedsalary && <span className="text-red-500 text-sm">{errors.expectedsalary}</span>}
          </div>

          {/* WhatsApp Number */}
          <div>
            <div className="flex border mb-2 border-gray-300 rounded-md overflow-hidden" style={{ height: "40px" }}>
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className="bg-white border-r-2 text-gray-800 p-2 pr-6 outline-none"
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
                value={formData.mobile}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/\D/g, "");
                  if (onlyDigits.length <= 10) {
                    setFormData({ ...formData, mobile: onlyDigits });
                  }
                }}
                className="flex-1 p-3 outline-none"
              />
            </div>
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>

          {/* Message / Cover Letter */}
          <div className="flex w-full">
            <textarea
              name="message"
              placeholder="Cover Letter / Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`border p-2 rounded-md w-full ${errors.message ? "border-red-500" : "border-gray-300"}`}
            ></textarea>
          </div>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="border border-gray-400 cursor-pointer"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the <a href="/terms-and-conditions" target="_blank" className="text-blue-600 underline">terms and conditions</a>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              style={{ backgroundColor: "#38419A" }}
              disabled={!agreed}
              className={`text-white px-6 py-2 rounded-md cursor-pointer ${agreed ? "" : "cursor-not-allowed"} `}
            >
              Send
            </button>
          </div>
        </div>
      </form>

      {isSubmitted && <p className="text-green-500 mt-4">Submitted successfully!</p>}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute bottom-3 right-4 text-gray-500 hover:text-red-500"
            >
              Cancel
            </button>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@theassignmenthub.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col"
            >
              <div className="flex items-center md:text-xl text-sm font-[Quicksand] font-medium text-[#0F0F0F] mb-1">
                <p className="mr-2">Kindly send us your latest CV/resume for further consideration.</p>
                <MdArrowOutward className="text-2xl text-[#0F0F0F]" />
              </div>
              <p className="text-[#949494] text-sm md:text-lg font-[Poppins] font-light">
                hr@theassignmenthub.com
              </p>
            </a>
          </div>
        </div>
      )}

    </div>
  );
};

export default ApplicationForm;

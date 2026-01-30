"use client";

import React, { useState } from "react";
import "./termsAndC.css";
import ContactUs from "@/components/reactcomponents/contactusForm/ContactUs";



const TermsAndConditions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <div className="bg-gray-50 min-h-screen relative mt-10">
      {/* Main Content */}
      <h1 className="ppoliciesText ">Terms & Conditions</h1>
      <img
        src="/images/tandc.svg" // Replace with your image URL
        alt="Terms and Conditions"
        className="shadow-md w-full"
      />
      <div className="container mx-auto py-10">
        <div className="flex flex-col items-center">
          {/* Image */}

          {/* Text Content */}
          <div className="mt-8 py-6 px-16 textAre">
            <p className="leading-relaxed">
              Before submitting the order, please read these terms and conditions carefully. If you click "I accept," you'll be bound by this agreement's terms and conditions. You (the "Customer" or "client") are entering into a legally binding contract with Assignment Hub (the "Company") by agreeing to the terms and conditions set out above.
            </p>
            <p className="mt-4 text-lg font-bold text-gray-700 leading-relaxed">
              Offered services
            </p>
            <p className="leading-relaxed">
              Writing services ("Order" or "Project") are provided by the Company to the Customer and are uploaded to the Customer's account on the Company's website in either Microsoft Word, Powerpoint, Apple Mac OS Pages, Numbers, Keynotes and Excel format. The Project shall be delivered by the Company in accordance with the terms of the Order and within the Timeframe specified in the Order. With the customer's consent, the company may alter the delivery date.
            </p>

            <ul className="my-list">
              <li> Service Level Agreements When we talk about "Order Requirements," we mean everything that was filled out on the order form when we placed the Order.</li>
              <li>
                Unless otherwise agreed with the Company, the Client has 3 hours after initiating an emergency Project (delivery in 2–48 hours) and 20 hours after initiating a non-emergency Project (delivery in more than 48 hours) to make any necessary changes or add any necessary project materials.
              </li>
              <li>If you send this data in before the deadline, we'll count it as part of your "Order Requirements".
              </li>
              <li>Unless otherwise agreed upon by the Parties, after the aforementioned period, the Company reserves the right to treat any updates or materials as "Additional requests" and include them in the Order details at its discretion.
              </li>

              <li> If fulfilling your request significantly increases the amount of work required, the firm may charge you extra.</li>

              <li>Due to the inherently subjective nature of academic work, the Company cannot guarantee any particular letter grade for the Projects it delivers to the Customer. This is because the Customer's grade may be affected by factors outside of the Company's control, such as the Customer's overall performance during the term, the professor's attitude, required readings that were not provided by the Company, and the Customer's presentation of the Project.</li>

              <li>Therefore, the Customer agrees that they have read and completely understand the Order Requirements and understand that the Company's only responsibility is to provide a research project that satisfies those requirements and is completed on time.</li>

              <li>Customer understands and accepts that they are solely responsible for their final grades and for ensuring that the final, delivered Project fully satisfies their needs.</li>

              <li>The Company recommends that the Customer double-check the Project upon its arrival and get in touch right away if there are any issues or changes that need to be made.</li>

              <li>For this reason, the Company suggests that the Customer schedule a deadline for the Project that is at least 12 hours before the actual submission date.</li>

              <li>The Customer will pay the “Order Fee” to the Company in accordance with the terms of the Order Form and the scope of the Project. The Order processing charge is due at the time an Order is created.</li>
              <li>Discounts, fees, and other adjustments are subject to negotiation between the customer and the company.</li>

            </ul>
          </div>



          <div className="mt-8 w-full px-16">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

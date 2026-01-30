"use client";

import React, { useState } from "react";
import "./refundpolicies.css";
import ContactUs from "@/components/reactcomponents/contactusForm/ContactUs";



const RefundPolicies = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <>
      <h1 className="rpolicies">Refund Policies</h1>
      <div className="bg-gray-50 min-h-screen relative mt-10">
        {/* Main Content */}
        <img
          src="/images/refundImg.svg" // Replace with your image URL
          alt="Terms and Conditions"
          className="shadow-md w-full"
        />
        <div className="container mx-auto py-10">
          <div className="flex flex-col items-center">
            {/* Image */}

            {/* Text Content */}
            <div className="mt-8 py-6 px-16 textAre">
              <p className="leading-relaxed">
                Our customers' happiness stands above all else in our business operation. Our team will provide refunds when you show valid reasons for your dissatisfaction and prove it through our investigation. Carefully read the details so you understand every aspect of your purchase. The need for full understanding applies most to legal documents. When a client fails to find satisfaction with our services, they can end projects and get their money back. Our expert authors at Academic Writing Experts work hard to meet client satisfaction through unlimited free revisions.
              </p>
              <br />
              <p className="leading-relaxed">
                Study the precise terms of our policy about payment refunds in the event that you change your mind. Read through this page carefully to understand what you need to meet for a refund.
              </p>

              <ul className="my-list">
                <li>Shortly after you begin the purchase process, you'll be asked to agree to our established policies.</li>
                <li>
                  Our company policy states that when you cancel your purchase, we keep all money if the reasons are not justified appropriately.</li>
                <li>Any demand for a refund will not be entitled to 100% money back.</li>
                <li>We refuse all requests for additional work which were not specified initially while placing the order or once work is already in progress on a revision. The company will retain 50% of the payment received to provide these services.</li>

                <li>Our service will refund students in full when their graded work receives an F grade from the university or shows more than 30% plagiarism issue which is not justified. Students must submit their refund papers and needed documents first to receive check payments.</li>

                <li>We as a company will only complete the refund process once we receive verified supporting documents.</li>

                <li>The verification process of refund requests takes effect once 30 days pass since order delivery. It might last a month to process the refund request.</li>

                <li>As a firm, we make all refund decisions independently. The amount you owe relies on how often you ask our experts to revise your work.</li>

                <li>The client can pursue to talk or connect with customer support in the event of refund requests or disputes related to double charges. We as a company aim to do this with the view of taking necessary actions as soon as possible. </li>

                <li>Please notify us right away when you notice duplicated payments or being charged twice through our payment options including 2CHECKOUT, PAYPAL, CCAVENUE, and others. Our team is available for any communication needs through email at contact@theassignmenthub.com and instant Google chat. Our team will return unused funds back to you right away.</li>

                <li>You cannot receive a refund from our company when you place your order less than 48 hours before its deadline or if your dissertation deadline is in fewer than 10 days.</li>

                <li>Refunds are only made if any of the above-mentioned term and condition is being satisfied and the Quality Assurance Department approves the case.</li>

              </ul>
            </div>



            <div className="mt-8 w-full px-16">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default RefundPolicies;

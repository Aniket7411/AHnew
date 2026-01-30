"use client";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./faqs.css";


const faqs = [
  {
    question: "Why should I trust your online assignment guidance service?",
    answer:
      "You can trust our assignment guidance, which relies on the experience of our team of qualified writers with expertise in various domains. You will master your subject knowledge by receiving a well-structured paper with high precision and perfection that will bring you excellent grades.",
  },
  {
    question: "How fast can you do my assignment for me?",
    answer: "We provide quick solutions based on your assignment deadlines and ensuring on time delivery. In cases where the client needs a paper in the shortest time possible, urgent orders can be completed.",
  },
  {
    question: "Can your academic writers do my assignments of any kind?",
    answer: "Our team of professional writers can complete assignments in any field and of any type: essay, research paper, case study, etc. Whether you have problems with mathematics, physics, chemistry, or any other subject, we’ll be glad to help you.",
  },
  {
    question: "How can an online assignment writing service for students help in academics?",
    answer: "An online assignment writing service is helpful as it enhances the quality of your work and ensures you get better grades for well-researched, quality work. It also aids your learning by providing information on correct academic writing.",
  },
  {
    question: "Where can I find free PDF resources when seeking assignment writing help?",
    answer: "Some useful educational websites and academic journals provide free PDF files of the materials. They can also be downloaded from free articles and papers from sources like Google Scholar or from universities enabling open archive repositories.",
  },
  {
    question: "Does any website offering assignment writing help maintain confidentiality?",
    answer: "Yes, responsible and reliable companies working in the field of academic assignment writing promise 100 percent confidentiality of your order and personal data. We take your security and privacy into consideration at all times.",
  },
  {
    question: "How can I get help with my essay online? ",
    answer: "Why not connect with The Assignment Hub, our experts in writing essays will gladly help you accomplish your task. This is a skilled writing service that offers its clients unique essays that are written strictly to meet the orders and deadlines of the client.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" mx-auto px-16 faqMain" style={{
      paddingTop: '2rem',
      paddingBottom: '4rem'
    }}>
      {/* Responsive Header and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 space-y-4 lg:space-y-0">
        <h2 className=" text-center faqsText"
        //  style={{
        //     fontSize:'48px',
        //     fontWeight:600,
        //     lineHeight:'57px'
        // }}
        >
          Frequently Asked Questions
        </h2>
        {/* <div className="relative w-full lg:w-1/2">
          <input
            type="text"
            placeholder="Search here your question..."
            className="w-full p-2 pl-4 pr-12 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-3 w-[30px] h-[30px] top-1/2 transform -translate-y-1/2 bg-[#C5363C] rounded-full p-2 text-white hover:bg-red-600 focus:outline-none">
          <CiSearch />

          </button>
        </div> */}

      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className={`border px-2 py-4 shadow-md rounded-md ${activeIndex === index ? "bg-gray-100 shadow-md" : "bg-white"
              }`}
          >
            <button
              className={`w-full text-left text-md font-medium ${activeIndex === index ? "text-sky-400" : "text-gray-800"
                } flex justify-between items-center`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
                className={`ml-2 me-2 transform ${activeIndex === index ? "rotate-180" : "rotate-0"
                  } transition-transform`}
              >
                <img src="./images/downArr.svg" alt="" />
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
        {filteredFaqs.length === 0 && (
          <p className="text-gray-500">No FAQs match your search query.</p>
        )}
      </div>
    </div>
  );
};

export default FaqSection;

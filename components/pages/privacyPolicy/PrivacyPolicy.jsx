
"use client";

import React, { useState } from "react";
import "./privacyPolicies.css";

import ContactUs from "@/components/reactcomponents/contactusForm/ContactUs";

const faqs = [
  {
    question: "COLLECTION AND USE OF INFORMATION",
    answer:
      "The Assignment Hub collects, processes and safely stores your data while you explore our website at www.theassignmenthub.com. You can enter basic information such as your name email address phone number and postal address when you choose to do so. We need this information to unlock website features and contact you afterwards when you visit us. Personal information may include, but is not limited to, the following:<br>● Your name,<br>● Email addresses,<br>● Telephone numbers,<br>● Country, City, and State",
  },
  {
    question: "REGISTRATION",
    answer:
      "Your information helps Assignment Hub provide better service to you. To register on our platform, you must provide us with your email address which we consider personal information. Once registered The Assignment Hub uses your account for every visit to the website. To make their first purchase, all customers need to share their name, phone number, email address as well as their billing and shipping information.",
  },
  {
    question: "HOW WE USE YOUR INFORMATION",
    answer:
      "The information we collect from you may be used in the following ways:<br> ● To gather information about prospective customers: Your information helps us design a better interface that responds quickly to your needs and makes using our platform easier for everyone.<br> ● To send periodic communications: Once you give us your permission, we can reach you through email text and phone calls to share product updates and marketing materials.<br> ●	To customize content, improve quality, and enhance usability across channels: When you share personal information with us our systems build tailored content experiences and enhance page navigation with less repetition to protect your data while improving services and analytics.<br> ●	To obtain third-party services: Our affiliates, subsidiaries, and third-party service providers receive both Personal Information and service-relevant data to help run our websites and supporting IT functions. Our third-party service providers get to access your Personal Information so we can use their services but they must stick to our security guidelines when they handle this information.",
  },
  {
    question: "INFORMATION DISCLOSURE",
    answer:
      "The Assignment Hub does not distribute personal information shared with this website to outside parties who use it for their advertising efforts. We partner with third-party service companies to help us deliver our services but require them to handle your personal data according to the directives we give them. These service providers need all personal information to help The Assignment Hub reach its goals and perform the tasks our organization instructs them to handle.<br> ●	Process personal data based on all legal standards where you reside and worldwide<br> ●	We follow rules set by law in our operations.<br> ●	We handle requests from authorities within and outside your current residence while working to strengthen national security and law enforcement.<br> ●	Our compliance team needs these data to follow our rules.<br>The Assignment Hub stores your data to defend legal actions and minimize possible losses. Your personal data may move to business groups or outside parties when we change modes or ownership of our entire business. This also happens during bankruptcy or sizeable company realignments.<br>We pass personal information to government agencies and outside partners who help fight fraud and facilitate legal investigations. Such disclosures occur when:<br>●	Required or permitted by law<br> ●	Preventing or protecting against potential or actual fraud or unauthorized transactions; or<br>● Investigating incidents of fraud that have already occurred.<br>The information stays private when the business experiences these events.<br> When our company undergoes business deals personal data collected by our website becomes a transferable asset. The website will display notification for 30 straight days to tell users about changes to who controls their personal data since an event occurred.",
  },
  {
    question: "CROSS-BORDER DATA TRANSFERS",
    answer:
      "The Assignment Hub connects users to partner sites and third-party dealers to help you make purchase and improve your website usage. You can navigate from our website to the selected organization or company when you click their website links. Since The Assignment Hub does not run external websites, we strongly advise users to check both site's privacy policies. Check the privacy notice of any linked website before you send Customer Identifiable Information to it. The Assignment Hub does not accept responsibility for what third parties do with your data.<br>Our company must transfer personal information outside our home operations for business development activities and technical projects.<br>● When you move personal data from one party to another you must first create a data transfer agreement.<br>● We follow requirements for notice to specific data protection authorities before taking action.<br>●	We need written approval or notification from people whose data we move.",
  },
  {
    question: "CONSENT AND CONTROL",
    answer:
      "<b>Consent</b><br> An individual needs to give The Assignment Hub their permission before the company uses their personal information. People agree to have their data processed after signing or checking boxes to show they understand the terms. Our need for written consent depends entirely on the type of personal data processing.<br>●	Our platform handles your personal information and specific personal information types.<br>● The Assignment Hub requests permission to give private data to external organizations.<br>● The company requires both individual movement of personal data outside their home country and written consent before each processing activity.<br>● Our system saves cookies to your electronic devices.",
  },
  {
    question: "Control of Your Information",
    answer:
      "You can ask us through our website www.theassignmenthub.com to inspect and change any Personal Information you previously shared with us. You also have the right to request the elimination of specific Personal Information or limit its use by contacting us using the details in Section 11 of this policy. Show us your preferred actions with your personal data including how you want it excluded from our system and what use limits you need.<br>Normal difficulties in service require our staff to study your situation while easier requests get handled right away. Our team will respond to your concerns by addressing them and reporting expected actions within 30 days. The Assignment Hub moves your data from www.theassignmenthub.com to storage platforms both on our own systems and with our supplier network. Our teams use advanced protection systems throughout all data storage areas.",
  },
  {
    question: "COMMITMENT TO DATA SECURITY",
    answer:
      "We use strong security tools to protect your personal details. The company limits this data to teams and professional partners who have agreed to protect client information. The Assignment Hub makes all suppliers follow basic security rules through mandatory contracts. When using www.theassignmenthub.com users must protect their own passwords and verification details to access secured website sections. Allowed users need special permission to enter these zones. Accessing the system without authorization can lead to criminal prosecution.",
  },
  {
    question: "USE OF COOKIES",
    answer:
      "Like other transactional websites we deploy cookies to make your online journey better and simpler. When you come back to our website your device uses small text files named cookies to identify you and personalize your online experience. The system gives customers a better and more user-friendly way to do business. Our website cookies remember your preferences but keep your personal account and financial information secure. Several parts of The Assignment Hub require cookies to be functional. Our platform uses cookies correctly yet we do not control or accept liability for third-party cookie activities.",
  },
  {
    question: "RETENTION AND DISPOSAL",
    answer:
      "The Assignment Hub saves personal records until its essential business purposes end. The Assignment Hub follows security steps to remove personal data permanently from records. We store your information until your account stays active or until we need it to deliver our services. Please contact us through Section 11 of our privacy policy to stop us from using your personal information. Your request will get a response back within 30 days after we receive it. We keep your data to fulfil our legal duties and resolve disputes while upholding our contractual deals.",
  },
  {
    question: "YOUR CONSENT",
    answer:
      "Send a message to our contact page to withdraw your agreement for our handling of your personal data. When users are under 16 years old they must obtain permission from their parent or legal guardian for data usage. When you refuse to allow us your consent or cancel it at any time The Assignment Hub will need to reduce or stop delivering the services described in Section 2.2 of this policy.",
  },
  {
    question: "PRIVACY CONTACT INFORMATION",
    answer:
      "You can reach us at contact@theassignmenthub.com for any questions about this Privacy Policy plus updates or information removal.",
  },
  {
    question: "CHANGES TO THE PRIVACY POLICY",
    answer:
      "Our Privacy Policy can get modified without sending updates to users first. By using our services after this update you agree to the new policy terms. Check this page often to get the latest information about our updates. ",
  },
];

const PrivacyPolicy = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="bg-gray-50 min-h-screen relative mt-10">
      {/* Main Content */}
      <h1 className="text-center text-4xl font-bold">Privacy Policies</h1>
      <img
        src="/images/ppolicies.svg" // Replace with your image URL
        alt="Privacy Policy"
        className="shadow-md w-full"
      />
      <div className="container mx-auto py-10">
        <div className="flex flex-col items-center">
          {/* Image */}

          {/* Text Content */}
          <div className="mt-8 py-6 px-16 textAre">
            <p className="text-gray-700 leading-relaxed">
              As a company The Assignment Hub Research Pvt. Ltd. (Tah) makes
              sure your private information remains safe throughout our system.
              We use strong security procedures to protect the data our systems
              hold. Our employees handle your data only when their roles demand
              it for their work activities. Employees who break our privacy or
              security protocols face disciplinary punishment that ends with
              their job and could launch legal proceedings. Protecting your
              private data and important information stays as The Assignment
              Hub's top priority.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our website privacy policy describes the ways we handle your
              personal data at www.theassignmenthub.com Read this policy first
              before you use our website or submit personal details. When our
              data collection methods or legal standards evolve, we update the
              policy. Check our privacy policy when you visit
              www.theassignmenthub.com to learn how we handle your private data.
            </p>
            <p className="mt-4 text-gray-700 font-semibold">Please Note:</p>
            <p className="text-gray-700 leading-relaxed">
              Our privacy policy covers only activities on
              www.theassignmenthub.com. Check the privacy policies of external
              websites directly because our platform connects through their
              links. Their privacy rules might not match ours at all.
            </p>
          </div>

          {/* Accordion Section */}
          <div className="mt-8 w-full px-16">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border px-6 py-4 shadow-md rounded-md ${activeIndex === index ? "bg-gray-100 shadow-md" : "bg-white"
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
                    //   <p className="mt-2 text-gray-700">{faq.answer}</p>
                    <p
                      className="mt-2 text-gray-700"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  )}
                </div>
              ))}
              {filteredFaqs.length === 0 && (
                <p className="text-gray-500">No Privacy Policy.</p>
              )}
            </div>
          </div>

          <div className="mt-8 w-full px-16">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

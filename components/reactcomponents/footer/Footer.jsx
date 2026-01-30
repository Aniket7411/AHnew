"use client";

import React from "react";
import "./footer.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleScrollToSection = (e, section) => {
    e.preventDefault();
    const ref =
      section === "howItWorks"
        ? window.section2Ref
        : section === "faqs"
          ? window.faqsRef
          : window.feedbackRef;
    if (ref?.current && pathname === "/") {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };
  return (
    <footer className="footer">
      <div className="flex justify-end gap-5 mb-4">
        <img src="/images/privacy.svg" className="w-[96px]" alt="" />
        <img src="/images/iso.svg" className="w-[92px]" alt="" />
      </div>

      <div className="flex flex-wrap md:justify-end gap-5 mb-4">
        <div className="relative inline-block text-left group">
          <button
            type="button"
            className="inline-flex justify-center items-center w-full rounded-md border border-transparent hover:border hover:border-gray-300 shadow-sm px-4 py-2 bg-[#B4B4B433] text-sm font-bold text-gray-700 hover:bg-gray-50"
          >
            <img src="/images/ind.svg" className="me-2" alt="" />
            India
            <svg className="ml-2 -mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="absolute hidden group-hover:block right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 left-0"
          >
            <div className="p-4">
              <p className="font-semibold"> Jaipur (Headquarter)</p>
              <p>70/38, Patel Marg, <br /> Mansarovar, Jaipur, <br /> India</p>
              <p className="font-semibold">Kota</p>
              <p>86/87-A, Shrinathpuram,<br /> Sector- A, Kota, <br /> India</p>
            </div>
          </div>
        </div>

        <div className="relative inline-block text-left group">
          <button
            type="button"
            className="inline-flex justify-center items-center w-full rounded-md border border-transparent hover:border hover:border-gray-300 shadow-sm px-4 py-2 bg-[#B4B4B433] text-sm font-bold text-gray-700 hover:bg-gray-50"
          >
            <img src="/images/uk.svg" className="me-2" alt="" />
            United Kingdom
            <svg className="ml-2 -mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="absolute hidden group-hover:block right-0 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="p-4">
              <p className="font-semibold">United Kingdom Office</p>
              <p>123 Baker Street<br />London, UK<br />ZIP: W1U 6RT</p>
            </div>
          </div>
        </div>

        <div className="relative inline-block text-left group">
          <button
            type="button"
            className="inline-flex justify-center items-center w-full rounded-md border border-transparent hover:border hover:border-gray-300 shadow-sm px-4 py-2 bg-[#B4B4B433] text-sm font-bold text-gray-700 hover:bg-gray-50"
          >
            <img src="/images/ireland.svg" className="me-2" alt="" />
            Ireland
            <svg className="ml-2 -mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="absolute hidden group-hover:block right-0 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="p-4">
              <p className="font-semibold">Ireland Office</p>
              <p>4 Curlew Road,<br />Dublin 12,<br />Ireland</p>
            </div>
          </div>
        </div>

        <div className="relative inline-block text-left group">
          <button
            type="button"
            className="inline-flex justify-center items-center w-full rounded-md border border-transparent hover:border hover:border-gray-300 shadow-sm px-4 py-2 bg-[#B4B4B433] text-sm font-bold text-gray-700 hover:bg-gray-50"
          >
            <img src="/images/canada.svg" className="me-2" alt="" />
            Canada
            <svg className="ml-2 -mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="absolute hidden group-hover:block right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="p-4">
              <p className="font-semibold">Canada Office</p>
              <p>2224 Speers Road, <br /> Oakville,  Ontario,<br />Canada</p>
            </div>
          </div>
        </div>

        <div className="relative inline-block text-left group">
          <button
            type="button"
            className="inline-flex justify-center items-center w-full rounded-md border border-transparent hover:border hover:border-gray-300 shadow-sm px-4 py-2 bg-[#B4B4B433] text-sm font-bold text-gray-700 hover:bg-gray-50"
          >
            <img src="/images/uae.svg" className="me-2" alt="" />
            United Arab Emirates
            <svg className="ml-2 -mr-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="absolute hidden group-hover:block right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="p-4">
              <p className="font-semibold">UAE Office</p>
              <p>OEM Enterprises LLC,<br />Sharjah,<br />UAE</p>
            </div>
          </div>
        </div>
      </div>


      <div className="footer-top">
        <div className="footer-column">
          <h4>Get to know us</h4>
          <ul>
            <li className="cursor-pointer">
              <Link href="/blogs" className="hover:text-[#65CBE4]">
                Blogs
              </Link>
            </li>

            {pathname === "/" && (
              <li
                onClick={(e) => handleScrollToSection(e, "faqs")}
                className="cursor-pointer hover:text-[#65CBE4]"
              >
                Faqs
              </li>
            )}

            {pathname === "/" && (
              <li
                onClick={(e) => handleScrollToSection(e, "howItWorks")}
                className="cursor-pointer hover:text-[#65CBE4]"
              >
                How It Works
              </li>
            )}

            {pathname === "/" && (
              <li
                onClick={(e) => handleScrollToSection(e, "reviews")}
                className="cursor-pointer hover:text-[#65CBE4]"
              >
                Reviews
              </li>
            )}

            <li className="cursor-pointer">
              <Link href="/contact-us" className="hover:text-[#65CBE4]">
                Contact Us
              </Link>
            </li>

            <li className="cursor-pointer">
              <Link href="/plans" className="hover:text-[#65CBE4]">
                Our Offers
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Subjects</h4>
          <ul>
            <li className="links">
              <Link href="/services/finance-assignment">Finance Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/artificial-intelligence">Artificial Intelligence Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/autocad-assignment">Autocad Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/mba-assignment">MBA Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/r-assignment">R Assignment Assistance</Link>
            </li>
            <li className="links">
              <Link href="/services/accounting-assignment">Accounting Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/nursing-assignment">Nursing Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/accounting-problems-assignment">Accounting Problems Solver</Link>
            </li>
            <li className="links">
              <Link href="/services/cs-assignment">Computer Science Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/engineering-assignment">Engineering Assignment Help</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="invisible">Subjects</h4>
          <ul>

            <li className="links">
              <Link href="/services/law-assignment">Law Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/spss-assignment">SPSS Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/arcgis-assignment">ArcGIS Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/economics-assignment">Economics Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/stata-assignment-help">Stata Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/java-programming-assignment">Java Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/financial-accounting-assignment">Financial Accounting Assignment Help</Link>
            </li>
            <li className="links">
              <Link href="/services/c++-assignment">C++ Assignment Help</Link>
            </li>

          </ul>
        </div>
        <div className="footer-column">
          <h4>Essay</h4>
          <ul>

            <li className="links">
              <Link href="/services/persuasive-essay-writing">Persuasive Essay Writing</Link>
            </li>
            <li className="links">
              <Link href="/services/expository-essay-writing">Expository Essay Writing</Link>
            </li>
            <li className="links">
              <Link href="/services/descriptive-essay-writing">Descriptive Essay Writing</Link>
            </li>
            <li className="links">
              <Link href="/services/scholarship-essay-writing">Scholarship Essay Writing</Link>
            </li>
            <li className="links">
              <Link href="/services/order-essay-writing">Order An Essay</Link>
            </li>
            <li className="links">
              <Link href="/services/write-essay-for-money">Write Essay For Money</Link>
            </li>
            <li className="links">
              <Link href="/services/fast-essay-writing">Fast Essay Writing</Link>
            </li>
            <li className="links">
              <Link href="/services/pay-for-essay">Pay for Essay</Link>
            </li>
            <li className="links">
              <Link href="/services/essay-writers">Essay Writers</Link>
            </li>
            <li className="links">
              <Link href="/services/essays-for-sale">Essays for Sale</Link>
            </li>
            <li className="links">
              <Link href="/services/college-essay-writing-service">College Essay Writing Service</Link>
            </li>

          </ul>
        </div>
        <div className="footer-column">
          <h4>Citation Tools</h4>
          <ul>

            <li className="links">
              <Link href="/services/apa-citation" className="hover:text-[#65CBE4]">
                APA Citation
              </Link>
            </li>
            <li className="links">
              <Link href="/services/chicago-citation" className="hover:text-[#65CBE4]">
                Chicago Citation
              </Link>
            </li>
            <li className="links">
              <Link href="/services/harvard-citation" className="hover:text-[#65CBE4]">
                Harvard Citation
              </Link>
            </li>
            <li className="links">
              <Link href="/services/mla-citation" className="hover:text-[#65CBE4]">
                MLA Citation
              </Link>
            </li>
            <li className="links">
              <Link href="/services/vancouver-citation" className="hover:text-[#65CBE4]">
                Vancouver Citation
              </Link>
            </li>
            <li className="links">
              <Link href="/services/oxford-citation" className="hover:text-[#65CBE4]">
                Oxford Citation
              </Link>
            </li>
            <li className="links">
              <Link href="/services/swinburne-citation" className="hover:text-[#65CBE4]">
                Swinburne Citation
              </Link>
            </li>
            <li className="links">
              <Link href="/services/griffith-citation" className="hover:text-[#65CBE4]">
                Griffith Citation
              </Link>
            </li>

          </ul>
        </div>
      </div>
      <div className="footer-middle flex justify-between" style={{
        fontSize: '16px',
        fontWeight: '600',
        color: '#777',
      }}>
        <div className="mb-3">Contact us: +91-9352555548</div>
        <div className="text-center mb-3">
          <p className="text-center mb-1">
            App Coming soon
          </p>
          <div className="flex flex-wrap gap-4 justify-center ">
            <img src="/images/playStore.svg" alt="" />
            <img src="/images/appStore.svg" alt="" />
          </div>
        </div>
        <div className="">
          <p className="mb-1 md:text-right ">
            100% Secure Pay
          </p>
          <div className="flex flex-wrap gap-2">
            <img src="/images/master.svg" alt="" />
            <img src="/images/visa.svg" alt="" />
            <img src="/images/american.svg" alt="" />
            <img src="/images/discover.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 theassignmenthub.com. All rights reserved.</p>

        <p className="footer-links">
          <span className="text-gray-800">
            <Link href="/terms-and-conditions" className="hover:text-[#65CBE4]">
              Term of use
            </Link>
          </span>{" "}
          |{" "}
          <span className="text-gray-800">
            <Link href="/privacy-policy" className="hover:text-[#65CBE4]">
              Privacy policy
            </Link>
          </span>{" "}
          |{" "}
          <span className="text-gray-800">
            <Link href="/Refund-Policies" className="hover:text-[#65CBE4]">
              Revision & Refund policy
            </Link>
          </span>{""}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { MdArrowOutward } from "react-icons/md";
import Header from "../header";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Section2 from "../section2";
import "./section.css";
import { useContext, useState, useEffect } from "react";
import { HomeContext } from "../../contextManager/homecontext";
import { useLocation, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
// import { CheckCircleIcon, CircleIcon } from "@heroicons/react/24/solid";
import star from '../../img/star.svg';
import siteJabber from '../../img/siteJabber.svg'
import trustPilot from '../../img/trustPilot.svg';
import hacker from '../../img/hacker.svg';
import whats from '../../img/whats.svg';
import mail from '../../img/gmail.svg';
import taskFilled from '/images/task-filled.png';
import task from '../../img/task.png';
import axios from "axios";








const Section1 = () => {
  const [hoveredField, setHoveredField] = useState(null);
  const [headerData, setHeaderData] = useState({});

  // const { headerData, setHeaderData } = useContext(HomeContext);
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

  const location = useLocation();

  const [country, setCountry] = useState(""); // State to store the user's country

  const [error, setError] = useState(null);  // State to handle errors

  const getLocation = async () => {
    try {
      const response = await axios.get("http://ip-api.com/json");
      await setCountry(response.data.country); // Extract and set the country
    } catch (error) {
      setError("Unable to fetch location."); // Handle errors
      console.error("Error fetching location:", error);
    }
  };


  useEffect(() => {
    getLocation(); // Fetch location when the component mounts
  }, []);

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


  useEffect(() => {
    if (location.state?.heading) {
      setHeaderData((prev) => ({ ...prev, heading: location.state.heading, subheading: location.state.subheading }));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.state, setHeaderData]);


  const dropdownItems = [
    {
      heading: "Writing",

      items: [
        {
          name: "Essay Help Services",
          link: 'Essay-Help-Services',
          heading: "Essay Help- Expert Assignment Service",
          subheading: "Get urgent essay help for excellent grades.",
        },
        {
          name: "Article Writing Services",
          link: "Article-Writing-Services",
          heading: "Write My Professional Article Assignment Help",
          subheading:
            "Professional Article Assignment Help for Fast and reliable Assistance",
        },
        {
          name: "Blog Writing Services",
          link: "Blog-Writing-Services",
          heading: "Proficient Assistance for Blog Writing Services",
          subheading:
            "Write SEO-friendly and engaging Blogs for your target audience",
        },
        {
          name: "Report Writing Services",
          link: "Report-Writing-Services",
          heading: "Experienced Report Assignment Help For Me",
          subheading:
            "Hire Experienced writers for top quality report writing assistance",
        },
        {
          name: "Dissertation/Thesis Help Services",
          link: "Dissertation-Thesis-Help-Services",
          heading: "Expert Dissertation/Thesis Help",
          subheading:
            "Find Professional help for Dissertation/Thesis Assignment",
        },
        {
          name: "Case Study Help Services",
          link: "Case-Study-Help-Services",
          heading: "My Case Study Assignment Solutions",
          subheading:
            "Write my case study solutions elevating my academic grades",
        },
        {
          name: "Project Management Writing Services",
          link: "Project-Management-Writing-Services",
          heading: "Reliable Project Management Assignment Solutions",
          subheading:
            "Finding someone write my project management assignment. We are here.",
        },
        {
          name: "Annotated Bibliography Writing Services",
          link: "Annotated-Bibliography-Writing-Services",
          heading: "Annotated Bibliography Assignment Help",
          subheading:
            "Write Annotated Bibliography Assignment with Subject Matter Experts",
        },
        {
          name: "My Coursework Help Services",
          link: "My-Coursework-Help-Services",
          heading:
            "Coursework Help Guidance: Maximizing Your Academic Performance",
          subheading: "Achieve Higher grades with our coursework expertise",
        },
        {
          name: "Technical Writing Services",
          link: "Technical-Writing-Services",
          heading: "Technical/Programming Assignment Help",
          subheading:
            "Reach us out for authentic Technical/Programming assignment solutions",
        },
        {
          name: "Write My Research Paper Services",
          link: "Write-My-Research-Paper-Services",
          heading: "Please Write Research Paper For Me",
          subheading: "Avail your Research paper solutions hassle-free",
        },
        {
          name: "Research Proposal Writing Services",
          link: "Research-Proposal-Writing-Services",
          heading: "Research Proposal Assignment Service",
          subheading: "Receive your Research paper with PHD writing experts",
        },
      ],
    },
    {
      heading: "Our Domains",
      items: [
        {
          name: "Law Assignment",
          link: "Law-Assignment",
          heading: "Online Law Assignment Services",
          subheading:
            "Connect with our professionals for your Law Assignment solutions",
        },
        {
          name: "Science Assignment",
          link: "Science-Assignment",
          heading: "Science Assignment Help For Your Academic Excellence",
          subheading:
            "Call us Now for affordable yet best quality Science Assignments",
        },
        {
          name: "Nursing Assignment",
          link: "Nursing-Assignment",
          heading: "Write My Nursing Assignment for me",
          subheading:
            "Where can I get the best quality nursing assignments done? Yes we do.",
        },
        {
          name: "Civil Assignment",
          link: "Civil-Assignment",
          heading: "Pocket-friendly Civil Assignment Services",
          subheading:
            "Avail your civil assignment solutions in affordable prices.",
        },
        {
          name: "Engineering Assignment Help",
          link: "Engineering-Assignment-Help",
          heading: "Engineering Assignment Help for me",
          subheading:
            "Can I get help for my engineering assignment? Call Us Now!",
        },
        {
          name: "Management & HR Assignment",
          link: "Management-HR-Assignment",
          heading: "Do my Management & Human Resource Assignment for me",
          subheading:
            "Can someone write my Management & Human Resource Assignment? Our Subject matter experts do.",
        },
        {
          name: "Finance & Statistics Assignment",
          link: "Finance-Statistics-Assignment",
          heading:
            "Masters level Finance & Statistics Assignment Writing Services",
          subheading:
            "Enhance your academic potential with our Finance & Statistics assignment writing help.",
        },
        {
          name: "Calculus Assignment",
          link: "Calculus-Assignment",
          heading: "Receive Expert Solutions For Your Calculus Assignment",
          subheading:
            "Lets connect for availing you best calculus assignment help",
        },
        {
          name: "Psychology Assignment",
          link: "Psychology-Assignment",
          heading: "Perfect Solution For Your Psychology Assignment",
          subheading:
            "The best assignment writing with our psychology experts.",
        },
        {
          name: "Finance Assignment",
          link: "finance-assignment",
          heading: "Finance Assignment Help",
          subheading:
            "Your Trusted Partner for Flawless Finance Homework Assistance",
        },
        {
          name: "Artificial Intelligence Assignment Help",
          link: "artificial-intelligence",
          heading: "Artificial Intelligence Assignment Help",
          subheading: "Excel in Your Studies with Top AI Assignment Help",
        },
        {
          name: "Autocad Assignment Help",
          link: "autocad-assignment",
          heading: "Autocad Assignment Help",
          subheading: "Get Top AutoCAD Assistance from USA's Leading Post-Graduate Experts.",
        },
        {
          name: "MBA Assignment Help",
          link: "mba-assignment",
          heading: "MBA Assignment Help",
          subheading: "Master Your MBA Assignments with Expert Online Assistance.",
        },
        {
          name: "R Assignment Assistance",
          link: "r-assignment",
          heading: "R Studio Assignment Assistance",
          subheading: "Expert R Programming Help for Guaranteed Assignment Success",
        },
        {
          name: "Accounting Assignment Help",
          link: "accounting-assignment",
          heading: "Accounting Assignment Help",
          subheading: "Transform Your Grades with Our Expert Accounting Solutions!",
        },
        {
          name: "Nursing Assignment Help",
          link: "nursing-assignment",
          heading: "Nursing Assignment Assistance",
          subheading: "Expert Nursing Assignment Support to Secure Top Scores",
        },
        {
          name: "Accounting Problems Solver",
          link: "accounting-problems-assignment",
          heading: "Accounting Homework Help",
          subheading: "Expert Nursing Assignment Support to Secure Top Scores",
        },
        {
          name: "Computer Science Assignment Help",
          link: "cs-assignment",
          heading: "Computer Science Assignment Help",
          subheading: "Expert Online Help for Computer Science Assignments You Can Rely On",
        },
        {
          name: "Engineering Assignment Help",
          link: "engineering-assignment",
          heading: "Engineering Assignment Help",
          subheading: "Engineering Homework Support from the Most Reliable Experts in the Field",
        },
        {
          name: "Law Assignment Help",
          link: "law-assignment",
          heading: "Law Assignment Help",
          subheading: "Master Your Legal Studies with Professional Law Assignment Support",
        },
        {
          name: "SPSS Assignment Help",
          link: "spss-assignment",
          heading: "SPSS Assignment Help",
          subheading: "SPSS Homework Help Delivered by Knowledgeable Subject Experts",
        },
        {
          name: "ArcGIS Assignment Help",
          link: "arcgis-assignment",
          heading: "ArcGIS Assignment Help | GIS Homework Help",
          subheading: "Excel in ArcGIS Homework with Expert-Level Guidance",
        },
        {
          name: "Economics Assignment Help",
          link: "economics-assignment",
          heading: "Economics Assignment Help: Expert Guidance for Success",
          subheading: "Sign Up for Affordable Economics Homework Help Services TODAY!",
        },
        {
          name: "Stata Assignment Help",
          link: "stata-assignment-help",
          heading: "Stata Assignment Help Online",
          subheading: "Make Stata Homework Writing an Easy Task with Our Expert Help!",
        },
        {
          name: "Java Assignment Help",
          link: "java-programming-assignment",
          heading: "Java Programming Assignment Assistance",
          subheading: "No.1 Java programming assignment help to debug your line of codes",
        },
        {
          name: "Financial Accounting Assignment Help",
          link: "financial-accounting-assignment",
          heading: "Financial Accounting Assignment Help",
          subheading: "Boost Your Performance with Our Professional Financial Accounting Homework Help",
        },
        {
          name: "C++ Assignment Help",
          link: "c++-assignment",
          heading: "C++ Programming Assignment Help from Ph.D. Experts",
          subheading: "Get Reliable C++ Assignment Support to Improve Your Academic Performance",
        },
        {
          name: "Persuasive Essay Writing",
          link: "persuasive-essay-writing",
          heading: "Persuasive Essay Writing",
          subheading: "Make your persuasive essay stand out in class with the help of top professionals",
        },
        {
          name: "Expository Essay Writing",
          link: "expository-essay-writing",
          heading: "Expository Essay Writing",
          subheading: "Boost Your Success with Expert Expository Essays!",
        },
        {
          name: "Descriptive Essay Writing",
          link: "descriptive-essay-writing",
          heading: "Buy Descriptive Essay from Professional Writers",
          subheading: "Get A+ Descriptive Essays from Top Experts!",
        },
        {
          name: "Scholarship Essay Writing",
          link: "scholarship-essay-writing",
          heading: "Scholarship Essay Writing Service",
          subheading: "Boost Your Grant Chances with Expert Essays!",
        },
        {
          name: "Order An Essay",
          link: "order-essay-writing",
          heading: "Order Essay Online from the Best",
          subheading: "Order an essay online today and watch your grades improve!",
        },
        {
          name: "Write Essay For Money",
          link: "write-essay-for-oney",
          heading: "Write Essays for Money",
          subheading: "Writing an essay made 10X easier and hassle-free.",
        },
        {
          name: "Fast Essay Writing",
          link: "fast-essay-writing",
          heading: "Fast Essay Writing Service",
          subheading: "Share your requirements with the fastest essay writing service provider today!",
        },
        {
          name: "Pay for Essay",
          link: "pay-for-essay",
          heading: "Pay for Essays Online",
          subheading: "Get the Best Experts to Pay for Essay Writing from Us",
        },
        {
          name: "Essay Writers",
          link: "order-essay-writing",
          heading: "Professional Essay Writers for Hire",
          subheading: "The Best Essay Writers Are Here to Guide You",
        },
        {
          name: "Essays for Sale",
          link: "essays-for-sale",
          heading: "Custom Essays for Sale",
          subheading: "Get a Quality Essay for Sale to Help You Find Perfect Solutions.",
        },
        {
          name: "College Essay Writing Service",
          link: "college-essay-writing-service",
          heading: "College Paper Writing Service by Expert Writers",
          subheading: "Our professional college essay writers are always ready to help you!",
        },
        {
          name: "APA Citation",
          link: "apa-citation",
          heading: "",
          subheading: "#1 Free APA Citation Generator",
        },
        {
          name: "Chicago Citation",
          link: "chicago-citation",
          heading: "",
          subheading: "#1 Free Chicago Citation Generator For You",
        },
        {
          name: "Harvard Citation",
          link: "harvard-citation",
          heading: "",
          subheading: "Free Harvard Referencing Generator for Accurate Results",
        },
        {
          name: "MLA Citation",
          link: "mla-citation",
          heading: "",
          subheading: "Free MLA Citation Generator for Quick Results",
        },
        {
          name: "Vancouver Citation",
          link: "vancouver-citation",
          heading: "",
          subheading: "Free Vancouver Citation Generator",
        },
        {
          name: "Oxford Citation",
          link: "oxford-citation",
          heading: "",
          subheading: "Oxford Referencing Generator Online",
        },
        {
          name: "Swinburne Citation",
          link: "swinburne-citation",
          heading: "",
          subheading: "Discover the Wonders of Our Swinburne Harvard Referencing",
        },
        {
          name: "Griffith Citation",
          link: "griffith-citation",
          heading: "",
          subheading: "Discover the Wonders of Our Griffith Referencing Tool",
        }
      ],
    },
    {
      heading: "More Services",
      items: [
        {
          name: "CV Writing Services",
          link: "CV-Writing-Services",
          heading: "Write CV For Me",
          subheading:
            "CV writing services to enhance your professional portfolio.",
        },
        {
          name: "Write My SOP (Statement of Purpose) Services",
          link: "Write-My-SOP-Services",
          heading: "Professional SOP writing services",
          subheading:
            "Say “Write my SOP for me” and get offer letters from top universities",
        },
        {
          name: "Diploma Work Help Services",
          link: "Diploma-Work-Help-Services",
          heading:
            "Diploma Work Help Online - Distinctive Diploma Assignment Writing Services",
          subheading:
            "Pocket-friendly, Expert and Reliable Writing Services for all your diploma works",
        },
        {
          name: "Corporate Profile Writing Services",
          link: "Corporate-Profile-Writing-Services",
          heading: "Smart Corporate Profile Writing Services For You",
          subheading:
            "Top-Notch Corporate Profiling Services for students and professionals",
        },
        {
          name: "Take My Online Exam Services",
          link: "Take-My-Online-Exam-Services",
          heading: "Take My Online Exam - Expert Assistance Offered",
          subheading: "Ace your grades in your Exam with us.",
        },
        {
          name: "Presentation/Infographics/Posters Services",
          link: "Presentation-Infographics-Posters-Services",
          heading: "Presentation/Poster/Infographics Writing Services",
          subheading:
            "Hire professionals for your Presentation/Poster/Infographics writing services.",
        },
      ],
    },
  ];


  // const location = useLocation(); // Gives you current URL path

  // Your dropdownItems array here
  // const dropdownItems = [/* your full dropdownItems array */];

  useEffect(() => {
    const currentPath = location.pathname.replace("/services/", ""); // remove leading slash
    let found = false;

    for (const category of dropdownItems) {
      for (const item of category.items) {
        if (item.link === currentPath) {
          setHeaderData({
            heading: item.heading,
            subheading: item.subheading,
          });
          found = true;

          break;
        }
      }
      if (found) break;
    }

    if (!found) {
      setHeaderData({});
    }
  }, [location.pathname]);



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
          {headerData?.heading ? (
            <span>{headerData.heading}</span>
          ) : (
            "We Provide Online Assignment Help-"
          )}
          <br />
          <span
            style={{
              fontWeight: 600,
              lineHeight: "60px",
            }}
            className="text-[3.5rem] pliagFreeText"
          >
            {headerData?.subheading
              ? ` ${headerData.subheading}`
              : " AI & Plagiarism Free"}
          </span>
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
              <img src="/images/image-2.svg" className="-ms-2" alt="" />
              <div class="w-px h-24 bg-[#8799DB] mx-1"></div>
              <div className="cursor-pointer rounded-3xl p-1 flex flex-col justify-center gap-1 px-2"
                onClick={() => window.open("https://www.sitejabber.com/reviews/theassignmenthub.com", "_blank")}
              >
                <div className="flex flex-col">
                  <img src={siteJabber} alt="" />
                </div>
                <div className="flex items-center gap-1 text-[#FCBC40] me-4">
                  <div className="flex flex-wrap me-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <div className="" style={{ clipPath: "inset(0 25% 0 0)" }}>
                      <img src={star} alt="" className="w-full h-auto" />
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
                  <img src={trustPilot} alt="" />
                </div>
                <div className="flex items-center gap-1 text-[#FCBC40] me-4">
                  <div className="flex flex-wrap me-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <div className="" style={{ clipPath: "inset(0 25% 0 0)" }}>
                      <img src={star} alt="" className="w-full h-auto" />
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

            <div className="flex fraudDiv rounded-2xl p-5 gap-5" >
              <img src={hacker} className="hidden md:block" alt="" />
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
                    <img src={whats} alt="" />
                    <p>+91-9352555548</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={mail} style={{
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
                          src={taskFilled}
                          alt=""
                          className="w-5 h-5 text-gray-400"
                        />
                      ) : (
                        <img
                          src={task}
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
                              {[
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

export default Section1;

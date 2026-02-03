"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneCode from "../../utils/phoneCode";
import emailjs from "@emailjs/browser";
import Slider from "react-slick";
import "../../reactcomponents/section1/section.css";

// Images from public/images (Next.js serves public at root)
const whats = "/images/whats.svg";
const mail = "/images/gmail.svg";
const taskFilled = "/images/task-filled.png";
const task = "/images/task.png";
const star = "/images/star.svg";
const siteJabber = "/images/siteJabber.svg";
const trustPilot = "/images/trustPilot.svg";
const hacker = "/images/hacker.svg";
const Div1 = "/images/Div1.svg";
const Div2 = "/images/Div2.svg";
const Div3 = "/images/Div3.svg";
const Div4 = "/images/Div4.svg";
const dissert = "/images/dissert.svg";
const course = "/images/course.svg";
const home = "/images/home.svg";
const caseStudies = "/images/caseStudies.svg";
const essayHelp = "/images/essayHelp.svg";
const diplomaWork = "/images/diplomaWork.svg";
const projectMgmt = "/images/promgmt.svg";
const sop = "/images/sop.svg";
const bibliography = "/images/bibliography.svg";
const corpprofWriting = "/images/corpprofWriting.svg";



const services = [
    { title: "Essay, Article & Blog Writing", description: "We provide well researched essays, academic articles, and informative blogs aligned with UK university assessment criteria, learning outcomes, and marking rubrics, ensuring clarity, logical structure, and strong academic arguments throughout.", icon: dissert },
    { title: "Report Writing Services", description: "Our reporting writing services are aimed at writing clear, analytical and professionally structured reports that include findings, critical analysis, and recommendations appropriate to academic, technical and business-related tasks in UK universities.", icon: course },
    { title: "Dissertation & Thesis Assistance", description: "We provide complete dissertation and thesis support, from topic selection and proposal development to writing, editing, and final submission, ensuring originality, academic depth, and strict adherence to UK university research standards.", icon: home },
    { title: "Professional CV & Cover Letter Writing", description: "Our experts create UK-formatted CVs and tailored cover letters that highlight your skills, qualifications, and achievements, enhancing employability and aligning with UK recruitment expectations and professional standards.", icon: essayHelp },
    { title: "Case Study Writing", description: "We produce in-depth academic case studies that analyse real-world scenarios, apply relevant theories, and present well-supported recommendations, meeting UK academic standards across business, law, healthcare, and management disciplines.", icon: caseStudies },
    { title: "Diploma Assignment Support", description: "Our diploma assignment support ensures well-structured, clearly written projects that meet institutional requirements, demonstrate subject understanding, and follow appropriate academic formatting and referencing guidelines.", icon: diplomaWork },
    { title: "Project Management Writing", description: "We assist with project management deliverables including business cases, proposals, feasibility studies, progress reports, and evaluations, ensuring alignment with project objectives and academic assessment criteria used in UK institutions.", icon: projectMgmt },
    { title: "Statement of Purpose (SOP) Writing", description: "Our SOP writing service helps craft persuasive, well-structured statements that clearly communicate your academic goals, achievements, and career aspirations, strengthening applications to UK universities and professional programmes.", icon: sop },
    { title: "Annotated Bibliography Services", description: "We prepare annotated bibliographies by evaluating scholarly sources, summarising key arguments, and assessing relevance and reliability, following UK-preferred referencing styles such as Harvard, APA, and Oxford.", icon: bibliography },
    { title: "Corporate Profile & Business Content Writing", description: "We develop professional corporate profiles and business content that effectively communicate organisational vision, services, and achievements, ensuring credibility, clarity, and suitability for academic, professional, or corporate use.", icon: corpprofWriting },
];

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-next`}
            style={{
                ...style,
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                // background: "#3498db",
                border: '1px solid gray',

                borderRadius: "50%",
                height: "40px",
                width: "40px",
                zIndex: 10,
                right: "10px",
                top: "-27px",
            }}
            onClick={onClick}
        />
    );
};


const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-prev`}
            style={{
                ...style,
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                // background: "#3498db",
                border: '1px solid gray',

                borderRadius: "50%",
                height: "40px",
                width: "40px",
                zIndex: 10,
                left: "10px",
                top: "-27px",
            }}
            onClick={onClick}
        />
    );
};

const UkPage = () => {
    const router = useRouter();


    const [currentIndex, setCurrentIndex] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        beforeChange: (_, next) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 425, // Mobile view
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 2550,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };

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


    return (
        <div className="min-h-screen">
            {/* Banner */}
            <div
                className="pt-6 pb-12 md:pt-8 md:pb-14 lg:pt-10 lg:pb-16 px-4 sm:px-6 lg:px-10 xl:px-16"
                style={{
                    backgroundImage: "url('/images/homePageOne.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <section className=" md:mb-[60px]">
                    <h1 className="text-gray-900 mt-[40px] md:mt-0 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-2 max-w-4xl">
                        Trusted Online Assignment Help in the UK
                    </h1>
                    <h2 className="text-gray-800 text-lg sm:text-xl md:text-3xl lg:text-[1.5rem] font-semibold leading-snug max-w-4xl text-gray-700">
                        Professional Assignment Writing Services in the UK by Qualified Subject Specialists
                    </h2>
                    </section>
                    <div
                        className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 xl:gap-12 mt-8 lg:mt-10 textandForm"
                        style={{ paddingBottom: "2rem" }}
                    >
                    <div className="mb-4 lg:flex-1 lg:max-w-[48%]">
                     
                        <p className="text-[20px] text-[#5C5C5C] mb-3">
                            AI-Free Academic Assignment Help in the UK by 7000+ Qualified Experts. We offer an online service of assignment help with professionalism in the UK, done by actual academic experts. All assignments are manually written, carefully researched and in accordance with the UK university marking criteria.
                        </p>
                        <p className="mb-10 text-[12px]">
                            <span className="font-bold text-[#000]">3.5M+</span> Assignments Delivered Worldwide · UK & International Student-Trusted Platform · Strict No-AI, No-Plagiarism Commitment · Rated 4.8/5 Across Leading Review Platforms
                        </p>


                        <div className="flex mt-4 gap-2 items-center">
                            <img src="/images/image 2.svg" className="-ms-2" alt="" />
                            <div className="w-px h-24 bg-[#8799DB] mx-1" />
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
                            <div className="w-px h-24 bg-[#8799DB] mx-1" />

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
                                    WhatsApp Academic Assistance Available
                                </h2>
                                <p className="text-[16px] font-medium text-[#454545]">
                                    Authenticate Only Through Our Official Channels: Email Support Available. Submit Your Assignment Requirements & Get Matched with a UK Subject Expert.
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
                        className="mb-4 w-full lg:flex-1 lg:max-w-[48%] rounded-2xl formsStyle bg-white border border-gray-200 shadow-lg"
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="p-5 sm:p-6 rounded-2xl">
                                <p className="text-center text-gray-700 mb-4 text-sm sm:text-base font-medium">
                                    Submit your requirements below and connect with a UK expert for tailored assignment support.
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
                                                            {/* {[
                                { code: "+91", label: "🇮🇳" },
                                { code: "+1", label: "🇺🇸" },
                                { code: "+44", label: "🇬🇧 Australia" },
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
                                    Submit Your Request
                                </button>
                            </div>

                            {/* Success/Error Message */}
                            {message && (
                                <p className="mt-2 text-center text-green-600">{message}</p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="flex flex-wrap justify-around w-full max-w-4xl mx-auto mt-10 mb-6 gap-6 sm:gap-8">
                    <img src="/images/iso.svg" alt="" className="h-12 w-auto object-contain" />
                    <div>
                        <img src="/images/tenP.svg" alt="" className="mx-auto" />
                        <p className="text-center text-[#38419A] font-medium" style={{ fontSize: '1.25rem' }}>Years of Experience</p>
                    </div>
                    <img src="/images/privacy.svg" alt="" className="h-12 w-auto object-contain" />
                </div>

                </div>
            </div>

            <div
                style={{
                    backgroundImage: "url('/images/Line 1.svg')", // Replace with your image path
                    backgroundSize: "cover", // Makes the background image cover the whole div
                    // backgroundPosition: "center", // Center-aligns the background image
                    backgroundRepeat: "no-repeat", // Prevents the background from repeating
                    // minHeight: "100vh",
                    zIndex: "-1",
                    // marginTop: "1.25rem",
                    // marginBottom: "3rem",
                }}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900 px-4">
                    How Our UK Online Assignment Help Process Works
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {[
                        { img: Div1, step: "Step 1", title: "Share Your Assignment Details", desc: "Submit your requirements through the inquiry form. Our academic consultants assess your needs promptly." },
                        { img: Div2, step: "Step 2", title: "Consult With a Subject-Specific Expert", desc: "A qualified expert reviews your task, learning outcomes, referencing style, and deadline to ensure academic accuracy." },
                        { img: Div3, step: "Step 3", title: "Secure & Flexible Payment", desc: "Proceed with encrypted payment options that are convenient for both UK and international students." },
                        { img: Div4, step: "Step 4", title: "Receive Your Completed Assignment", desc: "Get a 100% original, AI-free assignment delivered before your UK university deadline." },
                    ].map((item, i) => (
                        <div key={i} className="rounded-2xl p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                            <img src={item.img} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 object-cover" alt="" />
                            <span className="text-[#38419A] font-semibold text-sm mb-1">{item.step}</span>
                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button
                        type="button"
                        onClick={() => router.push("/contact-us")}
                        className="bg-[#38419A] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#2d3380] transition-colors"
                    >
                        Book Our Services
                    </button>
                </div>
            </div>

            <section className="px-4 sm:px-6 lg:px-16 py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50/50">
                <h2 className="text-center mb-4 myassignHelp px-4 max-w-4xl mx-auto">
                    Why UK Students Choose the Assignment Hub
                </h2>
                <p className="text-center mb-10 sm:mb-12 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Trusted Academic Support You Can Rely On. We are recognised as one of the UK&apos;s top-rated assignment writing services due to our academic integrity, reliability, and student-first approach.
                </p>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {[
                        { icon: "/images/quality.svg", label: "(a)", title: "AI-Free, Expert-Written Assignments", desc: "All assignments are written manually by competent subject experts with originality, deep academic research, and full adherence to the UK university guidelines and assessment criteria." },
                        { icon: "/images/ontime.svg", label: "(b)", title: "Guaranteed On-Time Delivery", desc: "We achieve deadlines on UK university assignments, including urgent ones, with high quality research, academic accuracy, and strict adherence to assignment requirements." },
                        { icon: "/images/policy.svg", label: "(c)", title: "Flexible Revision & Amendment Policy", desc: "Unlimited revisions allow refining and improving assignments according to your feedback, lecturer remarks, and university marking requirements, ensuring complete satisfaction." },
                        { icon: "/images/reliable.svg", label: "(d)", title: "UK-Experienced Academic Writers", desc: "Our academic writers are well informed on the UK curricula, rubrics on grading and institutional expectations, providing properly structured assignments." },
                        { icon: "/images/pocketF.svg", label: "(e)", title: "Affordable Assignment Help in the UK", desc: "Our academic support services are of high quality and affordable, so professional assignment support can be afforded by local and international students studying in the United Kingdom." },
                        { icon: "/images/available.svg", label: "(f)", title: "24/7 Academic Support", desc: "Our support team works 24/7 to support students in various time zones, keeping in touch and providing continuous educational support." },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#38419A]/20 transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#38419A]/5 flex items-center justify-center group-hover:bg-[#38419A]/10 transition-colors">
                                <img src={item.icon} alt="" className="w-10 h-10 object-contain" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-gray-900 mb-1.5 text-base">
                                    <span className="text-[#38419A]">{item.label}</span> {item.title}
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Subject-Focused Assignment Help Across the UK */}
            <section className="max-w-6xl mx-auto px-6 py-14">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900">Subject-Focused Assignment Help Across the UK</h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">We provide expert assignment help in line with UK curricula and university standards for:</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Business & Management Studies", "Law & Legal Studies (OSCOLA compliant)", "Nursing & Healthcare", "Engineering & Information Technology", "Finance, Accounting & Economics", "Marketing & Strategy", "Psychology & Sociology", "Education & Teaching", "Computer Science & Data Analytics"].map((subject, i) => (
                        <span key={i} className="px-4 py-2.5 rounded-full bg-[#38419A]/5 text-gray-800 text-sm font-medium border border-[#38419A]/10 hover:bg-[#38419A]/10 transition-colors">
                            {subject}
                        </span>
                    ))}
                </div>
            </section>

            {/* Academic Services We Provide */}
            <section className="bg-gray-50/80 py-14 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900">Academic Services We Provide</h2>
                    <p className="text-center text-gray-600 mb-10">All services comply with UK academic guidelines, ethics policies, and preferred citation styles.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {["Assignment & Coursework Writing", "Dissertation & Thesis Assistance", "Essays, Reports & Case Studies", "Research Proposals & Literature Reviews", "Presentations (PPT)", "Annotated Bibliographies", "Project Management Writing", "Statement of Purpose (SOP)", "CV & Cover Letter Writing (UK Format)"].map((service, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#38419A] text-white flex items-center justify-center text-sm font-bold">{i + 1}</span>
                                <span className="text-gray-800 font-medium">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Academic Assignment Support for All Levels */}
            <section className="max-w-6xl mx-auto px-6 py-14">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900">Academic Assignment Support for All Levels of Study in the UK</h2>
                <p className="text-center text-gray-600 mb-10">We support students of all levels of higher education in the UK (undergraduate coursework to doctoral research).</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "Undergraduate", title: "Undergraduate Assignment Help in the UK", desc: "We assist undergraduate students in the systematic process of writing academic papers that match learning outcomes, assessment briefs, and UK marking rubrics." },
                        { label: "Postgraduate", title: "Postgraduate & Master's Level", desc: "Our postgraduate services focus on critical analysis, advanced research, and academic writing, with adherence to master-level standards." },
                        { label: "Doctoral", title: "Doctoral & Research-Level Guidance", desc: "PhD and research students get scholarly assistance on research proposals, dissertations, literature reviews, methodology chapters, and data analysis." },
                    ].map((level, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <span className="inline-block px-3 py-1 rounded-full bg-[#38419A]/10 text-[#38419A] text-sm font-semibold mb-3">{level.label}</span>
                            <h3 className="font-bold text-gray-900 mb-2">{level.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{level.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-600 mt-8 text-sm">Every work follows UK university guidelines, institutional ethics, and preferred referencing styles like Harvard, APA, Oxford, MLA and Chicago.</p>
            </section>

            {/* What Makes Our Service Different / How We Help */}
            <section className="bg-gray-50/80 py-14 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">Why Choose Our UK Assignment Help</h2>
                    <div className="space-y-6">
                        {[
                            { title: "What Makes Our Service Different from Others", desc: "Our UK assignment help service is unique because it is built on UK university academic systems. We operate on UK academic guidelines, rubrics, and assessment briefs used in London, Oxford, Manchester, Birmingham, Leeds, and other leading cities. Every assignment is handled by a subject-expert writer with specialised qualifications, enabling accurate theoretical application and critical analysis. We provide low-cost, high-quality support with clear plagiarism checking, limitless revision, and compliance with Harvard, APA, MLA, and Oxford referencing." },
                            { title: "How We Help You Get Better Grades", desc: "Our writers study the assignment brief and marking scheme so every part targets learning outcomes. Arguments are logical, backed by peer-reviewed materials, and in proper academic language. We apply Harvard, APA, MLA or Oxford referencing accurately to avoid citation errors. Well-structured, well-referenced work helps you avoid penalties and achieve better lecturer feedback and grades." },
                            { title: "How We Help You Do Your Homework Effortlessly", desc: "We analyse the assignment brief, learning outcomes and marking rubric first, then research using credible UK-relevant sources. Writing follows logical organisation, introduction, critical discussion, evidence-based arguments, and conclusion as required by UK universities. You can focus on the subject while we handle structure and formatting." },
                            { title: "Students from Top UK Universities Take Help from Us", desc: "Students at top institutions such as University of Oxford, University of Cambridge, UCL, University of Manchester and King's College London use our service. We tailor work to each university's marking rubric and module learning outcomes, ensuring plagiarism-free, institutionally-congruent work." },
                            { title: "How We Help You Meet Tough Deadlines", desc: "We focus on time management from the moment you submit your brief. Subject-specific experts balance detailed research and effective writing. For urgent tasks we follow a systematic procedure so you receive work on time—often ahead of deadline—giving you time to proofread or request revisions." },
                            { title: "Why Online Assignment Help Is Convenient for UK Students", desc: "Students in London, Manchester, Birmingham, Leeds or studying remotely get 24/7 access to expert support. Our online service ensures work complies with UK academic standards and referencing. Quick turnaround, qualified writers and clear revision policies help you meet deadlines and perform well without unnecessary stress." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#38419A] text-white flex items-center justify-center font-bold text-sm">{i + 1}</span>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Affordable Assignment Help */}
            <section className="max-w-6xl mx-auto px-6 py-14">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">Affordable Assignment Help in the UK</h2>
                <p className="text-center text-gray-600 mb-8">Trusted by 10,000+ Students Worldwide — High-quality academic assistance without financial pressure.</p>
                <p className="text-center font-medium text-gray-800 mb-4">Subjects We Cover:</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Law Assignment Writing", "Science Assignment Writing", "Nursing Assignment Writing", "Engineering & Technical Assignments", "Construction Assignment Writing", "Management & Human Resource Assignments", "Finance & Statistics Assignments", "Psychology Assignments", "Calculus Assignments"].map((subject, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium hover:bg-[#38419A]/10 hover:text-[#38419A] transition-colors">
                            {subject}
                        </span>
                    ))}
                </div>
            </section>

            {/* Student Reviews */}
            <section className="bg-gray-50/80 py-14 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900">Student Reviews: UK Assignment Help Experience</h2>
                    <p className="text-center text-gray-600 mb-10">What students say about our UK assignment help service</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: "Sophia R.", role: "Psychology Student", quote: "Outstanding research quality and strong academic depth. The thesis was well-structured, critically analysed, and fully aligned with UK university assessment expectations." },
                            { name: "Daniel K.", role: "Engineering Student", quote: "The technical report was clear, concise, and professionally written. It was delivered before the deadline and met all UK academic and formatting requirements." },
                            { name: "Olivia M.", role: "Business Student", quote: "The case study demonstrated excellent strategic insight and practical analysis. My professor appreciated the structure, arguments, and strong academic relevance throughout." },
                            { name: "Heeral P.", role: "Business Student", quote: "The dissertation was highly structured, well-researched, and academically sound. The logical flow and referencing quality met UK postgraduate standards perfectly." },
                            { name: "Liam H.", role: "Human Resources Student", quote: "The essay presented strong arguments, credible sources, and accurate UK formatting. It reflected deep subject understanding and clear academic writing.", wide: true },
                        ].map((r, i) => (
                            <div key={i} className={`p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${r.wide ? "md:col-span-2" : ""}`}>
                                <div className="flex items-center gap-1 text-amber-500 mb-3">{"★".repeat(5)}</div>
                                <p className="text-gray-700 italic mb-4">&quot;{r.quote}&quot;</p>
                                <p className="font-semibold text-gray-900">{r.name}</p>
                                <p className="text-sm text-gray-500">{r.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-4xl mx-auto px-6 py-14">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900">Frequently Asked Questions: Assignment Help in the UK</h2>
                <p className="text-center text-gray-600 mb-10">Quick answers to common questions</p>
                <div className="space-y-4">
                    {[
                        { q: "Is your assignment help service suitable for UK university standards?", a: "Yes. Our assignment help services adhere to UK university guidelines, assessment criteria, and marking rubrics. We apply recognised referencing such as Harvard, APA and OSCOLA for full academic adherence and quality." },
                        { q: "Can international students studying in the UK use your services?", a: "Absolutely. We assist both UK-based and international students with low-cost assistance, writing according to UK-based requirements, learning outcomes, and institutional requirements so all students receive equal academic support." },
                        { q: "What subjects do you cover for assignment help in the UK?", a: "We specialise in business and management, law, nursing, engineering, IT, finance, psychology, education, computer science and most other academic courses offered by UK universities." },
                        { q: "Do you provide plagiarism-free assignment writing in the UK?", a: "Yes. Every assignment is composed by qualified academic professionals. All papers are verified as original and free of plagiarism with appropriate citations and references in line with UK academic integrity policies." },
                        { q: "How quickly can I receive my assignment?", a: "We offer flexible delivery according to your deadline, including urgent and short-notice delivery, while ensuring well-researched, academically accurate work that meets UK quality standards." },
                        { q: "Are revisions included in your assignment services?", a: "Yes. We offer free revisions so you get the end product to your satisfaction, lecturer feedback, and university marking standards without affecting the quality or originality of the work." },
                        { q: "Is my personal and academic information kept confidential?", a: "Absolutely. Your data is stored in secure systems with strict privacy measures to ensure confidentiality and safety throughout the assignment help process." },
                        { q: "How do I place an order for assignment help in the UK?", a: "Enter your assignment details in our online enquiry form. Our academic support team will then connect you with a qualified subject expert to start the process as soon as possible." },
                    ].map((faq, i) => (
                        <div key={i} className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">{i + 1}. {faq.q}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-[#38419A] text-white py-16 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Professional Assignment Assistance Online in UK Today</h2>
                <p className="max-w-2xl mx-auto mb-8 text-white/90 text-lg">Don&apos;t let academic pressure affect your grades or mental well-being. Choose The Assignment Hub for trusted assignment help in the United Kingdom.</p>
                <button
                    type="button"
                    onClick={() => router.push("/contact-us")}
                    className="bg-white text-[#38419A] font-semibold px-10 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                >
                    Get Started
                </button>
            </section>

            <div className="relative bg-blue-100"
                style={{
                    clipPath: "polygon(0% 0%, 100% 13%, 100% 100%, 0% 100%)",
                    padding: '6rem 1.5rem 4rem 1.5rem',
                    zIndex: '1'

                }}
            >
                <img src="/images/Blend Group 3.svg" style={{
                    position: 'absolute',
                    right: '0',
                    top: '-2rem',
                    zIndex: '1'
                }} alt="" />
                <h2 className="text-2xl font-bold text-center mb-4 highQualText mt-10 px-16"
                // style={{
                //   fontSize:'48px',
                //   fontWeight:600,
                //   lineHeight:'57px'
                // }}
                >
                    Subject-Focused Assignment Help Available Across the UK
                </h2>
                <p className="text-center mb-14">
                    Our expert assignment help in the UK covers a broad spectrum of academic fields. Students are guided by professionals who are aware of UK university requirements. All services comply with UK academic guidelines, ethics policies, and preferred citation styles.
                </p>

                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className="p-4" style={{
                            // height:'maxContent',
                            height: '316px'
                        }}>
                            <div
                                className={`bg-white shadow-md rounded-lg p-6 text-center transition-all duration-300 ${index === currentIndex + 1 ? "transform scale-110 z-10" : "opacity-80"
                                    }`}
                                style={{
                                    minHeight: '316px'
                                }}
                            >
                                <img className="text-4xl mb-4" src={service?.icon} alt="" />
                                <h3 className="text-start font-semibold text-lg mb-2">{service.title}</h3>
                                <p className="text-start text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}


export default UkPage
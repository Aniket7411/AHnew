"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneCode from "../../utils/phoneCode";
import emailjs from "@emailjs/browser";
import Slider from "react-slick";

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
    {
        title: "Essay/Article/Blog Writing",
        description:
            "We produce custom academic papers and general informative pieces that are informative and academic while still being audience-friendly.",
        icon: dissert,
    },
    {
        title: "Report Writing",
        description:
            "Our reports are well-written, focused, and organized to produce findings, analysis, and recommendations for business, technical, or academic use.",
        icon: course,
    },
    {
        title: "Dissertation/Thesis Writing",
        description:
            "This service covers all dissertation and thesis needs, from idea generation to writing and editing the document to meet academic specifications for the delivery of original research.",
        icon: home,
    },
    {
        title: "CV Writing",
        description:
            "We provide you with well-developed, professional CVs and accompanying cover letters that will catch the attention of your potential employer.",
        icon: essayHelp,
    },
    {
        title: "Case Studies Writing",
        description:
            "We produce detailed case compositions that examine typical issues, relating them to actual life scenarios, and provide recommendations for their solution which are applied in scholastic, commercial, or career-related contexts.",
        icon: caseStudies,
    },
    {
        title: "Diploma Work",
        description:
            "We help students to make their diploma projects clear, structured, and backed by cited sources where necessary to meet the academic standard of presentation.",
        icon: diplomaWork,
    },
    {
        title: "Project Management Writing",
        description:
            "Consulting on textual PM deliverables, such as business cases, proposals, project and program status reports, and project/project suite assessments and evaluations, in terms of purpose and content.",
        icon: projectMgmt,
    },
    {
        title: "SOP (Statement of Purpose) Writing",
        description:
            "Our team assists in producing good SOPs that will emphasize your motivations, and achievements as well as your aspirations that will make your university or job application strong.",
        icon: sop,
    },
    {
        title: "Annotated Bibliography Writing",
        description:
            "We help with the preparation of annotated bibliographies, that involve presenting sources alongside brief analyses of their usability and reliability in a given academic context.",
        icon: bibliography,
    },
    {
        title: "Corporate Profile Writing",
        description:
            "We come up with professional corporate profiles that relay the image of a company to the public and this includes the scope of service delivery as well as its accomplishment in the supposed market.",
        icon: corpprofWriting,
    },

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

const AutrailiaPage = () => {
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
                <h2
                    className="text-[#000] text-[3.5rem] px-16 weprovide lg:w-[85%] mb-2"
                    style={{
                        fontWeight: 600,
                        lineHeight: "50px",
                    }}
                >
                    We Provide Online Assignment Help-
                </h2>
                <h1
                    style={{
                        fontWeight: 600,
                        lineHeight: "60px",
                    }}
                    className="px-16 text-[3.5rem] pliagFreeText"
                >
                    AI & Plagiarism Free in Australia
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
                            Expert Assignments Writing Service in Australia with AI-free Commitment

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
                                    AI-Free Assignment Help From 7000+ Real Experts in Australia
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
                <h2
                    className="text-center secTwoHeading mb-8 px-16
        "
                // style={{
                //     fontSize:'48px',
                //     fontWeight:600,
                //     lineHeight:'57px',
                //     paddingTop:'4rem'
                // }}
                >
                    How We operate: Our Online Assignment Help Service Workflow in Australia
                </h2>
                <div className="flex justify-center gap-2 align-center flex-wrap px-6">
                    <div
                        className="rounded-xl flex p-4 flex-col items-center largerScreen"
                        style={{
                            outline: "1px solid #DCDCDC",
                            padding: "46px 24px",
                            backgroundColor: "#fff",
                        }}
                    >
                        <img
                            src={Div1}
                            className="w-[120px] h-[120px] rounded-full mb-2"
                            alt="process"
                        />

                        <h2 className="font-bold mb-2">Submit Your Inquiry</h2>
                        <p className="text-center">
                            Fill in the inquiry form with the required details and our expert
                            will connect immediately.
                        </p>
                    </div>

                    <div
                        className="rounded-xl flex p-4  flex-col items-center largerScreen"
                        style={{
                            outline: "1px solid #DCDCDC",
                            padding: "46px 24px",
                            backgroundColor: "#fff",
                        }}
                    >
                        <img
                            src={Div2}
                            className="w-[120px] h-[120px] rounded-full mb-2"
                            alt="process"
                        />

                        <h2 className="font-bold mb-2">Connect with Our Experts </h2>
                        <p className="text-center">
                            Our expert will further discuss and understand requirements,
                            assist in the process and clarify all the necessary details.
                        </p>
                    </div>

                    <div
                        className="rounded-xl flex p-4  flex-col items-center largerScreen"
                        style={{
                            outline: "1px solid #DCDCDC",
                            padding: "46px 24px",
                            backgroundColor: "#fff",
                        }}
                    >
                        <img
                            src={Div3}
                            className="w-[120px] h-[120px] rounded-full mb-2"
                            alt="process"
                        />

                        <h2 className="font-bold mb-2">Proceed with Payment</h2>
                        <p className="text-center">
                            Make secured payments through different payment methods at your
                            convenience.
                        </p>
                    </div>

                    <div
                        className="rounded-xl flex p-4  flex-col items-center largerScreen"
                        style={{
                            outline: "1px solid #DCDCDC",
                            padding: "46px 24px",
                            backgroundColor: "#fff",
                        }}
                    >
                        <img
                            src={Div4}
                            className="w-[120px] h-[120px] rounded-full mb-2"
                            alt="process"
                        />

                        <h2 className="font-bold mb-2">Get Your Solution</h2>
                        <p className="text-center">
                            Get your perfect solution delivered meeting your needs before the
                            deadline.
                        </p>
                    </div>
                </div>
                <div className="my-16 text-center">
                    <button
                        // type="submit"
                        className="w-auto text-[#fff] px-2 rounded-md bg-[#38419A]"
                        style={{
                            width: "200px",
                            padding: "8px",
                        }}
                        onClick={() => router.push('/contact-us')}
                    >
                        Book Our Services
                    </button>
                </div>
                {/* <div className="text-center">
            <button className="text-[#fff]">

            Book Our Services
            </button>
        </div> */}
            </div>

            <>
                <h2 className="text-center mb-4 myassignHelp px-16">
                    The Assignment Hub : Reasons to Choose our Assignment Assistance
                </h2>
                <p
                    className="text-center mb-4"
                    style={{
                        fontSize: "18px",
                        fontWeight: 400,
                        lineHeight: "27px",
                    }}
                >
                    Discover why we’re the top choice for professional Assignment writing assistance.
                </p>
                <div className="outer-container outerCont">
                    <div className="grid-container">
                        {/* Row 1 */}
                        <div className="grid-item flex justify-evenly gap-4">
                            <img
                                src="/images/quality.svg"
                                alt=""
                                style={{
                                    height: "76px",
                                    width: "76px",
                                }}
                            />
                            <div className="text-start">
                                <p className="font-bold">AI-Free, Expert Writing</p>
                                <p
                                    className="font-thin "
                                    style={{
                                        color: "#8A8A8A",
                                    }}
                                >
                                    With 100% originality and no AI guarantee, our work ensures plagiarism-free and high-quality solutions.
                                </p>
                            </div>
                        </div>
                        <div className="grid-item flex justify-evenly gap-4">
                            <img
                                src="/images/ontime.svg"
                                alt=""
                                style={{
                                    height: "76px",
                                    width: "76px",
                                }}
                            />
                            <div className="text-start">
                                <p className="font-bold">On-Time Delivery</p>
                                <p
                                    className="font-thin "
                                    style={{
                                        color: "#8A8A8A",
                                    }}
                                >
                                    We are committed to the best quality assignment delivery on time matching your requirements.
                                </p>
                            </div>
                        </div>
                        <div className="grid-item flex justify-evenly gap-4">
                            <img
                                src="/images/policy.svg"
                                alt=""
                                style={{
                                    height: "76px",
                                    width: "76px",
                                }}
                            />
                            <div className="text-start">
                                <p className="font-bold">Flexible Policies</p>
                                <p
                                    className="font-thin "
                                    style={{
                                        color: "#8A8A8A",
                                    }}
                                >
                                    We founded our services on customer-friendly policies for changes and amendments as per your needs.
                                </p>
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className="grid-item flex justify-evenly gap-4">
                            <img
                                src="/images/reliable.svg"
                                alt=""
                                style={{
                                    height: "76px",
                                    width: "76px",
                                }}
                            />
                            <div className="text-start">
                                <p className="font-bold">Expert Writers</p>
                                <p
                                    className="font-thin "
                                    style={{
                                        color: "#8A8A8A",
                                    }}
                                >
                                    A team of expert writers with qualified experiences in various academic domains is here to guide you.
                                </p>
                            </div>
                        </div>
                        <div className="grid-item flex justify-evenly gap-4">
                            <img
                                src="/images/pocketF.svg"
                                alt=""
                                style={{
                                    height: "76px",
                                    width: "76px",
                                }}
                            />
                            <div className="text-start">
                                <p className="font-bold">Affordable Prices</p>
                                <p
                                    className="font-thin "
                                    style={{
                                        color: "#8A8A8A",
                                    }}
                                >
                                    We are committed to delivering equal opportunity to every student to get solutions at the minimum price possible.
                                </p>
                            </div>
                        </div>
                        <div className="grid-item flex justify-evenly gap-4">
                            <img
                                src="/images/available.svg"
                                alt=""
                                style={{
                                    height: "76px",
                                    width: "76px",
                                }}
                            />
                            <div className="text-start">
                                <p className="font-bold">24/7 Availability</p>
                                <p
                                    className="font-thin "
                                    style={{
                                        color: "#8A8A8A",
                                    }}
                                >
                                    Our 24/7 customer support is always online to help you with anything you need help with and answer all your queries

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>

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
                    Exceptional Assignment Support Help for all forms of Assignments
                </h2>
                <p className="text-center mb-14">
                    Get excellent writing help from reputed assignment writers Globally
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


export default AutrailiaPage
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
    { title: "Essays & Academic Research Writing", description: "Our essays and research papers are well organized, contain logical arguments, evidence-based analysis and they are properly referenced, which are in full compliance with New Zealand university assessment criteria and learning outcomes.", icon: dissert },
    { title: "Academic & Professional Report Writing", description: "Our reports are analytical, professional formatted, understandable, and appropriate to business, engineering, healthcare and policy-based evaluation, which is in line with expectations of academic standards of New Zealand.", icon: course },
    { title: "Dissertation & Thesis Assistance", description: "We offer full support of dissertation and thesis (selection of topic, submission, etc.) in such a way that it is guaranteed to be original, has a high level of research, accuracy of methods used and that it is fully in accordance with New Zealand academic research requirements.", icon: home },
    { title: "CV & Cover Letter Writing (New Zealand Format)", description: "New Zealand recruitment and academic-specific CVs and cover letters with skills, achievements, and experience emphasis to serve as an increasing factor in employability and application success.", icon: essayHelp },
    { title: "Case Study Writing", description: "We use pertinent theories, systematic analysis, and evidence-based recommendations to achieve mature academic cases, which show that we have critically evaluated and that our recommendations are practical in relation to New Zealand assessment standards.", icon: caseStudies },
    { title: "College Assignment Help in New Zealand", description: "Our college level assignment support provides quality work in an easily readable, well-structured format that is in line with the institutional and learning requirements as well as standards of writing that is applied by colleges and institutes in New Zealand.", icon: diplomaWork },
    { title: "Project Management Writing", description: "We provide project proposals, feasibility studies, evaluations, schedules and academic documentation and make sure that these are in line with project objectives, assessment requirements and professional standards applied in New Zealand institutions.", icon: projectMgmt },
    { title: "Statement of Purpose (SOP) Writing", description: "We make persuasive SOPs with emphasis on academic objectives, motivation, accomplishments and career plans that reinforce applications to New Zealand universities and other institutions of higher education.", icon: sop },
    { title: "Annotated Bibliographies", description: "Annotated bibliographies are created by us by critically reviewing academic sources, summarising major arguments, and determining relevance and credibility using established academic referencing formats.", icon: bibliography },
    { title: "Corporate & Academic Business Content", description: "Our business profiles and academic business materials are professionally written, fit university assessments and professional use, are clear, credible and reflect organisational and academic standards.", icon: corpprofWriting },
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

const NewZealand = () => {
    const router = useRouter();

    const [currentIndex, setCurrentIndex] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        beforeChange: (_, next) => setCurrentIndex(next),
        responsive: [
            {
                breakpoint: 425,
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
            {/* Hero Section */}
            <div
    className="py-6 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 xl:px-16"
    style={{
        backgroundImage: "url('/images/homePageOne.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}
>
    {/* Hero Title Section */}
    <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-8 lg:mb-10">
            <h1
                className="text-[#000] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-3 md:mb-4"
                style={{
                    lineHeight: "1.2",
                }}
            >
                Trusted Assignment Help in New Zealand
            </h1>
            <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] text-gray-800 font-semibold"
                style={{
                    lineHeight: "1.3",
                }}
            >
                100% Human-Written, Plagiarism-Free, Subject-Expert Support. Aligned with New Zealand academic guidelines, marking rubrics, and referencing standards.
            </h2>
        </div>

        {/* Content and Form Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10">
            {/* Left Content Section */}
            <div className="lg:w-[48%] space-y-6">
                {/* Description */}
                <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                        Get Assignment Help Today. Submit your requirements securely and receive expert academic assistance. Call / WhatsApp Support Available · Verified Email Communication · Secure Online Enquiry Form.
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Trusted by students across Auckland, Wellington, Christchurch, Hamilton, Dunedin & Palmerston North · Writers trained in New Zealand university assessment models · APA, Harvard, MLA, Chicago & IEEE compliant work · Rated 4.8/5 · <span className="font-bold text-[#000]">3.5M+</span> assignments delivered worldwide.
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-4">
                    <img 
                        src="/images/image 2.svg" 
                        className="w-16 h-16 sm:w-20 sm:h-20" 
                        alt="Badge" 
                    />
                    <div className="hidden sm:block w-px h-20 bg-[#8799DB]"></div>
                    
                    {/* SiteJabber Rating */}
                    <div 
                        className="cursor-pointer p-3 sm:p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        onClick={() => window.open("https://www.sitejabber.com/reviews/theassignmenthub.com", "_blank")}
                    >
                        <div className="flex flex-col items-center">
                            <img 
                                src={siteJabber} 
                                className="w-24 sm:w-28 h-auto mb-2" 
                                alt="SiteJabber" 
                            />
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[1, 2, 3, 4].map((star) => (
                                        <img 
                                            key={star} 
                                            src={star} 
                                            className="w-4 h-4 sm:w-5 sm:h-5" 
                                            alt="star" 
                                        />
                                    ))}
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 overflow-hidden">
                                        <img 
                                            src={star} 
                                            className="w-full h-full" 
                                            style={{ clipPath: "inset(0 25% 0 0)" }}
                                            alt="half star" 
                                        />
                                    </div>
                                </div>
                                <span className="font-bold text-[#FCBC40] text-sm sm:text-base">
                                    4.8
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block w-px h-20 bg-[#8799DB]"></div>

                    {/* TrustPilot Rating */}
                    <div 
                        className="cursor-pointer p-3 sm:p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        onClick={() => window.open("https://www.trustpilot.com/search?query=The+Assignment+Hub", "_blank")}
                    >
                        <div className="flex flex-col items-center">
                            <img 
                                src={trustPilot} 
                                className="w-24 sm:w-28 h-auto mb-2" 
                                alt="TrustPilot" 
                            />
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[1, 2, 3, 4].map((star) => (
                                        <img 
                                            key={star} 
                                            src={star} 
                                            className="w-4 h-4 sm:w-5 sm:h-5" 
                                            alt="star" 
                                        />
                                    ))}
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 overflow-hidden">
                                        <img 
                                            src={star} 
                                            className="w-full h-full" 
                                            style={{ clipPath: "inset(0 25% 0 0)" }}
                                            alt="half star" 
                                        />
                                    </div>
                                </div>
                                <span className="font-bold text-[#FCBC40] text-sm sm:text-base">
                                    4.8
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Handles */}
                <div className="flex items-center gap-4 sm:gap-6 py-2">
                    {[
                        { href: "https://www.facebook.com/theassignmenthub/", src: "/images/facebook.svg", alt: "Facebook" },
                        { href: "https://api.whatsapp.com/send/?phone=919352555548&text&type=phone_number&app_absent=0", src: "/images/whatsapp.svg", alt: "WhatsApp" },
                        { href: "https://www.instagram.com/the_assignment_hub/", src: "/images/insta.svg", alt: "Instagram" },
                        { href: "https://www.linkedin.com/company/assignment-hub-research-pvt-ltd/", src: "/images/linkedin.svg", alt: "LinkedIn" },
                    ].map((social, index) => (
                        <a
                            key={index}
                            target="_blank"
                            href={social.href}
                            rel="noreferrer"
                            className="p-2 sm:p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
                        >
                            <img
                                src={social.src}
                                className="w-6 h-6 sm:w-8 sm:h-8"
                                alt={social.alt}
                            />
                        </a>
                    ))}
                </div>

                {/* Fraud Warning */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-4 sm:p-6 shadow-sm border border-red-100">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <img 
                            src={hacker} 
                            className="w-16 h-16 sm:w-20 sm:h-20 hidden sm:block" 
                            alt="Security" 
                        />
                        <div className="flex-1">
                            <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-2">
                                Beware From Frauds
                            </h2>
                            <p className="text-gray-700 mb-3">
                                Authenticate with our official channels:
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                                <div className="flex items-center gap-2">
                                    <img 
                                        src={whats} 
                                        className="w-6 h-6" 
                                        alt="WhatsApp" 
                                    />
                                    <span className="text-gray-800 font-medium">+91-9352555548</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img 
                                        src={mail} 
                                        className="w-6 h-6" 
                                        alt="Email" 
                                    />
                                    <span className="text-gray-800 font-medium">contact@theassignmenthub.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Form Section */}
            <div className="lg:w-[52%]">
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Form Header */}
                        <p className="text-center text-gray-800 text-base sm:text-lg font-medium leading-relaxed">
                            Request Online Assignment Help in New Zealand — Submit your academic requirements through our secure enquiry platform.
                        </p>

                        {/* Options Selection */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {options.map((option) => (
                                <button
                                    type="button"
                                    key={option}
                                    onClick={() => setFormData({ ...formData, selectedOption: option })}
                                    className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition-all duration-200 ${formData.selectedOption === option
                                        ? "bg-[#D6F6FF] border-blue-500 shadow-sm"
                                        : "border-gray-300 hover:border-blue-300 hover:bg-blue-50"
                                        }`}
                                >
                                    {formData.selectedOption === option ? (
                                        <img src={taskFilled} className="w-5 h-5" alt="selected" />
                                    ) : (
                                        <img src={task} className="w-5 h-5" alt="unselected" />
                                    )}
                                    <span className="text-xs sm:text-sm text-center">{option}</span>
                                </button>
                            ))}
                        </div>

                        {/* Form Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "name", type: "text", placeholder: "Full Name" },
                                { name: "email", type: "email", placeholder: "Email Address" },
                                { name: "university", type: "text", placeholder: "University/College" },
                                { name: "course", type: "text", placeholder: "Course & Subject" },
                                { name: "deadline", type: "date", placeholder: "Assignment Deadline" },
                            ].map((field) => (
                                <div key={field.name} className="relative">
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
                                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder={field.placeholder}
                                    />
                                    {errors[field.name] && (
                                        <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
                                    )}
                                </div>
                            ))}

                            {/* Phone Number Field */}
                            <div className="sm:col-span-2">
                                <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                                    <select
                                        value={formData.countryCode}
                                        onChange={(e) =>
                                            setFormData({ ...formData, countryCode: e.target.value })
                                        }
                                        className="bg-gray-100 text-gray-800 p-3 sm:p-4 outline-none w-32"
                                    >
                                        {PhoneCode.map((country) => (
                                            <option key={country.code} value={country.code}>
                                                {country.label} {country.code}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        maxLength={10}
                                        inputMode="numeric"
                                        placeholder="WhatsApp Number"
                                        value={formData.number}
                                        onChange={(e) => {
                                            const onlyDigits = e.target.value.replace(/\D/g, "");
                                            if (onlyDigits.length <= 10) {
                                                setFormData({ ...formData, number: onlyDigits });
                                            }
                                        }}
                                        className="flex-1 p-3 sm:p-4 outline-none"
                                    />
                                </div>
                                {errors.number && (
                                    <p className="text-red-500 text-xs mt-1">{errors.number}</p>
                                )}
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={formData.termsAccepted}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        termsAccepted: e.target.checked,
                                    })
                                }
                                className="mt-1 mr-3 w-5 h-5 cursor-pointer"
                            />
                            <label htmlFor="terms" className="text-gray-700 text-sm sm:text-base">
                                I accept the{" "}
                                <span className="text-[#4890A2] font-medium cursor-pointer hover:underline">
                                    Terms & Conditions
                                </span>
                                , agree to receive offers & updates
                            </label>
                        </div>
                        {errors.termsAccepted && (
                            <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
                        )}

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-[#38419A] text-white font-medium rounded-lg hover:bg-[#2D3585] transition duration-300 shadow-md hover:shadow-lg"
                            >
                                Submit Your Request
                            </button>
                        </div>

                        {/* Success Message */}
                        {message && (
                            <div className={`text-center p-3 rounded-lg ${message.includes("successfully") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                                {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 sm:mt-12 md:mt-16">
            <div className="flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-8">
                <div className="text-center">
                    <img 
                        src="/images/iso.svg" 
                        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2" 
                        alt="ISO Certified" 
                    />
                    <p className="text-xs sm:text-sm text-gray-600">ISO Certified</p>
                </div>
                
                <div className="text-center">
                    <img 
                        src="/images/tenP.svg" 
                        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2" 
                        alt="10+ Years" 
                    />
                    <p className="text-2xl sm:text-3xl font-bold text-[#38419A]">10+ Years</p>
                    <p className="text-sm sm:text-base text-gray-600">of Experience</p>
                </div>
                
                <div className="text-center">
                    <img 
                        src="/images/privacy.svg" 
                        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2" 
                        alt="Privacy Protected" 
                    />
                    <p className="text-xs sm:text-sm text-gray-600">Privacy Protected</p>
                </div>
            </div>
        </div>
    </div>
</div>

            {/* Process Section */}
            <div
                style={{
                    backgroundImage: "url('/images/Line 1.svg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    zIndex: "-1",
                }}
            >
                <h2 className="text-center secTwoHeading mb-8 px-16">
                    How Our Assignment Help Process Works in New Zealand
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
                        <h2 className="font-bold mb-2">Step 1: Submit Assignment Details</h2>
                        <p className="text-center">
                            Share your assignment brief, marking rubric, learning objectives, word count, and deadline through our enquiry form.
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
                        <h2 className="font-bold mb-2">Step 2: Expert Review & Allocation</h2>
                        <p className="text-center">
                            A subject-specific expert reviews your requirements, referencing style, and assessment criteria used by New Zealand institutions.
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
                        <h2 className="font-bold mb-2">Step 3: Secure Payment Process</h2>
                        <p className="text-center">
                            We offer encrypted and flexible payment options suitable for both domestic and international students.
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
                        <h2 className="font-bold mb-2">Step 4: Receive Original Academic Work</h2>
                        <p className="text-center">
                            Your 100% original assignment is delivered before the deadline, ready for submission.
                        </p>
                    </div>
                </div>
                <div className="my-16 text-center">
                    <button
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

                {/* NEW CONTENT ADDED HERE - Commitment to Academic Integrity */}
                <div className="px-16 py-12 bg-gray-50">
                    <h2 className="text-center text-3xl font-bold mb-8">
                        Commitment to Academic Integrity and Quality
                    </h2>
                    <p className="text-center text-lg mb-12 max-w-4xl mx-auto">
                        We are recognised among the best assignment writing services in New Zealand due to our ethical practices and consistent academic standards.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-[#38419A]">(a) Human-Written, Expert-Prepared Assignments</h3>
                            <p className="text-gray-600">
                                Each and every assignment is handwritten by competent subject experts, which means there is ultimate originality, excellent critical writing, sound academic reference and complete adherence to university assessment standards in New Zealand.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-[#38419A]">(b) Guaranteed On-Time Delivery</h3>
                            <p className="text-gray-600">
                                We are very punctual in meeting our assignment deadlines, with urgent submissions, and high standards of research quality, academic accuracy, and adherence to the New Zealand institutional marking expectations.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-[#38419A]">(c) Free Revisions & Amendments</h3>
                            <p className="text-gray-600">
                                There is an option of unlimited free revisions to build lecturer comments, assessment clarifications, or revised instructions and be sure that the final submission is one that meets all the academic requirements.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-[#38419A]">(d) Writers Familiar with New Zealand Education System</h3>
                            <p className="text-gray-600">
                                Our writers are familiar with New Zealand assessment format, grading rubrics, academic writing conventions and institutional requirements applied in universities and institutions of technology.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-[#38419A]">(e) Affordable Assignment Help for International Students</h3>
                            <p className="text-gray-600">
                                We provide affordable academic services and therefore offer quality and professional assistance in assignments to both national and international students who are in New Zealand learning.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-[#38419A]">(f) 24/7 Academic Support</h3>
                            <p className="text-gray-600">
                                Our professional academic support unit is 24/7 and is available to support students in New Zealand and overseas in real time and provide guidance, updates and continual help.
                            </p>
                        </div>
                    </div>
                </div>

                {/* NEW CONTENT - Blog Section */}
                <div className="px-16 py-12">
                    <h2 className="text-center text-3xl font-bold mb-8">
                        Blogs Section
                    </h2>

                    <div className="space-y-12">
                        {/* Blog 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-[#38419A]">1. What Makes Our Service Different from Others?</h3>
                            <div className="space-y-4">
                                <p>
                                    The most significant difference between our assignment help service and the rest of the services is that our service has a great New Zealand academic orientation. Most of the online providers work with generic templates that lack specificity to the expectations of universities in New Zealand. On the contrary, we have modeled our academic support on the basis of local marking rubrics, learning outcomes, and institutional assessment frameworks employed throughout the New Zealand higher education.
                                </p>
                                <p>
                                    We do not have generalists among our writers. Every assignment will be done by a subject expert academic scholar who will be aware of how the New Zealand universities evaluate critical thinking, development of argument, reflect framing and academic honesty. All briefs are thoroughly scrutinized before writing is commenced and the structure, tone and analysis depth are checked to the standards of the New Zealand academics.
                                </p>
                                <p>
                                    Our other major distinction relates to our ethical academic support. Assignments are not prepared with the help of AI tools or content generators, but they are fully written by humans. We have clear plagiarism detection, proper in-text citation and reference listing in APA, Harvard, MLA, Chicago or IEEE as per the institution standards. This openness makes the students assured in handing in their work.
                                </p>
                                <p>
                                    The quality is matched with affordability. We are fully aware of the financial strain both domestic and international students undergo in the likes of Auckland, Wellington and Christchurch and this is the reason why our pricing is straightforward and transparent, without hiding any charge. It has free revisions where revision is provided to meet lecturer feedback or revision instructions so that the final submission is in full compliance with marking requirements.
                                </p>
                                <p>
                                    Our assignment help enables us to provide true assistance through local academic expertise, ethical principles, and student-centred flexibility, which contributes to learning and academic achievement in New Zealand.
                                </p>
                            </div>
                        </div>

                        {/* Blog 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-[#38419A]">2. How We Help You Get Better Grades</h3>
                            <div className="space-y-4">
                                <p>
                                    Higher grades in New Zealand universities cannot be attained by simply handing in a task on time. The grades are given according to the achievement of the learning outcomes, critical analysis, marking rubrics, and academic integrity among the students. These grading factors are aimed to be reinforced by our assignment help.
                                </p>
                                <p>
                                    Poor structure is one of the most possible reasons why students lose marks. Our professionals make sure that all assignments have a sensible academic format, with an introduction, properly developed arguments, and the conclusion that directly answers the question. This expository makes the markers find it easy to determine whether the learning outcomes have been achieved, which has a positive impact on grades.
                                </p>
                                <p>
                                    Another important aspect of grading is the reference to accuracy. Institutions of New Zealand attach a lot of importance to proper reference and reliable scholarly materials. All of our work is done in the necessary referencing style, e.g. APA or Harvard, and we provide intext citation and reference lists correctly formatted. This minimizes the chances of unjustified deduction of marks or integrity issues in school.
                                </p>
                                <p>
                                    We also match the content with marking requirements. Prior to delivery, assignments are checked against the marking rubric to ensure that the level of analysis, use of evidence and academic tone is satisfactory. This is a focused strategy that enables the students to realize better grades in grading descriptors.
                                </p>
                                <p>
                                    On top of grades, our service eliminates academic stress. Through getting professionally written and well referenced work, the students are better informed about what is expected, and with time they come to enhance their own writing skills. Strategic arguments, excellence in academic clarity, as well as adherence to New Zealand standards, our support is one of the direct contributors to improved academic performance and enhanced evaluation results.
                                </p>
                            </div>
                        </div>

                        {/* Blog 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-[#38419A]">3. How We Help You Do Homework Effortlessly</h3>
                            <div className="space-y-4">
                                <p>
                                    University life in New Zealand may be challenging and one must answer several assignments, work part-time, and personal duties that may be taking over time. It is common to come across many students who fail to cope because they are not able to cope, but they are unable to handle the workload whilst on top of the academic expectations that are hard to adhere to. This is made much easier by our assignment help which makes it much easier to complete the homework.
                                </p>
                                <p>
                                    We start by reading and scrutinizing the assignment brief, learning goals and New Zealand marking rubric. This will make sure that whatever lecturers are assessing is what they actually require to assess rather than what they do not need to assess. These criteria are very specific and can be followed and they allow students to eliminate confusion and prevent some mistakes which can result in low marks.
                                </p>
                                <p>
                                    Credible academic sources, such as peer-reviewed journals, prescribed readings, and others, are used by our experts to make sound, evidence-based arguments. The assignments are all composed in a formal academic way demanded by the New Zealand universities and well articulately expressed and logically presented. This teaching practice enables students to participate in the assignments without panic.
                                </p>
                                <p>
                                    Reliability also implies effortless submission. The assignments are submitted in time and the students can go through the assignment and ask to have them reviewed, when necessary. The ability to make free amendments is important in order to be able to introduce lecturer feedback or changed instructions.
                                </p>
                                <p>
                                    Most importantly, our service is facilitative of learning and not substitutive of learning. Through reading a well drafted, well referenced assignment, students would get to know the way academic writing is delivered as per the New Zealand academic writing instructions. Such advice can be used to ensure the improvement of the future coursework and decrease the stress of the present time, as the homework will be completed effectively and without much pressure.
                                </p>
                            </div>
                        </div>

                        {/* Blog 4 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-[#38419A]">4. Students from Top Universities of New Zealand Take Help from Us</h3>
                            <div className="space-y-4">
                                <p>
                                    Students studying in some of the most reputed universities in New Zealand are entrusted with our assignment help services and academic standards in these institutions are high and expectations are well defined in terms of assessment. We have always sponsored the student of universities like the University of Auckland, University of Otago, Victoria University of Wellington, University of Canterbury, Massey University, University of Waikato, Auckland University of Technology and Lincoln University.
                                </p>
                                <p>
                                    Our customers who are students of these universities prefer our service due to the fact that every institution has different assessment systems, grading rubrics, and academic conventions. Each assignment is customized to the requirements of the university, faculty, course level and is in line with the local academic requirements by our writers.
                                </p>
                                <p>
                                    As a learner, we are keen and interested in learning outcomes, be it in analytical essays, technical reports, reflective writings, and research-based assignments. The referencing styles that are usually demanded by these universities, including APA and Harvard, are used with exactness, minimizing the chances of a penalty due to inappropriate citation style.
                                </p>
                                <p>
                                    We assist students to stay academically upright and manage workload successfully by providing them with original, university-congruent academic work. Such uniformity and sensitivity to the institutional demands is the reason why the students of leading New Zealand universities do not stop using our ethical and professional assignment support.
                                </p>
                            </div>
                        </div>

                        {/* Blog 5 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-[#38419A]">5. How We Help You Meet Tough Deadlines</h3>
                            <div className="space-y-4">
                                <p>
                                    New Zealand universities have very strict time keeping of assignment deadlines, with any form of late submission likely to be incurred a grade penalty or simply not graded. We also know how stressful students are when they have to meet deadlines coinciding with each other or something unforeseen occurs, that is why deadline management is one of the cornerstones of our assignment help service.
                                </p>
                                <p>
                                    As soon as an assignment request has come, the urgency, word count, and complexity are evaluated. The assignment is then assigned to a specialist in a particular subject that would be able to provide quality work at an appropriate time. This is a systematic distribution system that is efficient without negatively affecting educational standards.
                                </p>
                                <p>
                                    Our authors adhere to a schedule of work that implies research, writing, citing, and verification in accordance with the New Zealand academic standards. Even in case of urgency we make sure that arguments are logical, sources are reliable and references are proper. There is an extra buffer time on assignments so students can revise the material relaxingly before handing the assignment in.
                                </p>
                                <p>
                                    Revisions that are free will also ensure students are not stressed with deadlines. In case of lecturer remarks or slight modifications, it is possible to make the changes in a short period and without extra expense. It is especially useful to students who have to juggle both work and school (or family life).
                                </p>
                                <p>
                                    Our service can make sure that a student never has to face unnecessary fines and will have the confidence to present a well-planned work, on time and without academic error still, even though the deadline is very strict.
                                </p>
                            </div>
                        </div>

                        {/* Blog 6 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-[#38419A]">6. Why Online Assignment Help Is Helpful for New Zealand Students</h3>
                            <div className="space-y-4">
                                <p>
                                    Online assignment help has proved to be a very crucial academic tool to students who study in New Zealand. Having universities that require high standards of autonomous research, critical thinking and academic honesty, students have a tendency to require professional advice in order to perform to the expectations of the university.
                                </p>
                                <p>
                                    Convenience is one of the most beneficial online support benefits. City students like Auckland, Wellington, Christchurch and Dunedin are able to get good academic assistance at any time and not subject to geographical constraints. Our 24/7 support team makes sure that advice is available when the deadline is close or when the customer needs to be clarified.
                                </p>
                                <p>
                                    Also of importance are security and confidentiality. The information concerning the personal and academic life is safeguarded by our systems, and students can consult a person with no hesitations. All papers are submitted with no plagiarism, are prepared initially and they are cited in the required academic format to make sure that they are in accordance with policies of the New Zealand universities.
                                </p>
                                <p>
                                    Online assignment help also increases insight. Students can understand how high-quality academic writing is structured by reading an example of professionally written work in accordance with marking rubrics and learning outcomes. This helps in the long term development of skills and not the short term submission.
                                </p>
                                <p>
                                    Having expert support of subjects, open processes and following New Zealand academic standards, the online assignment help is a viable, ethical and efficient means of students dealing with workload, deadline, and academic achievements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Students Choose Us Section */}
            <>
                <h2 className="text-center mb-4 myassignHelp px-16">
                    Why Students Choose Our Assignment Help Services in New Zealand
                </h2>
                <p
                    className="text-center mb-4"
                    style={{
                        fontSize: "18px",
                        fontWeight: 400,
                        lineHeight: "27px",
                    }}
                >
                    Discover why we're the top choice for professional Assignment writing assistance.
                </p>
                <div className="outer-container outerCont">
                    <div className="grid-container">
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

            {/* Subject-Focused Section */}
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
                <h2 className="text-2xl font-bold text-center mb-4 highQualText mt-10 px-16">
                    Subject-Focused Assignment Help in New Zealand
                </h2>
                <p className="text-center mb-14">
                    We support assignments that reflect critical reasoning, structured analysis, and academic clarity. All work complies with APA, Harvard, MLA, Chicago & IEEE referencing styles as required by New Zealand institutions.
                </p>

                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className="p-4" style={{
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

            {/* NEW CONTENT - Academic Levels Section */}
            <div className="px-16 py-12 bg-white">
                <h2 className="text-center text-3xl font-bold mb-8">
                    Academic Assignment Help for All Levels in New Zealand
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-[#38419A]">Undergraduate Assignment Help</h3>
                        <p className="text-gray-600">
                            We help undergraduate students with essays, reports, reflections and case studies that are consistent with the learning outcomes, marking criteria and academic writing standards that are used in New Zealand universities.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-[#38419A]">Postgraduate & Master's Level Assistance</h3>
                        <p className="text-gray-600">
                            We specialize in postgraduate writing, essay analysis, research and advanced academic writing skills and tone making sure that assignments are developed to meet the requirements of the masters level in any institution in New Zealand.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4 text-[#38419A]">Doctoral & Research-Level Guidance</h3>
                        <p className="text-gray-600">
                            We offer professional advice on doctoral research, such as research proposal, literature review, methodology, data analysis and academic editing of same so that the research adheres to the New Zealand standards of research.
                        </p>
                    </div>
                </div>

                <p className="text-center mt-8 text-gray-600">
                    All work follows New Zealand academic ethics and commonly used referencing styles such as APA, Harvard, MLA, Chicago, and IEEE.
                </p>
            </div>

            {/* NEW CONTENT - Affordable Pricing Section */}
            <div className="px-16 py-12 bg-[#38419A] text-white">
                <h2 className="text-center text-3xl font-bold mb-4">
                    Affordable Assignment Help in New Zealand
                </h2>
                <p className="text-center text-xl mb-8">
                    Trusted by 10,000+ Students Worldwide
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <p className="text-lg font-bold">Ø Transparent pricing</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <p className="text-lg font-bold">Ø No hidden charges</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <p className="text-lg font-bold">Ø Ethical academic support</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <p className="text-lg font-bold">Ø Consistent academic quality</p>
                    </div>
                </div>
            </div>

            {/* NEW CONTENT - Student Reviews */}
            <div className="px-16 py-12 bg-gray-50">
                <h2 className="text-center text-3xl font-bold mb-8">
                    Student Reviews: Assignment Help in New Zealand
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-2">Callum R., Engineering Student</h3>
                        <p className="text-gray-600">
                            The assignment was completely of New Zealand academic standard with good research depth, technical clarity and a well structured format that perfectly matched with the expectation of the university as well as the assessment conditions in the engineering profession.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-2">Isla M., Business Student</h3>
                        <p className="text-gray-600">
                            The case study proved to be very analytical and easy to follow academically. My lecturer liked the clarity, logical structure and relevancy to course learning outcomes and business assessment requirement.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-2">Rohan K., Information Technology Student</h3>
                        <p className="text-gray-600">
                            The technical report was precise, properly structured and in due time. The presentation of the work, formatting and the clarity were all within the mandate of assessment and submission of the university.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-2">Madison T., Master's Student</h3>
                        <p className="text-gray-600">
                            The dissertation guidance was indeed of great assistance to my methodology and reference. The educational framework was distinctive, academic, and in line with the postgraduate research and writing guidelines in New Zealand.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-2">Oliver S., Economics Student</h3>
                        <p className="text-gray-600">
                            The essay contained a high level of critical thinking, logical development of arguments and proper academic reference, which rendered the service credible, ethical, and very appropriate in New Zealand university examinations.
                        </p>
                    </div>
                </div>
            </div>

            {/* NEW CONTENT - FAQ Section */}
            <div className="px-16 py-12 bg-white">
                <h2 className="text-center text-3xl font-bold mb-8">
                    Frequently Asked Questions: Assignment Help in New Zealand
                </h2>

                <div className="space-y-6 max-w-4xl mx-auto">
                    <div className="border-b pb-4">
                        <h3 className="text-lg font-bold mb-2">1. Do your services follow New Zealand university standards?</h3>
                        <p className="text-gray-600">
                            Yes. Each and every assignment is guided by New Zealand academic policies and institutional marking and assessment standards as well as marking rubrics, which incorporate proper structuring, academic honesty, proper referencing and compliance to the standards of the university.
                        </p>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="text-lg font-bold mb-2">2. Can international students studying in New Zealand use your services?</h3>
                        <p className="text-gray-600">
                            Absolutely. We assist both national and international students studying in universities and colleges in New Zealand and offer them academically acceptable and assignment-free services as per the needs of the institutions.
                        </p>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="text-lg font-bold mb-2">3. What subjects do you cover?</h3>
                        <p className="text-gray-600">
                            We support the majority of academic courses provided by New Zealand institutions such as business, engineering, IT, healthcare, education, law, economics, social sciences, and other university level courses.
                        </p>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="text-lg font-bold mb-2">4. Is plagiarism-free work guaranteed?</h3>
                        <p className="text-gray-600">
                            Yes. Each of the assignments is composed completely original, properly vetted, citation checked and written in full regard of the academic ethics of integrity and plagiarism.
                        </p>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="text-lg font-bold mb-2">5. Do you accept urgent deadlines?</h3>
                        <p className="text-gray-600">
                            Yes. We are also fast and responsive to urgent and short-term assignments and can deliver them on time without jeopardizing the quality of research, originality, academic accuracy, and assessment needs.
                        </p>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="text-lg font-bold mb-2">6. Are revisions included?</h3>
                        <p className="text-gray-600">
                            Yes. You are provided with free revisions to add comments by lecturers, evaluation remarks, or new guidelines to be sure that the final work has entirely met the academic requirements.
                        </p>
                    </div>

                    <div className="border-b pb-4">
                        <h3 className="text-lg font-bold mb-2">7. Is my information confidential?</h3>
                        <p className="text-gray-600">
                            Absolutely. All the personal, academic, and payment data is safeguarded by the use of safe systems, high-level confidentiality standards, and overall data protection.
                        </p>
                    </div>

                    <div className="pb-4">
                        <h3 className="text-lg font-bold mb-2">8. How do I place an order?</h3>
                        <p className="text-gray-600">
                            You may also place your assignment requests on our online enquiry form, then the support academic team will swiftly take you through skilled assignment and further advice.
                        </p>
                    </div>
                </div>
            </div>

            {/* NEW CONTENT - Final CTA */}
            <div className="px-16 py-12 bg-gradient-to-r from-[#38419A] to-[#5C6BC0] text-white text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Get Professional Assignment Assistance Online in New Zealand Today
                </h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto">
                    Avoid unnecessary academic stress and deadline pressure. Choose The Assignment Hub for trusted, plagiarism-free, and professional assignment help services in New Zealand, supporting academic success with integrity and confidence.
                </p>
                <button
                    className="bg-white text-[#38419A] px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition duration-300"
                    onClick={() => router.push('/contact-us')}
                >
                    Get Started Now
                </button>
            </div>
        </div>
    )
}

export default NewZealand
// import React, { useState } from "react";
// import cross from '../../img/cross.svg';

// const ChatBot = () => {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I help you?", sender: "bot" },
//   ]);

//   const questions = [
//     {
//       question: "What types of assignments and dissertations do you assist with?",
//       answer:
//         "At Assignment Hub, we offer comprehensive assistance for a wide range of academic tasks, including essays, research papers, case studies, reports, presentations, dissertations, and more. Whether you’re pursuing undergraduate, postgraduate, or PhD studies, we tailor our services to meet your specific needs and subject requirements.<br><strong>a. Do you write assignments for all types of courses and fields?</strong><br>Yes, we assist with a wide range of courses and fields, including business, engineering, management, computer science, law, nursing, humanities, and many others. Whether it's a case study, research paper, or presentation, we provide diverse academic needs. For further details, contact us at 9352555548 or email contact@assignmenthub.com.<br><strong>b. What types of dissertations do you assist with?</strong><br>We assist with various types of dissertations, including empirical research, primary data collection-based research, literature-based studies, and industry-specific projects. Whether you need help with qualitative or quantitative research, data analysis, or literature reviews, we have got you covered. For more information, reach out to us at 9352555548 or email contact@assignmenthub.com.<br><strong>c. Do you help with specific sections of assignments or dissertations or only complete projects?</strong><br>We offer flexible support tailored to your needs. Whether you need assistance with a particular section, such as the introduction, methodology, or conclusion, or require end-to-end dissertation help, we can help you.",
//     },
//     {
//       question: "Are your assignments plagiarism-free and original?",
//       answer:
//         "Absolutely! We pride ourselves on delivering 100% original and plagiarism-free work. Every assignment and dissertation we craft is thoroughly researched, written from scratch, and checked using advanced plagiarism detection tools to ensure academic integrity.",
//     },
//     {
//       question: "How do you ensure the quality of the work provided?",
//       answer:
//         "Our team consists of highly qualified experts with vast experience in their respective fields. Each piece of work undergoes rigorous quality checks, including proofreading, editing, and formatting, to meet academic standards and ensure your satisfaction.",
//     },
//     {
//       question: "Can you meet tight deadlines for urgent assignments?",
//       answer:
//         "Yes, we specialize in delivering high-quality work within tight deadlines. Whether you have a 24-hour deadline or need something quicker, our team is equipped to handle urgent requests without compromising on quality.",
//     },
//     {
//       question: "How do I know my information will remain confidential?",
//       answer:
//         "At Assignment Hub, we take confidentiality seriously. Your personal details, assignment requirements, and payment information are securely encrypted and never shared with third parties. You can trust us to handle your data with the utmost privacy and professionalism.",
//     },
//     {
//       question: "How much do you charge for assignments and dissertations?",
//       answer:
//         "Our charges vary depending on the complexity, word count, deadline, and academic level of your assignment or dissertation. We aim to provide affordable pricing and offer customized quotes to suit your requirements. You can contact us with your specific details, and we’ll provide a transparent and competitive price estimate. For further details contact us at 9352555548 or at contact@assignmenthub.com.",
//     },

//   ];

//   const handleQuestionClick = (question, answer) => {
//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { text: question, sender: "user" },
//       { text: answer, sender: "bot" },
//     ]);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setMessages([{ text: "Hello! How can I help you?", sender: "bot" }]); // Reset messages
//   };

//   return (
//     <>
//       <div className="fixed bottom-4 right-4" style={{
//         zIndex:'100'
//       }}>
//         {!open && (
//           <div
//             style={{
//               height: "50px",
//               width: "50px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               borderRadius: "50%",
//               backgroundColor: "skyblue",
//               cursor: "pointer",
//             }}
//           >
//             <img
//               onClick={() => setOpen(true)}
//               src="./images/chat-bot.png"
//               alt="chat icon"
//               style={{ height: "30px", width: "30px" }}
//             />
//           </div>
//         )}
//       </div>

//       {open && (
//         <div className="fixed bottom-0 right-4 w-[25%] h-[80%] z-50 overflow-auto" style={{

//         }}>
//           <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4 border relative">
//             {/* Close Button */}
//             <img
//               src={cross}
//               className="absolute top-2 right-2"
//               alt="close"
//               onClick={handleClose}
//               style={{ height: "12px", width: "12px", cursor: "pointer" }}
//             />

//             {/* Messages Section */}
//             <div className="h-64 overflow-y-auto p-2 border-b">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`p-2 my-1 rounded-md ${
//                     msg.sender === "bot" ? "bg-gray-200 text-black" : "text-white text-right"
//                   }`}
//                   style={
//                     msg.sender !== "bot"
//                       ? { background: "linear-gradient(270deg, #B8E7F3 0%, #19A6D1 100%)" }
//                       : {}
//                   }
//                   dangerouslySetInnerHTML={{ __html: msg.text }}
//                 >

//                 </div>
//               ))}
//             </div>

//             {/* Question Buttons */}
//             <div className="mt-4 space-y-2">
//               {questions.map((q, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleQuestionClick(q.question, q.answer)}
//                   className="block w-full text-white p-2 rounded-md transition"
//                   style={{
//                     background: "linear-gradient(270deg, #B8E7F3 0%, #19A6D1 100%)"
//                   }}
//                 >
//                   {q.question}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatBot;

import React, { useState } from "react";

// Images from public/images (Next.js serves public at root)
const cross = "/images/cross.svg";
const chatBot = "/images/chat-bot.png";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "bot" },
  ]);

  const questions = [
    {
      question:
        "What types of assignments and dissertations do you assist with?",
      answer:
        "At Assignment Hub, we offer comprehensive assistance for a wide range of academic tasks...",
    },
    {
      question: "Are your assignments plagiarism-free and original?",
      answer:
        "Absolutely! We pride ourselves on delivering 100% original and plagiarism-free work.",
    },
    {
      question: "How do you ensure the quality of the work provided?",
      answer:
        "Our team consists of highly qualified experts with vast experience in their respective fields.",
    },
    {
      question: "Can you meet tight deadlines for urgent assignments?",
      answer:
        "Yes, we specialize in delivering high-quality work within tight deadlines.",
    },
    {
      question: "How do I know my information will remain confidential?",
      answer:
        "At Assignment Hub, we take confidentiality seriously and protect your data securely.",
    },
    {
      question: "How much do you charge for assignments and dissertations?",
      answer:
        "Our charges vary depending on complexity, word count, and deadline.",
    },
  ];

  const handleQuestionClick = (question, answer) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: question, sender: "user" },
      { text: answer, sender: "bot" },
    ]);
  };

  const handleClose = () => {
    setOpen(false);
    setMessages([{ text: "Hello! How can I help you?", sender: "bot" }]); // Reset messages
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[100]">
        {!open && (
          <div
            className="h-12 w-12 flex items-center justify-center rounded-full cursor-pointer"
            onClick={() => setOpen(true)}
            style={{
              boxShadow: "0px 4px 10px rgba(56, 65, 154, 0.4)",
            }}
          >
            <img
              src={chatBot}
              alt="chat icon"
              className="h-8 w-8"
            />
          </div>
        )}
      </div>

      {open && (
        <div className="fixed bottom-0 right-4 w-[25%] h-[80%] z-50 overflow-auto">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4 border relative flex flex-col">
            {/* Close Button */}
            <img
              src={cross}
              className="absolute top-2 right-2 h-4 w-4 cursor-pointer"
              alt="close"
              onClick={handleClose}
            />

            {/* Messages Section */}
            <div className="flex-1 overflow-y-auto p-2 border-b h-64 flex flex-col space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[75%] p-2 text-sm rounded-md ${msg.sender === "bot"
                    ? "bg-gray-200 text-black self-start"
                    : "text-white self-end"
                    }`}
                  style={{
                    alignSelf: msg.sender === "bot" ? "flex-start" : "flex-end",
                    background:
                      msg.sender === "bot"
                        ? "lightgray"
                        : "linear-gradient(180deg, #8287BF 0%, #38419A 100%)",

                    borderRadius:
                      msg.sender === "bot"
                        ? "10px 10px 10px 2px"
                        : "10px 10px 2px 10px",
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Question Buttons (Kept As-Is) */}
            <div className="mt-4 space-y-2">
              {questions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(q.question, q.answer)}
                  className="block w-full text-white p-2 rounded-md transition"
                  style={{
                    background:
                      "linear-gradient(180deg, #8287BF 0%, #38419A 100%)"
                  }}
                >
                  {q.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

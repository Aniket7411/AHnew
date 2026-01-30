import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import chatIcon from '../../img/chatIcon.png'
import close from '../../img/cross.svg'

const WhatsAppChat = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-20 right-4 flex flex-col items-end z-50">
            {/* Chat Popup Box */}
            {/* {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    className="bg-white shadow-lg rounded-xl p-4 w-80 border border-gray-200 mb-2"
                >
                    <div className="flex justify-between items-center mb-4">


                    <div className="flex items-center justify-center rounded-full bg-green-500" style={{
                        width: '40px',
                        height: '40px',
                    }}>
                        <img src={chatIcon} alt="" />
                    </div>
                    <img src={close} style={{
                        height:'12px',
                        width:'12px',
                        cursor:'pointer'
                    }} onClick={() => setIsOpen(false)} alt="" />
                    </div>
                    <div className="flex gap-3">
                        <div className="w-full">
                            <p className="text-black text-xl font-medium mb-2">
                                Hi there!
                            </p>
                            <p className="text-black text-xl font-medium mb-4">
                                How can I help you?
                            </p>

                            <button
                                className="flex items-center mt-3 bg-[#1D1D1B] text-white px-4 py-4 rounded-lg text-md w-full"
                                onClick={() => window.open("https://api.whatsapp.com/send?phone=9352555548", "_blank")}
                            >
                                <FaWhatsapp className="mx-2" />
                                Chat With Us
                            </button>

                        </div>
                    </div>
                    <p className="text-gray-400 text-xs text-center mt-2">
                        ⚡ Powered by <span className="font-semibold">wati.io</span>
                    </p>
                </motion.div>
            )} */}

            {/* Floating Button */}
            {/* <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg transition transform hover:scale-105"
            >
                <IoMdArrowDropdown
                    className={`text-xl transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </button> */}
            <FaWhatsapp className="text-[#5FD568] cursor-pointer text-xl w-12 h-12" onClick={() => window.open("https://api.whatsapp.com/send?phone=9352555548", "_blank")}
            />


        </div>
    );
};

export default WhatsAppChat;

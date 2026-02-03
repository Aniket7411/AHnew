"use client";

import Header from "../header";
import Footer from "../footer/Footer";
import ChatBot from "../chatbot/Chatbot";
import WhatsAppChat from "../whatsAppChat/WhatsApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <div>
      <div className="fixed w-full bg-white z-50 shadow-sm border-b border-gray-100">
        <Header />
      </div>
      <div className="pt-12 lg:pt-28">{children}</div>
      <WhatsAppChat />
      <ChatBot />
      <ToastContainer />
      <Footer />
    </div>
  );
}

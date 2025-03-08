import { useEffect, useState } from "react";
import { IoChatbubbleSharp } from "react-icons/io5";

export default function FloatingChatbot() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg focus:outline-none animate-[wiggle_1.5s_infinite]"
          >
           <IoChatbubbleSharp/>
          </button>
          {isOpen && (
            <div
              className="absolute bottom-full right-0 w-64 h-80 bg-white shadow-xl rounded-lg p-4 mt-2 transition-all duration-500 ease-in-out opacity-100 translate-y-0 scale-100"
            >
              <p className="text-sm font-semibold">Chatbot</p>
              <div className="h-60 overflow-y-auto border p-2">
                <p className="text-xs text-gray-600">Hello! How can I help you?</p>
              </div>
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full  p-2 border rounded focus:ring focus:ring-blue-300 transition"
              />
            </div>
          )}
        </div>
      )}
      <style>
        {`
          @keyframes wiggle {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1) skew(2deg, 2deg); }
          }
        `}
      </style>
    </div>
  );
}

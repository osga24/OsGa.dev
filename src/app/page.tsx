"use client";
import React, { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from "framer-motion";
import useTextAnimation from "@/utils/TextAnimation";
import { TypeAnimation } from "react-type-animation";

export default function Page() {
  const titleText = "OsGa.dev";
  const titleRef = useTextAnimation(titleText);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen px-6">
      {/* 使用 flex-col-reverse 讓小螢幕時變成圖片在下 */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-6xl">
        {/* 左側內容區塊 */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-8xl font-extrabold text-white text-center md:text-left"
            ref={titleRef}
          >
            {titleText}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-3xl pl-0 md:pl-5 pt-3 text-white text-center md:text-left"
          >
            <span>HI! I'm a&nbsp;</span>
            <TypeAnimation
              sequence={[
                "Developer", 1500,
                "", 1500,
                "CTF Player", 1500,
                "", 1500,
                "NYUST student", 1500,
                "", 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl font-mono text-green-300"
            />
          </motion.p>

          {/* 社群連結 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-6 pt-5"
          >
            <div className="flex justify-center md:justify-start space-x-4 text-white pl-5">
			 <a
				href="#"
				className="inline-flex justify-center items-center w-12 h-12 border-2 border-green-300 text-green-300 text-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 hover:translate-y-[-5px] hover:bg-green-300 hover:text-black hover:shadow-[0_0_25px_#48bb78]"
			  >
				<i className="fa-brands fa-github text-lg"></i>
			  </a>
			  <a
				href="#"
				className="inline-flex justify-center items-center w-12 h-12 border-2 border-green-300 text-green-300 text-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 hover:translate-y-[-5px] hover:bg-green-300 hover:text-black hover:shadow-[0_0_25px_#48bb78]"
			  >
				<i className="fa-brands fa-discord text-lg"></i>
			  </a>
			  <a
				href="#"
				className="inline-flex justify-center items-center w-12 h-12 border-2 border-green-300 text-green-300 text-xl rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 hover:translate-y-[-5px] hover:bg-green-300 hover:text-black hover:shadow-[0_0_25px_#48bb78]"
			  >
				<i className="fa-brands fa-instagram text-lg"></i>
			  </a>
            </div>
          </motion.div>
        </div>

        {/* 右側圖片區塊 */}
        <div className="flex-shrink-0 pb-8 md:pb-0">
          <img
            src="avatar.png"
            alt="avatar"
            className="w-[250px] md:w-[400px] lg:w-[500px] h-auto object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

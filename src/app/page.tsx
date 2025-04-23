"use client";
import React, { useState } from "react";
import { BookOpen } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import useTextAnimation from "@/utils/TextAnimation";
import { TypeAnimation } from "react-type-animation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
interface SocialLink {
	icon: React.ReactNode;
	label: string;
	link: string;
}

const Page: React.FC = () => {
	const titleText = "OsGa.dev";
	const titleRef = useTextAnimation(titleText);
	const [isVisible] = useState(true);

	const socialLinks: SocialLink[] = [
		{
			icon: <BookOpen size={20} />,
			label: "BLOG",
			link: "https://blog.osga.dev"
		},
		{ icon: <i className="fa-brands fa-instagram text-lg" />, label: "Instagram", link: "https://www.instagram.com/os324_/" },
		{ icon: <i className="fa-brands fa-github text-lg" />, label: "GitHub", link: "https://github.com/OsGa24" },
		{ icon: <i className="fa-brands fa-discord text-lg" />, label: "Discord", link: "https://discord.com/users/osga24" },
	];

	return (
		<div className="relative min-h-screen">
			<Navbar />
			<div className="flex justify-center items-center min-h-[calc(100vh-4rem)] md:h-screen px-6 pt-0 md:pt-0">
				<div className="flex flex-col-reverse md:flex-row justify-between items-center w-full max-w-6xl mt-[-2rem] md:mt-0">
					<div className="flex flex-col justify-center items-center md:items-start md:pl-12">
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
							transition={{ duration: 0.5 }}
							className="text-lg md:text-3xl text-white text-center md:text-left"
						>
							<span>HI! I&apos;m a&nbsp;</span>
							<TypeAnimation
								sequence={[
									"Developer",
									1500,
									"",
									1500,
									"CTF Player",
									1500,
									"",
									1500,
									"NYUST student",
									1500,
									"",
									1500,
								]}
								wrapper="span"
								speed={50}
								repeat={Infinity}
								className="text-xl md:text-3xl font-bold font-mono text-green-300"
							/>
						</motion.p>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-5xl md:text-8xl font-extrabold text-white text-center md:text-left pt-3"
							ref={titleRef}
						>
							{titleText}
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="text-gray-400 mt-4 text-center text-xs md:text-left md:text-base"
						>
							A student from <span className="text-teal-600 font-bold">NYUST</span>,
							<br /> passionate about cybersecurity and development,
							<br /> currently a CTF player in the <span className="text-orange-500">B33F 50μP</span> team.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="flex space-x-6 pt-5"
						>
							{socialLinks.map(({ icon, label, link }, index) => (
								<a
									key={index}
									href={link}
									className="group relative flex justify-center items-center w-12 h-12 border-2 border-green-300 text-green-300 rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 hover:translate-y-[-5px] hover:bg-green-300 hover:text-[#2c2a24] hover:shadow-[0_0_25px_#48bb78]"
								>
									{icon}
									<span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-white text-sm px-2 py-1 rounded scale-0 transition-transform duration-300 group-hover:scale-100">
										{label}
									</span>
								</a>
							))}
						</motion.div>
					</div>
					<Image
						src="/avatar.png"
						alt="avatar"
						width={500}
						height={500}
						priority
						className="w-[200px] md:w-[300px] lg:w-[500px] h-auto object-cover rounded-full pb-4 md:pb-0"
					/>
				</div>
			</div>
			<div className="absolute bottom-0 left-0 right-0">
				<Footer />
			</div>
		</div>
	);
};

export default Page;

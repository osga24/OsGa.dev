"use client";
import React from "react";
import { FaDiscord } from 'react-icons/fa';
import { motion } from "framer-motion";
import {
	Mail,
	Github,
	Linkedin,
	Instagram,
	Facebook,
	CakeSlice,
	MapPin,
	Clock,
	MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ContactMethod {
	icon: React.ReactNode;
	label: string;
	value: string;
	href: string;
	bgColor: string;
	hoverColor: string;
}

export default function ContactPage() {
	const contactMethods: ContactMethod[] = [
		{
			icon: <Mail />,
			label: 'Email',
			value: 'oscarhuang950324@gmail.com',
			href: 'mailto:oscarhuang950324@gmail.com',
			bgColor: 'bg-red-500/20',
			hoverColor: 'hover:bg-red-500/30'
		},
		{
			icon: <Github />,
			label: 'GitHub',
			value: '@OsGa24',
			href: 'https://github.com/OsGa24',
			bgColor: 'bg-gray-500/20',
			hoverColor: 'hover:bg-gray-500/30'
		},
		{
			icon: <CakeSlice className="w-5 h-5" />,
			label: 'Cake.me',
			value: '黃宥睿',
			href: 'https://www.cake.me/me/osga',
			bgColor: 'bg-orange-500/20',
			hoverColor: 'hover:bg-orange-500/30'
		},
		{
			icon: <Linkedin />,
			label: 'LinkedIn',
			value: 'Yo-Rei Huang',
			href: 'https://www.linkedin.com/in/yo-rei-huang-607543340/',
			bgColor: 'bg-blue-500/20',
			hoverColor: 'hover:bg-blue-500/30'
		},
		{
			icon: <Instagram />,
			label: 'Instagram',
			value: '@os324_',
			href: 'https://www.instagram.com/os324_/',
			bgColor: 'bg-pink-500/20',
			hoverColor: 'hover:bg-pink-500/30'
		},
		{
			icon: <Facebook />,
			label: 'Facebook',
			value: 'Oscar Huang',
			href: 'https://www.facebook.com/osga24/',
			bgColor: 'bg-blue-600/20',
			hoverColor: 'hover:bg-blue-600/30'
		},
		{
			icon: <FaDiscord className="w-6 h-6" />,
			label: 'Discord',
			value: 'osga24',
			href: 'https://discord.com/users/osga24',
			bgColor: 'bg-indigo-500/20',
			hoverColor: 'hover:bg-indigo-500/30'
		}
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5
			}
		}
	};

	return (
		<div className="min-h-screen bg-[#2c2a24] text-white flex flex-col">
			<Navbar />

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="flex-grow p-3 sm:p-4 md:p-6 pt-24 sm:pt-28 md:pt-32"
			>
				<div className="max-w-6xl mx-auto">
					{/* Bento Grid Layout */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 h-auto">
						
						{/* 個人照片與介紹區塊 - 跨多列 */}
						<motion.div
							variants={itemVariants}
							className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-500/30"
						>
							<div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 lg:gap-6">
								{/* 照片區域 */}
								<div className="flex-shrink-0">
									<div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gray-600/30 rounded-full border-2 sm:border-3 lg:border-4 border-purple-400/50 flex items-center justify-center overflow-hidden">
										{/* 照片佔位符 */}
										<img 
											src="/contact_avatar.png" 
											alt="Oscar Huang"
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
								
								{/* 文字內容區域 */}
								<div className="flex-1 text-center sm:text-left">
									<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-300 mb-1 sm:mb-2">
										Yo-Rei Huang
									</h1>
									<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
										黃宥睿
									</h2>
									<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
										I&apos;m open to new opportunities, collaborations, or just a friendly chat. 
										Feel free to reach out through any of the platforms below.
									</p>
								</div>
							</div>
						</motion.div>

						{/* Email - 大塊 */}
						<motion.a
							variants={itemVariants}
							href={contactMethods[0].href}
							target="_blank"
							rel="noopener noreferrer"
							className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-3 bg-red-500/10 hover:bg-red-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-red-500/30 transition-all duration-300 hover:scale-105 group"
						>
							<div className="flex flex-col sm:flex-row items-start sm:items-center mb-2 sm:mb-4">
								<div className="p-2 sm:p-3 bg-red-500/20 rounded-full mb-2 sm:mb-0 sm:mr-4">
									<Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-400" />
								</div>
								<div>
									<h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-red-300">Email</h3>
									<p className="text-xs sm:text-sm text-gray-400">Primary Contact</p>
								</div>
							</div>
							<p className="text-red-300 font-medium text-xs sm:text-sm md:text-base break-all">{contactMethods[0].value}</p>
						</motion.a>

						{/* GitHub - 大塊 */}
						<motion.a
							variants={itemVariants}
							href={contactMethods[1].href}
							target="_blank"
							rel="noopener noreferrer"
							className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-3 bg-gray-500/10 hover:bg-gray-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-500/30 transition-all duration-300 hover:scale-105 group"
						>
							<div className="flex flex-col sm:flex-row items-start sm:items-center mb-2 sm:mb-4">
								<div className="p-2 sm:p-3 bg-gray-500/20 rounded-full mb-2 sm:mb-0 sm:mr-4">
									<Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400" />
								</div>
								<div>
									<h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-gray-300">GitHub</h3>
									<p className="text-xs sm:text-sm text-gray-400">Code Repository</p>
								</div>
							</div>
							<p className="text-gray-300 font-medium text-xs sm:text-sm md:text-base">{contactMethods[1].value}</p>
						</motion.a>

						{/* LinkedIn - 中等塊 */}
						<motion.a
							variants={itemVariants}
							href={contactMethods[3].href}
							target="_blank"
							rel="noopener noreferrer"
							className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-blue-500/30 transition-all duration-300 hover:scale-105 group"
						>
							<div className="p-2 sm:p-3 bg-blue-500/20 rounded-full mb-2 sm:mb-3 w-fit">
								<Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />
							</div>
							<h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-blue-300 mb-1 sm:mb-2">LinkedIn</h3>
							<p className="text-blue-300 font-medium text-xs sm:text-sm md:text-base break-words">{contactMethods[3].value}</p>
						</motion.a>

						{/* Cake.me - 中等塊 */}
						<motion.a
							variants={itemVariants}
							href={contactMethods[2].href}
							target="_blank"
							rel="noopener noreferrer"
							className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-2 bg-orange-500/10 hover:bg-orange-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-orange-500/30 transition-all duration-300 hover:scale-105 group"
						>
							<div className="p-2 sm:p-3 bg-orange-500/20 rounded-full mb-2 sm:mb-3 w-fit">
								<CakeSlice className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-400" />
							</div>
							<h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-orange-300 mb-1 sm:mb-2">Cake.me</h3>
							<p className="text-orange-300 font-medium text-xs sm:text-sm md:text-base">{contactMethods[2].value}</p>
						</motion.a>

						{/* Discord - 中等塊 */}
						<motion.a
							variants={itemVariants}
							href={contactMethods[6].href}
							target="_blank"
							rel="noopener noreferrer"
							className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-2 bg-indigo-500/10 hover:bg-indigo-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-indigo-500/30 transition-all duration-300 hover:scale-105 group"
						>
							<div className="p-2 sm:p-3 bg-indigo-500/20 rounded-full mb-2 sm:mb-3 w-fit">
								<FaDiscord className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-indigo-400" />
							</div>
							<h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-indigo-300 mb-1 sm:mb-2">Discord</h3>
							<p className="text-indigo-300 font-medium text-xs sm:text-sm md:text-base">{contactMethods[6].value}</p>
						</motion.a>

						{/* Instagram - 小塊 */}
						<motion.a
							variants={itemVariants}
							href={contactMethods[4].href}
							target="_blank"
							rel="noopener noreferrer"
							className="col-span-1 lg:col-span-1 bg-pink-500/10 hover:bg-pink-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-pink-500/30 transition-all duration-300 hover:scale-105 group aspect-square flex flex-col justify-center items-center"
						>
							<div className="p-1.5 sm:p-2 bg-pink-500/20 rounded-full mb-1 sm:mb-2">
								<Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
							</div>
							<p className="text-xs text-pink-300 font-medium text-center leading-tight">{contactMethods[4].value}</p>
						</motion.a>

						{/* Facebook - 小塊 */}
						<motion.a
							variants={itemVariants}
							href={contactMethods[5].href}
							target="_blank"
							rel="noopener noreferrer"
							className="col-span-1 lg:col-span-1 bg-blue-600/10 hover:bg-blue-600/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-600/30 transition-all duration-300 hover:scale-105 group aspect-square flex flex-col justify-center items-center"
						>
							<div className="p-1.5 sm:p-2 bg-blue-600/20 rounded-full mb-1 sm:mb-2">
								<Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
							</div>
							<p className="text-xs text-blue-300 font-medium text-center">Facebook</p>
						</motion.a>

						{/* 資訊卡片 - 填滿剩餘空間 */}
						<motion.div
							variants={itemVariants}
							className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-4 bg-green-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-green-500/30"
						>
							<div className="flex items-center mb-3 sm:mb-4">
								<MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-400 mr-2 sm:mr-3" />
								<h3 className="text-base sm:text-lg md:text-xl font-semibold text-green-300">Quick Info</h3>
							</div>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
								<div className="flex items-center">
									<MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mr-1.5 sm:mr-2 flex-shrink-0" />
									<span className="text-gray-300 text-sm sm:text-base">Taiwan</span>
								</div>
								<div className="flex items-center">
									<Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mr-1.5 sm:mr-2 flex-shrink-0" />
									<span className="text-gray-300 text-sm sm:text-base">GMT+8</span>
								</div>
							</div>
							<div className="p-2 sm:p-3 bg-[#2c2a24] rounded-lg">
								<p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
									"Looking forward to connecting with you!"
								</p>
							</div>
						</motion.div>

					</div>
				</div>
			</motion.div>

			<Footer />
		</div>
	);
}

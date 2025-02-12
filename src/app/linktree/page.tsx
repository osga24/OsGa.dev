"use client";
import React, { useState } from "react";
import { FaDiscord } from 'react-icons/fa';
import Image from "next/image";
import {
  BookOpen,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  CakeSlice
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  link: string;
}

interface FriendLink {
  name: string;
  avatar: string;
  link: string;
  description?: string;
}

const LinktreePage: React.FC = () => {
  const [isVisible] = useState(true);

  const socialLinks: SocialLink[] = [
    {
      icon: <BookOpen size={20} />,
      label: "BLOG",
      link: "https://blog.osga.dev"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      link: 'https://github.com/OsGa24'
    },
    {
	  icon: <FaDiscord className="w-6 h-6 " />,
      label: 'Discord',
      link: 'https://discord.com/users/osga_'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      link: 'mailto:me@osga.lol'
    },
    {
      icon: <CakeSlice className="w-5 h-5" />,
      label: 'Cake.me',
      value: '黃宥睿',
      href: 'https://www.cake.me/me/osga'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/yo-rei-huang-607543340://www.linkedin.com/in/yo-rei-huang-607543340/'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      link: 'https://www.instagram.com/os324_/'
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: 'Facebook',
      link: 'https://www.facebook.com/osga24/'
    },
  ];

  const friendLinks: FriendLink[] = [
    {
      name: "Ricky Lu",
      avatar: "/friends/ricky.jpg",
      link: "https://ricky.place/",
      description: "我媽"
    },
    {
      name: "ShiYu",
      avatar: "/friends/shiyu.webp",
      link: "https://4yu.dev/",
      description: "SCIST S5 演算總召"
    },
    {
      name: "YuDong",
      avatar: "/friends/yudong.png",
      link: "https://yudong-0222.github.io/links/",
      description: "斜咖"
    },
    {
      name: "Qian",
      avatar: "/friends/qian.webp",
      link: "https://blog.qian30.net/",
      description: "甲柴"
    },
    {
      name: "Nelson",
      avatar: "/friends/nelson.png",
      link: "https://nelsongx.com/",
      description: "他說他要叫大帥哥"
    },
    {
      name: "此情吳計可消除",
      avatar: "/friends/yih.jpg",
      link: "https://yih-0118.github.io/",
      description: "海大香港人 開發&資安"
    },
    {
      name: "soar.",
      avatar: "/friends/soar.png",
      link: "https://tusoar.tech/",
      description: "清大教 soar"
    },
    {
      name: "Chao",
      avatar: "/friends/chao.webp",
      link: "https://chaontc.tw/",
      description: "第三屆 SCAICT 會長"
    },
    {
      name: "Fearnot",
      avatar: "/friends/fearnot.png",
      link: "https://blog.fearnot221.com/",
      description: "SCIST S5 資安總召"
    },
    {
      name: "毛哥 EM",
      avatar: "/friends/EM.png",
      link: "https://emtech.cc/",
      description: "數位創作者，全端工程師"
    },
    {
      name: "dkri3c1",
      avatar: "/friends/dk.webp",
      link: "https://dkri3c1.github.io/",
      description: "台中高工首席駭客aka中工辣王"
    },
    {
      name: "Yuan",
      avatar: "/friends/yuan.jpg",
      link: "https://yuan-tw.net/",
      description: "NCSE Network-資訊技術工程師"
    },

  ];

  return (
    <div className="relative min-h-screen bg-[#2c2a24] pt-20 pb-10">
      <Navbar />
      <div className="flex justify-center items-center px-6">
        <div className="w-full max-w-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Image
              src="/avatar.png"
              alt="OsGa.dev"
              width={200}
              height={200}
              className="mx-auto rounded-full border-4 border-green-300 mb-4"
            />
            <h1 className="text-4xl font-extrabold text-white mb-2">OsGa.dev</h1>
            <p className="text-gray-400 text-sm">
              CTF Player | Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-xl font-semibold text-green-300 mb-4">My Links</h2>
              {socialLinks.map(({ icon, label, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#3a3836] text-green-300 hover:bg-green-300 hover:text-[#2c2a24] transition-colors duration-300 py-3 px-4 rounded-lg mb-3 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <span className="mr-3">{icon}</span>
                    {label}
                  </div>
                  <ExternalLink size={18} />
                </a>
              ))}
            </div>

            <div>
              <h2 className="text-xl font-semibold text-green-300 mb-4">Friendly Links</h2>
              <div className="grid grid-cols-2 gap-4">
                {friendLinks.map((friend, index) => (
                  <a
                    key={index}
                    href={friend.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#3a3836] text-green-300 hover:bg-green-300 hover:text-[#2c2a24] transition-colors duration-300 p-4 rounded-lg flex flex-col items-center space-y-2 group"
                  >
                    <Image
                      src={friend.avatar}
                      alt={friend.name}
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-green-300 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-center">
                      <div className="font-semibold text-white group-hover:text-[#2c2a24]">
                        {friend.name}
                      </div>
                      {friend.description && (
                        <p className="text-xs text-gray-400 group-hover:text-[#2c2a24] opacity-75">
                          {friend.description}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LinktreePage;

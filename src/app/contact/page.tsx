"use client";
import React from "react";
import { FaDiscord } from 'react-icons/fa';
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Facebook
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

export default function ContactPage() {
  const contactMethods: ContactMethod[] = [
    {
      icon: <Mail />,
      label: 'Email',
      value: 'me@osga.lol',
      href: 'mailto:me@osga.lol'
    },
    {
      icon: <Github />,
      label: 'GitHub',
      value: '@OsGa24',
      href: 'https://github.com/OsGa24'
    },
    {
      icon: <Linkedin />,
      label: 'LinkedIn',
      value: 'Yo-Rei Huang',
      href: 'https://www.linkedin.com/in/oscar-huang-607543340/'
    },
    {
      icon: <Instagram />,
      label: 'Instagram',
      value: '@os324_',
      href: 'https://www.instagram.com/os324_/'
    },
    {
      icon: <Facebook />,
      label: 'Facebook',
      value: 'Oscar Huang',
      href: 'https://www.facebook.com/osga24/'
    },
    {
	  icon: <FaDiscord className="w-6 h-6 " />,
	  label: 'Discord',
      value: 'osga_',
      href: 'https://discord.com/users/osga_'
    }
  ];

  return (
    <div className="min-h-screen bg-[#2c2a24] text-white flex flex-col">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-grow flex items-center justify-center p-6 pt-24"  // Added pt-24 to create space below Navbar
      >
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 bg-[#3a3836] rounded-xl p-8 shadow-xl">
          {/* 左側：個人介紹與聯絡說明 */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold text-green-300 mb-4">
              Contact Me
            </h2>

            <p className="text-white text-lg leading-relaxed">
              I&apos;m open to new opportunities, collaborations,
              or just a friendly chat. Before reaching out,
              please introduce yourself briefly.
            </p>

            <div className="border-l-4 border-green-300 pl-4 italic text-gray-300">
              Looking forward to connecting with you!
            </div>
          </div>

          {/* 右側：社交連結 */}
          <div>
            <h3 className="text-2xl text-green-300 mb-6 border-b pb-2 border-green-300">
              Social Links
            </h3>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-[#2c2a24] rounded-lg transition-colors group"
                >
                  <div className="mr-4 text-green-300 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white group-hover:text-green-300 transition-colors">
                      {method.label}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

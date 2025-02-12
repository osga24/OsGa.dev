"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import experiencesData from '@/data/experiences.json';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { User2, GraduationCap, Briefcase, Award, MicVocal, Users, Trophy, Contact } from 'lucide-react';
import { Code, GlobeLock } from 'lucide-react';

const categoryIcons = {
  "dev": Code,
  "sec": GlobeLock,
  "conf": MicVocal
} as const;

interface SectionTitleProps {
  children: React.ReactNode;
  icon: string;
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

interface Education {
  school: string;
  department: string;
  degree: string;
  period: string;
}

interface Work {
  company: string;
  title: string;
  date: string;
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  id?: string;
}

interface Contest {
  title: string;
  desc: string;
  href?: string;
}

interface Presentation {
  desc: string;
  title: string;
  topic?: string;
  category: 'dev' | 'sec' | 'conf';
}

interface CommunityConference {
  title: string;
  year: string;
  position?: string;
}

interface ExperiencesData {
  education: Education[];
  working: Work[];
  certifications: Certification[];
  contests: {
    [year: string]: Contest[];
  };
  presentations: Presentation[];
  communityConferences: CommunityConference[];
}
const AnimatedSection = ({ children, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children, icon }: SectionTitleProps) => {
  const icons = {
    whoami: User2,
    bio: GraduationCap,
    working: Briefcase,
    certifications: Award,
    contest: Trophy,
    presentation: MicVocal,
    community: Users,
    contact: Contact
  };

  const IconComponent = icons[icon as keyof typeof icons];

  return (
    <motion.div
      className="mb-4 md:mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="title font-bold text-base md:text-2xl relative inline-flex items-center gap-2 pb-2 text-white">
        {IconComponent && <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-green-300" />}
        {children}
        <div className="absolute -bottom-1 left-0 right-0 h-[2px] md:h-[3px] bg-green-300" />
      </h1>
    </motion.div>
  );
};

export default function Page() {
  const {
    education,
    working,
    certifications,
    contests,
    presentations,
    communityConferences
  } = experiencesData as ExperiencesData;

  return (
    <main className="min-h-screen text-white">
      <Navbar/>
      {/* Facebook-style header with animation */}
		<motion.div
		  initial={{ opacity: 0 }}
		  animate={{ opacity: 1 }}
		  transition={{ duration: 0.8 }}
		  className="max-w-4xl mx-auto px-4 md:px-10 py-8 md:py-8 mt-10 md:mt-8"
		>
        {/* Background Cover */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[150px] md:h-[250px] bg-gradient-to-r from-blue-500 to-purple-600 relative rounded-lg overflow-hidden shadow-lg"
        >
			<Image
			  src="/background.jpg"
			  alt="Profile Background"
			  fill
			  className="object-cover"
			  priority
			/>
        </motion.div>

        {/* Profile Picture & Name Section */}
        <div className="max-w-4xl mx-auto px-2 md:px-10">
          <div className="relative -mt-12 md:-mt-[96px] flex flex-col md:flex-row md:items-end gap-3 md:gap-4 pb-3 md:pb-4">
            {/* Profile Picture */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center md:block"
            >
			<Image
			  src="/header.png"
			  alt="Profile Picture"
			  width={168}
			  height={168}
			  className="w-28 h-28 md:w-[168px] md:h-[168px] rounded-full border-4 border-[#2c2a24] bg-white object-cover"
			  priority
			/>
            </motion.div>
            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center md:text-left md:pb-4"
            >
              <div className="flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-4">
                <h1 className="text-3xl md:text-7xl font-bold text-white [text-shadow:_0_0_20px_#2c2a24,_0_0_50px_#2c2a24]">OsGa</h1>
                <p className="text-base md:text-2xl text-white/80">(Yo-Rei Huang)</p>
              </div>
              <p className="text-white/90 text-xs md:text-base mt-1">CTF Player | Developer</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-4xl mx-auto px-4 md:px-10"
      >
        <hr className="border-gray-200" />
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-10 py-6 md:py-8">
        <AnimatedSection delay={0.8}>
          <section>
            <SectionTitle icon="whoami">Whoami</SectionTitle>
            <p className="mb-4 text-xs md:text-base text-white/80 leading-relaxed">
              Hi, I&apos;m OsGa, commonly known by the IDs OsGa or os24. I&apos;m a university student at National Yunlin University of Science and Technology with a passion for IT-related skills. I focus on cybersecurity, programming, and related fields, and I&apos;m actively involved in tech communities, often serving as a speaker at conferences and camps.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={1}>
          <section className="mt-8 md:mt-4">
            <SectionTitle icon="bio">Bio</SectionTitle>
            <div className="mt-3 md:mt-4 space-y-4">
              {education.map(({ school, department, degree, period }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-3"
                >
                  <span className="font-semibold text-xs md:text-base text-white">{school}</span>
                  <div className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-0">
                    <span className="text-xs md:text-sm text-white/70">{department}</span>
                    <span className="text-xs md:text-base text-white">{period}</span>
                  </div>
                  <p className="text-xs md:text-sm text-white/70 mt-1">{degree}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={1.2}>
        <section className="mt-12 md:mt-16">
          <SectionTitle icon="working">Working Experiences</SectionTitle>
          <dl className="space-y-4 my-3 md:my-4">
            {working.map(({ company, title, date }, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between gap-1 md:gap-2">
                <dt>
                  <span className="font-semibold text-xs md:text-base text-white">{company}</span>
                  <br />
                  <span className="text-xs md:text-sm text-white/70">{title}</span>
                </dt>
                <dd className="text-left md:text-right text-xs md:text-base text-white">{date}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 md:mt-16">
          <SectionTitle icon="certifications">Certifications</SectionTitle>
          <dl className="space-y-4 my-3 md:my-4">
            {certifications.map(({ title, issuer, date, id }, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between gap-1 md:gap-2">
                <dt>
                  <span className="font-semibold text-xs md:text-base text-white">{title}</span>
                  <br />
                  <span className="text-xs md:text-sm text-white/70">{issuer}</span>
                  {id && <span className="block text-xs md:text-sm text-white/70">Certificate ID: {id}</span>}
                </dt>
                <dd className="text-left md:text-right text-xs md:text-base text-white">{date}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 md:mt-16">
          <SectionTitle icon="contest">Contest</SectionTitle>
          <dl className="space-y-4 my-3 md:my-4">
            {Object.entries(contests)
              .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
              .flatMap(([year, contestList]) =>
                contestList.map(({ title, desc, href }, index) => (
                  <div key={`${year}-${index}`} className="flex flex-col md:flex-row justify-between gap-1 md:gap-2">
                    <dt>
                      <span className="flex text-xs md:text-base text-white">
                        {href ? (
                          <a className="text-blue-400 hover:text-blue-300" href={href} rel="noreferrer" target="_blank">
                            {title}
                          </a>
                        ) : (
                          title
                        )}
                      </span>
                      <span className="text-xs md:text-sm text-white/70">{desc}</span>
                    </dt>
                    <dd className="text-left md:text-right text-xs md:text-base text-white">{year}</dd>
                  </div>
                ))
              )}
          </dl>
        </section>

		<section className="mt-12 md:mt-16">
		  <SectionTitle icon="presentation">Presentation</SectionTitle>
		  <dl className="space-y-4 my-3 md:my-4">
			{presentations.map(({ desc, title, topic, category }, index) => {
			  // 這裡加上類型斷言
			  const IconComponent = categoryIcons[category as keyof typeof categoryIcons];

			  return (
				<div key={index} className="flex flex-col md:flex-row justify-between gap-1 md:gap-2">
				  <dt>
					<span className="flex items-center gap-2 text-xs md:text-base text-white">
					  {title}
					  {IconComponent && <IconComponent className="text-green-300" size={16} />}
					</span>
					{topic && <span className="text-xs md:text-sm text-white/70">{topic}</span>}
				  </dt>
				  <dd className="text-left md:text-right text-xs md:text-base text-white">{desc}</dd>
				</div>
			  );
			})}
		  </dl>
		</section>


        <section className="mt-12 md:mt-16">
          <SectionTitle icon="community">Community & Conference</SectionTitle>
          <dl className="space-y-4 my-3 md:my-4">
            {communityConferences.map(({ title, year, position }, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between gap-1 md:gap-2">
                <dt>
                  <span className="flex text-xs md:text-base text-white">{title}</span>
                  {position && <span className="text-xs md:text-sm text-white/70">{position}</span>}
                </dt>
                <dd className="text-left md:text-right text-xs md:text-base text-white">{year}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 md:mt-16">
          <SectionTitle icon="contact">Contact Me</SectionTitle>
          <ContactSection/>
        </section>

        </AnimatedSection>

        <AnimatedSection delay={1.4}>
          <Footer/>
        </AnimatedSection>
      </div>
    </main>
  );
}

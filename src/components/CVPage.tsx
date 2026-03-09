import type { ComponentType, ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrintButton from "@/components/PrintButton";
import experiencesData from "@/data/experiences.json";
import projectsData from "@/data/projects.json";
import {
  Award,
  Briefcase,
  GraduationCap,
  MicVocal,
  Shield,
  Users,
} from "lucide-react";

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
}

interface Presentation {
  title: string;
  topic?: string;
  desc: string;
}

interface CommunityConference {
  title: string;
  year: string;
  position?: string;
}

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  features?: string[];
  github: string;
  src: string | null;
}

interface ExperiencesData {
  education: Education[];
  working: Work[];
  certifications: Certification[];
  contests: Record<string, Contest[]>;
  presentations: Presentation[];
  communityConferences: CommunityConference[];
}

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <section className="print:break-inside-avoid">
      <div className="mb-3 flex items-center gap-2 border-b border-[#111827] pb-1">
        <div className="text-[#374151]">
          <Icon className="h-4 w-4" />
        </div>
        <h2 className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#111827]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function normalizeTech(tech: string) {
  return tech === "Websocket" ? "WebSocket" : tech;
}

export default function CVPage() {
  const {
    education,
    working,
    certifications,
    contests,
    presentations,
    communityConferences,
  } = experiencesData as ExperiencesData;
  const projectPriority = [
    "ohyeahsec-ctf",
    "nyust-ics",
    "SCIST-wc-scoreboard-2025",
    "quick-jump",
    "SCIST-wc-bot-2025",
  ];
  const selectedProjects = projectPriority
    .map((id) =>
      (projectsData as (Project & { id?: string })[]).find((project) => project.id === id)
    )
    .filter((project): project is Project => Boolean(project));
  const selectedTalks = presentations.slice(0, 6);
  const selectedCommunities = communityConferences.slice(0, 6);
  const selectedAwards = Object.entries(contests)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
    .flatMap(([year, items]) =>
      items.map((item) => ({
        year,
        title: item.title,
        desc: item.desc,
      }))
    )
    .slice(0, 10);
  const skillSet = Array.from(
    new Set(
      (projectsData as Project[])
        .flatMap((project) => project.tech)
        .map(normalizeTech)
    )
  ).sort();

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#111827] print:bg-white print:text-[#111827]">
      <div className="cv-print-hidden">
        <Navbar />
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 pt-24 print:max-w-none print:px-0 print:pb-0 print:pt-0">
        <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] print:shadow-none">
          <div className="px-7 py-7 print:px-8 print:py-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight print:text-[28px]">
                    Yo-Rei Huang
                  </h1>
                  <p className="mt-1 text-base text-[#374151] print:text-[13px]">
                    OsGa | Cybersecurity Practitioner | Full-Stack Developer
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-[#374151] print:text-[11px]">
                  <a href="mailto:hi@osga.dev">hi@osga.dev</a>
                  <a href="https://osga.dev">osga.dev</a>
                  <a href="https://github.com/OsGa24">github.com/OsGa24</a>
                  <a href="https://www.linkedin.com/in/yo-rei-huang-607543340/">
                    linkedin.com/in/yo-rei-huang-607543340
                  </a>
                </div>

                <p className="max-w-3xl text-[14px] leading-6 text-[#374151] print:max-w-none print:text-[11px] print:leading-5">
                  NYUST student with hands-on experience in cybersecurity,
                  developer tooling, web platforms, and student tech community
                  operations. Built and maintained internal websites, event
                  systems, and learning platforms while contributing as a
                  teaching assistant, speaker, and CTF competitor.
                </p>
              </div>

              <div className="flex shrink-0 items-start">
                <PrintButton label="Export PDF" />
              </div>
            </div>
          </div>

          <div className="grid gap-6 px-7 pb-8 md:grid-cols-[1.45fr_0.95fr] print:grid-cols-[1.5fr_0.9fr] print:gap-5 print:px-8 print:pb-6">
            <div className="space-y-5 print:space-y-4">
              <Section title="Experience" icon={Briefcase}>
                <div className="space-y-3 text-[13px] leading-5 text-[#374151] print:text-[10.5px] print:leading-[1.45]">
                  {working.map((item) => (
                    <div key={`${item.company}-${item.title}`}>
                      <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="font-semibold text-[#111827]">
                            {item.title}
                          </h3>
                          <p>{item.company}</p>
                        </div>
                        <p className="text-[#6b7280] md:pl-4">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Projects" icon={Briefcase}>
                <div className="space-y-4 text-[13px] leading-5 text-[#374151] print:text-[10.5px] print:leading-[1.45]">
                  {selectedProjects.map((project) => (
                    <div key={project.title}>
                      <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="font-semibold text-[#111827]">
                            {project.title}
                          </h3>
                          <p>{project.longDescription ?? project.description}</p>
                          <ul className="mt-1 list-disc pl-5">
                            {(project.features ?? [])
                              .filter((feature) => feature !== "NULL")
                              .slice(0, 2)
                              .map((feature) => (
                                <li key={`${project.title}-${feature}`}>{feature}</li>
                              ))}
                          </ul>
                          <p className="mt-1 text-[#4b5563]">
                            Tech: {project.tech.map(normalizeTech).join(", ")}
                          </p>
                        </div>
                        <div className="flex gap-2 text-[#6b7280] md:pl-4">
                          {project.src ? <a href={project.src}>Live</a> : null}
                          {project.src ? <span>/</span> : null}
                          <a href={project.github}>GitHub</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Speaking & Teaching" icon={MicVocal}>
                <div className="space-y-2.5 text-[13px] leading-5 text-[#374151] print:text-[10.5px] print:leading-[1.45]">
                  {selectedTalks.map((talk) => (
                    <div
                      key={`${talk.title}-${talk.desc}`}
                      className="flex flex-col gap-1 md:flex-row md:justify-between"
                    >
                      <div>
                        <h3 className="font-semibold text-[#111827]">
                          {talk.title}
                        </h3>
                        {talk.topic ? <p>{talk.topic}</p> : null}
                      </div>
                      <p className="text-[#6b7280]">{talk.desc}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            <div className="space-y-5 print:space-y-4">
              <Section title="Core Skills" icon={Shield}>
                <div className="space-y-2.5 text-[13px] leading-5 text-[#374151] print:text-[10.5px] print:leading-[1.45]">
                  <div>
                    <h3 className="font-semibold text-[#111827]">Security</h3>
                    <p>CTF, web security, offensive security practice, challenge design</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827]">Development</h3>
                    <p>{skillSet.join(", ")}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827]">Community Work</h3>
                    <p>Teaching assistance, workshops, talks, event operations, student community leadership</p>
                  </div>
                </div>
              </Section>

              <Section title="Education" icon={GraduationCap}>
                <div className="space-y-2.5 text-[13px] leading-5 text-[#374151] print:text-[10.5px] print:leading-[1.45]">
                  {education.map((item) => (
                    <div key={`${item.school}-${item.period}`}>
                      <h3 className="font-semibold text-[#111827]">
                        {item.school}
                      </h3>
                      <p>{item.department}</p>
                      <p className="text-[#6b7280]">
                        {item.degree} | {item.period}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Certifications" icon={Award}>
                <div className="space-y-2.5 text-[13px] leading-5 text-[#374151] print:text-[10.5px] print:leading-[1.45]">
                  {certifications.map((item) => (
                    <div key={`${item.title}-${item.id ?? item.date}`}>
                      <h3 className="font-semibold text-[#111827]">
                        {item.title}
                      </h3>
                      <p>{item.issuer}</p>
                      <p className="text-[#6b7280]">
                        {item.date}
                        {item.id ? ` | ${item.id}` : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Selected Competitions" icon={Award}>
                <div className="space-y-2 text-[13px] leading-5 text-[#374151] print:text-[10.5px] print:leading-[1.45]">
                  {selectedAwards.map((award) => (
                    <div key={`${award.year}-${award.title}`}>
                      <h3 className="font-semibold text-[#111827]">
                        {award.title}
                      </h3>
                      <p className="text-[#6b7280]">{award.year}</p>
                      {award.desc ? <p>{award.desc}</p> : null}
                    </div>
                  ))}
                </div>
              </Section>

              <Section title="Community & Leadership" icon={Users}>
                <div className="space-y-2 text-[13px] leading-5 text-[#374151] print:text-[10.5px] print:leading-[1.45]">
                  {selectedCommunities.map((item) => (
                    <div key={`${item.title}-${item.position}`}>
                      <h3 className="font-semibold text-[#111827]">
                        {item.title}
                      </h3>
                      {item.position ? <p>{item.position}</p> : null}
                      <p className="text-[#6b7280]">{item.year}</p>
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          </div>
        </div>

        <div className="cv-print-hidden">
          <Footer />
        </div>
      </div>
    </main>
  );
}

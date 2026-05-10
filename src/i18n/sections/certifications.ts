import type { CertificationsContent, Localized } from "../types";

export const certificationsContent = {
  "zh-TW": {
    certificationsTitle: "證照",
    certificationItems: [
      {
        date: "April 13, 2024",
        name: "Cisco Certified Support Technician Cybersecurity",
        issuer: "Cisco",
        id: "SxvH-u8w8",
      },
      {
        date: "April 13, 2024",
        name: "Information Technology Specialist: Cybersecurity",
        issuer: "Information Technician Specialist",
        id: "wmdx5-48Go",
      },
    ],
  },
  en: {
    certificationsTitle: "Certifications",
    certificationItems: [
      {
        date: "April 13, 2024",
        name: "Cisco Certified Support Technician Cybersecurity",
        issuer: "Cisco",
        id: "SxvH-u8w8",
      },
      {
        date: "April 13, 2024",
        name: "Information Technology Specialist: Cybersecurity",
        issuer: "Information Technician Specialist",
        id: "wmdx5-48Go",
      },
    ],
  },
} satisfies Localized<CertificationsContent>;

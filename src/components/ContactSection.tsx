import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { Mail, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
const ContactSection = () => {
  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'me@osga.lol',
      href: 'mailto:me@osga.lol'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: '@OsGa24',
      href: 'https://github.com/OsGa24'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Yo-Rei Huang',
      href: 'https://www.linkedin.com/in/oscar-huang-607543340/'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      value: '@os324_',
      href: 'https://www.instagram.com/os324_/'
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: 'Facebook',
      value: 'Oscar Huang',
      href: 'https://www.facebook.com/osga24/'
    },
    {
	  icon: <FaDiscord className="w-6 h-6" />,
      label: 'Discord',
      value: 'osga_',
      href: 'https://discord.com/users/osga_'
    }
  ];

  return (
    <section className="">
      <ul className="space-y-2">
        {contacts.map((contact, index) => (
          <li key={index}>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-3 rounded-lg text-base
                       transition-all duration-300
                       hover:bg-green-300/10"
            >
              <div className="p-2 rounded-full transition-colors duration-300 text-green-300">
                {contact.icon}
              </div>
              <span className="ml-4 font-medium text-gray-300 group-hover:text-green-300">
                {contact.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactSection;

import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import { Separator } from '@/components/ui/separator';
import { TbDental } from 'react-icons/tb';
import { FaGooglePlay } from 'react-icons/fa';

const sections = [
  {
    title: 'Services',
    links: [
      { name: 'Dental Checkups', href: '#' },
      { name: 'Teeth Whitening', href: '#' },
      { name: 'Orthodontics', href: '#' },
      { name: 'Dental Implants', href: '#' },
      { name: 'Cosmetic Dentistry', href: '#' },
      { name: 'Emergency Services', href: '#' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { name: 'Our Story', href: '#' },
      { name: 'Meet the Team', href: '#' },
      { name: 'Testimonials', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'Patient Resources',
    links: [
      { name: 'FAQs', href: '#' },
      { name: 'Insurance Info', href: '#' },
      { name: 'New Patient Forms', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-20 px-10">
      <footer>
        <div className="flex flex-col md:items-start gap-6">
          <div className="flex items-center gap-2">
            <TbDental className="text-4xl" />
            <span className="text-xl font-bold">Dental.ie</span>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex gap-2">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 p-2.5"
              >
                <FaWhatsapp className="size-7 text-background" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 p-2.5"
              >
                <FaGooglePlay className="size-7 text-background" />
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-14" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-4 text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="font-medium hover:text-primary">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-4 font-bold">Legal</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="#">Term of Services</a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <h3 className="mb-4 mt-8 font-bold">Social</h3>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaFacebook className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaInstagram className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaXTwitter className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaLinkedin className="size-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-14" />
        <p className="text-sm text-muted-foreground">
          © 2024 EngenMe. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Footer;

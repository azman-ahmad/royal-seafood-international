"use client";

import Link from "next/link";
import {
  MailOutlined,
  EnvironmentOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { companyDetails } from "@/data/contact";
import Image from "next/image";
import FooterImage from "@/../public/images/img-footer-map.png";
import comapnyLogo from "@/../public/images/company-logo.png";
const contactItems = [
  {
    icon: <WhatsAppOutlined className="text-lg mt-1" />,
    label: "Call Us",
    link: `https://wa.me/${companyDetails.phone.replace(/\D/g, "")}`,
    value: companyDetails.phone,
  },
  {
    icon: <EnvironmentOutlined className="text-lg mt-1" />,
    label: "Address",
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      companyDetails.address
    )}`,
    value: companyDetails.addressTitle,
  },
  {
    icon: <MailOutlined className="text-lg mt-1" />,
    label: "Email",
    link: `mailto:${companyDetails.email}`,
    value: companyDetails.email,
  },
  {
    icon: <FacebookOutlined className="text-lg mt-1" />,
    label: "Facebook",
    link: companyDetails.socialMedia.facebook,
    value: "Visit our Facebook page",
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white text-justify">
      <div className="mx-auto max-w-380 px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              {companyDetails.companyName}
            </h3>
            <p className="text-sm leading-relaxed text-white ">
              {companyDetails.description}
            </p>
            <div>
              <h3 className="font-semibold mb-2 ">Office hours:</h3>
              <p>{companyDetails.officeHours}</p>
            </div>
          </div>

          <div className="bg-primary text-white rounded-lg p-6 space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                {item.icon}
                <div>
                  <p className="text-sm  text-white">{item.label}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold text-white uppercase tracking-relaxed">
              we export worldwide
            </h2>
            <Image
              src={FooterImage}
              alt="Footer Image"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="my-10 border-t border-gray-200" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white">
            © {new Date().getFullYear()} {companyDetails.companyName}. All
            rights reserved.
          </p>
          <div className="flex gap-5">
            {["/", "/products", "/about", "/contact"].map((href, i) => (
              <Link key={i} href={href} className="hover:text-primary">
                {["Home", "Products", "About Us", "Contact"][i]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

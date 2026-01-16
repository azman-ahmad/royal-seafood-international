"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import {
  MailOutlined,
  WhatsAppOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { companyDetails } from "@/data/contact";
import Image from "next/image";
import comapnyLogo from "@/../public/images/company-logo.png";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const productMenu: MenuProps["items"] = [
  { key: "1", label: <Link href="/products/black-tiger">Black Tiger</Link> },
  {
    key: "2",
    label: <Link href="/products/fresh-water-scampi">Fresh Water Scampi</Link>,
  },
  { key: "3", label: <Link href="/products/vannamei">Vannamei</Link> },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const whatsappLink = `https://wa.me/${companyDetails.phone.replace(
    /\D/g,
    ""
  )}`;
  const addressLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    companyDetails.address
  )}`;
  return (
    <header className="sticky top-0 z-50 w-full ">
      <div className="bg-[#0b2d2a] text-white text-sm">
        <div className="mx-auto md:flex hidden flex-wrap gap-2 max-w-380 items-center justify-between px-8 py-2">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${companyDetails.email}`}
              className="flex items-center gap-2 hover:text-green-400"
            >
              <MailOutlined />
              {companyDetails.email}
            </a>

            <a
              href={addressLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-400"
            >
              <MapPinIcon className="text-white w-5 h-5" />
              {companyDetails.addressTitle}
            </a>
            <span className="flex items-center gap-2">
              <ClockCircleOutlined />
              {companyDetails.officeHours}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-bold">Follow Us:</span>
            <a
              href={companyDetails.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center font-bold"
            >
              f
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white shadow relative ">
        <div className="mx-auto flex max-w-380 items-center justify-between px-8">
          <div className=" flex items-center">
            {/* Green Background Shape */}
            <div
              className="absolute inset-0 bg-primary md:w-1/3 w-4/5"
              style={{
                clipPath: "polygon(0 0, 80% 0, 95% 100%, 0% 100%)",
                // width: "30%",
              }}
            />
            {/* Logo Content */}
            <Link
              href="/"
              className="relative z-10  pr-16 text-white font-bold text-3xl tracking-tight flex items-center gap-2"
            >
              <Image
                src={comapnyLogo}
                alt="Company Logo"
                width={230}
                height={20}
                className="relative z-10 pr-16 py-2"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-semibold">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              if (item.label === "Products") {
                return (
                  <Dropdown
                    key="products"
                    rootClassName="product-dropdown"
                    menu={{ items: productMenu }}
                    trigger={["hover"]}
                  >
                    <span
                      className={`cursor-pointer flex items-center gap-1 hover:text-primary ${
                        active ? "text-green-600" : "text-black"
                      }`}
                    >
                      Products
                    </span>
                  </Dropdown>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active ? "text-green-600" : "text-black hover:text-primary"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3"
          >
            <div className="h-12 w-12 rounded-full bg-green-600 text-white flex items-center justify-center">
              <WhatsAppOutlined />
            </div>
            <div className="text-sm leading-tight">
              <p className="text-green-600 font-semibold text-center">
                WhatsApp
              </p>
              <p className="font-bold text-gray-900">{companyDetails.phone}</p>
            </div>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="h-0.5 w-6 bg-black" />
            <span className="h-0.5 w-6 bg-black" />
            <span className="h-0.5 w-6 bg-black" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col px-6 py-6 gap-5 font-semibold">
            {navItems.map((item) => {
              if (item.label === "Products") {
                return (
                  <div key="mobile-products" className="flex flex-col gap-3">
                    <span className="font-bold text-gray-900">Products</span>
                    {productMenu?.map(
                      (p) =>
                        p &&
                        "label" in p &&
                        p.label &&
                        typeof p.label === "object" && (
                          <Link
                            key={p.key}
                            href={(p.label as any).props.href}
                            onClick={() => setOpen(false)}
                            className="pl-4 text-gray-600"
                          >
                            {(p.label as any).props.children}
                          </Link>
                        )
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-900"
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 pt-4 border-t "
            >
              <WhatsAppOutlined
                className="text-xl text-green-600"
                style={{ color: "var(--color-primary)" }}
              />
              <span className="text-primary">{companyDetails.phone}</span>
            </a>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={`mailto:${companyDetails.email}`}
                className="flex items-center gap-2 text-primary"
              >
                <MailOutlined />
                {companyDetails.email}
              </a>

              <a
                href={addressLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary"
              >
                <MapPinIcon className="text-primary w-5 h-5" />
                {companyDetails.addressTitle}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

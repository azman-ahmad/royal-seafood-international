"use client";

import { CheckCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import CEOAvatar from "@/../public/images/ceo-avatar.png";
import AboutUSImage_1 from "@/../public/images/about-us-1.jpeg";
import AboutUSImage_2 from "@/../public/images/about-us-2.jpeg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
const aboutData = {
  experienceYears: "7+",
  heading: "Work as a Foreign Buyer's Local Agent",
  description:
    "Royal Seafood International is a seafood consulting firm that facilitates the buying process of seafood from Bangladesh, India, and Vietnam. Since 2019, we have been working as a foreign buyer’s local agent, sourcing the best quality seafood for importers, wholesalers, and supermarkets all over the globe. Our practice is overseen by a team of highly specialized professionals who ensure the delivery of high-quality products on time and at volume-discount prices.",
  features: [
    "Acts as foreign buyer's local agent",
    "Pre-shipment inspection at all times",
    "Provides best quality shrimps at the best price",
    "Provides information about the local market",
    "Negotiates the price on behalf of the clients",
    "Strictly supervises and monitors all processes until shipment",
  ],
  ceo: {
    quote: "Let's continue to dream big, act boldly. Thank you.",
    statement:
      "It's an honor to stand before you today as we reflect on our journey and envision the path ahead.",
    image: CEOAvatar,
  },
  images: {
    AboutUSImage_1,
    AboutUSImage_2,
  },
};

const AboutSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className=" md:py-16 md:text-start text-justify">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex gap-4 h-full">
          <div className="absolute top-0 md:right-20 right-10 z-10 bg-white p-6 shadow-xl border-l-4  md:w-56">
            <h2 className="text-4xl font-bold leading-none text-primary">
              {aboutData.experienceYears}
            </h2>
            <p className="text-gray-600 font-semibold text-sm mt-1">
              Years of experience
            </p>
          </div>

          <div className="w-1/2 relative rounded-sm overflow-hidden hadow-sm">
            <Image
              src={aboutData.images.AboutUSImage_2}
              alt="Cleaning Service"
              className="w-full h-full"
            />
          </div>

          <div className="w-1/2 pt-20">
            <div className="h-full rounded-sm overflow-hidden  shadow-sm">
              <Image
                src={aboutData.images.AboutUSImage_1}
                alt="Cleaning Detail"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <div className=" text-primary font-bold uppercase tracking-wider text-base ">
            About Us
          </div>

          <h1 className="text-4xl font-extrabold text-black leading-tight">
            {aboutData.heading}
          </h1>

          <p className="text-gray-500 leading-relaxed text-base text-justify">
            {aboutData.description}
          </p>

          <div className="p-6 rounded-lg border border-gray-100 flex items-start gap-4">
            <Image
              src={CEOAvatar}
              alt="ceo avatar"
              width={80}
              height={80}
              className="object-cover transition duration-500 group-hover:scale-105 rounded-full"
            />

            <div>
              <h4 className="font-bold text-[#002147]">
                Inspiring Growth and Innovation
              </h4>
              <p className="text-gray-500 text-sm italic mb-2">
                "{aboutData.ceo.statement}"
              </p>
              <p className="text-sm">
                <span className="font-bold text-primary">CEO Message</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {aboutData.ceo.quote}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutData.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2  font-medium">
                <CheckCircleOutlined
                  className="text-lg mt-2"
                  style={{ color: "var(--color-primary)" }}
                />
                <span className="text-gray-500">{feature}</span>
              </div>
            ))}
          </div>

          {pathname !== "/about" && (
            <div className="pt-4">
              <button
                className="bg-primary h-14 px-10 rounded-md font-bold text-sm uppercase flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/about")}
              >
                Read More <ArrowRightOutlined />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

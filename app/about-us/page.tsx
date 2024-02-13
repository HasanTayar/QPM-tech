import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsPageEn = () => {
  return (
    <main className="container mx-auto px-4 lg:px-8 xl:px-16">
      {/* Main section talking about the company */}
      <section className="my-8 lg:my-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/about-us-image-1.avif"
              alt="About us image 1"
              width={500}
              height={500}
              quality={100}
              className="rounded-lg"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-8 w-full md:w-1/2">
            <h1 className="text-center font-bold text-4xl md:text-5xl">
              Experienced Developers
            </h1>
            <p className="text-lg leading-relaxed mt-4">
              With a passion for web development and a focus on customer
              satisfaction, Quantum Pinnacle Matrix has been creating stunning
              websites and applications since 2022. We specialize in developing
              websites using WordPress, HTML, CSS, JS, React, and Angular. Our
              team is dedicated to understanding your business needs and
              delivering tailor-made solutions. Whether you need a mobile
              application, desktop application, or digital marketing services,
              we've got you covered. Contact us today to take your business to
              the next level.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>Expertise</p>
                <span className="ml-2 text-gray-500">Since 2022</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>Building Successful Websites</p>
                <span className="ml-2 text-gray-500">Since 2022</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>Providing Customized Solutions</p>
                <span className="ml-2 text-gray-500">Since 2022</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>Creating Innovative Solutions</p>
                <span className="ml-2 text-gray-500">Since 2022</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section talking about Innovative Projects */}
      <section className="my-8 lg:my-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
          Innovative Projects
        </h1>
        <p className="text-lg leading-relaxed mb-8 text-center">
          Our portfolio showcases our expertise in developing innovative
          projects that meet the unique requirements of our clients. From
          e-commerce websites to corporate applications, we have successfully
          delivered a wide range of projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mx-auto">
            <Image
              src="/e-commerce.svg"
              width={500}
              height={500}
              alt="e-commerce photo"
              quality={100}
              className="rounded-lg"
            />
            <h2 className="text-xl lg:text-2xl font-bold mt-4 mb-2 text-center">
              E-commerce Solutions
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-center">
              We specialize in creating customized e-commerce solutions that
              help businesses drive sales and increase revenue. Our team has
              extensive experience in developing secure and user-friendly online
              stores that provide a seamless shopping experience.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/mobile-development-image.svg"
              width={500}
              height={500}
              alt="mobile development image"
              quality={100}
              className="rounded-lg"
            />
            <h2 className="text-xl lg:text-2xl font-bold mt-4 mb-2 text-center">
              Mobile Applications
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-center">
              Our mobile applications are designed to provide exceptional user
              experiences and meet the specific needs of our clients. We develop
              native and cross-platform apps for iOS and Android devices,
              ensuring compatibility and performance across all platforms.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/digital-marketing.svg"
              width={500}
              height={500}
              alt="digital marketing image"
              quality={100}
              className="rounded-lg"
            />
            <h2 className="text-xl lg:text-2xl font-bold mt-4 mb-2 text-center">
              Digital Marketing
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-center">
              We help you grow your business online with effective digital
              marketing services. We create and execute strategies for SEO, PPC,
              social media, email marketing, and more. We use data and tools to
              optimize and measure your campaigns. We can help you achieve your
              digital marketing goals.
            </p>
          </div>
          {/* Add more project sections here */}
        </div>
        <div className="flex justify-center items-center mt-8">
          <Link href="/contact">
            <Button className="text-white text-lg px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              Contact us now!
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPageEn;

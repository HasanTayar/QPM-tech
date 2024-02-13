import React from "react";
import Image from "next/legacy/image";
import { Button } from "../ui/button";
import Link from "next/link";

const AboutUsEn = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen p-5 md:p-10 bg-white md:mr-48 ">
      {/* Image container */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end p-5">
        <div className="w-3/4 md:w-2/3 lg:w-1/2 md:mr-20">
          {/* Replace with your actual image path */}
          <Image
            src="/about-us.avif"
            alt="About us"
            layout="responsive"
            width={400}
            height={300}
            objectFit="contain"
          />
        </div>
      </div>
      {/* Text content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          About Us
        </h2>
        <p className="text-md md:text-lg mb-4">
          We are a freelance company founded by Hasan Diab, specializing in
          website and application development using Wordpress, HTML, CSS, JS,
          React, and Angular. Our services also include digital marketing.
        </p>
        <Link href="/about-us">
          <Button
            variant="outline"
            className=" font-bold py-2 px-4 w-40 text- h-20 rounded hover:bg-gray-200 transition duration-300"
          >
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUsEn;

import React from "react";
import Image from "next/legacy/image";
import { Button } from "../ui/button";
import Link from "next/link";

const AboutUsHe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen p-5 md:p-10 bg-white md:mr-48 ">
      {/* Image container */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end p-5">
        <div className="w-3/4 md:w-2/3 lg:w-1/2 md:mr-20">
          {/* Replace with your actual image path */}
          <Image
            src="/about-us.avif"
            alt="About us"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
      </div>
      {/* Text content */}
      <div className="w-full md:w-1/2 text-center md:text-right">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          حولنا
        </h2>
        <p className="text-md md:text-lg mb-4">
          نحن شركة مستقلة أسسها حسان دياب، متخصصة في تطوير المواقع الإلكترونية
          والتطبيقات التي تستخدم WordPress وHTML وCSS وJS وReact وAngular.
          الخدمات تشمل خدماتنا أيضًا التسويق الرقمي.
        </p>
        <Link href="/he/about-us">
          <Button
            variant="outline"
            className=" font-bold py-2 px-4 w-40 text-right h-20 rounded hover:bg-gray-200 transition duration-300"
          >
            أقرأ أكثر{" "}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUsHe;

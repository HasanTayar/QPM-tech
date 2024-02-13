import Image from "next/legacy/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroAr = () => {
  return (
    <section className="relative w-full min-h-screen bg-white">
      {/* Container for the images and text */}
      <div className="flex flex-col lg:flex-row items-center justify-center h-full">
        {/* Left side image for larger screens */}
        <div className="hidden lg:flex lg:w-1/2 h-full justify-start items-start lg:p-10 lg:mb-72">
          <Image
            src="/home-photo-1.avif"
            alt="home-page-1"
            width={412}
            height={412}
            objectFit="cover"
            quality={100}
            suppressHydrationWarning
          />
        </div>

        {/* Text content */}
        <div className="z-10 p-5 text-center lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl text-black font-bold mb-5">
            Quantum Pinnacle Matrix
          </h1>
          <p className="text-lg lg:text-xl text-black mb-5">
            نحن نبني مواقع وتطبيقات عملية وجميلة باستخدام أحدث التقنيات
            المبتكرة.
          </p>
          <Link href="/ar/contact">
            <Button className="font-bold py-2 px-4 w-40 text-xl h-20 rounded">
              لنبدأ
            </Button>
          </Link>
        </div>

        <div className="hidden lg:flex lg:w-1/2 h-full justify-end items-end lg:p-10 lg:mt-72">
          <Image
            src="/home-photo-2.avif"
            alt="home-page-feature"
            width={412}
            height={412}
            objectFit="cover"
            quality={100}
            suppressHydrationWarning
          />
        </div>
      </div>

      {/* Images for smaller screens */}
      <div className="lg:hidden w-full p-5 flex flex-row items-center">
        {/* Image 1 */}
        <div className="w-64 h-64 mr-3">
          <Image
            src="/home-photo-1.avif"
            alt="home-page-1"
            layout="responsive"
            width={256}
            height={256}
            objectFit="cover"
            quality={100}
            suppressHydrationWarning
          />
        </div>
        {/* Image 2 */}
        <div className="w-64 h-64 mt-5">
          <Image
            src="/home-photo-2.avif"
            alt="home-page-feature"
            layout="responsive"
            width={256}
            height={256}
            objectFit="cover"
            quality={100}
            suppressHydrationWarning
          />
        </div>
      </div>
    </section>
  );
};

export default HeroAr;

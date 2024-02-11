import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HeroEN = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-white">
      {/* Top left image */}
      <div className="absolute top-0 left-0 z-10 p-10">
        <div className="relative w-64 h-64">
          {" "}
          {/* Adjust the width and height as needed */}
          <Image
            src="/home-photo-1.avif"
            alt="home-page-1"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>

      {/* Text content */}
      <div className="z-10 p-5 text-center">
        <h1 className="text-5xl text-black font-bold mb-5">
          Quantum Pinnacle Matrix
        </h1>
        <p className="text-xl text-black mb-5">
          Creating Websites and Applications for Your Business
        </p>
        <Button className="font-bold py-2 px-4 rounded">Get Started</Button>
      </div>

      {/* Bottom right image */}
      <div className="absolute bottom-0 right-0 z-10 p-10">
        <div className="relative w-64 h-64">
          {" "}
          {/* Adjust the width and height as needed */}
          <Image
            src="/home-photo-2.avif"
            alt="home-page-feature"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroEN;

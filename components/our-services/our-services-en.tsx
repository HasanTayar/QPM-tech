import Image from "next/image";
import React from "react";

const OurServicesEn = () => {
  return (
    <React.Fragment>
      <h1 className="text-5xl md:text-4xl bg-black p-5  text-white text-center">
        Our Services
      </h1>

      <section className="bg-black text-white p-10 md:flex md:justify-between md:items-center">
        {/* Website Development */}
        <div className="flex flex-col items-center mb-10 md:mb-0 md:w-1/2 p-10 md:flex md:flex-row md:space-x-5">
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/web-dev.avif"
              alt="Website Development"
              layout="responsive"
              width={300}
              height={200}
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mt-5">Website Development</h3>
            <p className="mt-5">
              We offer a range of services including website and mobile
              application development, desktop application development, and
              digital marketing.
            </p>
          </div>
        </div>

        {/* Application Development */}
        <div className="flex flex-col items-center md:w-1/2 p-10 md:flex md:flex-row md:space-x-5">
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/application-development.avif"
              alt="Application Development"
              layout="responsive"
              objectFit="cover"
              width={300}
              height={200}
              quality={100}
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mt-5">Application Development</h3>
            <p className="mt-5">
              Our team of experts can create custom websites and applications
              tailored to meet your specific needs.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OurServicesEn;

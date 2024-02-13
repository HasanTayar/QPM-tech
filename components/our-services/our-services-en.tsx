import Image from "next/legacy/image";
import React from "react";

const OurServicesEn = () => {
  return (
    <React.Fragment>
      <h1 className="text-5xl md:text-4xl bg-black p-5  text-white text-center">
        Our Services
      </h1>

      <section className="container mx-auto bg-black text-white p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Website Development */}
        <div className="flex flex-col items-center">
          <div className="w-full relative">
            <Image
              src="/e-commerce.svg"
              alt="Website Development"
              layout="responsive"
              width={300}
              height={200}
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-bold mt-5 text-center">
              Website Development
            </h3>
            <p className="mt-5 text-center">
              We offer a range of services including website and mobile
              application development, desktop application development, and
              digital marketing.
            </p>
          </div>
        </div>

        {/* Application Development */}
        <div className="flex flex-col items-center">
          <div className="w-full relative">
            <Image
              src="/mobile-development-image.svg"
              alt="Application Development"
              layout="responsive"
              objectFit="cover"
              width={300}
              height={200}
              quality={100}
              suppressHydrationWarning
            />
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-bold mt-5 text-center">
              Application Development
            </h3>
            <p className="mt-5 text-center">
              Our team of experts can create custom websites and applications
              tailored to meet your specific needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full relative">
            <Image
              src="/digital-marketing.svg"
              alt="Digital Marketing"
              layout="responsive"
              objectFit="cover"
              width={300}
              height={200}
              quality={100}
              suppressHydrationWarning
            />
          </div>
          <div className="w-full">
            <h3 className="text-2xl font-bold mt-5 text-center">
              Digital Marketing
            </h3>
            <p className="mt-5 text-center">
              Our experts provide custom digital marketing services to help you
              achieve your goals. We offer SEO, PPC, social media, email
              marketing, and more.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OurServicesEn;

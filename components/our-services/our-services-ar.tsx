import Image from "next/legacy/image";
import React from "react";

const OurServicesAr = () => {
  return (
    <React.Fragment>
      <h1 className="text-5xl md:text-4xl bg-black p-5  text-white text-center">
        خدماتنا{" "}
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
              تطوير المواقع الكترونيه{" "}
            </h3>
            <p className="mt-5 text-center">
              نحن نقدم مجموعة متنوعة من الخدمات بما في ذلك تطوير مواقع الويب
              وتطبيقات الهاتف المحمول، تطوير تطبيقات سطح المكتب والتسويق الرقمي.
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
              تطوير التطبيقات{" "}
            </h3>
            <p className="mt-5 text-center">
              يمكن لفريق الخبراء لدينا إنشاء مواقع ويب وتطبيقات مخصصة لاحتياجاتك
              المحددة.
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
              التسويق الرقمي{" "}
            </h3>
            <p className="mt-5 text-center">
              يقدم خبراؤنا خدمات تسويق رقمية مخصصة للمساعدة اذهب لتحقيق أهدافك.
              نحن نقدم SEO، PPC، وسائل التواصل الاجتماعي، البريد الإلكتروني
              التسويق وأكثر.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OurServicesAr;

import Image from "next/image";
import React from "react";

const OurServicesHe = () => {
  return (
    <React.Fragment>
      <h1 className="text-5xl md:text-4xl bg-black p-5  text-white text-center">
        השירותים שלנו
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
              פיתוח אתרי אינטרנט
            </h3>
            <p className="mt-5 text-center">
              אנו מציעים מגוון שירותים לרבות אתר אינטרנט ומובייל פיתוח יישומים,
              פיתוח יישומים שולחניים ו שיווק דיגיטלי.
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
              פיתוח אפליקציות
            </h3>
            <p className="mt-5 text-center">
              צוות המומחים שלנו יכול ליצור אתרים ואפליקציות מותאמות אישית מותאם
              לצרכים הספציפיים שלך.
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
              שיווק דיגיטלי
            </h3>
            <p className="mt-5 text-center">
              המומחים שלנו מספקים שירותי שיווק דיגיטלי מותאמים אישית כדי לעזור
              לך להשיג את המטרות שלך. אנו מציעים SEO, PPC, מדיה חברתית, אימייל
              שיווק ועוד.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default OurServicesHe;

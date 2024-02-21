import AboutUsHe from "@/components/about/about-us-he";
import ContactUsFormHe from "@/components/forms/contact-us-form-he";
import HeroHe from "@/components/hero/hero-he";
import OurServicesHe from "@/components/our-services/our-services-he";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QPMatrix | דף ראשי",
  description:
    "אנחנו חברת פיתוח אתרים ואפליקציות מובילה בישראל, המומחית בשימוש בטכנולוגיות החדשניות ביותר, כגון וורדפרס, HTML, CSS, JS, React, ו-Angular. אנחנו גאים להציע ללקוחותינו שירותים איכותיים ומקצועיים, המתאימים לצרכים ולתקציב שלהם. בנוסף, אנחנו מספקים שירותי שיווק דיגיטלי מקיפים, הכוללים קידום אורגני, פרסום בגוגל, ניהול רשתות חברתיות, ועוד. אם אתם מחפשים פתרון מושלם לנוכחות הדיגיטלית שלכם, אנחנו כאן בשבילכם!",
  openGraph: {
    // Specify the title of your content
    title: "QPMatrix | דף ראשי",
    // Specify the description of your content
    description:
      "אנחנו חברת פיתוח אתרים ואפליקציות מובילה בישראל, המומחית בשימוש בטכנולוגיות החדשניות ביותר, כגון וורדפרס, HTML, CSS, JS, React, ו-Angular.",
    // Specify the type of your content, e.g. website, article, video, etc.
    type: "website",
    // Specify the URL of your content
    url: "https://qpmatrix.tech/he/",
    // Specify the image of your content, e.g. logo, screenshot, etc.
    images: [
      {
        // Specify the URL of the image
        url: "/QPM.LOGO.svg",
        // Specify the width of the image in pixels
        width: 800,
        // Specify the height of the image in pixels
        height: 600,
        // Specify the alternative text of the image
        alt: "QPMatrix Logo",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main>
        <HeroHe />
        <AboutUsHe />
        <OurServicesHe />
        <section>
          <h1 className="text-center text-6xl md:text-4xl mt-5 font-bold">
            צרו קשר!
          </h1>
          <p className=" text-center mt-2">
            צור איתנו קשר כדי לדון בדרישות הפרויקט שלך או לכל אחד פניות. אנחנו
            כאן כדי לעזור!
          </p>
          <ContactUsFormHe />
        </section>
      </main>
    </>
  );
}

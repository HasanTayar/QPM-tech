import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  // Change the title of your content to "QPMatrix | Contact Us"
  title: "QPMatrix | אדתנו",
  // Change the description of your content to summarize your contact details
  description:
    "אנחנו חברת פיתוח אתרים ואפליקציות מובילה בישראל, המומחית בשימוש בטכנולוגיות החדשניות ביותר, כגון וורדפרס, HTML, CSS, JS, React, ו-Angular. אם אתם מעוניינים לשמוע עוד על השירותים שלנו, או לקבל הצעת מחיר, אנא צרו איתנו קשר באמצעות הטופס, האימייל, או הטלפון שלנו. אנחנו נשמח לעמוד לרשותכם בכל שאלה או בקשה.",
  openGraph: {
    // Change the title of your content to "QPMatrix | Contact Us"
    title: "QPMatrix | אדתנו",
    // Change the description of your content to summarize your contact details
    description:
      "אנחנו חברת פיתוח אתרים ואפליקציות מובילה בישראל, המומחית בשימוש בטכנולוגיות החדשניות ביותר, כגון וורדפרס, HTML, CSS, JS, React, ו-Angular. אם אתם מעוניינים לשמוע עוד על השירותים שלנו, או לקבל הצעת מחיר, אנא צרו איתנו קשר באמצעות הטופס, האימייל, או הטלפון שלנו. אנחנו נשמח לעמוד לרשותכם בכל שאלה או בקשה.",
    // Change the type of your content to "article"
    type: "article",
    // Change the URL of your content to match the contact page
    url: "https://qpmatrix.tech/he/about-us",
    // Change the image of your content to show your contact details
    images: [
      {
        // Specify the URL of the image
        url: "/about-us.avif",
        // Specify the width of the image in pixels
        width: 800,
        // Specify the height of the image in pixels
        height: 600,
        // Specify the alternative text of the image
        alt: "Our contact details",
      },
    ],
  },
};

const AboutUsHePage = () => {
  return (
    <main className="container mx-auto px-4 lg:px-8 xl:px-16" dir="rtl">
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
              מפתחים מנוסים{" "}
            </h1>
            <p className="text-lg leading-relaxed mt-4">
              עם תשוקה לפיתוח אתרים והתמקדות בלקוח סיפוק, Quantum Pinnacle
              Matrix יצרה מדהים אתרים ואפליקציות מאז 2022. אנו מתמחים בפיתוח
              אתרים המשתמשים בוורדפרס, HTML, CSS, JS, React ו-Angular. שֶׁלָנוּ
              הצוות מוקדש להבנת הצרכים העסקיים שלך מתן פתרונות מותאמים אישית.
              בין אם אתה צריך נייד יישום, יישום שולחני או שירותי שיווק דיגיטלי,
              אנחנו מכוסים אותך. צור איתנו קשר עוד היום כדי לקחת את העסק שלך
              לשלב הבא.
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
                <p>מומחיות</p>
                <span className="mr-2 text-gray-500">מאז 2022</span>
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
                <p>בניית אתרים מוצלחים</p>
                <span className="mr-2 text-gray-500">מאז 2022</span>
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
                <p>מתן פתרונות מותאמים אישית</p>
                <span className="mr-2 text-gray-500">מאז 2022</span>
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
                <p>יצירת פתרונות חדשניים</p>
                <span className="mr-2 text-gray-500">מאז 2022</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section talking about Innovative Projects */}
      <section className="my-8 lg:my-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
          פרויקטים חדשניים{" "}
        </h1>
        <p className="text-lg leading-relaxed mb-8 text-center">
          תיק העבודות שלנו מציג את המומחיות שלנו בפיתוח חדשני פרויקטים העונים על
          הדרישות הייחודיות של לקוחותינו. מ אתרי מסחר אלקטרוני ליישומים
          ארגוניים, יש לנו בהצלחה העביר מגוון רחב של פרויקטים.
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
              פתרונות מסחר אלקטרוני{" "}
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-center">
              אנו מתמחים ביצירת פתרונות מסחר אלקטרוני מותאמים לעזור לעסקים להניע
              מכירות ולהגדיל הכנסות. לצוות שלנו יש ניסיון רב בפיתוח מקוון מאובטח
              וידידותי למשתמש חנויות המספקות חווית קניה חלקה.
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
              אפליקציות ניידות{" "}
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-center">
              האפליקציות שלנו לנייד נועדו לספק משתמש יוצא דופן חוויות ועונה על
              הצרכים הספציפיים של לקוחותינו. אנחנו מפתחים אפליקציות מקוריות
              וחוצות פלטפורמות עבור מכשירי iOS ואנדרואיד, הבטחת תאימות וביצועים
              בכל הפלטפורמות.
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
              שיווק דיגיטלי{" "}
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-center">
              אנו עוזרים לך להצמיח את העסק שלך באינטרנט באמצעות דיגיטל אפקטיבי
              שירותי שיווק. אנו יוצרים ומבצעים אסטרטגיות לקידום אתרים, PPC, מדיה
              חברתית, שיווק בדואר אלקטרוני ועוד. אנו משתמשים בנתונים ובכלים כדי
              בצע אופטימיזציה ומדוד את מסעות הפרסום שלך. אנחנו יכולים לעזור לך
              להשיג את שלך מטרות שיווק דיגיטלי.
            </p>
          </div>
          {/* Add more project sections here */}
        </div>
        <div className="flex justify-center items-center mt-8">
          <Link href="/he/contact">
            <Button className="text-white text-lg px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              צור איתנו קשר עכשיו!{" "}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUsHePage;

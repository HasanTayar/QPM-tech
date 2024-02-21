import ContactUsFormHe from "@/components/forms/contact-us-form-he";
import Link from "next/link";
import React from "react";
// import Map from "@/components/Map";
import { Metadata } from "next/types";
export const metadata: Metadata = {
  // Change the title of your content to "QPMatrix | Contact Us"
  title: "QPMatrix | צור קשר",
  // Change the description of your content to summarize your contact details
  description:
    "אנחנו תמיד פתוחים לשמוע ממך ולענות על כל שאלה או בקשה שיש לך. אתה יכול ליצור איתנו קשר באמצעות הטופס הבא, או לשלוח לנו אימייל לכתובת info@qpmatrix.tech, או להתקשר לנו בטלפון 9720524802045 אנחנו נשתדל לחזור אליך בהקדם האפשרי.",
  openGraph: {
    // Change the title of your content to "QPMatrix | Contact Us"
    title: "QPMatrix | צור קשר",
    // Change the description of your content to summarize your contact details
    description:
      "אנחנו תמיד פתוחים לשמוע ממך ולענות על כל שאלה או בקשה שיש לך. אתה יכול ליצור איתנו קשר באמצעות הטופס הבא, או לשלוח לנו אימייל לכתובת info@qpmatrix.tech, או להתקשר לנו בטלפון 9720524802045 אנחנו נשתדל לחזור אליך בהקדם האפשרי.",
    // Change the type of your content to "article"
    type: "article",
    // Change the URL of your content to match the contact page
    url: "https://qpmatrix.tech/he/contact",
    // Change the image of your content to show your contact details
    images: [
      {
        // Specify the URL of the image
        url: "/contact-image.avif",
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

const ContactPageHe = () => {
  return (
    <main className="mx-auto max-w-4xl" dir="rtl">
      {/* Set a max-width to prevent the layout from stretching too wide on large screens */}
      <div className="m-4 p-4 space-y-5 md:space-y-8 lg:space-y-12">
        {/* Increase spacing progressively for larger screens */}
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900">
          {/* Adjust font sizes for different screens */}
          צור קשר!
        </h1>
        <p className="text-base md:text-lg">
          {/* Adjust base text size for readability */}
          צור איתנו קשר עוד היום!{" "}
        </p>
        <Link href="mailto:info@QPMatrix.tech">
          <p className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
            info@QPMatrix.tech
          </p>
        </Link>
        <section className="flex flex-col md:flex-row md:justify-between items-center">
          <ContactUsFormHe />
        </section>

        <section className="mt-8 p-4">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900">
            כתובת | שעות עבודה{" "}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mt-4">
            טמרה, מחוז צפון, ישראל{" "}
          </p>
          <p className="text-lg md:text-xl text-slate-500 mt-4">
            ראשון-שישי:9:00-17:00
          </p>
        </section>
      </div>
    </main>
  );
};

export default ContactPageHe;

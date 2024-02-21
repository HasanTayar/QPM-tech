import ContactUsFormEn from "@/components/forms/contact-us-form-en";
import Image from "next/legacy/image";
import Link from "next/link";
import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  // Change the title of your content to "QPMatrix | About Us"
  title: "QPMatrix | אודותינו",
  // Change the description of your content to summarize your team and vision
  description:
    "אנחנו חברת פיתוח אתרים ואפליקציות עצמאית שהוקמה על ידי חסן דיאב, בעל ניסיון רב בתחום הטכנולוגיה והשיווק הדיגיטלי. אנחנו מורכבים מצוות מומחים ומיומנים, המשתמשים בטכנולוגיות החדשניות ביותר, כגון וורדפרס, HTML, CSS, JS, React, ו-Angular. החזון שלנו הוא להפוך את העולם למקום טוב יותר באמצעות יצירת פתרונות דיגיטליים איכותיים ומותאמים אישית לכל סוג של עסק או ארגון.",
  openGraph: {
    // Change the title of your content to "QPMatrix | About Us"
    title: "QPMatrix | אודותינו",
    // Change the description of your content to summarize your team and vision
    description:
      "אנחנו חברת פיתוח אתרים ואפליקציות עצמאית שהוקמה על ידי חסן דיאב, בעל ניסיון רב בתחום הטכנולוגיה והשיווק הדיגיטלי. אנחנו מורכבים מצוות מומחים ומיומנים, המשתמשים בטכנולוגיות החדשניות ביותר, כגון וורדפרס, HTML, CSS, JS, React, ו-Angular. החזון שלנו הוא להפוך את העולם למקום טוב יותר באמצעות יצירת פתרונות דיגיטליים איכותיים ומותאמים אישית לכל סוג של עסק או ארגון.",
    // Change the type of your content to "article"
    type: "article",
    // Change the URL of your content to match the about us page
    url: "https://qpmatrix.tech/he/about-us",
    // Change the image of your content to show your team
    images: [
      {
        // Specify the URL of the image
        url: "https://qpmatrix.tech/about-us.avif",
        // Specify the width of the image in pixels
        width: 800,
        // Specify the height of the image in pixels
        height: 600,
        // Specify the alternative text of the image
        alt: "Our team",
      },
    ],
  },
};
const ContactPageEn = () => {
  return (
    <main className="mx-auto max-w-4xl">
      {/* Set a max-width to prevent the layout from stretching too wide on large screens */}
      <div className="m-4 p-4 space-y-5 md:space-y-8 lg:space-y-12">
        {/* Increase spacing progressively for larger screens */}
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900">
          {/* Adjust font sizes for different screens */}
          Reach out!
        </h1>
        <p className="text-base md:text-lg">
          {/* Adjust base text size for readability */}
          Get in touch with us today!
        </p>
        <Link href="mailto:info@quantumpinnaclematrix.tech">
          <p className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
            info@quantumpinnaclematrix.tech
          </p>
        </Link>
        <section className="flex flex-col md:flex-row md:justify-between items-center">
          <ContactUsFormEn />
        </section>

        <section className="mt-8 p-4">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900">
            Address | Work Hours
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mt-4">
            Tamra, North District, Israel
          </p>
          <p className="text-lg md:text-xl text-slate-500 mt-4">
            Sun-Fri: 9am-5pm
          </p>
        </section>
      </div>
    </main>
  );
};

export default ContactPageEn;

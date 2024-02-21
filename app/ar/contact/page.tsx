import ContactUsFormAr from "@/components/forms/contact-us-form-ar";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  // Change the title of your content to "QPMatrix | Contact Us"
  title: "QPMatrix | اتصل بنا",
  // Change the description of your content to summarize your contact details
  description:
    "نحن دائمًا مفتوحون لسماعك والإجابة على أي سؤال أو طلب لديك. يمكنك الاتصال بنا من خلال النموذج التالي ، أو إرسال بريد إلكتروني إلينا على info@qpmatrix.tech ، أو الاتصال بنا على الهاتف 9720524802045. سنحاول الرد عليك في أقرب وقت ممكن.",
  openGraph: {
    // Change the title of your content to "QPMatrix | Contact Us"
    title: "QPMatrix | اتصل بنا",
    // Change the description of your content to summarize your contact details
    description:
      "نحن دائمًا مفتوحون لسماعك والإجابة على أي سؤال أو طلب لديك. يمكنك الاتصال بنا من خلال النموذج التالي ، أو إرسال بريد إلكتروني إلينا على info@qpmatrix.tech ، أو الاتصال بنا على الهاتف 9720524802045.",
    // Change the type of your content to "article"
    type: "article",
    // Change the URL of your content to match the contact page
    url: "https://qpmatrix.tech/ar/contact",
    // Change the image of your content to show your contact details
    images: [
      {
        // Specify the URL of the image
        url: "https://qpmatrix.tech/contact-image.avif",
        // Specify the width of the image in pixels
        width: 800,
        // Specify the height of the image in pixels
        height: 600,
        // Specify the alternative text of the image
        alt: "بيانات الاتصال الخاصة بنا",
      },
    ],
  },
};

const ContactPageAr = () => {
  return (
    <main className="mx-auto max-w-4xl" dir="rtl">
      {/* Set a max-width to prevent the layout from stretching too wide on large screens */}
      <div className="m-4 p-4 space-y-5 md:space-y-8 lg:space-y-12">
        {/* Increase spacing progressively for larger screens */}
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900">
          {/* Adjust font sizes for different screens */}
          أتصل بنا{" "}
        </h1>
        <p className="text-base md:text-lg">
          {/* Adjust base text size for readability */}
          اتصل بنا اليوم!{" "}
        </p>
        <Link href="mailto:info@quantumpinnaclematrix.tech">
          <p className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
            info@quantumpinnaclematrix.tech
          </p>
        </Link>
        <section className="flex flex-col md:flex-row md:justify-between items-center">
          <ContactUsFormAr />
        </section>

        <section className="mt-8 p-4">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900">
            العنوان | ساعات العمل{" "}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 mt-4">
            طمرة, المنطقة الشمالية, إسرائيل{" "}
          </p>
          <p className="text-lg md:text-xl text-slate-500 mt-4">
            الأحد-الجمعة: 9:00-17:00{" "}
          </p>
        </section>
      </div>
    </main>
  );
};

export default ContactPageAr;

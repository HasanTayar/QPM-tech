import ContactUsFormEn from "@/components/forms/contact-us-form-en";
import Image from "next/legacy/image";
import Link from "next/link";
import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  // Change the title of your content to "QPMatrix | Contact Us"
  title: "QPMatrix | Contact Us",
  // Change the description of your content to summarize your contact details
  description:
    "We are always open to hear from you and answer any question or request you have. You can contact us through the form below, or send us an email to info@qpmatrix.tech, or call us at 972-4-1234567. We will do our best to get back to you as soon as possible.",
  openGraph: {
    // Change the title of your content to "QPMatrix | Contact Us"
    title: "QPMatrix | Contact Us",
    // Change the description of your content to summarize your contact details
    description:
      "We are always open to hear from you and answer any question or request you have. You can contact us through the form below, or send us an email to info@qpmatrix.tech, or call us at 972-4-1234567. We will do our best to get back to you as soon as possible.",
    // Change the type of your content to "article"
    type: "article",
    // Change the URL of your content to match the contact page
    url: "https://qpmatrix.tech/contact",
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
        alt: "Our contact details",
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

import ContactUsFormHe from "@/components/forms/contact-us-form-he";
import Link from "next/link";
import React from "react";
// import Map from "@/components/Map";

const ContactPageAr = () => {
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
        <Link href="mailto:info@quantumpinnaclematrix.tech">
          <p className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
            info@quantumpinnaclematrix.tech
          </p>
        </Link>
        <section className="flex flex-col md:flex-row md:justify-between items-center">
          <ContactUsFormHe />
        </section>
        <section className="mt-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900 p-4">
            מקום
          </h2>
          {/* Uncomment and use the Map component when ready, ensuring it's responsive */}
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

export default ContactPageAr;
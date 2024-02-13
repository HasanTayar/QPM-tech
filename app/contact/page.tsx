import ContactUsFormEn from "@/components/forms/contact-us-form-en";
import React from "react";
// import Map from "@/components/Map";

const ContactPage = () => {
  return (
    <main className=" mx-auto">
      <div className="m-4 p-4 md:m-8 md:p-8 lg:m-12 lg:p-12">
        <h1 className="text-center font-bold text-6xl md:text-4xl text-slate-900">
          Reach out !
        </h1>
        <ContactUsFormEn />
        <section className="bg-gray-50 dark:bg-gray-800 border border-slate-100 dark:border-slate-500 rounded-lg shadow-lg mt-8">
          <h2 className="text-center font-bold text-4xl md:text-2xl text-slate-900 dark:text-slate-50 p-4">
            Location
          </h2>
          {/* <Map
            center={{
              lat: 32.85349,
              lng: 35.19788,
            }}
            zoom={11}
          /> */}
        </section>
        <section className="bg-gray-50 dark:bg-gray-800 border border-slate-100 dark:border-slate-500 rounded-lg shadow-lg mt-8 p-4">
          <h2 className="text-center font-bold text-4xl md:text-2xl text-slate-900 dark:text-slate-50">
            Address | Work Hours
          </h2>
          <p className="text-center text-xl md:text-lg text-slate-500 dark:text-slate-400 mt-4">
            Tamra, North District, Israel
          </p>
          <p className="text-center text-xl md:text-lg text-slate-500 dark:text-slate-400 mt-4">
            Sun-Fri: 9am-5pm
          </p>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;

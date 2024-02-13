import AboutUsAr from "@/components/about/about-us-ar";
import ContactUsFormAr from "@/components/forms/contact-us-form-ar";
import HeroAr from "@/components/hero/hero-ar";
import OurServicesAr from "@/components/our-services/our-services-ar";

export default function Home() {
  return (
    <main>
      <HeroAr />
      <AboutUsAr />
      <OurServicesAr />
      <section>
        <h1 className="text-center text-6xl md:text-4xl mt-5 font-bold">
          تواصل معنا!{" "}
        </h1>
        <p className=" text-center mt-2">
          اتصل بنا لمناقشة متطلبات مشروعك أو أي استفسارات. نحن هنا للمساعدة!
        </p>
        <ContactUsFormAr />
      </section>
    </main>
  );
}

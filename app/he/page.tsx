import AboutUsHe from "@/components/about/about-us-he";
import ContactUsFormHe from "@/components/forms/contact-us-form-he";
import HeroHe from "@/components/hero/hero-he";
import OurServicesHe from "@/components/our-services/our-services-he";

export default function Home() {
  return (
    <main>
      <HeroHe />
      <AboutUsHe />
      <OurServicesHe />
      <section>
        <h1 className="text-center text-6xl md:text-4xl mt-5 font-bold">
          צרו קשר!
        </h1>
        <p className=" text-center mt-2">
          צור איתנו קשר כדי לדון בדרישות הפרויקט שלך או לכל אחד פניות. אנחנו כאן
          כדי לעזור!
        </p>
        <ContactUsFormHe />
      </section>
    </main>
  );
}

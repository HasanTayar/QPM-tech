import AboutUsEn from "@/components/about/about-us-en";
import ContactUsFormEn from "@/components/forms/contact-us-form-en";
import HeroEn from "@/components/hero/hero-en";
import OurServicesEn from "@/components/our-services/our-services-en";

export default function Home() {
  return (
    <main>
      <HeroEn />
      <AboutUsEn />
      <OurServicesEn />
      <section>
        <h1 className="text-center text-6xl md:text-4xl mt-5 font-bold">
          Contact us
        </h1>
        <p className=" text-center mt-2">
          Get in touch with us to discuss your project requirements or for any
          inquiries. We are here to help!
        </p>
        <ContactUsFormEn />
      </section>
    </main>
  );
}

import AboutUsAr from "@/components/about/about-us-ar";
import ContactUsFormAr from "@/components/forms/contact-us-form-ar";
import HeroAr from "@/components/hero/hero-ar";
import OurServicesAr from "@/components/our-services/our-services-ar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "QPMatrix | الصفحة الرئيسية",
  description:
    "نحن شركة رائدة في تطوير المواقع والتطبيقات في إسرائيل ، متخصصون في استخدام أحدث التقنيات ، مثل ووردبريس ، HTML ، CSS ، JS ، React ، و Angular. نحن فخورون بتقديم خدمات عالية الجودة واحترافية لعملائنا ، تناسب احتياجاتهم وميزانيتهم. بالإضافة إلى ذلك ، نقدم خدمات تسويق رقمي شاملة ، تشمل الترويج العضوي ، الإعلان على جوجل ، إدارة وسائل التواصل الاجتماعي ، والمزيد. إذا كنت تبحث عن حل مثالي لوجودك الرقمي ، فنحن هنا من أجلك!",
  openGraph: {
    // Specify the title of your content
    title: "QPMatrix | الصفحة الرئيسية",
    // Specify the description of your content
    description:
      "نحن شركة رائدة في تطوير المواقع والتطبيقات في إسرائيل ، متخصصون في استخدام أحدث التقنيات ، مثل ووردبريس ، HTML ، CSS ، JS ، React ، و Angular.",
    // Specify the type of your content, e.g. website, article, video, etc.
    type: "website",
    // Specify the URL of your content
    url: "https://qpmatrix.tech/ar/",
    // Specify the image of your content, e.g. logo, screenshot, etc.
    images: [
      {
        // Specify the URL of the image
        url: "/icons/favicon-512x512.png",
        // Specify the width of the image in pixels
        width: 800,
        // Specify the height of the image in pixels
        height: 600,
        // Specify the alternative text of the image
        alt: "شعار QPMatrix",
      },
    ],
  },
};

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

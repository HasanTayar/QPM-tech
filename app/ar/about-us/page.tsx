import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
export const metadata: Metadata = {
  // Change the title of your content to "QPMatrix | About Us"
  title: "QPMatrix | من نحن",
  // Change the description of your content to summarize your contact details
  description:
    "نحن شركة رائدة في تطوير المواقع والتطبيقات في إسرائيل ، متخصصون في استخدام أحدث التقنيات ، مثل ووردبريس ، HTML ، CSS ، JS ، React ، و Angular. إذا كنت مهتمًا بمعرفة المزيد عن خدماتنا ، أو الحصول على عرض أسعار ، يرجى الاتصال بنا من خلال النموذج ، أو البريد الإلكتروني ، أو الهاتف الخاص بنا. سنكون سعداء لخدمتك في أي سؤال أو طلب.",
  openGraph: {
    // Change the title of your content to "QPMatrix | About Us"
    title: "QPMatrix | من نحن",
    // Change the description of your content to summarize your contact details
    description:
      "نحن شركة رائدة في تطوير المواقع والتطبيقات في إسرائيل ، متخصصون في استخدام أحدث التقنيات ، مثل ووردبريس ، HTML ، CSS ، JS ، React ، و Angular. إذا كنت مهتمًا بمعرفة المزيد عن خدماتنا ، أو الحصول على عرض أسعار ، يرجى الاتصال بنا من خلال النموذج ، أو البريد الإلكتروني ، أو الهاتف الخاص بنا.",
    // Change the type of your content to "article"
    type: "article",
    // Change the URL of your content to match the contact page
    url: "https://qpmatrix.tech/ar/about-us",
    // Change the image of your content to show your contact details
    images: [
      {
        // Specify the URL of the image
        url: "/about-us.avif",
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
const AboutUsArPage = () => {
  return (
    <main className="container mx-auto px-4 lg:px-8 xl:px-16" dir="rtl">
      {/* Main section talking about the company */}
      <section className="my-8 lg:my-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2">
            <Image
              src="/about-us-image-1.avif"
              alt="About us image 1"
              width={500}
              height={500}
              quality={100}
              className="rounded-lg"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-8 w-full md:w-1/2">
            <h1 className="text-center font-bold text-4xl md:text-5xl">
              المطورين ذوي الخبرة{" "}
            </h1>
            <p className="text-lg leading-relaxed mt-4">
              مع شغفنا في تطوير الويب والتركيز على رضا العملاء، Quantum Pinnacle
              تقوم ماتريكس بإنشاء مواقع وتطبيقات مذهلة منذ عام 2022. نحن متخصصون
              في التطوير مواقع الويب التي تستخدم WordPress وHTML وCSS وJS وReact
              وAngular. لنا الفريق مكرس لفهم احتياجات عملك وتقديم حلول مخصصة.
              سواء كنت بحاجة إلى تطبيق جوال أو تطبيق سطح مكتب أو خدمات تسويق
              رقمية، لقد حصلت على تغطيتها. اتصل بنا اليوم لاتخاذ عملك إلى الخطوة
              التالية.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>خبرة</p>
                <span className="mr-2 text-gray-500">منذ عام 2022</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>بناء مواقع ناجحة</p>
                <span className="mr-2 text-gray-500">منذ عام 2022</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>تقديم حلول مخصصة</p>{" "}
                <span className="mr-2 text-gray-500">منذ عام 2022</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p>إنشاء حلول مبتكرة</p>{" "}
                <span className="mr-2 text-gray-500">منذ عام 2022</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Section talking about Innovative Projects */}
      <section className="my-8 lg:my-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
          مشاريع مبتكرة{" "}
        </h1>
        <p className="text-lg leading-relaxed mb-8 text-center">
          تعرض أعمالنا خبرتنا في تطوير المشاريع المبتكرة التي تلبي احتياجاتنا
          المتطلبات الفريدة لعملائنا. من مواقع التجارة الإلكترونية إلى التطبيقات
          الشركة، لقد نجحنا في تسليم مجموعة واسعة من المشاريع.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mx-auto">
            <Image
              src="/e-commerce.svg"
              width={500}
              height={500}
              alt="e-commerce photo"
              quality={100}
              className="rounded-lg"
            />
            <h2 className="text-xl lg:text-2xl font-bold mt-4 mb-2 text-center">
              حلول التجارة الإلكترونية{" "}
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-center">
              نحن متخصصون في إنشاء حلول مخصصة للتجارة الإلكترونية لمساعدة
              الشركات على القيادة المبيعات وزيادة الإيرادات. يتمتع فريقنا بخبرة
              واسعة في التطوير الآمن عبر الإنترنت ومتاجر سهلة الاستخدام توفر
              تجربة تسوق سلسة.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/mobile-development-image.svg"
              width={500}
              height={500}
              alt="mobile development image"
              quality={100}
              className="rounded-lg"
            />
            <h2 className="text-xl lg:text-2xl font-bold mt-4 mb-2 text-center">
              تطبيقات الموبايل{" "}
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-center">
              تم تصميم تطبيقات الهاتف المحمول الخاصة بنا لتوفير تجارب وإجابات
              استثنائية للمستخدم الاحتياجات المحددة لعملائنا. نحن نطور التطبيقات
              الأصلية ومتعددة المنصات لأجهزة iOS وAndroid، مما يضمن التوافق
              والأداء على جميع المنصات.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/digital-marketing.svg"
              width={500}
              height={500}
              alt="digital marketing image"
              quality={100}
              className="rounded-lg"
            />
            <h2 className="text-xl lg:text-2xl font-bold mt-4 mb-2 text-center">
              التسويق الرقمي{" "}
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-center">
              نحن نساعدك على تنمية أعمالك عبر الإنترنت من خلال الوسائل الرقمية
              الفعالة خدمات التسويق. نقوم بإنشاء وتنفيذ استراتيجيات تحسين محركات
              البحث (SEO) والدفع لكل نقرة (PPC) والإعلام وسائل التواصل الاجتماعي
              والتسويق عبر البريد الإلكتروني والمزيد. نحن نستخدم البيانات
              والأدوات ل تحسين وقياس حملاتك. يمكننا مساعدتك حقق أهدافك التسويقية
              الرقمية.
            </p>
          </div>
          {/* Add more project sections here */}
        </div>
        <div className="flex justify-center items-center mt-8">
          <Link href="/ar/contact">
            <Button className="text-white text-lg px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              اتصل بنا الآن!{" "}
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUsArPage;

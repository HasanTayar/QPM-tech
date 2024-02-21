import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectsAr } from "@/constants/projects";
import { Metadata } from "next";
export const metadata: Metadata = {
  // Change the title of your content to "QPMatrix | Our Works"
  title: "QPMatrix | أعمالنا",
  // Change the description of your content to summarize your works
  description:
    "في هذه الصفحة يمكنكم رؤية بعض الأعمال المذهلة التي قمنا بها لعملائنا في مجالات تطوير المواقع والتطبيقات. نحن نخلق حلولاً فريدة ومخصصة لأي نوع من الأعمال أو المنظمات ، وفقاً لأهدافهم وتوقعاتهم. نحن نجمع بين التصميم الجميل والمستخدم ، التقنيات المتقدمة ، والتسويق الفعال ، لضمان نجاح مشاريعنا.",
  openGraph: {
    // Change the title of your content to "QPMatrix | Our Works"
    title: "QPMatrix | أعمالنا",
    // Change the description of your content to summarize your works
    description:
      "في هذه الصفحة يمكنكم رؤية بعض الأعمال المذهلة التي قمنا بها لعملائنا في مجالات تطوير المواقع والتطبيقات. نحن نخلق حلولاً فريدة ومخصصة لأي نوع من الأعمال أو المنظمات ، وفقاً لأهدافهم وتوقعاتهم.",
    // Change the type of your content to "article"
    type: "article",
    // Change the URL of your content to match the works page
    url: "https://qpmatrix.tech/ar/portfolio",
    // Change the image of your content to show some of your works
    images: [
      {
        // Specify the URL of the image
        url: "https://qpmatrix.tech/about-us-image-1.avif",
        // Specify the width of the image in pixels
        width: 800,
        // Specify the height of the image in pixels
        height: 600,
        // Specify the alternative text of the image
        alt: "بعض أعمالنا",
      },
    ],
  },
};
const PortfolioPageHe = () => {
  return (
    <main className="container mx-auto px-4 lg:px-8 xl:px-16" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsAr.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <Link href={project.link} target="_blank">
                <Button
                  variant="link"
                  className={`hover:underline`}
                  disabled={project.link === "#"}
                >
                  عرض المشروع{" "}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PortfolioPageHe;

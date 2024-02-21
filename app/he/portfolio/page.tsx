import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectsHe } from "@/constants/projects";
import { Metadata } from "next/types";
export const metadata: Metadata = {
  // Change the title of your content to "QPMatrix | Our Works"
  title: "QPMatrix | עבודות שלנו",
  // Change the description of your content to summarize your works
  description:
    "בעמוד זה תוכלו לראות חלק מהעבודות המדהימות שאנחנו עשינו ללקוחותינו בתחומי הפיתוח האתרים והאפליקציות. אנחנו יוצרים פתרונות ייחודיים ומותאמים אישית לכל סוג של עסק או ארגון, בהתאם למטרות ולציפיות שלהם. אנחנו משלבים עיצוב יפה ומשתמש, טכנולוגיות מתקדמות, ושיווק אפקטיבי, כדי להבטיח את ההצלחה של הפרויקטים שלנו.",
  openGraph: {
    // Change the title of your content to "QPMatrix | Our Works"
    title: "QPMatrix | עבודות שלנו",
    // Change the description of your content to summarize your works
    description:
      "בעמוד זה תוכלו לראות חלק מהעבודות המדהימות שאנחנו עשינו ללקוחותינו בתחומי הפיתוח האתרים והאפליקציות. אנחנו יוצרים פתרונות ייחודיים ומותאמים אישית לכל סוג של עסק או ארגון, בהתאם למטרות ולציפיות שלהם. אנחנו משלבים עיצוב יפה ומשתמש, טכנולוגיות מתקדמות, ושיווק אפקטיבי, כדי להבטיח את ההצלחה של הפרויקטים שלנו.",
    // Change the type of your content to "article"
    type: "article",
    // Change the URL of your content to match the works page
    url: "https://qpmatrix.tech/he/portfolio",
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
        alt: "Some of our works",
      },
    ],
  },
};

const PortfolioPageAr = () => {
  return (
    <main className="container mx-auto px-4 lg:px-8 xl:px-16" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsHe.map((project) => (
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
                  צפה בפרויקט{" "}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PortfolioPageAr;

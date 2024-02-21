import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectsEn } from "@/constants/projects";
import { Metadata } from "next";
export const metadata: Metadata = {
  // Change the title of your content to "QPMatrix | Our Works"
  title: "QPMatrix | Our Works",
  // Change the description of your content to summarize your works
  description:
    "On this page you can see some of the amazing works that we have done for our clients in the fields of web and app development. We create unique and personalized solutions for any type of business or organization, according to their goals and expectations. We combine beautiful and user-friendly design, advanced technologies, and effective marketing, to ensure the success of our projects.",
  openGraph: {
    // Change the title of your content to "QPMatrix | Our Works"
    title: "QPMatrix | Our Works",
    // Change the description of your content to summarize your works
    description:
      "On this page you can see some of the amazing works that we have done for our clients in the fields of web and app development. We create unique and personalized solutions for any type of business or organization, according to their goals and expectations. We combine beautiful and user-friendly design, advanced technologies, and effective marketing, to ensure the success of our projects.",
    // Change the type of your content to "article"
    type: "article",
    // Change the URL of your content to match the works page
    url: "https://qpmatrix.tech/portfolio",
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

const PortfolioPageEn = () => {
  return (
    <main className="container mx-auto px-4 lg:px-8 xl:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsEn.map((project) => (
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
                  View Project
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PortfolioPageEn;

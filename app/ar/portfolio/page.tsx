import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectsAr } from "@/constants/projects";

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

import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectsEn } from "@/constants/projects";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1.",
    imageUrl: "/project1.jpg",
    link: "/projects/project1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2.",
    imageUrl: "/project2.jpg",
    link: "/projects/project2",
  },
];

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

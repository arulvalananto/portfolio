import React from "react";
import { redirect } from "next/navigation";

import { inter } from "@/app/lib/fonts";
import { projects } from "@/app/lib/common";
import ProjectDetails from "./ProjectDetails";
import ProjectKeyFeatures from "./ProjectKeyFeatures";
import ProjectImageGallery from "./ProjectImageGallery";

const WorkOverview = ({ params }: { params: { slug: string } }) => {
  const project = params.slug ? projects[params.slug.split("-").join("")] : "";

  if (!project) {
    redirect("/work");
  }

  return (
    <div
      className={`w-full h-full py-10 md:pt-40 md:pb-10 ${inter.variable} overflow-x-hidden`}
    >
      <ProjectDetails project={project} />
      {project.hasShowImageLayout && <ProjectImageGallery project={project} />}
      {project.showKeyFeatures && <ProjectKeyFeatures project={project} />}
    </div>
  );
};

export default WorkOverview;

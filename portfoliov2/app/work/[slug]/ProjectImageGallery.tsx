import React from "react";

import { Project } from "@/app/lib/types";
import AirDeckImageGallery from "./AirDeckImageGallery";
import VidableImageGallery from "./VidableImageGallery";

type ProjectImageGalleryProps = {
  project: Project;
};

const ProjectImageGallery: React.FC<ProjectImageGalleryProps> = ({
  project,
}) => {
  return (
    <div className="my-10 md:mt-20 px-5 md:p-0 w-full md:w-[800px] md:max-w-[800px] lg:w-[1280px] lg:max-w-[1280px] h-full m-auto grid grid-cols-12 auto-rows-[360px] lg:auto-rows-[300px] gap-2">
      {project.name === "AirDeck" ? (
        <AirDeckImageGallery project={project} />
      ) : project.name === "Vidable AI" ? (
        <VidableImageGallery project={project} />
      ) : (
        <>
          <div
            className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1`}
          ></div>
          <div
            className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1 sm:row-span-2`}
          ></div>
          <div
            className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1`}
          ></div>
          <div
            className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1`}
          ></div>
          <div
            className={`${project.bgImageLayout} rounded-lg col-span-12 md:col-span-6 lg:col-span-3 row-span-1`}
          ></div>
          <div
            className={`${project.bgImageLayout} rounded-lg col-span-12 lg:col-span-6 row-span-1`}
          ></div>
        </>
      )}
    </div>
  );
};

export default ProjectImageGallery;

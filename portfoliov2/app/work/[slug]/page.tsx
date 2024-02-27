import React from "react";
import { redirect } from "next/navigation";
import { BsArrowUpRight } from "react-icons/bs";

import { projects } from "@/app/lib/common";
import ExternalLink from "@/app/ui/external-link";

const WorkOverview = ({ params }: { params: { slug: string } }) => {
  const project = params.slug ? projects[params.slug.split("-").join("")] : "";

  if (!project) {
    redirect("/work");
  }

  return (
    <div className="mt-40 font-DMSans">
      <div className="w-[800px] max-w-[800px] m-auto flex flex-col gap-10">
        <div className="">
          <h1 className="text-4xl font-bold captialize">{project.name}</h1>
          <h4 className="">{project.oneliner}</h4>
        </div>
        <div className="flex flex-row items-start gap-10">
          <div className="max-w-[150px] flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h6 className="uppercase font-base font-bold text-subheading">
                Role
              </h6>
              <p>{project.role}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="uppercase font-base font-bold text-subheading">
                Timeline
              </h6>
              <p>
                {project.timeline.from} -{" "}
                {project.timeline.isPresent ? "Present" : project.timeline.to}
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h6 className="uppercase font-base font-bold text-subheading">
                Description
              </h6>
              <p>{project.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="uppercase font-base font-bold text-subheading">
                Tools
              </h6>
              <div className="flex flex-row flex-wrap gap-4">
                {project.tools.map((tool) => (
                  <p key={tool.title} className="">
                    {tool.title}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              {project.links.website && (
                <ExternalLink
                  title={project.links.website.title}
                  href={project.links.website.link}
                  className="flex flex-row items-center gap-5 border-2 border-black rounded-full px-8 py-2"
                >
                  <span>{project.links.website.title}</span>
                  <BsArrowUpRight />
                </ExternalLink>
              )}
              {project.links.application && (
                <ExternalLink
                  title={project.links.application.title}
                  href={project.links.application.link}
                  className="flex flex-row items-center gap-5 border-2 border-black rounded-full px-8 py-2"
                >
                  <span>{project.links.application.title}</span>
                  <BsArrowUpRight />
                </ExternalLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOverview;

import React from "react";
import { redirect } from "next/navigation";
import { BsArrowUpRight } from "react-icons/bs";

import { inter } from "@/app/lib/fonts";
import { projects } from "@/app/lib/common";
import ExternalLink from "@/app/ui/external-link";

const WorkOverview = ({ params }: { params: { slug: string } }) => {
  const project = params.slug ? projects[params.slug.split("-").join("")] : "";

  if (!project) {
    redirect("/work");
  }

  return (
    <div className={`mt-40 mb-10 ${inter.variable}`}>
      <div className="w-[800px] max-w-[800px] m-auto flex flex-col gap-8 font-inter">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold captialize">{project.name}</h1>
          <h4 className="text-base capitalize font-normal">
            {project.oneliner}
          </h4>
        </div>
        <div className="flex flex-row items-start gap-8">
          <div className="max-w-[150px] flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h6 className="uppercase text-lg font-semibold">Type</h6>
              <div className="flex flex-col gap-2">
                <p className="text-sm">{project.type}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="uppercase text-lg font-semibold">Role</h6>
              <div className="flex flex-col gap-2">
                {Array.isArray(project.role) ? (
                  project.role.map((role) => (
                    <p key={role} className="text-sm">
                      {role}
                    </p>
                  ))
                ) : (
                  <p className="text-sm">{project.role}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="uppercase text-lg font-semibold">Timeline</h6>
              <p className="text-sm">
                {project.timeline.from}{" "}
                {project.timeline.from === project.timeline.to
                  ? ""
                  : ` - ${
                      project.timeline.isPresent
                        ? "Present"
                        : project.timeline.to
                    }`}
              </p>
            </div>
            {project?.category && (
              <div className="flex flex-col gap-2">
                <h6 className="uppercase text-lg font-semibold">Category</h6>
                <div className="flex flex-col gap-2">
                  {Array.isArray(project.category) ? (
                    project.category.map((category) => (
                      <p key={category} className="text-sm">
                        {category}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm">{project.category}</p>
                  )}
                </div>
              </div>
            )}
            {project?.externalLinks && (
              <div className="flex flex-col gap-2">
                <h6 className="uppercase text-lg font-semibold">Work Links</h6>
                <div className="flex flex-col gap-2">
                  {project.externalLinks.map((link) => (
                    <ExternalLink
                      key={link.title}
                      title={link.title}
                      href={link.link}
                      className="underline text-sm underline-offset-2 font-medium"
                    >
                      {link.title}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h6 className="uppercase text-lg font-semibold">Description</h6>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="uppercase text-lg font-semibold">Tools</h6>
              <div className="flex flex-row flex-wrap gap-4">
                {project.tools.map((tool) => (
                  <p key={tool} className="font-base text-sm capitalize">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              {project.links.website && (
                <ExternalLink
                  title={project.links.website.title}
                  href={project.links.website.link}
                  className="flex flex-row items-center gap-5 border-2 border-black rounded-full px-6 py-2 text-sm"
                >
                  <span>{project.links.website.title}</span>
                  <BsArrowUpRight />
                </ExternalLink>
              )}
              {project.links.application && (
                <ExternalLink
                  title={project.links.application.title}
                  href={project.links.application.link}
                  className="flex flex-row items-center gap-5 border-2 border-black rounded-full px-6 py-2 text-sm"
                >
                  <span>{project.links.application.title}</span>
                  <BsArrowUpRight />
                </ExternalLink>
              )}
              {project.links.cli && (
                <ExternalLink
                  title={project.links.cli.title}
                  href={project.links.cli.link}
                  className="flex flex-row items-center gap-5 border-2 border-black rounded-full px-6 py-2 text-sm"
                >
                  <span>{project.links.cli.title}</span>
                  <BsArrowUpRight />
                </ExternalLink>
              )}
              {project.links.comingSoon && (
                <button
                  type="button"
                  className="flex flex-row items-center gap-5 border-2 border-black rounded-full px-6 py-2 text-sm capitalize"
                >
                  <span>{project.links.comingSoon.title}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOverview;

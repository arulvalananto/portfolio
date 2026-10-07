import React from "react";
import { BsArrowUpRight, BsCheck2Circle } from "react-icons/bs";

import { Project } from "@/app/data";
import ExternalLink from "@/app/ui/external-link";
import { portfolio as constants } from "@/app/data";

type ProjectDetailsProps = {
  project: Project;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="w-full lg:w-225 lg:max-w-225 m-auto flex flex-col gap-8 font-inter px-5 lg:px-0 h-full">
      <div className="border-b border-[var(--theme-border)] pb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--theme-muted-text)]">
          {project.type}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {project.name}
        </h1>
        <h4 className="mt-3 max-w-2xl text-lg font-normal leading-relaxed text-[var(--theme-muted-text)]">
          {project.oneliner}
        </h4>
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-[13.5rem_minmax(0,1fr)]">
        <aside className="theme-elevated grid grid-cols-2 gap-x-6 gap-y-7 rounded-2xl border p-5 sm:grid-cols-3 lg:grid-cols-1">
          <div className="flex flex-col gap-2">
            <h6 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted-text)]">
              {constants.work.detail.labels.type}
            </h6>
            <p className="text-sm leading-relaxed">{project.type}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted-text)]">
              {constants.work.detail.labels.role}
            </h6>
            <div className="flex flex-col gap-1">
              {Array.isArray(project.role) ? (
                project.role.map((role) => (
                  <p key={role} className="text-sm leading-relaxed">
                    {role}
                  </p>
                ))
              ) : (
                <p className="text-sm leading-relaxed">{project.role}</p>
              )}
            </div>
          </div>
          {project?.status && (
            <div className="flex flex-col gap-2">
              <h6 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted-text)]">
                {constants.work.detail.labels.status}
              </h6>
              <p className="text-sm leading-relaxed">{project.status}</p>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <h6 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted-text)]">
              {constants.work.detail.labels.timeline}
            </h6>
            <p className="text-sm leading-relaxed">
              {project.timeline.from}{" "}
              {project.timeline.from === project.timeline.to
                ? ""
                : ` - ${
                    project.timeline.isPresent
                      ? constants.work.detail.present
                      : project.timeline.to
                  }`}
            </p>
          </div>
          {project?.category && (
            <div className="flex flex-col gap-2">
              <h6 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted-text)]">
                {constants.work.detail.labels.category}
              </h6>
              <div className="flex flex-col gap-1">
                {Array.isArray(project.category) ? (
                  project.category.map((category) => (
                    <p key={category} className="text-sm leading-relaxed">
                      {category}
                    </p>
                  ))
                ) : (
                  <p className="text-sm leading-relaxed">{project.category}</p>
                )}
              </div>
            </div>
          )}
          {project?.externalLinks && (
            <div className="flex flex-col gap-2">
              <h6 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted-text)]">
                {constants.work.detail.labels.workLinks}
              </h6>
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
        </aside>
        <div className="flex min-w-0 flex-col gap-9">
          <section className="flex flex-col gap-3">
            <h6 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted-text)]">
              {constants.work.detail.labels.description}
            </h6>
            <p className="max-w-3xl text-base leading-7">
              {project.description}
            </p>
          </section>
          {project.achievements && project.achievements.length > 0 && (
            <section className="theme-elevated rounded-2xl border p-5 md:p-6">
              <h6 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted-text)]">
                {constants.work.detail.labels.achievements}
              </h6>
              <ul className="mt-5 flex flex-col divide-y divide-[var(--theme-border)]">
                {project.achievements.map((achievement) => (
                  <li
                    key={achievement.description}
                    className="flex gap-3 py-5 first:pt-0 last:pb-0"
                  >
                    <BsCheck2Circle
                      className="mt-0.5 shrink-0 text-lg"
                      aria-hidden="true"
                    />
                    <div>
                      {achievement.title && (
                        <h3 className="text-sm font-semibold">
                          {achievement.title}
                        </h3>
                      )}
                      <p
                        className={`${achievement.title ? "mt-1" : "-mt-0.5"} text-sm leading-6 text-[var(--theme-muted-text)]`}
                      >
                        {achievement.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section className="flex flex-col gap-3">
            <h6 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--theme-muted-text)]">
              {constants.work.detail.labels.tools}
            </h6>
            <div className="flex flex-row flex-wrap gap-2">
              {project.tools.map((tool) => (
                <p
                  key={tool}
                  className="rounded-full border border-[var(--theme-border)] px-3 py-1 text-sm"
                >
                  {tool}
                </p>
              ))}
            </div>
          </section>
          <div className="flex flex-row flex-wrap items-center gap-3">
            {project.links.website && (
              <ExternalLink
                title={project.links.website.title}
                href={project.links.website.link}
                className="theme-button flex flex-row items-center gap-5 border-2 rounded-full px-6 py-2 text-xs md:text-sm transition-all duration-500 ease-in-out shadow-md"
              >
                <span>{project.links.website.title}</span>
                <BsArrowUpRight />
              </ExternalLink>
            )}
            {project.links.application && (
              <ExternalLink
                title={project.links.application.title}
                href={project.links.application.link}
                className="theme-button flex flex-row items-center gap-5 border-2 rounded-full px-6 py-2 text-xs md:text-sm transition-all duration-500 ease-in-out shadow-md"
              >
                <span>{project.links.application.title}</span>
                <BsArrowUpRight />
              </ExternalLink>
            )}
            {project.links.cli && (
              <ExternalLink
                title={project.links.cli.title}
                href={project.links.cli.link}
                className="theme-button flex flex-row items-center gap-5 border-2 rounded-full px-6 py-2 text-xs md:text-sm transition-all duration-500 ease-in-out shadow-md"
              >
                <span>{project.links.cli.title}</span>
                <BsArrowUpRight />
              </ExternalLink>
            )}
            {project.links.plugin && (
              <ExternalLink
                title={project.links.plugin.title}
                href={project.links.plugin.link}
                className="theme-button flex flex-row items-center gap-5 border-2 rounded-full px-6 py-2 text-xs md:text-sm transition-all duration-500 ease-in-out shadow-md"
              >
                <span>{project.links.plugin.title}</span>
                <BsArrowUpRight />
              </ExternalLink>
            )}
            {project.links.comingSoon && (
              <button
                type="button"
                className="theme-button flex flex-row items-center gap-5 border-2 rounded-full px-6 py-2 text-xs md:text-sm transition-all duration-500 ease-in-out shadow-md capitalize"
              >
                <span>{project.links.comingSoon.title}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

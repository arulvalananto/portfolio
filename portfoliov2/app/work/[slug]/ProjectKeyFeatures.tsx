import React from "react";

import { Project } from "@/app/lib/types";
import AirDeckKeyFeatures from "./AirDeckKeyFeatures";

const ProjectKeyFeatures = ({ project }: { project: Project }) => {
  return (
    <div className="w-full lg:w-[800px] lg:max-[800px] m-auto font-inter flex flex-col gap-10 mt-20 p-5 lg:p-0">
      <h3 className="text-3xl font-bold capitalize">Key Features</h3>
      {project.name === "AirDeck" ? (
        <AirDeckKeyFeatures />
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            {/*<Image src="" alt="" width={} height={} />*/}
            <h5>Voice & Video Personalization</h5>
            <p>
              Narrated slides provide an instant connection to your audience
              when giving presentations or simply walking someone through a
              complicated document. Add video overlays to your content to give
              it a personalized touch and increase engagement.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/*<Image src="" alt="" width={} height={} />*/}
            <h5>Share & Embed</h5>
            <p>
              Share presentations with any audience on multiple platforms,
              quickly and easily, with no attachments. Easily embed on your
              website, blog post, or landing page. Customize the permissions on
              each link and send personalized emails containing your deck right
              from the platform.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/*<Image src="" alt="" width={} height={} />*/}
            <h5>Lead Capture & Surveys</h5>
            <p>
              Easily capture leads or survey results directly from your slides.
              Immediately sync your gathered leads with your CRM to follow up
              with the information you’ve gathered and drive business outcomes
              with confidence.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/*<Image src="" alt="" width={} height={} />*/}
            <h5>Document Tracking & Analytics</h5>
            <p>
              Track how viewers engage with your document, in real-time. View
              slide-by-slide analytics to learn their unique interests. Leverage
              the data to improve your presentations.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/*<Image src="" alt="" width={} height={} />*/}
            <h5>Safe & Confidential</h5>
            <p>
              AirDeck presentations are secure, with documents that are easily
              locked with a password. Set different permissions for each link
              you create and provide access only to those with privileges.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {/*<Image src="" alt="" width={} height={} />*/}
            <h5>Integrations</h5>
            <p>
              AirDeck easily integrates with your tech stack and the tools you
              already use. Sync viewer activity to your CRM, embed video content
              from other platforms, and receive notifications in your messaging
              tools.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectKeyFeatures;

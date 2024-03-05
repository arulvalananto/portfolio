import React from "react";
import Image from "next/image";

const AirDeckKeyFeatures = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <div className="bg-layout1 w-full h-[400px] flex items-center justify-center rounded-md">
          <Image
            src="/airdeck_voice_personalization.jpg"
            alt="Voice & Video Personalization"
            width={525}
            height={216}
            className="rounded-md scale-75 sm:scale-100"
          />
        </div>
        <h5 className="text-xl font-semibold">Voice & Video Personalization</h5>
        <p className="text-sm">
          Narrated slides provide an instant connection to your audience when
          giving presentations or simply walking someone through a complicated
          document. Add video overlays to your content to give it a personalized
          touch and increase engagement.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-layout1 w-full h-[400px] flex items-center justify-center rounded-md">
          <Image
            src="/airdeck_share_embed.png"
            alt="Share & Embed"
            width={525}
            height={216}
            className="rounded-md scale-75 sm:scale-100"
          />
        </div>
        <h5 className="text-xl font-semibold">Share & Embed</h5>
        <p className="text-sm">
          Share presentations with any audience on multiple platforms, quickly
          and easily, with no attachments. Easily embed on your website, blog
          post, or landing page. Customize the permissions on each link and send
          personalized emails containing your deck right from the platform.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-layout1 w-full h-[400px] flex items-center justify-center rounded-md">
          <Image
            src="/airdeck_survey.jpg"
            alt="Lead Capture & Surveys"
            width={525}
            height={216}
            className="rounded-md scale-75 sm:scale-100"
          />
        </div>
        <h5 className="text-xl font-semibold">Lead Capture & Surveys</h5>
        <p className="text-sm">
          Easily capture leads or survey results directly from your slides.
          Immediately sync your gathered leads with your CRM to follow up with
          the information you’ve gathered and drive business outcomes with
          confidence.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-layout1 w-full h-[400px] flex items-center justify-center rounded-md">
          <Image
            src="/airdeck_tracking_analytics.png"
            alt="Document Tracking & Analytics"
            width={525}
            height={216}
            className="rounded-md scale-75 sm:scale-100"
          />
        </div>
        <h5 className="text-xl font-semibold">Document Tracking & Analytics</h5>
        <p className="text-sm">
          Track how viewers engage with your document, in real-time. View
          slide-by-slide analytics to learn their unique interests. Leverage the
          data to improve your presentations.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-layout1 w-full h-[400px] flex items-center justify-center rounded-md">
          <Image
            src="/airdeck_safe_confidential.png"
            alt="Safe & Confidential"
            width={525}
            height={216}
            className="rounded-md scale-75 sm:scale-100"
          />
        </div>
        <h5 className="text-xl font-semibold">Safe & Confidential</h5>
        <p className="text-sm">
          AirDeck presentations are secure, with documents that are easily
          locked with a password. Set different permissions for each link you
          create and provide access only to those with privileges.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="bg-layout1 w-full h-[300px] flex items-center justify-center rounded-md">
          <Image
            src="/airdeck_integration.png"
            alt="Integration"
            width={525}
            height={216}
            className="rounded-md scale-75 sm:scale-100"
          />
        </div>
        <h5 className="text-xl font-semibold">Integrations</h5>
        <p className="text-sm">
          AirDeck easily integrates with your tech stack and the tools you
          already use. Sync viewer activity to your CRM, embed video content
          from other platforms, and receive notifications in your messaging
          tools.
        </p>
      </div>
    </div>
  );
};

export default AirDeckKeyFeatures;

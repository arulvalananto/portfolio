"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Project } from "@/app/lib/types";

const AirDeckImageGallery = ({ project }: { project: Project }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    console.log("loaded");
    setLoaded(true);
  };

  return (
    <>
      <div
        className={`${project.bgImageLayout} rounded-lg order-1 col-span-12 md:col-span-6 lg:col-span-3 row-span-1 flex items-center justify-center group`}
      >
        <div className="w-[250px] xs:w-96 sm:w-[350px] md:w-[300px] lg:w-[250px] group-hover:rotate-6 transition duration-300">
          <video
            preload="none"
            src="/projects_airdeck_demo.webm"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
            poster="/projects_airdeck_demo_poster.webp"
            className="rounded-md transition duration-300 ease-in-out group-hover:scale-95"
          />
        </div>
      </div>
      <div
        className={`${project.bgImageLayout} rounded-lg order-2 col-span-12 md:col-span-6 lg:col-span-3 row-span-2 flex items-center justify-center`}
      >
        <Image
          src="/airdeck_workflow.svg"
          alt="AirDeck Workflow"
          width={276}
          height={456}
          priority
          unoptimized
          className="xs:scale-90 scale-100"
        />
      </div>
      <div
        className={`${project.bgImageLayout} rounded-lg order-4 lg:order-3 col-span-12 lg:col-span-6 sm:row-span-2 flex items-center justify-center`}
      >
        <div className="w-[300px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[300px] md:h-[400px] lg::h-3/4 rounded-md">
          <iframe
            name="AirDeck"
            title="AirDeck"
            loading="lazy"
            allowFullScreen
            src="https://app.airdeck.co/view-decks/53616c7465645f5fb802b1a1538f5184b0bb3f28625a323c6a6acc11fdef841c/iframe-play?act=decks-1430919g6hkuswtg5f"
            data-lf-yt-playback-inspected-belvo73qyepazmqj="true"
            data-lf-vimeo-playback-inspected-belvo73qyepazmqj="true"
            className="w-full h-full rounded-md"
          ></iframe>
        </div>
      </div>
      <div
        className={`${project.bgImageLayout} rounded-lg order-3 lg:order-4 col-span-12 md:col-span-6 lg:col-span-3 row-span-1 flex items-center justify-center group`}
      >
        <Image
          src="/airdeck_integrate_embed_video.webp"
          alt="AirDeck Workflow"
          width={276}
          height={456}
          priority
          className="group-hover:scale-105 transition duration-300"
        />
      </div>
    </>
  );
};

export default AirDeckImageGallery;

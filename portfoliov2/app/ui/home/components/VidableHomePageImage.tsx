import Image from "next/image";
import React from "react";

export type VidableHomePageImageProps = {
  project: any;
  index: number;
};

const VidableHomePageImage: React.FC<VidableHomePageImageProps> = ({
  project,
  index,
}) => {
  return (
    <div
      className={`order-1 ${
        index % 2 === 0 ? "xl:order-2" : "xl:order-1"
      } xl:flex-1 w-full h-[150px] xs:h-[300px] sm:h-[350px] md:h-[500px] lg:h-[750px] xl:h-full ${
        project.className
      } border-4 rounded-md border-black overflow-hidden flex items-center justify-center group relative cursor-pointer grid-dots-yellow`}
    >
      <div className="transition duration-[750ms] z-50 translate-y-[140px] scale-50 xs:scale-100 xs:translate-y-[450px] md:translate-y-80 xl:translate-y-96 group-hover:scale-[0.2] xs:group-hover:scale-[0.3] md:group-hover:scale-50 xl:group-hover:scale-[0.3] group-hover:translate-y-10">
        <Image
          src={project.imageUrl}
          alt={project.name}
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>
      <h4 className="transition duration-500 xs:w-40 sm:w-48 uppercase absolute left-2 top-2 xs:left-5 xs:top-5 font-bold font-DMSans text-xl md:text-3xl opacity-0 translate-x-10 -translate-y-10 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
        AI-based Video Analytics Tool
      </h4>
    </div>
  );
};

export default VidableHomePageImage;

import Image from "next/image";
import type { Metadata } from "next";
import { FcAdvertising } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium, FaTwitter } from "react-icons/fa6";

import Navbar from "../ui/navbar";
import { dancingScript, poppins } from "../lib/fonts";

export const metadata: Metadata = {
  title: "About me - Arul Valan Anto",
  description: "About Arul Valan Anto, a software engineer.",
};

const AboutPage = () => (
  <main className={`${poppins.variable} ${dancingScript.variable}`}>
    <Navbar />
    <div className="w-[1270px] max-w-[1270px] m-auto my-10">
      <div className="w-[165px] h-[50px]">
        <Image
          src="/about_hello.svg"
          width={165}
          height={50}
          alt="Welcome to About Page!"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
    <div className="w-[1270px] max-w-[1270px] h-[737px] m-auto flex gap-4">
      <div className="flex-1 flex flex-col gap-5">
        <div className="w-full h-[220px] bg-portfolio-about-section text-white rounded-md px-4 py-2">
          <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
            About
          </h3>
        </div>
        <div className="w-full h-[170px] flex items-center gap-5">
          <div className="flex-1 w-full h-full bg-portfolio-about-section text-white rounded-md px-4 py-2">
            <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
              Education
            </h3>
          </div>
          <div className="flex-1 w-full h-full bg-portfolio-about-section text-white rounded-md px-4 py-2">
            <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
              Experience
            </h3>
          </div>
        </div>
        <div className="w-full h-full flex-1 flex items-center gap-5">
          <div className="flex-1 max-w-[472px] h-full bg-portfolio-about-section text-white rounded-md px-4 py-2">
            <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
              Skills
            </h3>
          </div>
          <div className="flex-1 h-full text-white rounded-md flex flex-col gap-5">
            <div className="w-full h-[92px] bg-portfolio-about-section text-white rounded-md px-4 py-2">
              <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
                Certificates
              </h3>
            </div>
            <div className="flex-1 w-full bg-portfolio-about-section text-white rounded-md px-4 py-2">
              <h3 className="font-quicksand font-bold text-xl text-portfolio-about-title">
                Projects
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[290px] max-w-[290px] flex flex-col justify-between">
        <div className="border-2 border-black rounded-md h-[316px]">
          <Image
            src="/about_profile.png"
            alt="Arul Valan Anto's profile pic"
            width={290}
            height={0}
            className="h-full object-cover"
          />
        </div>
        <div className="bg-portfolio-yellowGreen w-full h-[68px] border-2 border-black rounded-md flex items-center justify-between p-2">
          <a
            href="https://www.linkedin.com/in/arulvalanantos"
            title="Arul Valan Anto's linkedin"
            className="w-10 h-10 rounded-full bg-[#0A66C2] border-2 border-black flex items-center justify-center"
            target="_blank"
            rel="noopener norefferer nofollow"
          >
            <FaLinkedin size={20} color="white" />
          </a>
          <a
            href="https://github.com/arulvalananto"
            title="Arul Valan Anto's github"
            className="w-10 h-10 rounded-full bg-[#010409] border-2 border-black flex items-center justify-center"
            target="_blank"
            rel="noopener norefferer nofollow"
          >
            <FaGithub size={20} color="white" />
          </a>
          <a
            href="https://medium.com/@arulvalananto"
            title="Arul Valan Anto's medium"
            className="w-10 h-10 rounded-full bg-[#292929] border-2 border-black flex items-center justify-center"
            target="_blank"
            rel="noopener norefferer nofollow"
          >
            <FaMedium size={20} color="white" />
          </a>
          <a
            href="https://twitter.com/arulvalananto_"
            title="Arul Valan Anto's twitter"
            className="w-10 h-10 rounded-full bg-[#1D9BF0] border-2 border-black flex items-center justify-center"
            target="_blank"
            rel="noopener norefferer nofollow"
          >
            <FaTwitter size={20} color="white" />
          </a>
        </div>
        <button
          type="button"
          className="bg-black w-full h-[68px] rounded-md flex items-center justify-center gap-3"
        >
          <FcAdvertising size={32} />
          <span className="text-white text-base font-medium font-poppins">
            Reach me at here
          </span>
        </button>
        <div className="w-full h-[212px] bg-portfolio-blue text-white relative border-2 border-black rounded-md p-2 pt-4 group">
          <Image
            src="/about_curly_arrow.svg"
            alt="Hire me arrow"
            width={60}
            height={60}
            className="absolute -top-6 left-[135px] transition duration-300 group-hover:-translate-y-1"
          />
          <p className="text-md font-normal font-dancingScript">
            Hire me If you&apos;d like
          </p>
          <Image
            src="/about_random_player.gif"
            alt=""
            width={290}
            height={161}
            className="absolute -bottom-10 right-0 object-contain scale-50"
          />
        </div>
      </div>
    </div>
  </main>
);

export default AboutPage;

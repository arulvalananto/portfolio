import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium, FaTwitter } from "react-icons/fa6";
import { SiBento, SiBuymeacoffee, SiHackernoon } from "react-icons/si";

const socialIcons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  medium: FaMedium,
  twitter: FaTwitter,
  bento: SiBento,
  hackernoon: SiHackernoon,
  buyMeCoffee: SiBuymeacoffee,
} as const;

export type SocialIconKey = keyof typeof socialIcons;

export const getSocialIcon = (key: SocialIconKey) => socialIcons[key];

import React from "react";

type ExternalLinkProps = {
  title: string;
  href: string;
  className?: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({
  title,
  href,
  className,
}) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener norefferer nofollow"
    >
      {title}
    </a>
  );
};

export default ExternalLink;

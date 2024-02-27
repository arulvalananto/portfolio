import React from "react";

type ExternalLinkProps = {
  title: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({
  title,
  href,
  className,
  children,
}) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener norefferer nofollow"
    >
      {children ? children : title}
    </a>
  );
};

export default ExternalLink;

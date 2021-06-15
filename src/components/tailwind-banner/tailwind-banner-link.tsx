import React from "react";

type BannerLinkProps = {
  text: string;
  href: string;
};

export default function TailwindBannerLink({ text, href }: BannerLinkProps) {
  return (
    <a className=".banner-link" href={href}>
      {text}
    </a>
  );
}

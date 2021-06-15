import React from "react";

type BannerLinkProps = {
  text: string;
  href: string;
};

export default function TailwindBannerLink({ text, href }: BannerLinkProps) {
  return (
    <a className="text-sm font-bold mx-2 py-2 px-6 border-2 border-black uppercase bg-white w-[204px] hover:bg-[#ededed]" href={href}>
      {text}
    </a>
  );
}

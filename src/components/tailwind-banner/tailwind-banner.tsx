import React from "react";
import TailwindBannerLink from "./tailwind-banner-link";

export default function TailwindBanner() {
  return (
    <div className="w-full h-[559px]">
      <img className="absolute" src="https://images.dickssportinggoods.com/marketing/DSG_HomR_MarWk3_Hero_Fitness0407101659.jpg?herow=1600px" />
      <div className="relative top-1/2 left-1/2 w-1/2 px-8 py-4 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90">
        <h1 className="mb-2 text-5xl font-bold leading-none tracking-wide uppercase font-banner">Commit To Fit</h1>
        <h2 className="mb-2 text-base font-normal">Check out the latest equipment and gear to achieve all your goals.</h2>
        <div className="flex justify-center">
          <TailwindBannerLink text="Fitness" href="#" />
          <TailwindBannerLink text="Cardio" href="#" />
          <TailwindBannerLink text="Strength" href="#" />
        </div>
      </div>
    </div>
  );
}

{
  /* <a className="text-sm font-bold mx-2 py-2 px-6 border-2 border-black uppercase bg-white w-[204px] hover:bg-[#ededed]" href="#">
  Fitness
</a>
<a className="text-sm font-bold mx-2 py-2 px-6 border-2 border-black uppercase bg-white w-[204px] hover:bg-[#ededed]" href="#">
  Cardio
</a>
<a className="text-sm font-bold mx-2 py-2 px-6 border-2 border-black uppercase bg-white w-[204px] hover:bg-[#ededed]" href="#">
  Strength
</a> */
}

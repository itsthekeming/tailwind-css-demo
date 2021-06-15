import React from "react";
import VanillaBanner from "./components/vanilla-banner/vanilla-banner";
import TailwindBanner from "./components/tailwind-banner/tailwind-banner";
import CssInJsBanner from "./components/cssinjs-banner/cssinjs-banner";

export default function App() {
  return (
    <div className="flex flex-col space-y-24">
      <div>
        <h1 className="text-center text-3xl mb-4">Vanilla CSS</h1>
        <VanillaBanner />
      </div>
      <div>
        <h1 className="text-center text-3xl mb-4">CSS-in-JS</h1>
        <CssInJsBanner />
      </div>
      <div>
        <h1 className="text-center text-3xl mb-4">Tailwind CSS</h1>
        <TailwindBanner />
      </div>
    </div>
  );
}

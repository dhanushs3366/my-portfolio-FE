import { useEffect, useState } from "react";
import LogGraph from "../components/charts/Learning";
import AboutMe from "../components/AboutMe";

function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-800">
      <AboutMe/>
      <div
        className="w-[80%] h-auto mx-auto flex items-center justify-center"
        id="logChart"
      >
        <LogGraph />
      </div>
    </div>
  );
}

export default Home;

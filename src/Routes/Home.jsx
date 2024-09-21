import { useEffect, useState } from "react";
import LogGraph from "../components/charts/Learning";

function Home() {
  return (
    <div
      className="w-[80%] h-auto mx-auto mt-3 flex items-center justify-center"
      id="logChart"
    >
      <LogGraph />
    </div>
  );
}

export default Home;

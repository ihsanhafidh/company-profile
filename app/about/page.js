import React from "react";
import History from "./components/History";
import Team from "./components/Team";
import Culture from "./components/Culture";
import Milestone from "./components/Milestone";

const page = () => {
  return (
    <div>
      <History />
      <Milestone />
      <Team />
      <Culture />
    </div>
  );
};

export default page;

import React from "react";
import CardTeams from "./components/CardTeams";

const Teams = async () => {
  const response = await fetch("https://randomuser.me/api/?results=6");
  const { results } = await response.json();

  console.log(results);

  return (
    <div>
      <div className="pt-32 flex justify-center text-3xl font-bold tracking-tight text-black sm:text-6xl">
        <h1>Teams</h1>
      </div>
      <div className="grid grid-cols-3  ">
        {results.map((team, index) => {
          return <CardTeams key={index} team={team} />;
        })}
      </div>
    </div>
  );
};

export default Teams;

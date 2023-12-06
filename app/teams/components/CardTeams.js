import Image from "next/image";
import React from "react";

const CardTeams = ({ team }) => {
  return (
    <div className=" rounded-lg shadow-2xl  md:mx-10">
      <div className="my-4 overflow-hidden rounded shadow-lg">
        <Image
          className="w-full"
          src={team.picture.large}
          alt="Sunset in the mountains"
          width={200}
          height={200}
          quality={100}
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">
            {team.name.first} {team.name.last}
          </div>
          <p className="text-justify text-base text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <p>{team.nat}</p>

          <p>{team.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTeams;

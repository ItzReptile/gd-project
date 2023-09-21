"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const Landing = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const LevelSearch = async function () {
      try {
        const response = await axios.get(
          `https://pointercrate.com/api/v2/demons`
        );
        const fetchedData = response.data.slice(0, 9);
        console.log(response.data);
        setFetchedData(fetchedData);
      } catch (error) {
        console.error("error level fetching", error);
      }
    };

    LevelSearch();
  }, []);

  return (
    <div className="h-[100%] w-[100%] p-8">
      <div className="flex items-center justify-center flex-col text-center">
        <div className="mb-1 mt-1">
          <h1 className="text-5xl font-black pt-1 pb-1">DemonList</h1>
          <p className="pt-1 pb-1 text-xl">
            Demonlist - reliable top of hardest extreme demons in the game
            Geometry Dash filled by Reptile based on the various
            opinions of the best players! List of all <br/> rated and  unrated hardest
            levels that have been passed by the players, list of the possible
            future levels, top of the most skillful players and countries!"
          </p>
        </div>
        <div className="mt-1 mb-1 max-w-[1250px] flex flex-wrap items-center justify-center">
          {fetchedData &&
            fetchedData.map((level, ___) => (
              <div
                className="p-4 mr-4 mb-4 rounded-sm bg-[#242424] max-w-[400px] "
                key={level.id}
              >
                <div className="flex justify-between items-center mb-1">
                  <h1 className="text-xl font-bold mr-0.5 text-white">
                    {level.name}
                  </h1>
                  <h1 className="text-white ml-0.5">
                    Required Percent {level.requirement}%
                  </h1>
                </div>
                <div className="p-0.5">
                  <h1 className="italic text-white">
                    Level Ranking:{level.position}
                  </h1>
                </div>
                <div>
                  <img src={level.thumbnail} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;

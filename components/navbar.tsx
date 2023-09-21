"use client";

import React from "react";
import "../app/globals.css";
const Navbar = () => {
  return (
    <div className="p-6">
      <div className="m-4">
        <div className="h-[100%] w-[100%]">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <figure className="max-w-[50px]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/3/35/Geometry_Dash_Logo.PNG"
                  className="w-[100%]"
                  alt=""
                />
              </figure>
              <h2 className="ml-2 text-2xl font-semibold ">Geomentry Dash</h2>
            </div>
            <ul className="flex">
              <a
                className="underline-effect underline-effect-black"
                href="/about"
              >
                About
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

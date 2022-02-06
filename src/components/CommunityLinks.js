import React from "react";
import {
  SiDiscord,
  SiFacebook,
  SiSteam,
  SiInstagram,
  SiGithub,
  SiReddit,
} from "react-icons/si";

export default function index() {
  return (
    <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container">
      <div className="md:py-12 py-8 px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-7xl md:text-4xl text-2xl font-bold leading-10 text-black">
            Join our <span className="text-jewel">Community</span>
          </h1>
          <p className="text-base text-lg leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">
            MinMaxed is a community driven project and we want YOU to be apart
            of it. Join us anywhere below to collaborate, play or just to hang!
          </p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
            <a href="https://discord.gg/FMGny6CX8d" target="_blank">
              <div className="md:w-48 w-full h-32 bg-gray-100 flex items-center justify-center">
                <SiDiscord size="100px" />
              </div>
            </a>
            <a href="https://github.com/antiritano/MinMaxed" target="_blank">
              <div className="md:w-48 w-full h-32 bg-gray-100 flex items-center justify-center">
                <SiGithub size="100px" />
              </div>
            </a>
            <a
              href="https://steamcommunity.com/groups/MinMaxedSite"
              target="_blank"
            >
              <div className="md:w-48 w-full h-32 bg-gray-100 flex items-center justify-center">
                <SiSteam size="100px" />
              </div>
            </a>
            <div className="md:w-48 w-full h-32 bg-gray-100 flex items-center justify-center">
              <SiFacebook size="100px" />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-100 flex items-center justify-center">
              <SiReddit size="100px" />
            </div>
            <div className="md:w-48 w-full h-32 bg-gray-100 flex items-center justify-center">
              <SiInstagram size="100px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

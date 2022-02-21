import React from "react";
import {
  SiDiscord,
  SiFacebook,
  SiSteam,
  SiInstagram,
  SiGithub,
  SiReddit,
} from "react-icons/si";

export default function CommunityLinksVert() {
  return (
    <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center md:text-4xl text-2xl font-bold leading-10 text-black">
            Join our <span className="text-jewel">Community</span>
          </h1>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="grid grid-cols-2 gap-6">
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

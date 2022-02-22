import React from "react";
import { SiDiscord, SiGithub, SiSteam } from "react-icons/si";

export default function OurTeam() {
  return (
    <>
      <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
        <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">
          Meet the <span className="text-jewel">team</span>
        </h1>
        <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">
          <div className="lg:w-96 w-80">
            <img
              src="/Anthony.jpg"
              className="h-72 w-full object-cover object-top rounded-t-md"
              alt=""
            />
            <div className="bg-gray-200 shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-800">
                Anthony Iritano
              </p>
              <p className="text-base leading-6 mt-2 text-jewel">
                Lead Developer
              </p>
              <div className="flex justify-center mt-2">
                <a href="">
                  <SiSteam size="25px" className="pr-2" />
                </a>
                <a href="">
                  <SiDiscord size="25px" className="pr-2" />
                </a>
                <a href="">
                  <SiGithub size="22px" className="githubIcon" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-md lg:w-96 w-80 flex flex-col items-center justify-center md:py-0 py-12">
            <h3 className="text-2xl font-semibold leading-6 text-center text-gray-900">
              Our team
            </h3>
            <p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-gray-900 mt-6">
              We are striving to create a place that the gaming community trusts
              This project is community driven and wouldn't be possible without
              you all.
            </p>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src="/Noam.jpg"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt=""
            />
            <div className="bg-gray-200 shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-800">
                Noam Kroudo
              </p>
              <p className="text-base leading-6 mt-2 text-jewel">
                Community Manager &#38; Technical Advisor{" "}
              </p>
              <div className="flex justify-center mt-2">
                <a href="https://steamcommunity.com/profiles/76561198035320226">
                  <SiSteam size="20px" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src="danielle.jpg"
              className="h-72 w-full object-cover object-top rounded-t-md"
              alt=""
            />
            <div className="bg-gray-200 shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-800">
               Danielle Desalvo
              </p>
              <p className="text-base leading-6 mt-2 text-jewel">Designer</p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src="https://www.gamespot.com/a/uploads/original/1493/14930800/2449144-0078184205-solid.jpg"
              className="h-72 w-full object-cover object-bottom rounded-t-md"
              alt=""
            />
            <div className="bg-gray-200 shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-800">
              Richie Aiello
              </p>
              <p className="text-base leading-6 mt-2 text-jewel">Developer</p>
              <div className="flex justify-center mt-2">
                <a href="">
                  <SiSteam size="25px" className="pr-2" />
                </a>
                <a href="">
                  <SiDiscord size="25px" className="pr-2" />
                </a>
                <a href="" className="githubIcon">
                  <SiGithub size="20px" />
                </a>
                <style jsx>{`
          .githubIcon {
            padding-top: 2px;
          }
        `}</style>
              </div>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src="https://i.ibb.co/Lng30RF/team-5.png"
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt=""
            />
            <div className="bg-gray-200 shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-800">
                Placeholder
              </p>
              <p className="text-base leading-6 mt-2 text-jewel">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

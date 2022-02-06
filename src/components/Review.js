import React from "react";
import MostRecentVert from "./MostRecentVert";
import ReviewNumbers from "./ReviewNumbers"

export default function Review(props) {
  return (
    <>
      <div>
        <div className="dark:bg-gray-900">
          <div className="bg-gray-100">
            <div className="mx-auto container w-full flex items-center md:flex-row flex-col-reverse justify-between px-6 lg:px-0">
              <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0 lg:mr-10">
                <div className="mb-3 lg:mt-0 mt-5">
                  <p className="lg:text-sm text-xs text-gray-600 dark:text-gray-300 font-medium leading-none">
                    Written by: Anthony Iritano
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-gray-800 dark:text-white lg:text-4xl text-3xl font-extrabold leading-9">
                    Elden Ring
                  </p>
                </div>
                <div className="mt-3 ">
                  <p className="lg:text-base text-sm leading-normal text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="grid grid-cols-2 mt-8 mb-8 gap-y-6">
                  <div>
                    <p className="text-gray-800 dark:text-white text-sm lg:text-base font-bold leading-none">
                      Platform:{" "}
                      <span className="font-semibold md:font-medium">PC</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white text-sm lg:text-base font-bold leading-none">
                      Developer:{" "}
                      <span className="font-semibold md:font-medium">
                        FromSoftware
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white text-sm lg:text-base font-bold leading-none">
                      Release:{" "}
                      <span className="font-semibold md:font-medium">2022</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-800 dark:text-white text-sm lg:text-base font-bold leading-none">
                      Posted:{" "}
                      <span className="font-semibold md:font-medium">2022</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center object-cover lg:w-3/4 md:mt-0 lg:pl-10 lg:-mr-48 mr-0 -mr-10 -ml-10">
                <img
                  className="w-full border-black"
                  src="https://www.denofgeek.com/wp-content/uploads/2021/11/Elden-Ring-gmaeplay.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start xl:w-2/4">
              <div>
                <h2 className="text-gray-800 dark:text-white lg:text-3xl text-2xl font-bold leading-7">
                  The Review
                </h2>
              </div>
              <div className="mt-8">
                <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  Another writing challenge can be to take the individual
                      sentences in the random paragraph and incorporate a single
                      sentence from that into a new paragraph to create a short
                      story. Unlike the random sentence generator, the sentences
                      from the random paragraph will have some connection to one
                      another so it will be a bit different. You also won't know
                      exactly how many sentences will appear in the random
                      paragraph.Another writing challenge can be to take the
                      individual sentences in the random paragraph and
                      incorporate a single sentence from that into a new
                      paragraph to create a short story. Unlike the random
                      sentence generator, the sentences from the random
                      paragraph will have some connection to one another so it
                      will be a bit different. You also won't know exactly how
                      many sentences will appear in the random paragraph.
                </p>
              </div>
              <div className="mt-8 flex justify-start items-start flex-col">
                <div>
                  <p className="text-gray-800 dark:text-white lg:text-base text-sm font-semibold leading-none">
                    Breakdown
                  </p>
                </div>
                <div className="text-gray-800 dark:text-white mt-4 lg:text-base text-sm leading-normal">
                  <ul>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>
                        Mauris ullamcorper neque sed mauris gravida, vel mollis
                        velit molestie.
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>Donec iaculis erat in vulputate venenatis.</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>Vestibulum et velit et metus commodo iaculis.</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>
                        Sed et urna a felis accumsan commodo vel vel nibh.
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>
                        Praesent sollicitudin nulla non sollicitudin varius.
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>
                        Integer convallis orci sed diam volutpat feugiat.
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      - Donec posuere arcu non semper maximus.
                    </li>
                  </ul>
                </div>
                <div className="mt-8 flex-col justify-start items-start">
                  <div>
                    <img
                      className="w-full"
                      src="https://assets-prd.ignimgs.com/2021/11/09/eldenring-blogroll-1636494136701.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-8">
                    <p className="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                      Another writing challenge can be to take the individual
                      sentences in the random paragraph and incorporate a single
                      sentence from that into a new paragraph to create a short
                      story. Unlike the random sentence generator, the sentences
                      from the random paragraph will have some connection to one
                      another so it will be a bit different. You also won't know
                      exactly how many sentences will appear in the random
                      paragraph.Another writing challenge can be to take the
                      individual sentences in the random paragraph and
                      incorporate a single sentence from that into a new
                      paragraph to create a short story. Unlike the random
                      sentence generator, the sentences from the random
                      paragraph will have some connection to one another so it
                      will be a bit different. You also won't know exactly how
                      many sentences will appear in the random paragraph.
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-24">
            <MostRecentVert />
            </div>
          </div>
      <ReviewNumbers/>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import MostRecentVert from './MostRecentVert';
import ReviewNumbers from './ReviewNumbers';

export default function Review(props) {
  return (
    <>
      <div>
        <div className="">
          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start xl:w-2/4">
              <div>
                <h2 className="text-gray-800 lg:text-3xl text-2xl font-bold leading-7">
                  The Review
                </h2>
              </div>
              <div className="mt-8">
                <p className="text-gray-800 lg:text-base text-sm leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Another writing challenge can be
                  to take the individual sentences in the random paragraph and
                  incorporate a single sentence from that into a new paragraph
                  to create a short story. Unlike the random sentence generator,
                  the sentences from the random paragraph will have some
                  connection to one another so it will be a bit different. You
                  also won't know exactly how many sentences will appear in the
                  random paragraph.Another writing challenge can be to take the
                  individual sentences in the random paragraph and incorporate a
                  single sentence from that into a new paragraph to create a
                  short story. Unlike the random sentence generator, the
                  sentences from the random paragraph will have some connection
                  to one another so it will be a bit different. You also won't
                  know exactly how many sentences will appear in the random
                  paragraph.
                </p>
              </div>
              <div className="mt-8 flex justify-start items-start flex-col">
                <div>
                  <p className="text-gray-800 lg:text-base text-sm font-semibold leading-none">
                    Breakdown
                  </p>
                </div>
                <div className="text-gray-800 mt-4 lg:text-base text-sm leading-normal">
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
                    <p className="text-gray-800 lg:text-base text-sm leading-normal">
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
                      many sentences will appear in the random paragraph. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-24">
              <MostRecentVert />
            </div>
          </div>
          <ReviewNumbers />
        </div>
      </div>
    </>
  );
}

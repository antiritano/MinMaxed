import React from 'react';
import { LargeReviewCard } from './LargeReviewCard';
import SmallReviewCard from './SmallReviewCard';
import RecentReviewListItem from './RecentReviewListItem';
import ReviewListItem from './ReviewListItem';

function RetroReviewCards(props) {
  return (
    <>
    <div id="blog" className="bg-white-100 px-4 xl:px-0 py-12">
    <div className="mx-auto container">
      <h1 className="text-left text-3xl lg:text-5xl tracking-wider text-black">
        {props.header}
      </h1>
      <div className="mt-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          <div>
            <img
              className="w-full rounded-tl rounded-tr"
              src="https://images.squarespace-cdn.com/content/57856deee58c62418fa4beb3/1473208651590-XSQQN7K899XA24A4Y7DN/Ocarina+banner.jpg?format=1500w&content-type=image%2Fjpeg"
              alt="elden ring"
            />
            <div className="py-4 px-8 w-full flex justify-between bg-jewel">
              <p className="text-sm text-white font-semibold tracking-wide">
                Anthony Iritano
              </p>
              <p className="text-sm text-white font-semibold tracking-wide">
                2/27/2022
              </p>
            </div>
            <div className="bg-white px-10 py-6 rounded-bl rounded-br border-l-2 border-r-2 border-b-2 border-slate-100">
              <h1 className="text-4xl text-black font-semibold tracking-wider">
                Legend of Zelda: Ocarina of Time
              </h1>
              <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Nascetur ridiculus mus mauris vitae ultricies leo
                integer malesuada nunc. tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur
                nulla pariatu nulla pariatu nulla pariatu.
              </p>
              <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                <p className="text-base tracking-wide text-indigo-500">
                  Read more
                </p>
                <svg
                  className="ml-3 lg:ml-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={18}
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                    stroke="#4338ca"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 8.53662H19"
                    stroke="#4338ca"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="h-5 w-2" />
            </div>
          </div>
          <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <ReviewListItem
                author="Alex Albanese"
                date="2/21/22"
                title="Final Fantasy X"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                image="https://oyster.ignimgs.com/mediawiki/apis.ign.com/final-fantasy-x/5/5d/Ffx-art.jpg?width=640"
                imageAlt="Hades"
              />
              <ReviewListItem
                author="Noam Kroudo"
                date="2/20/22"
                title="Sonic the Hedgehog"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                image="https://m.media-amazon.com/images/M/MV5BZjdmYjBiNTQtZTJmOS00OGI2LWEwMGMtZWFmYzk3ZTIyNDEyXkEyXkFqcGdeQXVyNjcyNzkwMTc@._V1_.jpg"
                imageAlt="Monster Hunter"
              />
              <ReviewListItem
                author="Anthony Iritano"
                date="2/20/22"
                title="Devil May Cry"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                image="https://cdn.cloudflare.steamstatic.com/steam/apps/631510/ss_08ef9a3fac955209f95dc37f0fded968300a7cc1.1920x1080.jpg?t=1644282550"
                imageAlt="Devil May Cry 5"
              />
              <ReviewListItem
                author="Anthony Iritano"
                date="2/20/22"
                title="Pokemon Emerald"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                image="https://www.wikihow.com/images/thumb/0/04/Conquer-the-Battle-Frontier-in-Pok%C3%A9mon-Emerald-Version-Step-25-Version-2.jpg/aid4041552-v4-1200px-Conquer-the-Battle-Frontier-in-Pok%C3%A9mon-Emerald-Version-Step-25-Version-2.jpg"
                imageAlt="Monster Hunter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
}


export default RetroReviewCards;

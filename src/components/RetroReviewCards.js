import React from 'react';
import { LargeReviewCard } from './LargeReviewCard';
import SmallReviewCard from './SmallReviewCard';

function RetroReviewCards() {
  return (
    <>
      <div className="container mx-auto lg:mx-16 px-4 lg:px-0">
        <h1 className="text-2xl text-left text-black font-bold pt-8">
          Retro Reviews
        </h1>
        <div className="pt-6 xl:px-0 px-4">
          <div className="w-full lg:flex">
            <LargeReviewCard
              heading="Legend of Zelda: Ocarina of Time"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://images.squarespace-cdn.com/content/57856deee58c62418fa4beb3/1473208651590-XSQQN7K899XA24A4Y7DN/Ocarina+banner.jpg?format=1500w&content-type=image%2Fjpeg"
              link="/review/ocarina-of-time"
            />
            <div className="lg:w-1/2 lg:ml-8">
              <SmallReviewCard
                heading="Sonic the Hedgehog"
                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/reviews/sonic-the-hedgehog"
                image="https://m.media-amazon.com/images/M/MV5BZjdmYjBiNTQtZTJmOS00OGI2LWEwMGMtZWFmYzk3ZTIyNDEyXkEyXkFqcGdeQXVyNjcyNzkwMTc@._V1_.jpg"
              />
              <SmallReviewCard
                heading="Devil May Cry"
                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/reviews/devil-may-cry"
                image="https://www.droidcache.com/wp-content/uploads/2018/03/MV5BZjFhYjQyNTMtMjhlOS00ZWNjLTg1MTYtYzBjMGQ0MDhkZGNjXkEyXkFqcGdeQXVyNjg0Mjk4Mzc@._V1_.jpg"
              />
              <SmallReviewCard
                heading="Pokemon Emerald"
                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                link="/reviews/pokemon-emerald"
                image="https://www.wikihow.com/images/thumb/0/04/Conquer-the-Battle-Frontier-in-Pok%C3%A9mon-Emerald-Version-Step-25-Version-2.jpg/aid4041552-v4-1200px-Conquer-the-Battle-Frontier-in-Pok%C3%A9mon-Emerald-Version-Step-25-Version-2.jpg"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-16 w-full">
          <button className="hover:bg-gray-400 bg-jewel lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-white focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">
            Browse More
          </button>
        </div>
        <div />
      </div>
    </>
  );
}

export default RetroReviewCards;

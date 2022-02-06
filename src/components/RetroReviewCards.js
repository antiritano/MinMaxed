import React from 'react';
function RetroReviewCards() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl text-left f-m-w text-black font-bold pt-8">
          Retro Reviews
        </h1>
        <div className="pt-6 xl:px-0 px-4">
          <div className="w-full lg:flex">
            <div className="lg:w-1/2">
              <div className="cursor-pointer hover:opacity-75">
              <a href='/reviews/Zelda-oot'>
                <img
                  src="https://images.squarespace-cdn.com/content/57856deee58c62418fa4beb3/1473208651590-XSQQN7K899XA24A4Y7DN/Ocarina+banner.jpg?format=1500w&content-type=image%2Fjpeg"
                  className="rounded w-full"
                />
                </a>
              </div>
              <div className="mt-8 lg:mb-0 mb-8">
                <h1 className="f-m-m text-2xl font-semibold leading-7">
                  Legend of Zelda: Ocarina of time
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. It has survived not only five centuries.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-4">
                    <a href='/reviews/Zelda-oot'>
                      <p className="text-black underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-8">
              <div className="lg:flex items-start mb-8">
                <div className="rounded w-full h-44 overflow-hidden cursor-pointer hover:opacity-75">
                  <a href='/reviews/sonic'>
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BZjdmYjBiNTQtZTJmOS00OGI2LWEwMGMtZWFmYzk3ZTIyNDEyXkEyXkFqcGdeQXVyNjcyNzkwMTc@._V1_.jpg"
                    className="w-full h-full object-center object-cover"
                  />
                  </a>
                </div>
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    Sonic the Hedgehog
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                  <div className="mt-4">
                    <a href='/reviews/sonic'>
                      <p className="text-black underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mb-8">
                <div className="rounded w-full h-44 overflow-hidden cursor-pointer hover:opacity-75">
                  <a href='/reviews/devil-may-cry'>
                  <img
                    src="https://www.droidcache.com/wp-content/uploads/2018/03/MV5BZjFhYjQyNTMtMjhlOS00ZWNjLTg1MTYtYzBjMGQ0MDhkZGNjXkEyXkFqcGdeQXVyNjg0Mjk4Mzc@._V1_.jpg"
                    className="w-full h-full object-center object-cover"
                  />
                  </a>
                </div>
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    Devil May Cry
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                  <div className="mt-4">
                    <a href='/reviews/devil-may-cry'>
                      <p className="text-black underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mb-8">
                <div className="rounded w-full h-44 overflow-hidden">
                <a href='/reviews/pokemon-emerald'>
                  <img
                    src="https://www.wikihow.com/images/thumb/0/04/Conquer-the-Battle-Frontier-in-Pok%C3%A9mon-Emerald-Version-Step-25-Version-2.jpg/aid4041552-v4-1200px-Conquer-the-Battle-Frontier-in-Pok%C3%A9mon-Emerald-Version-Step-25-Version-2.jpg"
                    className="w-full h-full object-center object-cover cursor-pointer hover:opacity-75"
                  />
                  </a>
                </div>
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    Pokemon Emerald
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                  <div className="mt-4">
                    <a href='/reviews/pokemon-emerald'>
                      <p className="text-black underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-16 w-full">
          <button className=" hover:bg-gray-400 bg-jewel lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-white focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">
            Browse More
          </button>
        </div>
        <div />
      </div>
    </>
  );
}

export default RetroReviewCards;

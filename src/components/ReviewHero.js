export const ReviewHero = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="max-w-7xl xl:ml-40 mx-auto">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://www.denofgeek.com/wp-content/uploads/2021/11/Elden-Ring-gmaeplay.jpg"
          alt=""
        />
      </div>
        <div className="relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 2xl:pb-32">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          <main className="mt-10  max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="mb-3 lg:mt-0 mt-5">
              <p className="lg:text-sm text-xs  font-medium leading-none text-jewel">
                Written by: Anthony Iritano
              </p>
            </div>
            <div className="mt-3">
              <p className="text-gray-800 lg:text-4xl text-3xl font-extrabold leading-9">
                Elden Ring
              </p>
            </div>
            <div className="mt-3 ">
              <p className="lg:text-base text-sm leading-normal text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="grid grid-cols-2 mt-8 mb-8 gap-y-6">
              <div>
                <p className="text-gray-800  text-sm lg:text-base font-bold leading-none">
                  Platform:{' '}
                  <span className="font-medium">PC</span>
                </p>
              </div>
              <div>
                <p className="text-gray-800 text-sm lg:text-base font-bold leading-none">
                  Developer:{' '}
                  <span className="font-medium">
                    FromSoftware
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-800 text-sm lg:text-base font-bold leading-none">
                  Release:{' '}
                  <span className="font-medium">2022</span>
                </p>
              </div>
              <div>
                <p className="text-gray-800 text-base font-bold leading-none">
                  Posted:{' '}
                  <span className="font-medium">2022</span>
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

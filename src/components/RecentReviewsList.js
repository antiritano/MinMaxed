
import RecentReviewListItem from "./RecentReviewListItem";
function ReviewPost(props) {
  return (
    <>
      <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-left text-3xl lg:text-5xl tracking-wider text-black">
            {props.header}
          </h1>
          <div className="mt-12">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              <div>
                <img
                  className="w-full rounded-tl rounded-tr"
                  src="https://cdn1.dotesports.com/wp-content/uploads/2021/12/09123709/elden-ring-scaled.jpg"
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
                <div className="bg-white px-10 py-6 rounded-bl rounded-br">
                  <h1 className="text-4xl text-black font-semibold tracking-wider">
                    Elden Ring
                  </h1>
                  <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur nulla pariatu
                    nulla pariatu nulla pariatu.
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
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-3">
                  <RecentReviewListItem
                    author="Alex Albanese"
                    date="2/21/22"
                    title="Hades"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod..."
                    image="https://cdn1.epicgames.com/min/offer/2560x1440-2560x1440-5e710b93049cbd2125cf0261dcfbf943.jpg"
                    imageAlt="Hades"
                  />
                  <RecentReviewListItem
                    author="Noam Kroudo"
                    date="2/20/22"
                    title="Monster Hunter Rise"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod..."
                    image="https://cdn.akamai.steamstatic.com/steam/apps/1446780/capsule_616x353.jpg?t=1645786763"
                    imageAlt="Monster Hunter"
                  />
                  <RecentReviewListItem
                    author="Anthony Iritano"
                    date="2/20/22"
                    title="Devil May Cry 5"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod..."
                    image="https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg?t=1643243335"
                    imageAlt="Devil May Cry 5"
                  />
                  <RecentReviewListItem
                    author="Anthony Iritano"
                    date="2/20/22"
                    title="Ghostwire Tokyo"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod..."
                    image="https://images.ctfassets.net/rporu91m20dc/6FmLtqmXxvFqTcn9JA9LS1/b2bd261c7d03c6e4a30193a28a008b30/Ghostwire_LargeHero_GameplayReveal.png"
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

export default ReviewPost;

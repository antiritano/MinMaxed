
function Footer() {
    return (
        <div className="pt-16 bg-black mt-5">
            <div className="w-full border-gray-300 border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto">
                <div className="container mx-auto py-12">
                    <div className="xl:flex lg:flex md:flex pt-6">
                        <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
                            <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                            <p className="ml-3 font-bold text-3xl text-stark">Min<span className="text-jewel">Maxed</span></p>
                            </div>
                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            <ul>
                                <li className="text-jewel font-bold text-xl mb-6">Community</li>
                                <li className="text-base text-stark hover:text-gray-200 mb-5">
                                    <a href="javascript:void(0)">About Us</a>
                                </li>
                                <li className="text-base text-stark hover:text-gray-200 mb-5">
                                    <a href="javascript:void(0)">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            <ul>
                                <li className="text-jewel font-bold text-xl mb-6">Articles</li>
                                <li className="text-base text-stark hover:text-gray-200 mb-5">
                                    <a href="javascript:void(0)">Retro Reviews</a>
                                </li>
                                <li className="text-base text-stark hover:text-gray-200 mb-5">
                                    <a href="javascript:void(0)">Reviews</a>
                                </li>
                                <li className="text-base text-stark hover:text-gray-200 mb-5">
                                    <a href="javascript:void(0)">News</a>
                                </li>


                            </ul>
                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            <ul>
                                <li className="text-jewel font-bold text-xl mb-6">Resources</li>
                                <li className="text-base text-stark hover:text-gray-200 mb-5">
                                    <a href="javascript:void(0)">Privacy Policy</a>
                                </li>
                                <li className="text-base text-stark hover:text-gray-200 mb-5">
                                    <a href="javascript:void(0)">Copyright</a>
                                </li>
                                <li className="text-base text-stark hover:text-gray-200 mb-5">
                                    <a href="javascript:void(0)">Terms of Use</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="xl:flex flex-wrap justify-between xl:mt-0 mt-16 pl-3 sm:pl-0">
                        <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
                            <p className="text-jewel text-base">2022 MinMaxed. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer
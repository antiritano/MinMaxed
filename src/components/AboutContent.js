import React from 'react';
import CommunityLinks from './CommunityLinks';
import { ImPacman } from 'react-icons/im';
import { FaGhost } from 'react-icons/fa';
import { Animated } from 'react-animated-css';
import OurTeam from './OurTeam';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const AboutContent = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <Animated animationIn="bounceInLeft" isVisible={true}>
            <div className="w-full font-bold lg:text-5xl text-3xl leading-9">
              A review platform you can{' '}
              <span className="text-jewel">trust</span>.
            </div>
            <p className="font-normal text-lg leading-6 text-gray-600 mt-6">
              MinMaxed strives to be a place that the gaming community can come
              to for quality unbiased content from real members of the platform.
              This site was created out of a passion for games and we promise to
              keep that passion at the forefront of our mission.
            </p>
          </Animated>
        </div>
        <div className="lg:w-1/2 w-full">
          <Animated animationIn="bounceInRight" isVisible={true}>
            <img
              className="lg:block hidden w-full"
              src="/resized-banner.jpg"
              alt=""
            />
          </Animated>
          <img
            className="lg:hidden sm:block hidden w-full"
            src="/resized-banner.jpg"
            alt=""
          />
          <img
            className="sm:hidden block w-full"
            src="resized-banner.jpg"
            alt=""
          />
        </div>
      </div>
      <Animated animationIn="bounce" isVisible="true">
      <div className="relative mt-24">
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div className="z-20 w-14 h-14 flex bg-white rounded-full justify-center items-center">
            <ImPacman color="#FFEE00" size="50px" fill="#FFEE00" />
          </div>
          <div className="z-20">
            <FaGhost size="50px" fill=" #4717F6" />
          </div>

          <div className="z-20 sm:block hidden">
            <FaGhost size="50px" fill=" #4717F6" />
          </div>
        </div>
        <hr className="dottedSpaced z-10 absolute top-2/4 w-full bg-white" />
        <style jsx>{`
          .dottedSpaced {
            width: 100%;
            border-style: dotted none none;
            border-width: 7px;
            border-color: black;
          }
        `}</style>
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-jewel mt-6">
            Phase:1
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Establish a community and build a staff of passionate writers to
            provide quality content for our launch. Development of the site is
            all being done internally, we want to provide the highest quality
            experience and website can provide. If you are interested in
            contributing to the development process we would love to hear from
            you.
            <a href="/community" className="underline text-jewel">
              Lets talk!
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black mt-6">
            Phase:2
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Expand the scope of our content beyond written articles including
            streaming, podcasts and video content. We want to hilight the best
            of the community, if you feel your content fits within our mission{' '}
            <a href="/community" className="underline text-jewel">
              Reach out!
            </a>{' '}
            We would love to hear from you.
          </p>
        </div>
        <div className="sm:block hidden">
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-black mt-6">
            Phase:3
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Open the platform to community uploading! The end goal of this
            platform is to create a review structure that the community can
            trust and what better way to do that then to have content come
            directly from the community. Upload your own reviews/articles/videos
            to get them through a peer review process to have them verified and
            hosted on the platform.
          </p>
        </div>
      </div>
      <div className="md:hidden block pt-5">
        <FaGhost size="50px" fill=" #4717F6" />
      </div>
      <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
            Phase 3:
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Open the platform to community uploading! The end goal of this
            platform is to create a review structure that the community can
            trust and what better way to do that then to have content come
            directly from the community. Upload your own reviews/articles/videos
            and have them go through a peer review process to have them verified
            and hosted on the platform.
          </p>
        </div>
      </div>
      </Animated>
      <AnimationOnScroll animateOnce="true" animateIn='animate__fadeInLeft'>
      <div className="flex">
        <div className="w-full my-16">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-black">
            Our<span className='text-jewel'> Mission</span>
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Another
            writing challenge can be to take the individual sentences in the
            random paragraph and incorporate a single sentence from that into a
            new paragraph to create a short story. Unlike the random sentence
            generator, the sentences from the random paragraph will have some
            connection to one another so it will be a bit different. You also
            won't know exactly how many sentences will appear in the random
            paragraph.Another writing challenge can be to take the individual
            sentences in the random paragraph and incorporate a single sentence
            from that into a new paragraph to create a short story.
          </p>
        </div>
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn='animate__fadeInRight'animateOnce="true">
      <OurTeam />
      </AnimationOnScroll>
      <AnimationOnScroll animateOnce="true" animateIn='animate__fadeInLeft'>
      <CommunityLinks/>
      </AnimationOnScroll>
    </div>
  );
};

export default AboutContent;

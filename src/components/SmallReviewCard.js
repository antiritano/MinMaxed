import React from 'react';

const SmallReviewCard = (props) => {
  return (
    <div className="lg:flex items-start mb-8">
      <div className="rounded w-full h-44 overflow-hidden cursor-pointer hover:opacity-75">
        <a href={props.link}>
          <img
            src={props.image}
            className="w-full h-full object-center object-cover"
          />
        </a>
      </div>
      <div className="lg:ml-6">
        <h1 className="text-2xl font-semibold leading-7 lg:mt-0 mt-8 text-black">
          {props.heading}
        </h1>
        <p className="text-base leading-loose mt-2">
         {props.body}
        </p>
        <div className="mt-4">
          <a href={props.link}>
            <p className="text-jewel underline text-base font-semibold">
              Read More
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmallReviewCard;

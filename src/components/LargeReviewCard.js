import React from 'react';

export const LargeReviewCard = (props) => {
  return (
    <div className="lg:w-1/2 rounded">
      <div className="cursor-pointer hover:opacity-75">
        <a href={props.link}>
          <img src={props.image} className="rounded w-full" />
        </a>
      </div>
      <div className="mt-8 lg:mb-0 mb-8 mx-4">
        <h1 className="text-2xl font-semibold leading-7">{props.heading}</h1>
        <p className="text-base leading-loose mt-2">{props.body}</p>
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

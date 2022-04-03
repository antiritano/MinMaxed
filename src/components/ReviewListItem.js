const ReviewListItem = (props) => {
  return (
    <div className="ReviewListItem__container">
      <div className="ReviewListItem__imageContainer">
      <img
        className="w-full rounded-tr rounded-tl ReviewListItem__imageContainer object-cover"
        src={props.image}
        alt={props.imageAlt}
      />
      </div>
      <div className="py-2 px-4 w-full flex justify-between bg-jewel">
        <p className="text-sm text-white font-semibold tracking-wide">
          {props.author}
        </p>
        <p className="text-sm text-white font-semibold tracking-wide">
          {props.date}
        </p>
      </div>
      <div className="ReviewListItem__textContainer bg-white px-3  lg:px-6 py-4 rounded-bl rounded-br border-l-2 border-r-2 border-b-2 border-slate-100">
        <h1 className="text-lg text-black font-semibold tracking-wider">
          {props.title}
        </h1>
        <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
          {props.body}
        </p>
      </div>
      <style jsx>{`
        @media (min-width: 1280px) {
        .ReviewListItem__imageContainer {
          max-height: 240px;
          min-height: 240px;
        }
        .ReviewListItem__textContainer {
          height: 235px;
        }
        }
      `}</style>
    </div>
  );
};
export default ReviewListItem;

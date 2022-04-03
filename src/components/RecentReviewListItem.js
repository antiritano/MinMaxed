const RecentReviewListItem = (props) => {
  return (
    <div className="">
      <img
        className="w-full rounded-tr rounded-tl"
        src={props.image}
        alt={props.imageAlt}
      />
      <div className="py-2 px-4 w-full flex justify-between bg-jewel">
        <p className="text-sm text-white font-semibold tracking-wide">
          {props.author}
        </p>
        <p className="text-sm text-white font-semibold tracking-wide">
          {props.date}
        </p>
      </div>
      <div className="RecentReviewListItem__textContainer bg-white px-3  lg:px-6 py-4 rounded-bl rounded-br">
        <h1 className="text-lg text-black font-semibold tracking-wider">
          {props.title}
        </h1>
        <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
         {props.body}
        </p>
      </div>
      <style jsx>{`
          .RecentReviewListItem__textContainer {
            height: 242px;
          }
        `}</style>
    </div>
  );
};

export default RecentReviewListItem;

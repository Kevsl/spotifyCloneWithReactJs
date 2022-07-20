const Cards = (props) => {
  return (
    <div className="">
      <div className="p-2 w-48 relative">
        <div
          className="absolute w-full h-full flex justify-end items-end px-0 py-0 -top-12  opacity-0
        hover:opacity-100 "
        >
          <div
            className="
        bg-green
        rounded-full
        w-10
        h-10
        flex
        items-center
        justify-center"
          >
            <i class="fa-solid fa-play text-white text-2xl"></i>
          </div>
        </div>
        <div className="bg-light w-full h-auto p-5 rounded-lg shadow-md mx-8 my-8">
          <img
            src={props.img}
            alt={props.name}
            className="shadow mb-2 object-cover h-36 w-72"
          />
          <h2 className="text-sm font-semibold text-white tracking-wide">
            {props.name}
          </h2>
          <h3>{props.artist}</h3>
        </div>
      </div>
    </div>
  );
};
export default Cards;

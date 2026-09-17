import { FaStar, FaCalendarAlt } from "react-icons/fa";

const MoiveCard = ({ movie, handleViewDetails }) => {
  const { name, image, rating, genres, ended } = movie;
  return (
    <div className="card  border hover:scale-105   shadow-sm">
      <figure className="my-5">
        <img
          src={image?.medium}
          alt="Movie poster"
          className="rounded-xl  hover:scale-105"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {name} </h2>
        <div className="flex gap-4  justify-between">
          <p className="flex gap-2">
            <span className="text-xl  ">
              <FaStar />
            </span>
            {rating?.average}
          </p>
          <p className="flex gap-2">
            <span className="text-xl">
              <FaCalendarAlt></FaCalendarAlt>
            </span>
            {ended}
          </p>
        </div>
        <div className="">
          <p className="flex gap-2">
            {genres?.map((genre, idx) => (
              <span
                className="bg-fuchsia-700 p-2 hover:bg-secondary hover:scale-105 rounded-xl"
                key={idx}
              >
                {genre}
              </span>
            ))}
          </p>
        </div>
        <div className="card-actions">
          <button
            onClick={() => handleViewDetails(movie)}
            className="btn btn-primary hover:bg-secondary"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoiveCard;

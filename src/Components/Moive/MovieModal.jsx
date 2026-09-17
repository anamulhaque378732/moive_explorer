import { FaCalendarAlt, FaStar } from "react-icons/fa";

const MovieModal = ({ selectedMovie, setSelectedMovie }) => {
  if (!selectedMovie) {
    return null;
  }

  const {
    name,
    rating,
    summary,
    ended,
    image,
    type,
    runtime,
    network,
    status,
    language,
  } = selectedMovie;

  return (
    <>
      <dialog open id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <button
            onClick={() => setSelectedMovie(null)}
            className="btn btn-sm btn-circle  absolute   right-2 top-2"
          >
            ✕
          </button>

          <figure className="px-10 pt-10">
            <img
              src={image?.original}
              alt="Movie poster"
              className="rounded-xl w-full h-[400px]"
            />
          </figure>

          <h3 className="font-bold text-5xl my-2"> {name} </h3>
          <div className="flex gap-4   ">
            <p className="flex gap-2 my-2">
              <span className="text-xl  ">
                <FaStar />
              </span>{" "}
              Rating : {rating?.average} <span className=" ">|</span>
            </p>

            <p className="flex gap-2 my-2">
              <span className="text-xl">
                <FaCalendarAlt></FaCalendarAlt>
              </span>{" "}
              Release : {ended}
            </p>
          </div>

          <div className="flex  justify-between my-2">
            <p>Type : {type}</p>
            <p> Runtime : {runtime} </p>
            <p> status : {status} </p>
            <p> Network : {network?.country?.name} </p>
            <p>Language : {language} </p>
          </div>

          <p className="text-xl my-2"> {summary} </p>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => setSelectedMovie(null)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MovieModal;

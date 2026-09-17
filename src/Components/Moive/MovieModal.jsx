const MovieModal = ({ selectedMovie, setSelectedMovie }) => {
  if (!selectedMovie) {
    return null;
  }
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
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => setSelectedMovie(null)}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MovieModal;

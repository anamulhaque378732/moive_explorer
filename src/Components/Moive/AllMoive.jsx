import { useEffect, useState } from "react";
import MoiveCard from "./MoiveCard";
import MovieModal from "./MovieModal";

const AllMoive = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [search, setSearch] = useState("");

  useEffect(() => {
    const allMovies = async () => {
      try {
        const result = await fetch(`https://api.tvmaze.com/shows`);

        const data = await result.json();

        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    allMovies();
  }, []);

  const handleViewDetails = (moive) => {
    setSelectedMovie(moive);
  };

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h1 className="text-5xl font-bold text-center md:my-5 my-2">
        All Movies
      </h1>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies &&
          movies.map((movie) => (
            <MoiveCard
              key={movie.id}
              movie={movie}
              handleViewDetails={handleViewDetails}
            ></MoiveCard>
          ))}
      </div>

      {selectedMovie && (
        <MovieModal
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        ></MovieModal>
      )}
    </div>
  );
};

export default AllMoive;

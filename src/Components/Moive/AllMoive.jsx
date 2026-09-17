import { useEffect, useState } from "react";
import MoiveCard from "./MoiveCard";
import MovieModal from "./MovieModal";

const AllMoive = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // load data

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

  // view details

  const handleViewDetails = (moive) => {
    setSelectedMovie(moive);
  };

  // search moive

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search}`,
      );

      const data = await result.json();
      const searchMovie = data.map((moive) => moive.show);

      setMovies(searchMovie);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setSearch("");
  };

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h1 className="text-5xl font-bold text-center md:my-10 my-5">
        All Movies
      </h1>
      <div className="flex justify-end my-4 md:my-8 gap-4 ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search moive"
          className="input input-lg"
        />
        <button className="btn btn-primary " onClick={handleSearch}>
          Search
        </button>
      </div>
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

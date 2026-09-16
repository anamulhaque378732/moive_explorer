import { useEffect, useState } from "react";

const AllMoive = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <p>Loading ...</p>;
  }

  console.log(movies);

  return <div></div>;
};

export default AllMoive;

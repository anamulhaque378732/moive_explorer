import { Link } from "react-router";
import MoviePoster from "../assets/image.png";
const Home = () => {
  return (
    <div
      className="hero min-h-screen md:mt-10 mt-4 "
      style={{
        backgroundImage: `url(${MoviePoster})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold"> DISCOVER MOVIES </h1>
          <p className="mb-5 text-2xl font-medium">
            Explore and discover your favorite movies from around the world.
          </p>
          <Link to="movieCard" className="btn btn-primary">
            Moive list
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

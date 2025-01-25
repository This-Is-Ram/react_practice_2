import { useLoaderData } from "react-router-dom";
import { Card } from "../components/ui/MovieCard";
// import "./ui/card.css ";

export const Movie = () => {
  const movieData = useLoaderData();
  // console.log(movieData.Search);

  return (
    <>
      <ul className="ScreenWidth  grid-four-cols">
        {movieData &&
          movieData.Search.map((curMovie) => (
            <Card key={curMovie.imdbID} curMovie={curMovie} />
          ))}
      </ul>
    </>
  );
};

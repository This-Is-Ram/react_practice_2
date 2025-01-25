import { useLoaderData, useNavigate } from "react-router-dom";

export const MovieDetails = () => {
  const navigate = useNavigate();
  const movieDetail = useLoaderData();
  console.log(movieDetail);
  const {
    Actors,
    Awards,
    BoxOffice,
    Country,
    Director,
    Language,
    Plot,
    Poster,
    imdbRating,
    Released,
    Title,
    Writer,
    imdbVotes,
  } = movieDetail;

  return (
    <>
      <div>
        <img src={Poster} alt={Title} />
        <h1>{Title}</h1>
        <p>imdb Rating : {imdbRating}</p>
        <p>Actors : {Actors}</p>
        <p>Awards : {Awards}</p>
        <p>Released : {Released}</p>
        <p>Writer : {Writer}</p>
        <p>imdbVotes : {imdbVotes}</p>
        <p>Language : {Language}</p>
        <p>Country : {Country}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
};

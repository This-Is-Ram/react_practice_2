// import "./src/App.css";

import { NavLink } from "react-router-dom";

export const Card = ({ curMovie }) => {
  const { Poster, Title, Type, Year, imdbID } = curMovie;

  return (
    <li key={imdbID}>
      <div>
        <img src={Poster} alt={Title} />
      </div>
      <h1>{Title}</h1>
      <NavLink to={`/movie/${imdbID}`}>
        <button>Watch Now</button>
      </NavLink>
    </li>
  );
};

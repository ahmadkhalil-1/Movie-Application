import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

const truncateTitle = (title) => {
  const words = title.split(" ");
  return words.slice(0, 4).join(" ");
};

const Movie = () => {
  const { movie } = useGlobalContext();

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {movie.map((moviee) => (
          <div key={moviee.imdbID} className="col-md-3 mb-4">
            <NavLink
              to={`/movie/${moviee.imdbID}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card">
                <img
                  src={moviee.Poster}
                  alt={moviee.Title}
                  className="card-img-top"
                  style={{ height: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{truncateTitle(moviee.Title)}</h5>
                  <p className="card-text">{`${moviee.Type} - ${moviee.Year}`}</p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;

import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`;
    fetchData(apiUrl);
  }, [id]);

  if (!movie) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <div className="container p-5 mt-5">
      <div className="card">
        <div className="row">
          <div className="col-md-6">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="card-img"
              style={{ height: "300px" }}
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title">{movie.Title}</h2>
              <p className="card-text">
                <strong>Released:</strong> {movie.Released}
              </p>
              <p className="card-text">
                <strong>Genre:</strong> {movie.Genre}
              </p>
              <p className="card-text">
                <strong>Rating:</strong> {movie.imdbRating} / 10
              </p>
              <p className="card-text">
                <strong>Country:</strong> {movie.Country}
              </p>
              <NavLink to="/" className="btn btn-primary">
                Go Back
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

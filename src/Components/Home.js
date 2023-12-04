import React from "react";
import Movie from "../Components/Movie";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <h1 className="text-center mt-4">Movie Application</h1>
      <Search />
      <Movie />
    </>
  );
};

export default Home;

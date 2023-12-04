import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="mt-3 "
            >
              <input
                placeholder="Search Here"
                className="form-control m-auto"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;

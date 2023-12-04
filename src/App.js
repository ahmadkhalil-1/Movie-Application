import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SinglePage from "./Components/SinglePage";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:id" element={<SinglePage />} />
          <Route
            path="*"
            exact
            element={<h1 className="text-center text-danger mt-5">Error</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;

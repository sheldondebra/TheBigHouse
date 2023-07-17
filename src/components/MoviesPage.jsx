import React from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();

  // Fetch the full information of the movie using the `id` parameter

  return (
    <div>
      <h1>
        Movie {id}
      </h1>
      {/* Display the full information of the movie */}
    </div>
  );
};

export default MoviePage;

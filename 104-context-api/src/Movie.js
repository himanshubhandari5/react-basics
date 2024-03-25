import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div>
      <h3>
        {name}|{price}
      </h3>
    </div>
  );
};

export default Movie;

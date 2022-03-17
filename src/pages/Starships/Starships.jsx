import React from "react";
import { useEffect, useState } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from 'react-router-dom'

const Starships = (props) => {
  const [starships, setStarships] = useState([]);
  useEffect(() => {
    getAllStarships()
      .then(starshipsData => setStarships(starshipsData.results))
  })

  return (
    <>
      <div className="icon-container">
        {starships.length ?
          <>
            {starships.map((starship) => (
              <div id="classDiv" key={starship.index}>
                <Link
                  class="return"
                  to="/starship"
                  state={{ starship }}
                >
                  {starship.name}
                </Link>
              </div>
            ))}
          </>
          :
          <p>
            Loading Starships...
          </p>
        }
      </div>
    </>
  );
}

export default Starships;
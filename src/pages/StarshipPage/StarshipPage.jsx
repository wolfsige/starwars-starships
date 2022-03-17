import React, { UseState, useEffect, useState } from "react";
import { getStarshipDetail } from "../../services/sw-api";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const StarshipPage = (props) => {
  const [starshipDetail, setStarshipDetail] = useState({})
  let location = useLocation()

  useEffect(() => {
    getStarshipDetail(location.state.starship.url)
      .then(starshipDetail => setStarshipDetail(starshipDetail))
  })

  return (
    <>
      {starshipDetail.name ?
        <>
          <div className="icon-container">
            <div id="classDiv">
            <h3 >{starshipDetail.name}</h3>
            <h3>{starshipDetail.model}</h3>
            <h3>
              <Link class="return" to="/">
                Return
              </Link>
            </h3>
            </div>
          </div>
        </>
        :
        <p>
          Loading Details...
        </p>
      }
    </>
  );
}

export default StarshipPage;
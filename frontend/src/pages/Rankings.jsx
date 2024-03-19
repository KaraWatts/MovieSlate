import React from "react";
import { Table, Image } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import Draggable from 'react-draggable';

function Rankings() {
  const { rankings, setRankings } = useOutletContext();


  return (
    <div className="allRanks">
              {rankings.map((film, index) => (
            <Draggable key={film.key}>
            <div  className="tile">
            <h4>{index+1}</h4>
                <Image style={{ height: "100px" }} src={film.poster} fluid />
              <h3>{film.title}</h3>
                <button
                  type="button"
                  onClick={() =>
                    setRankings(
                      rankings.filter((movie) => movie.id !== film.id)
                    )
                  }
                >
                  X
                </button>
            </div>
          </Draggable>
          ))}
      </div>
  );
}

export default Rankings;

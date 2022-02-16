import React from "react";
import { CardGroup } from "react-bootstrap";
import { useState } from "react";
import Movie from "../Movie/Movie";
import ModalMovie from "../ModalMovie/ModalMovie";

const MovieList = (props) => {
  const [Movie, setMovie] = useState();
  const [showModal, setShowModal] = useState(false);//flag we cahnge it's value through the hook

  return (
    <>
      <CardGroup>
        {props.movies.map((movie) => {
          return (
            <Movie
              movie={movie}
              key={movie.id}
              setShowModal={setShowModal} //hook 
              setMovie={setMovie}
            />
          );
        })}

        {showModal && (
          <ModalMovie
            show={showModal}
            movie={Movie}
            handleClose={() => {
              setShowModal(false);
            }}
            updateCaption={props.updateCaption}
          />
        )}
      </CardGroup>
    </>
  );
};

export default MovieList;
import React from "react";
import { Card,Button } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "../ModalMovie/ModalMovie";




function Movie(props) {


  const [Movie, setMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  
  return (<>
        <Card key={props.movie.id}>
          <Card.Img variant="top" src={props.movie.poster_path} />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>
              {props.movie.overview}
            </Card.Text>
            <Card.Text>
              {props.movie.Caption}
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                props.setMovie(props.movie);
                props.setShowModal(true)
              }}
            >
              Add to Favorite Movies List 
            </Button>
          </Card.Body>
        </Card>



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

    </>
  );
}
export default Movie;










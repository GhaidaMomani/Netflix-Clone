
import React , {useState} from 'react'
import { CardGroup } from 'react-bootstrap';
import Movie from '../Movie/Movie.js'
import {Button , Modal , Form} from 'react-bootstrap';
import { useRef } from 'react';



function ModalMovie(props) {

  const commentRef = useRef();
  function handleCaption(e) {
      e.preventDefault()
      const userCaption = commentRef.current.value;
      ;
      const newData = { ...props.movie, userCaption };
      props.updateCaption(newData, props.movie.id);
    
  }



  async function addToFavorite(thisMovie){
    try{
        const res = await fetch(`${process.env.REACT_APP_SERVER}/addMovie`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title : thisMovie.title,
                image : `https://api.themoviedb.org/3/trending/all/week/${props.movie.poster_path}`,
                comment : thisMovie.caption,

            })
            

        })
        const data = await res.json();




    } catch (error) {
        console.log("error", error);
    }
}

  return (
    <>
        <Modal show={props.show} onHide={() => { props.handleColse() }}>
            <Modal.Header closeButton>
                <Modal.Title>{props.movie.Title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img width='100%' src={`https://api.themoviedb.org/3/trending/all/week/${props.movie.poster_path}`}
                 alt={props.movie.Title} />
               
                <p>{props.movie.caption}</p>
            </Modal.Body>
            <Modal.Footer>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Captions:</Form.Label>
                    <Form.Control ref={commentRef} type="textarea" placeholder={props.movie.caption ? props.movie.caption : 
                        "Add Your Caption Here..."} />
                </Form.Group>
                <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}  >
                    Add a Caption
                </Button>
                <Button variant="primary"  type="submit" onClick={()=>addToFavorite(props.movie)}>
                To Favorite
                </Button>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
)
}
  



export default ModalMovie;










import { Button, Card, CardGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
//import { useState, useEffect } from "react";
import axios from "axios";
//import { Button, Container, Row, Card, Col } from "react-bootstrap";


function FavList(props) {

    const fetchData=async()=>{
  try {
    const response = await fetch(``);
    const data = await response.json();
    //setMovies(data);
  } catch (error) {
    console.log("error", error);
  }
}

return(
    <>
    <CardGroup style={{ display: "flex" }}>
        {
            
            (props.favoriteList ?? []).map(movie => {
                return (
                    <Card key={movie.id}>
                        <Card.Img variant="top" src={movie.Img} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>
                                {movie.Title}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
        }
        
    
    </CardGroup>
    </>
)



}
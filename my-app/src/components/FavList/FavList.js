import { Button, Card, CardGroup } from "react-bootstrap";
//import { useState, useEffect } from "react";
//import { useState, useEffect } from "react";
//import axios from "axios";
//import { Button, Container, Row, Card, Col } from "react-bootstrap";


function FavList(props) {

//     const [movies , setMovies] =useState([]);

//     const fetchData=async()=>{
//   try {
//     const response = await fetch(`${props.env.REACT_APP_SERVER}/getMovies`);
//     const data = await response.json();
//     setMovies(data);

//   } catch (error) {
//     console.log("error", error);
//   }
// }


// useEffect(()=>{fetchData()},[])



return(
    <>
    <CardGroup style={{ display: "flex" }}>
        {
            
            (props.favoriteList || []).map(movie => {
                return (
                    <Card key={movie.id}>
                        <Card.Img variant="top" src={`${process.env.REACT_APP_API_BASE}${movie.poster_path}`} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>
                                {movie.overview}
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
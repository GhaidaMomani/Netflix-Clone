import React, { useEffect,useState } from "react";
import MovieList from "../MovieList/MovieList";
import{Row,Container} from "react-bootstrap";
function Home() {
    const [movies, setMovie] = useState([]);
    const fetchData = async () => {
        try {
            
            const List = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=37ddc7081e348bf246a42f3be2b3dfd0&language=en-US`)
            const List2 = await  List.json();
            let newResult =[];
            for(let x of List2.results){
                x['caption']=''
                x['iscaption']=false
                newResult.push(x)
            }

            // setMovie(List2.results);
            // console.log(List2);

            

        } catch (error) {
            console.log("error", error);
        }
    };

    const updateCaptions =(List2,id) =>{
        let updated =movies.map(movie =>{
            if (movie.id===id){
                movie.caption=List2.userCaption;
                movie.iscaption=!movie.iscaption;
                return movie;
            }
            else return movie
        })
        setMovie(updated);
    }
    useEffect(() => { fetchData(); }, []);
    return (
        <>
            home {movies.length>0 &&(<Container fluid id="main container">
                <Row id="fiex-row">
                    <MovieList movies={movies} updateCaptions={updateCaptions}/>
                </Row>
            </Container>)}
            <h1>Home Page</h1>
        </>
    )
}
export default Home;
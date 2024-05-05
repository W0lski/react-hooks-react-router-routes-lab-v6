import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`) 
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [id]); 

  if (!movie) {
    return <p>Loading movie...</p>; 
  }

  return (
    <>
      <header>
        <NavBar />  
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time} minutes</p>
        <ul>
          {movie.genres.map((genre) => ( 
            <li key={genre.id}>
              <span>{genre}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Movie;
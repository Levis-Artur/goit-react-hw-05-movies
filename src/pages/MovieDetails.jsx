import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { Suspense, useState, useEffect, useCallback } from "react";
import { Outlet,  useParams, useLocation } from "react-router-dom";
import { Container, List, Link } from "./MovieDetails.styled";
import Movie from "../components/Movie/Movie"
import { getMovieById } from "../service/api";
import { BackLink } from "../components/BackLink/BackLink";

const MovieDetails = () => {
    const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? { pathname: "/movies" };
  const { pathname} = backLinkHref ;
    const onError = err => Notiflix.Notify.failure(err.message);
    
    const fetchMovie = useCallback(async () => {
    try {
      const result = await getMovieById(movieId)
        if (!result) throw new Error("Sorry, no data movie.");
        setMovie([result])
    } catch (error) {
      onError(error)
    };
    }, [movieId])
    
    useEffect(() => {
      fetchMovie()
    }, [fetchMovie]);

    return (
      <main>
        <BackLink to={backLinkHref}>Back to {pathname.endsWith("/movies") ? "movies": "home" }</BackLink>
           {movie.length > 0 && <Movie movie={movie} />}
            <Container>
            <h3>Additional information</h3>    
            <List>
                <li>
              <Link to="cast" state={{ from: backLinkHref }}>Cast</Link>
                </li>
                <li>
                  <Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link>
                </li>
          </List>
          </Container>
       <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
      </Suspense>
        </main>
    )
}
export default MovieDetails
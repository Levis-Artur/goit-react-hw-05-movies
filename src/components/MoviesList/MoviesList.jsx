import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper, MovieName } from "./MoviesList.styled";
import PropTypes from "prop-types";

export const MoviesList = ({ movies }) => {
  const baseUrl = 'https://themoviedb.org/t/p/w220_and_h330_face'  
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
  const location = useLocation()
   const { pathname } = location
  return (
    <Container>
      {movies.map(({id, poster_path, title}) => (
        <CardWrapper key={id}>
          <Link to={pathname.endsWith("/movies") ? `${id}` : `movies/${id}`} state={{ from: location }}>
            <img src={ poster_path ? `${baseUrl}${poster_path}`: defaultImg} alt="" />
            <MovieName>{title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
}
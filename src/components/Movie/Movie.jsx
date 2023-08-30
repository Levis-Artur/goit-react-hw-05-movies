import { Container, CardWrapper, MovieTitle, PosterWrapper } from "./Movie.styled";
import PropTypes from "prop-types"

const Movie = ({ movie }) => {
    const posterUrl = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
    const {genres, overview, title, vote_average, release_date, poster_path} = movie[0]
    return (
         <Container>
                <PosterWrapper>
                    <img src={poster_path ? `${posterUrl}${poster_path}`: defaultImg} alt="" />
                </PosterWrapper>
                <CardWrapper>
                    <h2>{`${title} (${release_date.slice(0,4)})`}</h2>
                    <div>
                    <p>User score:{` ${Math.floor(vote_average * 10)}%`}</p>
                    </div>
                    <div>
                        <MovieTitle>Overview</MovieTitle>
                        <p>{overview}</p>
                    </div>
                    <div>
                        <MovieTitle>Genres</MovieTitle>
                        <p>{genres.map(item => item.name).join(" ")}</p>
                    </div>
                </CardWrapper>
           </Container>
    )
}

Movie.propTypes = {
    movie: PropTypes.array.isRequired
}

export default Movie;
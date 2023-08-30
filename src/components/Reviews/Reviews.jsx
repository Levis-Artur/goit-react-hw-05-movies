import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import { useParams } from "react-router-dom";
import { Container, Wrapper } from "./Reviews.styled";
import { getMovieById } from "../../service/api";
import { useState, useEffect, useCallback } from "react";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviewList, setReviewList] = useState([]);
    const [firstRender, setFirstRender] = useState(true);
    const onError = err => Notiflix.Notify.failure(err.message);
    
    const fetchMovieReviews = useCallback(async () => {
      try {
        const result = await getMovieById(`${movieId}/reviews`)
        if (!result) throw new Error("Sorry, no data cast.");
        setReviewList(result.results)
      } catch (error) {
        onError(error)
      } finally {
        if (firstRender) setFirstRender(false)
      };
    }, [movieId, firstRender])
    
    useEffect(() => {
      fetchMovieReviews()
    }, [fetchMovieReviews]); 

    return (
        <>
        {!firstRender && ( reviewList.length>0 ?
              (<Container >
                  {reviewList.map(({ id, author, content }) => (
                      <Wrapper key={id}>
                          <h3>{`Author: ${author}`}</h3>
                          <p>{content}</p>
                      </Wrapper>
                  ))}
              </Container >) : (<p>We don't have any reviews for this movie</p>))}
        </>
    )
}
export default Reviews;
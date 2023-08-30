import axios from 'axios';
// const API_KEY = "0baa7cdb523c5e7ac9d70a232fc0ebec"
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmFhN2NkYjUyM2M1ZTdhYzlkNzBhMjMyZmMwZWJlYyIsInN1YiI6IjY0Y2E1MzFmZDM3MTk3MDEzOTc4YjNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RBHU2kDT3Swele15gvAopB0TouomeG_bY1uLDLfirLg';

const config = {
  headers: { Authorization: `Bearer ${token}` }
};


async function getTrending() {
  const url = `https://api.themoviedb.org/3/trending/movie/day`;
  const res = await axios.get(url, config);
  return res.data.results;
  // id, title, backdrop_path (jpg), poster_path
}

async function getMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?query="${query}"`;
  const res = await axios.get(url, config);
  return res.data.results;
  // id, title, backdrop_path (jpg), poster_path
}

async function getMovieById(movieId) {
  // 615656
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const res = await axios.get(url, config);
  return res.data;
  // genres, overview, title, vote_average, release_date, poster_path, backdrop_path
  
  // cast //
  // name, profile_path

  // reviews //
// author, content
}


// https://api.themoviedb.org/3/trending/movie/i2GVEvltEu3BXn5crBSxgKuTaca.jpg
// src="https://themoviedb.org/t/p/w220_and_h330_face/i2GVEvltEu3BXn5crBSxgKuTaca.jpg">
// https://themoviedb.org/t/p/w220_and_h330_face/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg

// https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vbvcvIxXywM6rP1ayoz3AxE83oe.jpg

// by id
//poster https://www.themoviedb.org/t/p/w300_and_h450_bestv2/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg

//backdrop https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/zN41DPmPhwmgJjHwezALdrdvD0h.jpg

export { getTrending, getMovies, getMovieById };
import * as React from "react";
// import sampleMovies from "../../data/sampleMovies";
import MovieCard from "../UIComponents/MovieCard";
import { Query } from "react-apollo";
import { GET_MOVIES } from "./query";

const MovieList = () => (
  <Query query={GET_MOVIES}>
    {({ data: { movies }, loading, error }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <div className="movie-list">
          {movies.map(
            (movie: {
              id: string;
              title: string;
              overview: string;
              posterUrl: string;
              tagline: string;
              voteAverage: number;
            }) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                posterUrl={movie.posterUrl}
                tagline={movie.tagline}
                voteAverage={movie.voteAverage}
              />
            )
          )}
        </div>
      );
    }}
  </Query>
);

export default MovieList;

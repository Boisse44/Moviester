import { TrendingMovie } from './model/trending-movie';

export const LOAD_UPCOMING_MOVIES = 'LOAD_UPCOMING_MOVIES'
export const LOAD_UPCOMING_MOVIES_COMPLETED = 'LOAD_UPCOMING_MOVIES_COMPLETED'
export const LOAD_TRENDING_MOVIES = 'LOAD_TRENDING_MOVIES'
export const LOAD_TRENDING_MOVIES_COMPLETED = 'LOAD_TRENDING_MOVIES_COMPLETED'
export const GET_MOVIE = 'GET_MOVIE';
export const GET_MOVIE_COMPLETED = 'GET_MOVIE_COMPLETED';

export interface LoadUpcomingMoviesAction {
    type: typeof LOAD_UPCOMING_MOVIES
}

interface LoadUpcomingMoviesCompletedAction {
    type: typeof LOAD_UPCOMING_MOVIES_COMPLETED
    payload: {
        movies: any[]
    }
}

interface LoadTrendingMoviesAction {
    type: typeof LOAD_TRENDING_MOVIES
}

interface LoadTrendingMoviesCompletedAction {
    type: typeof LOAD_TRENDING_MOVIES_COMPLETED
    payload: {
        movies: any[]
    }
}

interface GetMovieAction {
    type: typeof GET_MOVIE,
    id: string;
}

interface GetMovieCompletedAction {
    type: typeof GET_MOVIE_COMPLETED
    payload: {
        movie: any
    }
}


export function loadUpcomingMovies(): MoviesActionTypes {
    return {
        type: LOAD_UPCOMING_MOVIES,
    }
}

export function loadUpcomingMoviesCompleted(movies: any[]): MoviesActionTypes {
    return {
        type: LOAD_UPCOMING_MOVIES_COMPLETED,
        payload: {
            movies
        }
    }
}

export function loadTrendingMovies(): MoviesActionTypes {
    return {
        type: LOAD_TRENDING_MOVIES,
    }
}

export function loadTrendingMoviesCompleted(movies: TrendingMovie[]): MoviesActionTypes {
    return {
        type: LOAD_TRENDING_MOVIES_COMPLETED,
        payload: {
            movies
        }
    }
}

export function getMovie(id: string): MoviesActionTypes {
    return {
        type: GET_MOVIE,
        id
    }
}

export function getMovieCompleted(movie: any): MoviesActionTypes {
    return {
        type: GET_MOVIE_COMPLETED,
        payload: {
            movie
        }
    }
}

export type MoviesActionTypes = LoadUpcomingMoviesAction | LoadUpcomingMoviesCompletedAction | LoadTrendingMoviesAction | LoadTrendingMoviesCompletedAction | GetMovieAction | GetMovieCompletedAction
import { MOVIES } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/moviesActions';

const initialState = {
    movies: MOVIES,
    filteredMovies: MOVIES,
    favoriteMovies: []
};

const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE: 
            const existingIndex = state.favoriteMovies.findIndex(
                movie => movie.id === action.movieId);

            if(existingIndex >= 0) {
                return { ...state, favoriteMovies: 
                    state.favoriteMovies.filter(movie => movie.id !== action.movieId) };
            } else {
                return { ...state, favoriteMovies: state.favoriteMovies.concat(
                    state.movies.find(movie => movie.id === action.movieId)
                )};
            }
        default:
            return state;
    }
};

export default moviesReducer;
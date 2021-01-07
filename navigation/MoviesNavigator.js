import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMoviesScreen from '../screens/CategoryMoviesScreen';
import MoviesDetailsScreen from '../screens/MoviesDetailScreen';

const MoviesNavigator = createStackNavigator({
    // name
    Categories: CategoriesScreen,
    CategoryMovies: 
        { screen: CategoriesMoviesScreen},
    MoviesDetail: MoviesDetailsScreen
});

export default createAppContainer(MoviesNavigator);
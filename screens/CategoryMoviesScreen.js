import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { CATEGORIES, MOVIES } from '../data/dummy-data';
import MovieItem from '../components/movieItem'

import { useSelector } from 'react-redux'; 

function CategoriesMoviesScreen({ route, navigation }) {
    // const CategoriesMoviesScreen = (route, navigation) => {
// const CategoriesMoviesScreen = (props) => {
    // const catId = props.navigation.getParam('catId'); // not working
    const { catId } = route.params;
    // console.log(catId);
    console.log(route);
    console.log(navigation);

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    // Reading from the Redux store
    const availableMovies = useSelector(state => state.movies.filteredMovies);

    const selectedMovies = availableMovies.filter(movie => 
        movie.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList style={styles.movies} data={selectedMovies} renderItem={itemData => (
                <MovieItem item={itemData.item} /> )} 
            />
            <Button title="Go to Details" onPress={() => {
                navigation.navigate('MoviesDetail')
            }}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    movies: {
        width: '100%',
        padding: 10
    },
});

export default CategoriesMoviesScreen;


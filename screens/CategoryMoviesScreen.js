import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { CATEGORIES, MOVIES } from '../data/dummy-data';

function CategoriesMoviesScreen({ route, navigation }) {
// const CategoriesMoviesScreen = (props) => {
    // const catId = props.navigation.getParam('catId'); // not working
    const { catId } = route.params;
    // console.log(catId);

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    const selectedMovies = MOVIES.filter(movie => 
        movie.categoryIds.indexOf(catId) >= 0);
    

    const renderMovieItem = itemData => {
        return (
            <View style={styles.movieItem}>
                <Text>{itemData.item.title}</Text>
                <Text>{itemData.item.duration} minutes</Text>
                <Text>{itemData.item.allowedAge} years</Text>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList style={styles.movies} data={selectedMovies} renderItem={renderMovieItem} />
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
    movieItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default CategoriesMoviesScreen;


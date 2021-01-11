import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { toggleFavorite } from '../store/actions/moviesActions'
import { useDispatch } from 'react-redux';

function MoviesDetailsScreen({ route, navigation }) {
    const dispatch = useDispatch();

    const { movieId } = route.params;
    console.log(movieId);

    const toggleFavoriteHandler = () => {
        dispatch(toggleFavorite(movieId));
    };

    return (
        <View style={styles.screen}>
            <Text>The movies details screen</Text>
            <Button title="Add to favorites" onPress={toggleFavoriteHandler}/>
            
            <Button title="Go Back" onPress={
                () => props.navigation.goBack()}/>
            
            <Button title="Go back to start" onPress={
                () => props.navigation.popToTop()}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MoviesDetailsScreen;


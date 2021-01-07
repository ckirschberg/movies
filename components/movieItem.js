import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
//props.navigation.navigate('MovieDetails', {movieId: props.item.id}
import { useNavigation } from '@react-navigation/native';


const MovieItem = props => {
    const navigation = useNavigation();

   return (
    <TouchableOpacity onPress={() => {navigation.navigate('MoviesDetail', {movieId: props.item.id})}}>
        <View style={styles.movieItem}>
            <Text>{props.item.title}</Text>
            <Text>{props.item.duration} minutes</Text>
            <Text>{props.item.allowedAge} years</Text>
        </View>
    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
    movieItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default MovieItem;
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function MoviesDetailsScreen({ route, navigation }) {
    const { movieId } = route.params;
    console.log(movieId);
    return (
        <View style={styles.screen}>
            <Text>The movies details screen</Text>
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


import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MoviesDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The movies details screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MoviesDetailsScreen;


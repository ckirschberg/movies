import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native';

import { CATEGORIES, Categories } from '../data/dummy-data';


const CategoriesScreen = props => {
    
    const renderGridItem = (itemData) =>  {
        return <TouchableOpacity style={styles.gridItem} onPress={() => {
            props.navigation.navigate('CategoryMovies', 
            { name: itemData.item.title, catId: itemData.item.id})
        }}>
                    <View >
                        <Text>{itemData.item.title}</Text>
                    </View>
                </TouchableOpacity>
    }

    
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} 
            numColumns={2}/>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen;


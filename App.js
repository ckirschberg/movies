import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from '@expo/vector-icons/Ionicons';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMoviesScreen from './screens/CategoryMoviesScreen';
import MoviesDetailScreen from './screens/MoviesDetailScreen';
import FiltersScreen from './screens/FiltersScreen';
import FavoritesScreen from './screens/FavoriesScreen';



function StackNavigator() {
  const Stack = createStackNavigator();
  return (
  <Stack.Navigator screenOptions={{
    headerStyle: {backgroundColor: Platform.OS === 'android' ? '#f4511e' : 'white'},
    headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
    headerTitleStyle: {
      fontWeight: 'bold'}
    }}>
  <Stack.Screen name="Categories" 
    component={CategoriesScreen} 
    options={{
      title: 'Home', 
    }}
  />
  <Stack.Screen name="CategoryMovies" component={CategoryMoviesScreen} 
  options={({ route }) => ({ title: route.params.name, catId: route.params.catId })}/>
  <Stack.Screen name="MoviesDetail" component={MoviesDetailScreen} />
  </Stack.Navigator>
  );
};

function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={StackNavigator} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
  );
}


export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Filters" component={FiltersScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

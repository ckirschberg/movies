import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Movie from '../models/movie';

const AddMovieScreen = props => {
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [titleIsValid, setTitleIsValid] = useState(false);

    const [duration, setDuration] = useState('');
    const [allowedAge, setAllowedAge] = useState('');

    const titleChangeHandler = (input) => { 
        if (input.trim().length === 0) {
            setTitleIsValid(false);
        } else {
            setTitleIsValid(true);
        }
        
        setTitle(input);
    };
    const durationChangeHandler = (input) => { 
        setDuration(input);
    };
    const allowedAgeChangeHandler = (input) => { 
        setAllowedAge(input);
    };

    const onSaveHandler = () => {
        const movie = new Movie(Math.random(), '', title, duration, allowedAge);
        console.log(movie);
    }

   return (
       <ScrollView>
        <View style={styles.form}>
            <View style={styles.formControl}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input}
                    keyboardType="default"
                    autoCapitalize="sentences"
                    autoCorrect
                    returnKeyType="next"
                    value={title}
                    onChangeText={titleChangeHandler}
                />
                {!titleIsValid && <Text style={styles.error}>Please enter a valid title!</Text>}
            </View>

            <View style={styles.formControl}>
                <Text style={styles.label}>Duration</Text>
                <TextInput style={styles.input}
                    keyboardType="number-pad"
                    autoCapitalize="sentences"
                    autoCorrect
                    returnKeyType="next"
                    value={duration}
                    onChangeText={durationChangeHandler}
                />
            </View>

            <View style={styles.formControl}>
                <Text style={styles.label}>AllowedAge</Text>
                <TextInput style={styles.input}
                    keyboardType="number-pad"
                    autoCapitalize="sentences"
                    autoCorrect
                    returnKeyType="next"
                    value={allowedAge}
                    onChangeText={allowedAgeChangeHandler}
                />
            </View>

            <Button title="Save" onPress={onSaveHandler}/>
        </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   form: {
       marginTop: 50,
       padding: 20
   },
   formControl: {
       width: '100%'
   },
   label: {
       marginVertical: 10
   },
   input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  error: {
      color: 'red'
  }
});

export default AddMovieScreen;
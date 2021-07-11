import React from 'react';
import { ImageBackground, View, Text, Button, StyleSheet } from 'react-native';

export default function SplashScreen({navigation}) {

    const image = require('../assets/library-image.jpg');

    function goToMyLibrary() {
        navigation.reset({
            index: 0,
            routes: [
                {
                name: 'Library',
                }
            ]
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View  style={styles.button}>
                <Button title='Ma Bibliothèque' onPress={() => goToMyLibrary('Library')} color="#000000c0"/>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        color: "white",
    }
});

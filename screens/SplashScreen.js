import React from 'react';
import { ImageBackground, View, Text, Button, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function SplashScreen({navigation}) {

    
    const image = require('../assets/library-image.jpg');
    
    let [fontsLoaded] = useFonts({
        'Yomogi': require('../assets/fonts/Yomogi-Regular.ttf')
      })

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

    
    if(!fontsLoaded) {
        return <Text>Loading...</Text>
    }
    else {
        return (
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View>
                <Text style={styles.textStyle} onPress={() => goToMyLibrary('Library')}>Ma Bibliothèque</Text>
                </View>
                </ImageBackground>
            </View>
        )
    }
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
        color: "black",
    },
    textStyle: {
        height: 50,
        fontFamily: 'Yomogi',
        fontSize: 25,
        backgroundColor: "#000000c0",
        color: 'white',
        textAlign: 'center'
      },
});

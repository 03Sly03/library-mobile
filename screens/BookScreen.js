import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function BookScreen({route}) {
    const book = route.params.book;

    let [fontsLoaded] = useFonts({
        'Yomogi': require('../assets/fonts/Yomogi-Regular.ttf')
      })

    let uriImage = book.volumeInfo.imageLinks
    ? {uri: `${book.volumeInfo.imageLinks.thumbnail}`}
    : require('../assets/pas_image.png');

    if(!fontsLoaded) {
        return <Text>Loading...</Text>
    }
    else {
        return (
            <ScrollView  style={styles.bcc}>
                <View style={styles.container}>
                    <Image
                        style={styles.tinyLogo}
                        source={uriImage}
                    />

                    <Text style={styles.title}>
                        {book.volumeInfo.title}
                    </Text>
                    <Text style={styles.author}>
                        {book.volumeInfo.authors}
                    </Text>
                    <View style={styles.description}>
                        <Text style={styles.title}>DESCRIPTION</Text>
                        <Text  style={styles.text}>
                            {book.volumeInfo.description}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    bcc: {
        backgroundColor: 'skyblue'
      },
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    tinyLogo: {
        resizeMode: 'stretch',
        width: 150,
        height: 150,
        margin: 50
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        fontFamily: 'Yomogi'
    },
    author: {
        fontFamily: 'Yomogi',
        fontStyle: 'italic'
    },
    description: {
        fontSize: 25,
        fontFamily: 'Yomogi',
        marginTop: 50
    },
    text: {
        fontStyle: 'italic',
        fontFamily: 'Yomogi'
    }
});

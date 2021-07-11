import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function BookScreen({route}) {
    const book = route.params.book;

    console.log(book);

    let uriImage = book.volumeInfo.imageLinks
    ? {uri: `${book.volumeInfo.imageLinks.thumbnail}`}
    : require('../assets/pas_image.png');

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
                    <Text style={styles.title}>DESCRIPTION:</Text>
                    <Text  style={styles.text}>
                        {book.volumeInfo.description}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
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
        padding: 20
    },
    tinyLogo: {
        resizeMode: 'stretch',
        width: 150,
        height: 150,
        margin: 50
    },
    title: {
        fontWeight: 'bold',
        margin: 10
    },
    author: {
        fontStyle: 'italic'
    },
    description: {
        marginTop: 50
    },
    text: {
        fontStyle: 'italic'
    }
});

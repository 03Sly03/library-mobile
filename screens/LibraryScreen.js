import React, {useState, useEffect} from 'react'
import {FlatList, TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import axios from 'axios';
import { useFonts } from 'expo-font';

export default function LibraryScreen({navigation}) {

  const [updateSearch, setUpdateSearch] = useState("");
  const [book, setBook] = useState([]);

  let [fontsLoaded] = useFonts({
    'Yomogi': require('../assets/fonts/Yomogi-Regular.ttf')
  })

  function search() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${updateSearch}&key=AIzaSyBKatc18KylaYo50CqTyuJdqpUheS3CWdA`)
    .then(res => {
      setBook(res.data.items);
    })
  }

    useEffect(() => {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=A&key=AIzaSyBKatc18KylaYo50CqTyuJdqpUheS3CWdA`)
      .then(res => {
        console.log(res.data.items);
        setBook(res.data.items);
      })
    }, [])

    if(!fontsLoaded) {
      return <Text style={styles.textStyle}>Loading...</Text>
    }
    else {
      return (
        <View style={styles.bcc}>
          <Text style={styles.maBibli}>MA BIBLIOTHÈQUE</Text>
          <View style={styles.searchBar}>
            <SearchBar
            lightTheme
            onSubmitEditing={search}
            style={styles.textStyle}
            placeholder="Recherche..."
            onChangeText={(text) => {setUpdateSearch(text)}}
            value={updateSearch}
            />
          </View>
          <FlatList
            data={book}

            renderItem={({item})=> (
              <ListItem bottomDivider onPress={() => navigation.navigate('Book', {
                book : item
                })}
                containerStyle={styles.bcc}
                >
                <ListItem.Content>
                  <ListItem.Title style={styles.textStyle}>{item.volumeInfo.title}</ListItem.Title>
                  <ListItem.Content style={styles.container}>             
                    <ListItem.Title style={styles.textStyleItalic}>{item.volumeInfo.authors}</ListItem.Title>
                  </ListItem.Content>
                </ListItem.Content>
                <ListItem.Chevron />

              </ListItem>
              )}
              keyExtractor={item => item.id.toString()}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    bcc: {
      backgroundColor: 'skyblue'
    },
    container: {
      padding: 10
    },
    maBibli: {
      fontSize: 30,
      textAlign: 'center',
      fontFamily: 'Yomogi',
      margin: 30
    },
    textStyle: {
      fontFamily: 'Yomogi',
      fontSize: 20
    },
    textStyleItalic: {
      fontStyle: 'italic',
    },
    // searchBar: {
    // alignItems: 'center',
    // margin: 30,
    // },
  });

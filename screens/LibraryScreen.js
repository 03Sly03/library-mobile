import React, {useState, useEffect} from 'react'
import { TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import { Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function LibraryScreen({navigation}) {

  const [updateSearch, setUpdateSearch] = useState("");
  const [imache, setImache] = useState("");
  const myIcon = <Icon name="rocket" size={30} color="#900" />;


  const [book, setBook] = useState([]);
  // let [findTitle, setFindTitle] = useState([]);

  console.log(updateSearch);
  console.log('debut');
  console.log(book);
  console.log(book.length);
  // console.log('tableau findTitle' +findTitle);

  // function filterByTitle (titleSearched) {
  //   if (updateSearch != "") {
  //     return true;
  //   }  else {
  //     return false;
  //   } 
  // }

  function search() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${updateSearch}&key=AIzaSyBKatc18KylaYo50CqTyuJdqpUheS3CWdA`)
    .then(res => {
      // console.log(res.data.items);
      setBook(res.data.items);
      console.log('ici le console.log: ');
      console.log(book);
    })
  }

    useEffect((updateSearch) => {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${updateSearch}&key=AIzaSyBKatc18KylaYo50CqTyuJdqpUheS3CWdA`)
      .then(res => {
        console.log(res.data.items);
        setBook(res.data.items);
      })
    }, [])



    let booksJSX = book.map(book => {

      return  <View key={book.id}>
                <View style={styles.iconStyle}>
                <Entypo name="book" size={24} color="black" onPress={() => navigation.navigate('Book', {
                  book : book
                })}/>
                
                <View>
                  <Text onPress={() => navigation.navigate('Book', {
                  book : book
                })}>title : {book.volumeInfo.title} authors : {book.volumeInfo.authors}</Text>
                </View>
                </View>
              </View>
      })

    return (
      <ScrollView style={styles.bcc}>
        <View style={styles.container}>
  
          <Text style={styles.maBibli}>MA BIBLIOTHÈQUE</Text>
          <View style={styles.searchBar}>
          <SearchBar
            lightTheme
            onSubmitEditing={search}
            placeholder="Recherche..."
            onChangeText={(text) => {setUpdateSearch(text)}}
            value={updateSearch}
          />
          <TouchableOpacity  style={styles.btn}>
            <Button title='>' onPress={search} color="#e1e8ee"/>
          </TouchableOpacity>
         
          </View>

          <View style={styles.frameBooks}>
            {booksJSX}
          </View>
          
        </View>
      </ScrollView>
    );

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
    maBibli: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    textStyle: {
      backgroundColor: 'pink',
      color: '#ff3d6a',
      padding: 20,
      margin: 5
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    searchBar: {
      flex: 1,
      width: 350,
      backgroundColor: '#e1e8ee',
      margin: 30,
    },
    btn: {
      justifyContent: 'center',
      borderRadius: 0,
    },
    frameBooks: {
      padding: 20,
    },
    iconStyle: {
      marginTop: 20,
      flexDirection: 'row',
      margin: 5
    }
  });

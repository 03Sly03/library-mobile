
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import Books from './Books';

export default function App() {

  const [nameInput, setNameInput] = useState("");
//   const [isFound, setIsFound] = useState(false);

//   const toggleFindMode = () => {
//     setIsFound(!isFound);
// }

  const [book, setBook] = useState([
    {title: "Harry", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provide"},
    {title: "La jungle", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"}
  ])

  let foundTitle = [];
  let booksJSX = [];

  booksJSX = book.map(book => {
    return <Books title={book.title} body={book.body}/>
    })

  const filterByTitle = (titleSearched) => {
    if (titleSearched.title.toLowerCase() == nameInput.toLowerCase()) {
      return true;
    } 
  }
  foundTitle = book.filter(filterByTitle);
  console.log(foundTitle.length);
  console.log('Tableau filtré\n', foundTitle);
  
  if (foundTitle.length === 0) {
    booksJSX = book.map(book => {
      return <Books title={book.title} body={book.body}/>
    })
  } else {
    booksJSX = foundTitle.map(book => {
      return <Books title={book.title} body={book.body}/>
    })
  }
  
  // for (const property in book) {
  //   console.log(`${property}: ${book[property]}` + property.title);
  //   if (nameInput === property.title) {
  //     console.log("ça match bien du coup");
  //   } else {
  //   console.log("ça match pas");
  //   }
  // }

  // book.forEach(element => console.log('le element :' + element));

  // book.forEach(function(book) {
  // console.log("le nom "+book.title+"/ et l'id : "+book.body);
  // });
  // if (nameInput === 'Harry') {
  //   console.log("ça match bien du coup");
  // } else {
  //   console.log("");
  // }

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text>Ma bibliothéque</Text>
        {/* <Button title="Dit bonjour" color="blue"/> */}
        {/* {isFound ? <Text>Une autre phrase de texte</Text> : null} */}

        <View style={styles.form}>
          <TextInput value={nameInput} style={styles.kekchose} onChangeText={(text) => {setNameInput(text)}}/>
          <Button title="GO" color="blue"/>
        </View>

          {/* <Text style={styles.textStyle}>Et pis encore <Text>une autre</Text> phrase de texte</Text> */}
        {/* <View>
          <Button title="Find it!" onPress={toggleFindMode}/>
          
          </View> */}
        
          {booksJSX}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  kekchose: {
    borderColor: 'red',
    borderWidth: 3,
    width: 300,
    padding: 5,
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
  }
});

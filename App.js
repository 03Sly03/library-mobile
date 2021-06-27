
import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import Books from './Books';

export default function App() {

  const [nameInput, setNameInput] = useState("");

  const [book, setBook] = useState([

    {id: 1, title: "Harry", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provide"},
    {id: 2, title: "Percussion", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 3, title: "Voitures", body: "dolor sit amet consectetur  elit.  possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 4, title: "Animaux", body: "adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 5, title: "Les fantastiques", body: "Lorem  dolor sit amet consectetur adipisicing elit. , iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 6, title: "La Tarte aux pommes", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 7, title: "La jungle de Bob", body: " ipsuit amet consectetur  elit. Voluptatibus  hic  cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 8, title: "skulls & bones", body: "amet consectetur adipisicing elit. Voluptatibuscum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 9, title: "Personnalité", body: "dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 10, title: "A la fin de tout", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 11, title: "Trop c'est trop", body: "sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 12, title: "Quand c'est trop c'est tropico !", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 13, title: "Arrête ou ma mère va tirer !", body: "Lorem  dolor sit ametelit.Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 14, title: "Retour ou l'autre", body: "Loremamet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 15, title: "Le passionné", body: "Lorem  dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 16, title: "Amour toujours", body: " ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 17, title: "Fortune et gloire", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 18, title: "A la mémoire", body: "door sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"},
    {id: 19, title: "Junior ...", body: " ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus hic officiis cum, iusto quas fuga natus odio sint quo eaque, perferendis, provident atque fugit"}
  
  ])

  let [foundTitle, setFoundTitle] = useState([]);

  let booksJSX = book.map(book => {
    return <Books key={book.id} title={book.title} body={book.body}/>
    })
  
  function filterByTitle (titleSearched) {
    if (titleSearched.title.toLowerCase().includes(nameInput.toLowerCase())) {
      return true;
    }  else {
      return false;
    } 
  }
    
  function search() {   
    setFoundTitle(book.filter(filterByTitle)); 
  }
    
  if (foundTitle.length != 0) {
    booksJSX = foundTitle.map(book => {
      return <Books key={book.id} title={book.title} body={book.body}/>
    })
  } 
  else {
    booksJSX = book.map(book => {
      return <Books key={book.id} title={book.title} body={book.body}/>
    })
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text>Ma bibliothéque</Text>
        <View style={styles.form}>
          <TextInput value={nameInput} style={styles.kekchose} onChangeText={(text) => {setNameInput(text)}}/>
          <Button onPress={search} title="GO" color="blue"/>
        </View>
        
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
    marginTop: 50,
    margin: 20
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

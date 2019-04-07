import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import {saveDeckTitle} from '../helpers/storage'

export default class NewDeck extends Component {
  state = {
    text: ""
  }
  onSubmit(){
    const {text} = this.state
    saveDeckTitle(text)
    alert("New Deck Created!")
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput style={styles.input}
          placeholder="Deck Title"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableHighlight style={styles.btnDark}>
          <Text style={styles.btnDarkText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  },
  btnDark: {
    backgroundColor: '#272822',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5
  },
  btnDarkText: {
    color: "#fff",
    // fontSize: 20
  },
  input: {
    borderColor: "black",
    borderRadius: 5,
    fontSize: 24,
    // borderStyle: "solid",
    // border: 3
  }
})
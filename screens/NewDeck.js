import React, {Component} from 'react'
import { Text, StyleSheet, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native'
import {saveDeckTitle} from '../helpers/storage'

export default class NewDeck extends Component {
  state = {
    text: ""
  }
  onSubmit(){
    const {text} = this.state
    const { navigation } = this.props
    if(!text) {
      alert("Please inform a name")
    } else {
      saveDeckTitle(text).then((r) => {
        console.log(r)
        if(r !== "already exist"){
          alert("New Deck Created!")
          this.setState({text: ""})
          navigation.navigate(
            'Deck',
            { deckTitle: text }
          )
        }
      }).catch((err) => {
        console.log(err)
        alert("Ops! Something went wrong, try again please!")
      })
    }
  }
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput style={styles.input}
          placeholder="Deck Title"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TouchableHighlight style={styles.btnDark} onPress={() => this.onSubmit()}>
          <Text style={styles.btnDarkText}>Submit</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
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
    textAlign: 'center'
    // borderStyle: "solid",
    // border: 3
  }
})
import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native'

export default class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  onSubmit(){
    const { question, answer } = this.state
    alert("New Deck Created!")
  }
  render() {
    return(
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="Question"
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}/>
        <TextInput style={styles.input}
          placeholder="Answer"
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}/>
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
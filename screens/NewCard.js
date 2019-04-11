import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableHighlight } from 'react-native'
import { addCardToDeck } from '../helpers/storage'

export default class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  onSubmit(){
    const { navigation } = this.props;
    const { deckTitle, onAdd } = navigation.state.params;
    addCardToDeck(deckTitle, this.state).then((r) => {
      console.log(r)
      alert("Card added to deck!")
      this.setState({question: '', answer: ''})
      onAdd()
      navigation.pop()
    }).catch((err) => {
      console.log(err)
      alert("Ops! Something went wrong, try again please!")
      navigation.pop()
    })
  }
  render() {
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}
            placeholder="Question"
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}/>
          <TextInput style={styles.input}
            placeholder="Answer"
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}/>
        </View>
        <TouchableHighlight
          disabled={this.state.question.length === 0 || this.state.answer.length === 0 }
          style={styles.btnDark}
          onPress={() => this.onSubmit()}>
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
  inputContainer: {
    justifyContent: 'space-between',
    height: 150,
  },
  btnDarkText: {
    color: "#fff",
  },
  input: {
    borderColor: "black",
    borderRadius: 5,
    fontSize: 24,
    textAlign: 'center',
    borderBottomWidth: 1,
  },
  correctContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignContent: "space-around"
  }
})
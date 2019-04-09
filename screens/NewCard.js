import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Switch, TouchableHighlight } from 'react-native'
import { addCardToDeck } from '../helpers/storage'

export default class NewCard extends Component {
  state = {
    question: '',
    answer: '',
    correct: true
  }
  onSubmit(){
    const { navigation } = this.props;
    const { deckTitle } = navigation.state.params;
    addCardToDeck(deckTitle, this.state).then((r) => {
      console.log(r)
      alert("Card added to deck!")
      this.setState({question: '', answer: '', correct: true})
    }).catch((err) => {
      console.log(err)
      alert("Ops! Something went wrong, try again please!")
    })
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
        <View style={styles.correctContainer}>
          <Text>Is it correct?</Text>
          <Switch
            onValueChange={(correct) => this.setState({correct})}
            value={this.state.correct} />
        </View>
        <TouchableHighlight style={styles.btnDark} onPress={() => this.onSubmit()}>
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
  },
  correctContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignContent: "space-around"
  }
})
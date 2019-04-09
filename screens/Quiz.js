import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { AppLoading } from "expo"
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import {getDeck} from '../helpers/storage'

export default class Quiz extends Component {
  state = {
    deck: {questions: []},
    isLoadingComplete: false,
    currentQuestion: 0
  }

  componentDidMount(){
    const { navigation } = this.props;
    const { deckTitle } = navigation.state.params;
    console.log(deckTitle)
    getDeck(deckTitle).then((deck) => {
      console.log("LOADED Deck " + JSON.stringify(deck))
      this.setState((currentState) => ({
        deck: deck,
        isLoadingComplete: true
      }))
    })
  }
  render() {
    const { deck, currentQuestion } = this.state;
    const progress = 0;
    if(!this.state.isLoadingComplete){
      return(<AppLoading/>)
    }
    return(
      <View style={styles.container}>
        <View>
          <ProgressBar value={deck.questions.length > 0 && progress > 0
            ? progress/deck.questions.length
            : 0
          } />
          <Text>Progress: {progress}/{deck.questions.length}</Text>
        </View>
        <QuestionCard question={deck.questions[currentQuestion]} />
        <View>
          <TouchableHighlight style={styles.btnCorrect}>
            <Text style={styles.btnText} >Correct</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btnIncorrect}>
            <Text style={styles.btnText} >Incorrect</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnCorrect: {
    backgroundColor: "#008000",
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5
  },
  btnIncorrect: {
    backgroundColor: "#D4271B",
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5
  },
  btnText: {
    color: "white",
    textAlign: 'center'
  }
})
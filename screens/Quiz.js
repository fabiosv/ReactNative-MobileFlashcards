import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { AppLoading } from "expo"
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import Results from '../components/Results'
import {getDeck} from '../helpers/storage'

export default class Quiz extends Component {
  state = {
    deck: {questions: []},
    isLoadingComplete: false,
    currentQuestion: 0,
    userAnswers: []
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
  onUserAnswer = (answer) => {
    const {userAnswers, currentQuestion, deck} = this.state
    userAnswers.push(answer)

    this.setState({
      userAnswers,
      currentQuestion: currentQuestion+1
    })
    if(currentQuestion < deck.questions.length){
      this.setState({
        currentQuestion: currentQuestion+1
      })
    } else {
      this.showResults()
    }
  }
  getQuestion = () => {
    const { deck, currentQuestion } = this.state;
    if(currentQuestion >= deck.questions.length){
      return deck.questions[currentQuestion-1]
    }
    return deck.questions[currentQuestion]
  }
  getProgress = (questions, currentQuestion) => {
    return questions.length > 0 && currentQuestion > 0
      ? currentQuestion/questions.length * 100
      : 0
  }
  restartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      userAnswers: []
    })
  }
  render() {
    const { deck, currentQuestion, userAnswers } = this.state;
    if(!this.state.isLoadingComplete){
      return(<AppLoading/>)
    }

    if(currentQuestion >= deck.questions.length){
      return(
        <View style={styles.container}>
          <Results results={userAnswers}/>
          <View style={styles.resultsBtnContainer}>
            <TouchableHighlight style={styles.btnRestart}
              onPress={() => this.restartQuiz()}>
                <Text>Restart Quiz</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btnBackToDeck}
              onPress={() => this.props.navigation.pop()}>
                <Text style={styles.btnText}>Back to Deck</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <View>
          <ProgressBar progress={this.getProgress(deck.questions, currentQuestion)} />
          <Text>Progress: {currentQuestion}/{deck.questions.length}</Text>
        </View>
        <QuestionCard question={this.getQuestion()} />
        <View>
          <TouchableHighlight style={styles.btnCorrect}
            onPress={() => this.onUserAnswer(true)}>
              <Text style={styles.btnText}>Correct</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btnIncorrect}
            onPress={() => this.onUserAnswer(false)}>
              <Text style={styles.btnText}>Incorrect</Text>
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
  },
  btnRestart: {
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5
  },
  btnBackToDeck: {
    backgroundColor: '#272822',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5
  },
  resultsBtnContainer: {
    flexDirection: "row"
  }
})
import React, { Component } from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export default class QuestionCard extends Component {
  state = {
    showAnswer: false
  }
  toogleQuestionAnswer = () => {
    this.setState((currentState) => ({
      showAnswer: !currentState.showAnswer
    }))
  }
  render() {
    const { question, answer } = this.props.question;

    if(this.state.showAnswer) {
      return(
        <View>
          <Text style={styles.answer}>{answer}</Text>
          <TouchableOpacity onPress={ () => this.toogleQuestionAnswer() }>
            <Text style={styles.btnShowQuestionAnswer}>Question</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return(
        <View>
          <Text style={styles.question}>{question}</Text>
          <TouchableOpacity onPress={ () => this.toogleQuestionAnswer() }>
            <Text style={styles.btnShowQuestionAnswer}>Answer</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  question: {
    fontSize: 32,
    textAlign: 'center'
  },
  answer: {
    fontSize: 25,
    textAlign: 'center'
  },
  btnShowQuestionAnswer: {
    color: "red",
    textAlign: 'center'
  }
})
import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native'
import ProgressBar from '../components/ProgressBar'

export default class Quiz extends Component {
  render() {
    const barWidth = 6
    const progress = 35
    return(
      <View style={styles.container}>
        <View>
          <ProgressBar value={progress} />
          <Text>Progress</Text>
        </View>
        <View>
          <Text style={styles.question}>Question</Text>
          <TouchableOpacity>
            <Text style={styles.btnShowQuestionAnswer}>Answer</Text>
          </TouchableOpacity>
        </View>
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
  question: {
    textAlign: 'center'
  },
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
  btnShowQuestionAnswer: {
    color: "red",
    textAlign: 'center'
  }
})
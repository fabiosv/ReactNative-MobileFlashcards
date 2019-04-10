import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import {gray} from '../helpers/colors'
import {getDeck} from '../helpers/storage'

export default class Deck extends Component {
  static navigationOptions = ({navigation}) => {
    const { deckTitle } = navigation.state.params
    return {
      title: deckTitle
    }
  }
  state = {
    deck: {title: '', questions: []}
  }
  loadDeck = () => {
    const { navigation } = this.props;
    const { deckTitle } = navigation.state.params
    getDeck(deckTitle).then((deck) => {
      this.setState({deck})
    })
  }

  componentDidMount(){
    this.loadDeck()
  }

  render() {
    const { navigation } = this.props;
    const { deck } = this.state;
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardsCount}>{deck.questions.length} cards</Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => navigation.navigate(
              'AddCard',
              { deckTitle: deck.title, onAdd: this.loadDeck }
            )}
            style={styles.btnAdd}>
              <Text style={styles.btnAddText}>Add Card</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => deck.questions.length === 0
            ? alert("This deck is empty, please add a card first :D")
            : navigation.navigate(
              'Quiz',
              { deckTitle: deck.title }
            )}
            style={styles.btnQuiz}>
              <Text style={styles.btnQuizText}>Start Quiz</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    textAlign: 'center'
  },
  cardsCount: {
    fontSize: 20,
    color: gray,
    textAlign: 'center'
  },
  btnAdd: {
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5
  },
  btnAddText: {

  },
  btnQuiz: {
    backgroundColor: '#272822',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5
  },
  btnQuizText: {
    color: 'white'
  }
})
import React, {Component} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import {getDecks} from '../../helpers/storage'

export default class DeckList extends Component {
  state = {
    decks: [{title: "React", questions: [1, 2, 3]}]
  }
  componentDidMount(){
    getDecks().then((storage_decks) => {
      this.setState((currentState) => ({
        decks: storage_decks
      }))
    })
  }
  render() {
    const {decks} = this.state;
    console.log("State: " + JSON.stringify(decks));
    return(
      <View>
        <FlatList
          data={decks}
          renderItem={(deck) => (
            <View>
              <Text>{deck.item.title}</Text>
              <Text>{deck.item.questions.length} cards</Text>
              {/* <Text>{JSON.stringify(deck)}</Text> */}
            </View>
          )}
          >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create()
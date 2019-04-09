import React, {Component} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { AppLoading } from "expo"
import {getDecks} from '../helpers/storage'
import {gray} from '../helpers/colors'

export default class DeckList extends Component {
  state = {
    decks: [{title: "React", questions: [1, 2, 3]}],
    isLoadingComplete: false
  }
  componentDidMount(){
    getDecks().then((storage_decks) => {
      this.setState((currentState) => ({
        decks: storage_decks,
        isLoadingComplete: true
      }))
    })
  }
  render() {
    const {decks, isLoadingComplete} = this.state;
    const { navigation } = this.props
    console.log("State: " + JSON.stringify(decks));

    if (!isLoadingComplete) {
      return <AppLoading/>
    }

    return(
      <View style={styles.container}>
        <FlatList
          data={decks}
          keyExtractor={item => item.title.toString()}
          renderItem={(deck) => (
            <View style={styles.listItem}>
              <TouchableOpacity onPress={() => navigation.navigate(
                'Deck',
                { deck: deck.item }
              )}>
                <Text style={styles.listItemTitle}>{deck.item.title}</Text>
                <Text style={styles.listItemCount}>{deck.item.questions.length} cards</Text>
              </TouchableOpacity>
              {/* <Text>{JSON.stringify(deck)}</Text> */}
            </View>
          )}
          >
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  listItem: {

  },
  listItemTitle: {
    fontSize: 20,
  },
  listItemCount: {
    color: gray
  }
})
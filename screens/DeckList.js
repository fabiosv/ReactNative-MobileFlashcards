import React, {Component} from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { AppLoading } from "expo"
import {getDecks} from '../helpers/storage'
import {gray} from '../helpers/colors'

export default class DeckList extends Component {
  state = {
    decks: [{title: "React", questions: [1, 2, 3]}],
    isLoadingComplete: false,
    refreshing: false
  }
  updateDecks = () => {
    this.setState({refreshing: true})
    getDecks().then((storage_decks) => {
      this.setState((currentState) => ({
        decks: storage_decks,
        isLoadingComplete: true,
        refreshing: false
      }))
    })
  }
  componentDidMount(){
    this.updateDecks()
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
          refreshing={this.state.refreshing}
          onRefresh={this.updateDecks}
          data={decks}
          keyExtractor={item => item.title.toString()}
          renderItem={(deck) => (
            <View style={styles.listItem}>
              <TouchableOpacity onPress={() => navigation.navigate(
                'Deck',
                { deckTitle: deck.item.title }
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
    borderBottomWidth: 1,
    borderColor: "black"
  },
  listItemTitle: {
    textAlign: 'center',
    fontSize: 25,
  },
  listItemCount: {
    textAlign: 'center',
    fontSize: 18,
    color: gray
  }
})
import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import {getDecks} from '../../helpers/storage'

export default class NewDeck extends Component {
  state = {
    text: "Deck Title"
  }
  render(){
    return(
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    )
  }
}
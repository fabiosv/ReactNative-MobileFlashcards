import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import DeckList from '../screens/DeckList'
import NewDeck from '../screens/NewDeck'
import NewCard from '../screens/NewCard'
import Deck from '../screens/Deck'
import Quiz from '../screens/Quiz'

const DeckListStack = createStackNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      header: null
    }
  },
  Deck: Deck,
  AddCard: NewCard,
  Quiz: Quiz
});

DeckListStack.navigationOptions = {
  tabBarLabel: 'Decks',
};

const NewDeckStack = createStackNavigator({
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      header: null
    }
  },
});

NewDeckStack.navigationOptions = {
  tabBarLabel: 'New Deck'
};

export default createMaterialTopTabNavigator({
  DeckListStack,
  NewDeckStack,
});

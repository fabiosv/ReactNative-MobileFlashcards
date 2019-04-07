import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import DeckList from '../screens/DeckList'
import NewDeck from '../screens/NewDeck'

const DeckListStack = createStackNavigator({
  Decks: DeckList,
});

DeckListStack.navigationOptions = {
  tabBarLabel: 'Decks',
};

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeck,
});

NewDeckStack.navigationOptions = {
  tabBarLabel: 'New Deck'
};

export default createMaterialTopTabNavigator({
  DeckListStack,
  NewDeckStack,
});

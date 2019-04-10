import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { black, white } from '../helpers/colors'
import DeckList from '../screens/DeckList'
import NewDeck from '../screens/NewDeck'
import NewCard from '../screens/NewCard'
import Deck from '../screens/Deck'
import Quiz from '../screens/Quiz'

const HomeTabs = createMaterialTopTabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  },
})

const stackNavigationOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: black,
    // height: 40
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeTabs,
    navigationOptions: {
      header: null
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      ...stackNavigationOptions
    }
  },
  AddCard: {
    screen: NewCard,
    navigationOptions: {
      ...stackNavigationOptions,
      title: "Create Card"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      ...stackNavigationOptions,
      title: "Quiz"
    }
  }
})
/*
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
*/
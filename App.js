import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createMaterialTopTabNavigator, createBottomTabNavigator, createAppContainer, StackNavigator, createStackNavigator } from "react-navigation"
import { purple, white } from './helpers/colors'
// import { CustomStatusBar } from './navigation'
import DeckList from './components/views/DeckList'
import NewDeck from './components/views/NewDeck'
// import DeckList from './components/views/DeckList'

function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor: purple, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={purple} {...props} />
    </View>
  )
}

const Tabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList
  },
  NewDeck: {
    screen: NewDeck
  }
})

const TabsContainer = createAppContainer(Tabs)

export default class App extends React.Component {
  render() {
    console.log(Constants.statusBarHeight)
    return (
      <View style={styles.container}>
        <CustomStatusBar backgroundColor={purple} barStyle="light-content"  />
        <Text>Hello</Text>
        {/* <TabsContainer/> */}
        <DeckList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

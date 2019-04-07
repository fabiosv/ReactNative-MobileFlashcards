import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { Constants } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import { purple, white } from './helpers/colors'
// import DeckList from './components/views/DeckList'
import NewDeck from './screens/NewDeck'

function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={purple} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <CustomStatusBar backgroundColor={purple} barStyle="light-content"  /> */}
        <View style={{ backgroundColor: "#4e4cb8", height: Constants.statusBarHeight }}>
          <StatusBar backgroundColor="#4e4cb8" barStyle="light-content"/>
        </View>
        {/* <NewDeck></NewDeck> */}
        {/* <Text>Hello</Text> */}
        <AppNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f26f28',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

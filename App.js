import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { Constants } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import { purple, white, blue } from './helpers/colors'

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  render() {
    console.log(Constants.statusBarHeight)
    return (
      <View style={{flex: 1}}>
        <AppStatusBar backgroundColor={blue} barStyle="light-content" />
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

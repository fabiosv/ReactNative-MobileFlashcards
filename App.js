import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import { blue } from './helpers/colors'
import { setLocalNotification } from './helpers/notification'

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }

  render() {
    console.log(Constants.statusBarHeight)
    return (
      <View style={styles.container}>
        <AppStatusBar backgroundColor={blue} barStyle="light-content" />
        <AppNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

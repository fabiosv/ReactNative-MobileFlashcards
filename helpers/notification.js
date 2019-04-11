import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = "MobileFlashCards:notification"

export function clearLocalNotification () {
  console.log("Clearing Scheduled notification")
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(() => Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification () {
  return {
    title: "It's time to Flash your Memories ☕",
    body: "Don't forget to remember Flash Cards and keep your memory fresh!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  console.log("Scheduling notification")
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      console.log("NOTIFICATION_KEY: " + JSON.stringify(data))
      if(data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            console.log("Notification STATUS: " + JSON.stringify(status))
            if(status === 'granted'){
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(7)
              tomorrow.setMinutes(30)
              console.log("DATE:" + tomorrow.toString())

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )
              console.log("Scheduled for " + JSON.stringify(tomorrow.toString()))
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(tomorrow.toString()))
            }
          })
      }
    })
}
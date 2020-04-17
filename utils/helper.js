import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

/* The content of this file is heavily based on the code provided in the
 * Udacity React Native course, Lesson 5, Native Features, Local
 * Notifications */

const NOTIFICATION_KEY = 'FlashCardNotification'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)

}


function createNotification () {
  return {
    title: "Quiz Reminder",
    body: "Remember To Practice At Least One Quiz Today!",
    android: {
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }

}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
  .then(JSON.parse)
  .then((data) => {
    if (data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(22)
            tomorrow.setMinutes(0)

            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: tomorrow,
                repeat: 'day',
              }
            )
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
    }
  })

}

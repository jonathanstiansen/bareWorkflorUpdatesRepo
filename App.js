import * as React from 'react';
import { Audio } from 'expo-av'
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});



export default function App() {
  const play = async () => {
    const soundObject = new Audio.Sound();
    try {
      console.warn('here')
      await soundObject.loadAsync(require('./app/assets/sounds/ka-ching.mp3'));
      await soundObject.playAsync();
      // Your sound is playing!
      console.warn('here2')
    } catch (error) {
      console.warn(error)
    }
  }

  React.useEffect(() => {
    setTimeout(() => play(), 2000)
  }, [])

  const update = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        alert('Got update')
        await Updates.reloadAsync()
      }
    } catch (e) {
      console.log("Update fail", e);
    }
  }

  React.useEffect(() => {
    update()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>SEVEN!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  Button,
  Image,
} from 'react-native';

const gif = require('./giphy.gif');

const styles = new StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    height: 56,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  link: {
    textDecorationStyle: 'solid',
    textDecorationColor: 'white',
    textDecorationLine: 'underline',
  },
});

function App(props) {
  console.log('app props', props);

  const handleDone = () => {
    // Call the function that has been exposed on the native module to close the screen.
    NativeModules.ActionExtension.done();
  };

  const handleIncrease = () => {
    // Call the function that has been exposed on the native module to close the screen.
    NativeModules.ActionExtension.increaseFontSize();
  };

  const handleDecrease = () => {
    // Call the function that has been exposed on the native module to close the screen.
    NativeModules.ActionExtension.decreaseFontSize();
  };

  if (props.browserExtension) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          The browser extension using React Native
        </Text>

        <Text style={styles.text}>Here it's work in progress. Welcome</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Browser Extension App</Text>
      <Pressable
        onPress={() => {
          Linking.openURL('https://givefreely.com/');
        }}>
        <Text style={[styles.text, styles.link]}>Click here to try</Text>
      </Pressable>

      <Image source={gif} />
    </SafeAreaView>
  );
}

export default App;

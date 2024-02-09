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
} from 'react-native';

const styles = new StyleSheet.create({
  container: {
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
});

function App(props) {
  console.log('app props', props);

  const handleDone = () => {
    // Call the function that has been exposed on the native module to close the screen.
    NativeModules.ActionExtension.done();
  };

  if (props.browserExtension) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>The browser extension works fine</Text>

        <Pressable style={styles.button} onPress={handleDone}>
          <Text style={styles.buttonText}>Done</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Browser Extension App</Text>
      <Pressable
        onPress={() => {
          Linking.openURL('https://givefreely.com/');
        }}>
        <Text>Click here to try</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default App;

import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput} from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [text, setText] = useState ('');

  const speak = () => {
    const thingToSay = text;
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
       <TextInput style={styles.input} placeholder='Type something' 
        onChangeText={text => setText(text)} />
      <Button title="Press to hear the above text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    width: 200,
    height: 100,
    borderColor: 'black',
    borderWidth: 1
  }
});

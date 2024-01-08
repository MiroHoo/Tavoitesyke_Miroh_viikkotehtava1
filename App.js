import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setage] = useState(0);
  const [min, setmin] = useState(0);
  const [max, setmax] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput value={age.toString()} onChangeText={text => setage(text) + setmin(Math.round((220-text) * 0.65)) + setmax(Math.round((220-text) * 0.85))}></TextInput>
      <Text>Hr limits</Text>
      <Text>{min} - {max}</Text>
      <StatusBar style="auto" />
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
});

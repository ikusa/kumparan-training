import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './core-ui/Text';
import Button from './core-ui/Button';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>0</Text>
      <Button type="primary">Increment</Button>
      <Button
        contentStyle={{ color: '#000' }}
        containerStyle={{ borderWidth: 1 }}
      >
        Decrement
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

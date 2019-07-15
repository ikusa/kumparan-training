import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './core-ui/Text';
import Button from './core-ui/Button';
import counterFn from './lib/counterFn';

export default class App extends Component<{}> {
  counterCall = counterFn();
  state = {
    counter: 0
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>{this.state.counter}</Text>
        <Button
          type="primary"
          onPress={() => {
            this.counterCall.increment();
            this.setState({ counter: this.counterCall.getCounter() });
          }}
        >
          Increment
        </Button>
        <Button
          contentStyle={{ color: '#000' }}
          containerStyle={{ borderWidth: 1 }}
          onPress={() => {
            this.counterCall.decrement();
            this.setState({ counter: this.counterCall.getCounter() });
          }}
        >
          Decrement
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

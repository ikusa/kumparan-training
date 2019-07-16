import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../core-ui/Text';
import WithTodos from '../lib/WithTodos';
import { TodoContext } from './TodoProvider';

type Props = TodoContext;

function TasksStatus({ todos }: Props) {
  return (
    <View style={styles.totalContainer}>
      <Text style={{ fontSize: 40 }}>Finished Tasks</Text>
      <Text style={{ fontSize: 40 }}>
        {todos.reduce((prev, currentTodos) => {
          if (currentTodos.done === true) {
            return prev + 1;
          }
          return prev;
        }, 0)}
      </Text>
    </View>
  );
}

export default WithTodos(TasksStatus);

const styles = StyleSheet.create({
  totalContainer: {
    alignItems: 'center'
  }
});

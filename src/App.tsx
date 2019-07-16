import React from 'react';
import { StyleSheet, View } from 'react-native';

import TodoList from './components/TodoList';
import TodoProvider from './components/TodoProvider';
import TasksStatus from './components/TasksStatus';

export default function App() {
  return (
    <TodoProvider>
      <View style={styles.container}>
        <TasksStatus />
        <TodoList />
      </View>
    </TodoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  totalContainer: {
    alignItems: 'center'
  }
});

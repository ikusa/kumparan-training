import React, { Component, ComponentClass } from 'react';
import { View, StyleSheet } from 'react-native';

import TodoItem from './TodoItem';
import WithTodos from '../lib/WithTodos';

import { TodoContext } from './TodoProvider';

type Props = TodoContext;

function TodoList({ todos, toggleTodo }: Props) {
  return (
    <View style={styles.listContainer}>
      {todos.map(todo => {
        return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />;
      })}
    </View>
  );
}

export default WithTodos(TodoList);

let styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'flex-start',
    paddingHorizontal: 40
  }
});

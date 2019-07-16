import React, { Component } from 'react';

import { Todos } from '../types';

export type TodoContext = {
  todos: Todos;
  toggleTodo: (id: string) => void;
};
type State = {
  todos: Todos;
};

type Props = {
  children: React.ReactNode;
};

export let TodoContext = React.createContext<TodoContext>({
  todos: [],
  toggleTodo: () => {}
});

export default class TodoProvider extends Component<{}, State> {
  state: State = {
    todos: [
      {
        id: '1',
        task: 'first task',
        done: true
      }
    ]
  };
  render() {
    return (
      <TodoContext.Provider
        value={{ ...this.state, toggleTodo: this.toggleTodo }}
      >
        {this.props.children}
      </TodoContext.Provider>
    );
  }
  toggleTodo = (id: string) => {
    let newTodos = this.state.todos.map(todo => {
      if (todo.id != id) {
        return todo;
      }
      return { ...todo, done: !todo.done };
    });
    this.setState({ todos: newTodos });
  };
}

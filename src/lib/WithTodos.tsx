import React, { Component } from 'react';
import { TodoContext } from '../components/TodoProvider';

export default function WithTodos(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <TodoContext.Consumer>
          {value => {
            return <WrappedComponent {...this.props} {...value} />;
          }}
        </TodoContext.Consumer>
      );
    }
  };
}

import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

module.exports = React.createClass({
  getInitialState: function() {
    return {items: []};
  },
  onTodoItemAdd(todoItem) {
    this.setState({items: this.state.items.concat(todoItem)})
  },
  render() {
    return (
      <div>
        <TodoList todoItems={this.state.items}></TodoList>
        <TodoForm onTodoFormSubmit={this.onTodoItemAdd}></TodoForm>
      </div>
    );
  }
});

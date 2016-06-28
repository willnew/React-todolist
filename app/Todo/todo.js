import _ from 'lodash'
import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Server from '../Server'

module.exports = React.createClass({
  getInitialState() {
    return {items: []}
  },
  componentDidMount() {
    Server.get('todoItems').done(_.bind(function (data) {
      this.setState({ items: data })
    }, this))
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
    )
  }
})

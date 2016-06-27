import React from 'react'

var TodoItem = React.createClass({
  render() {
    return (
      <div>
        {this.props.itemName}
      </div>
    )
  }
})

var TodoList = React.createClass({
  render() {
    return (
      <div>
        <TodoItem itemName="coding"></TodoItem>
        <TodoItem itemName="self testing"></TodoItem>
        <TodoItem itemName="fixing bug"></TodoItem>
      </div>
    )
  }
})

var TodoForm = React.createClass({
  onTodoFormSubmit(event) {
    event.preventDefault()
    console.log(event.target.elements[0].value)
  },
  render() {
    return (
      <div>
        <form onSubmit={this.onTodoFormSubmit}>
          <input type="text" />{''}
        </form>
      </div>
    )
  }
})

module.exports = React.createClass({
  onTodoItemAdd() {

  },
  onTodoItemDelete() {

  },
  render() {
    return (
      <div>
        <TodoList></TodoList>
        <TodoForm></TodoForm>
      </div>
    );
  }
});

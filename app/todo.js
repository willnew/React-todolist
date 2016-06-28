import React from 'react'

var TodoItem = React.createClass({
  getInitialState() {
    return { done: false }
  },
  onItemStatusChange(event) {
    this.setState({done: !this.state.done})
  },
  render() {
    return (
      <div className={this.state.done ? 'done' : ''}>
        <input type="checkbox" onChange={this.onItemStatusChange} />
        {this.props.item.name}
      </div>
    )
  }
})

var TodoList = React.createClass({
  render() {
    return (
      <div>
        {this.props.todoItems.map(function(item) {
          return <TodoItem key={item.id} item={item}/>
        })}
      </div>
    )
  }
})

var TodoForm = React.createClass({
  onTodoFormSubmit(event) {
    event.preventDefault()
    this.props.onTodoFormSubmit({
      id: Date.now(),
      name: event.target.elements[0].value
    })
    event.target.elements[0].value = ''
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

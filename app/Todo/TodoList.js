import React from 'react'
import TodoItem from './TodoItem'

module.exports = React.createClass({
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

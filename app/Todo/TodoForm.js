import React from 'react'

module.exports = React.createClass({
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

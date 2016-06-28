import React from 'react'

module.exports = React.createClass({
  getInitialState() {
    return { done: false }
  },
  onItemStatusChange(event) {
    this.setState({done: !this.state.done})
  },
  render() {
    return (
      <div className={this.state.done ? 'done' : ''}>
        <input id={this.props.item.id} type='checkbox' onChange={this.onItemStatusChange} />
        <label htmlFor={this.props.item.id}>
          {this.props.item.name}
        </label>
      </div>
    )
  }
})

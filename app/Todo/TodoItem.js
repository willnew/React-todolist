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
        <input type="checkbox" onChange={this.onItemStatusChange} />
        {this.props.item.name}
      </div>
    )
  }
})

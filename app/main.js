import React from 'react'
import { Link } from 'react-router'

require('./main.css')

module.exports = React.createClass({
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="test">Test</Link></li>
            <li><Link to="todo">Todo List</Link></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    );
  }
});

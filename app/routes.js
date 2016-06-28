import React from 'react'
import { Route } from 'react-router'
import Main from './main'
import Test from './Test/test'
import Todo from './Todo/todo'

module.exports = (
  <Route path="/" component={Main}>
    <Route path="/test" component={Test}/>
    <Route path="/todo" component={Todo}/>
  </Route>
)

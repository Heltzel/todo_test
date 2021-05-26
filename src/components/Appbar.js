import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

function Appbar() {
  const { todos } = useContext(TodoContext)

  return (
    <div>
      <h1>{'Duty helper'.toUpperCase()}</h1>
      <h3>{'Get things done'.toUpperCase()}</h3>
      <p>There are {todos.length} duties waiting...</p>
    </div>
  )
}

export default Appbar

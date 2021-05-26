import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

function Tododetails({ todo }) {
  const { removeTodo } = useContext(TodoContext)

  return (
    <li>
      <span> {todo.title}</span>
      <span> {todo.status}</span>
      <button>Update</button>
      <button
        onClick={() => {
          removeTodo(todo.id)
        }}
      >
        Delete
      </button>
    </li>
  )
}

export default Tododetails

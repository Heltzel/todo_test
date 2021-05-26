import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

function Toddoformupdate({ todo }) {
  const { setIsUpdate, updateTodo } = useContext(TodoContext)
  const [title, setTitle] = useState(todo.title)
  const [status, setStatus] = useState(todo.status)

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedTodo = { id: todo.id, title: title, status: status }
    updateTodo(updatedTodo)
    setIsUpdate(null)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="updateTitle">Title: </label>
      <input
        id="updateTitle"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <label htmlFor="updateStatus">Status: </label>
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value)
        }}
      >
        <option value="todo">todo</option>
        <option value="doing">doing</option>
        <option value="done">done</option>
      </select>
      <button>Comfirm</button>
    </form>
  )
}

export default Toddoformupdate

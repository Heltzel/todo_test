import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

function Todoform() {
  const { addTodo } = useContext(TodoContext)
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tilte">Title</label>
      <input
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button type="submit">Add Duty</button>
    </form>
  )
}

export default Todoform

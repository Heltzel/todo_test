import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

function Todoform() {
  const { addTodo, isUpdate } = useContext(TodoContext)
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  }

  return (
    <>
      {!isUpdate && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="tilte">New Duty: </label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button type="submit">Add Duty</button>
        </form>
      )}
    </>
  )
}

export default Todoform

import React from 'react'

function Todoform() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tilte">Title</label>
      <input type="text" id="title" />
      <button type="submit">Add Duty</button>
    </form>
  )
}

export default Todoform

import React from 'react'

function Tododetails({ todo }) {
  return (
    <li>
      <span> {todo.title}</span>
      <span> {todo.status}</span>
      <button>Update</button>
      <button>Delete</button>
    </li>
  )
}

export default Tododetails

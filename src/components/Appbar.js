import React from 'react'

function Appbar() {
  const todos = [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' },
  ]

  return (
    <div>
      <h1>{'Duty helper'.toUpperCase()}</h1>
      <p>There are {todos.length} waiting...</p>
    </div>
  )
}

export default Appbar

import React from 'react'
import Tododetails from './Tododetails'

function Todolist() {
  const todos = [
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' },
  ]

  return todos.length ? (
    <div>
      <ul>
        {todos.map((todo) => {
          return <Tododetails key={todo.id} todo={todo} />
        })}
      </ul>
    </div>
  ) : (
    <div>
      <h3>All done. Greate job !</h3>
    </div>
  )
}

export default Todolist

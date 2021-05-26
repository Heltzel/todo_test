import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import Tododetails from './Tododetails'

function Todolist() {
  const { todos } = useContext(TodoContext)

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

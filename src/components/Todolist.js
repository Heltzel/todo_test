import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import Tododetails from './Tododetails'

function Todolist() {
  const { todos, dutyStatus } = useContext(TodoContext)
  return (
    <div>
      <div>
        <ul>
          {todos.map((todo) => {
            return <Tododetails key={todo.id} todo={todo} />
          })}
        </ul>
      </div>
      {dutyStatus.doneStatus.length === todos.length && (
        <div>
          <h3>All done. Greate job !</h3>
        </div>
      )}
    </div>
  )
}

export default Todolist

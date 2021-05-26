import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import Toddoformupdate from './Toddoformupdate'

function Tododetails({ todo }) {
  const { removeTodo, isUpdate, setIsUpdate } = useContext(TodoContext)

  return (
    <li>
      {isUpdate === todo.id && <Toddoformupdate todo={todo} />}
      {isUpdate !== todo.id && (
        <>
          <span> {todo.title}</span>
          <span> {todo.status}</span>
          <button
            onClick={() => {
              setIsUpdate(todo.id)
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              removeTodo(todo.id)
            }}
          >
            Delete
          </button>
        </>
      )}
    </li>
  )
}

export default Tododetails

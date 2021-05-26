import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import Toddoformupdate from './Toddoformupdate'

import Button from '@material-ui/core/Button'

function Tododetails({ todo }) {
  const { removeTodo, isUpdate, setIsUpdate } = useContext(TodoContext)

  return (
    <li>
      {isUpdate === todo.id && <Toddoformupdate todo={todo} />}
      {isUpdate !== todo.id && (
        <>
          <span> {todo.title}</span>
          <span> {todo.status}</span>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setIsUpdate(todo.id)
            }}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              removeTodo(todo.id)
            }}
          >
            Delete
          </Button>
        </>
      )}
    </li>
  )
}

export default Tododetails

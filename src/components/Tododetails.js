import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

import Button from '@material-ui/core/Button'
import { TableCell, TableRow } from '@material-ui/core'

function Tododetails({ todo }) {
  const { removeTodo, setIsUpdate } = useContext(TodoContext)
  return (
    <TableRow>
      <TableCell align="left">{todo.title}</TableCell>
      <TableCell align="left">{todo.status}</TableCell>
      <TableCell align="left">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setIsUpdate(todo.id)
          }}
          size="small"
          style={{ marginRight: '5px' }}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            removeTodo(todo.id)
          }}
          size="small"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default Tododetails

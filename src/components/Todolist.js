import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import Tododetails from './Tododetails'

function Todolist() {
  const { todos, dutyStatus } = useContext(TodoContext)

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => {
              return <Tododetails key={todo.id} todo={todo} />
            })}
          </TableBody>
        </Table>
        {dutyStatus.doneStatus.length === todos.length && (
          <div align="center">
            <h3>All done. Greate job !</h3>
          </div>
        )}
      </TableContainer>
    </>
  )
}

export default Todolist

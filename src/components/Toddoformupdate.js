import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'

function Toddoformupdate() {
  const { setIsUpdate, updateTodo, isUpdate } = useContext(TodoContext)
  // const [title, setTitle] = useState(todo.title)
  // const [status, setStatus] = useState(todo.status)
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')

  console.log(isUpdate)

  const handleSubmit = (e) => {
    e.preventDefault()
    // const updatedTodo = { id: todo.id, title: title, status: status }
    // updateTodo(updatedTodo)
    setIsUpdate(null)
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <FormControl style={{ marginLeft: '5px' }}>
            <InputLabel htmlFor="updateTitle">Title</InputLabel>
            <Input
              id="updateTitle"
              aria-describedby="my-helper-text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            />
            <FormHelperText id="my-helper-text">
              <span>Update your title</span>
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3}>
          <FormControl>
            <InputLabel htmlFor="updateStatus">Status: </InputLabel>
            <Select
              labelId="updateStatus"
              id="updatestatusSelect"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value)
              }}
            >
              <MenuItem value="todo">todo</MenuItem>
              <MenuItem value="doing">doing</MenuItem>
              <MenuItem value="done">done</MenuItem>
            </Select>
            <FormHelperText id="my-helper-text2">
              <span>Update your title</span>
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          style={{ marginTop: '20px', paddingLeft: '10px' }}
        >
          <Button variant="contained" type="submit">
            Comfirm
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Toddoformupdate

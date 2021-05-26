import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  Grid,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}))

function Todoform() {
  const { addTodo, isUpdate } = useContext(TodoContext)
  const [title, setTitle] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  const classes = useStyles()

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmit(true)
    if (title) {
      addTodo(title)
      setTitle('')
      setIsSubmit(false)
    }
  }

  return (
    <>
      {/* {!isUpdate && ( */}
      <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
        <FormControl>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <InputLabel htmlFor="my-input">New Duty</InputLabel>
              <Input
                id="title"
                aria-describedby="my-helper-text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                disabled={!isUpdate ? false : true}
                error={isSubmit && !title ? true : false}
              />
              <FormHelperText id="my-helper-text">Required</FormHelperText>
            </Grid>
            <Grid item xs={12} md={4} style={{ marginTop: '10px' }}>
              <Button
                variant="contained"
                type="submit"
                disabled={!isUpdate ? false : true}
              >
                Add Duty
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </form>
      {/* )} */}
    </>
  )
}

export default Todoform

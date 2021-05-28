import React, { useContext } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import Toddoformupdate from './Toddoformupdate'
import Todoform from './Todoform'
import { TodoContext } from '../contexts/TodoContext'

function Updatesection() {
  const { isUpdate } = useContext(TodoContext)

  return (
    <Card style={{ margin: '15px 0 ', minHeight: '160px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {isUpdate ? 'Update Duty' : 'New Duty'}
        </Typography>
        {isUpdate ? <Toddoformupdate /> : <Todoform />}
      </CardContent>
    </Card>
  )
}

export default Updatesection

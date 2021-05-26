import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    flexDirection: 'column',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-start',
    marginTop: '0px',
  },
}))
const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  marginLeft: '-4%',
}

function Appbar() {
  const { dutyStatus } = useContext(TodoContext)
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h4" noWrap>
            <div>{'Duty helper'.toUpperCase()}</div>
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            <small>{'Get things done'.toUpperCase()}</small>
            <List style={flexContainer}>
              <ListItem>
                <ListItemText
                  primary={`TODO: ${dutyStatus.todoStatus.length}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`DOING: ${dutyStatus.doingStatus.length}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`DONE: ${dutyStatus.doneStatus.length}`}
                />
              </ListItem>
            </List>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar

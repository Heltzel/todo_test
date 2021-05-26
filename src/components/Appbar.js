import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

function Appbar() {
  const { dutyStatus } = useContext(TodoContext)

  return (
    <div>
      <h1>{'Duty helper'.toUpperCase()}</h1>
      <h3>{'Get things done'.toUpperCase()}</h3>
      <div>
        <span>TODO: {dutyStatus.todoStatus.length}</span>
        <span>DOING: {dutyStatus.doingStatus.length}</span>
        <span>DONE: {dutyStatus.doneStatus.length}</span>
      </div>
    </div>
  )
}

export default Appbar

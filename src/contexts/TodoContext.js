import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TodoContext = createContext()

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([])
  const [isUpdate, setIsUpdate] = useState(null)
  const [dutyStatus, setDutyStatus] = useState({
    todoStatus: [],
    doingStatus: [],
    doneStatus: [],
  })
  const [currentTodo, setCurrentTodo] = useState({
    id: null,
    title: '',
    status: 'todo',
  })

  useEffect(() => {
    let todoStatus = todos.filter((item) => item.status === 'todo')
    let doingStatus = todos.filter((item) => item.status === 'doing')
    let doneStatus = todos.filter((item) => item.status === 'done')

    setDutyStatus({ todoStatus, doingStatus, doneStatus })
  }, [todos])

  const addTodo = (title) => {
    setTodos([...todos, { id: uuidv4(), title: title, status: 'todo' }])
  }

  const updateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== updatedTodo.id) {
        return todo
      }
      todo = updatedTodo
      return todo
    })
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id))
  }

  const getTodo = (id) => {
    let current = todos.find((todo) => todo.id === id)
    setCurrentTodo(current)
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        isUpdate,
        setIsUpdate,
        updateTodo,
        dutyStatus,
        getTodo,
        currentTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider

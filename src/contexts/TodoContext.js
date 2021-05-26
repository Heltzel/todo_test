import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TodoContext = createContext()

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos([...todos, { id: uuidv4(), title: title, status: 'todo' }])
  }
  //------
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

  const [isUpdate, setIsUpdate] = useState(null)

  const removeTodo = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id))
  }

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, isUpdate, setIsUpdate, updateTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider

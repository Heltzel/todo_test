import React, { createContext, useState } from 'react'

export const TodoContext = createContext()

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'title 1', status: 'todo' },
    { id: 2, title: 'title 2', status: 'doing' },
    { id: 3, title: 'title 2', status: 'done' },
  ])

  // const addTodo = ()=>{}
  // const updateTodo = ()=>{}
  // const removeTodo = ()=>{}

  return (
    <TodoContext.Provider value={{ todos }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider

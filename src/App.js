import './App.css'
import Appbar from './components/Appbar'
import Todoform from './components/Todoform'
import Todolist from './components/Todolist'
import TodoContextProvider from './contexts/TodoContext'

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Appbar />
        <Todolist />
        <Todoform />
      </TodoContextProvider>
    </div>
  )
}

export default App

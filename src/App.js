import './App.css'
import Appbar from './components/Appbar'
import Todoform from './components/Todoform'
import Todolist from './components/Todolist'

function App() {
  return (
    <div className="App">
      <Appbar />
      <Todolist />
      <Todoform />
    </div>
  )
}

export default App

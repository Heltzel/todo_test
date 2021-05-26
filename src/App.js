import './App.css'
import Appbar from './components/Appbar'
import Todoform from './components/Todoform'
import Todolist from './components/Todolist'
import TodoContextProvider from './contexts/TodoContext'

import { Card, CardContent, Container } from '@material-ui/core'

function App() {
  return (
    <Container maxWidth="sm" className="App">
      <Card>
        <CardContent>
          <TodoContextProvider>
            <Appbar />
            <Todoform />
            <Todolist />
          </TodoContextProvider>
        </CardContent>
      </Card>
    </Container>
  )
}

export default App

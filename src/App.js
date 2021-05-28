import './App.css'
import Appbar from './components/Appbar'
import Todolist from './components/Todolist'
import TodoContextProvider from './contexts/TodoContext'
import { Card, CardContent, Container } from '@material-ui/core'
import Actionsection from './components/Actionsection'

function App() {
  return (
    <Container maxWidth="sm" className="App" style={{ marginTop: '45px' }}>
      <Card>
        <CardContent>
          <TodoContextProvider>
            <Appbar />
            <Actionsection />
            <Todolist />
          </TodoContextProvider>
        </CardContent>
      </Card>
    </Container>
  )
}

export default App

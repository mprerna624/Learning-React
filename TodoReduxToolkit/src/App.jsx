import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItems from './Components/TodoItems'

function App() {

  return (
    <div className="w-full text-center mx-auto px-auto">
      <h1>Todo App using Redux Toolkit</h1>
      <TodoForm />
      <TodoItems />
    </div>
  )
}

export default App

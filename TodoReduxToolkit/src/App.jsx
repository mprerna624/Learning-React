import { useSelector } from 'react-redux'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItems from './Components/TodoItems'

function App() {

  const todos = useSelector( (state) => state.todos )

  return (
    <div className="w-full text-center mx-auto px-auto">
      <h1>Todo App using Redux Toolkit</h1>
      <TodoForm />

      <div className="flex flex-wrap gap-y-3 mt-6">
        {
          todos.map((eachTodo) => (
            <div key={eachTodo.id} className='w-full'>
              <TodoItems todo={eachTodo} />
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default App

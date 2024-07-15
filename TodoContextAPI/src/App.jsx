import { useState, useEffect } from 'react'
import { TodoContextProvider } from './context/todoContext'
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todoObj) => {
    setTodos( (prev) => [...prev, todoObj] );
  }

  const updateTodo = (id, todoMsg) => {
    setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id === id ? {...prevTodo, task: todoMsg} : prevTodo ) )
  }

  const deleteTodo = (id) => {
    setTodos( (prev) => prev.filter( (prevTodo) => prevTodo.id !== id ))
  }

  const toggleChecked = (id) => {
    setTodos( (prev) => prev.map( (prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ) )
  }

  useEffect( () => {
    const todoList = JSON.parse(localStorage.getItem("todosList")); 

    if(todoList && todoList.length > 0 ) {
      setTodos(todoList);
    }
  } , []);

  useEffect( () => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos] )

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleChecked}}>
     <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {
                    todos.map((eachTodo) => (
                      <div key={eachTodo.id} className='w-full'>
                        <TodoItem todo={eachTodo} />
                      </div>
                    ))
                  }
              </div>
          </div>
      </div>
    </TodoContextProvider>
  )
}

export default App

//App.jsx
import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  
  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=> [{id: Date.now(),...todo}, ...prev])
  }

  const updateTodo = (id,todo) =>{
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo)))
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=>todo.id != id))
  }
  const compeleteStatus = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id == id ? {...prevTodo, completed: !prevTodo.completed}:prevTodo ))
  }
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  
  
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,compeleteStatus}}>
      <div className="min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-slate-900">
              <h2 className='my-5 text-3xl text-center font-semibold capitalize text-gray-200'> To do app <span className='text-base text-rose-400'>- using context api & local storage</span>
              </h2>
              <div className="mb-4">
                  {/* Todo form goes here */} 
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  {todos.map((todo)=>(
                    <div className='w-full' >
                      <TodoItem todo={todo} />
                    </div>
                  ))

                  }
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App

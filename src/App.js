import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import uniqueRandom from 'unique-random'
//uuid library wasn't working so I found this uniqueRandom lib. Probably not perfect but allows me to continue on

const random = uniqueRandom(1, 100)
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(savedTodos) setTodos(savedTodos)
  }, [])
  //first arg of useEffect is a function
  //second determines when useEffect runs/updates
  //in below case, anytime the todos state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) 
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: random(), name: name, completed: false}]
    })
    todoNameRef.current.value = null
    //this sets input field to empty after storing current value in the name variable, good UI for the app
  }

  function tasksRemaining() {
    const numOfTasks = parseInt(todos.length)

    //returns number of completed tasks
    const isCompleted = () => {
      const complete = todos.filter(todo => todo.completed === true)
      return complete.length
    }

    const complete = parseInt(isCompleted())
    return numOfTasks - complete
  }
  
  return (
    <>
      <TodoList
        toggleTodo={toggleTodo}
        currentTodos={todos}
      />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add Todo </button>
      <button>Clear Completed Todos</button>
      <div>
        {
          (tasksRemaining() === 1) ? 
          '1 task remaining' : 
          tasksRemaining() + ' tasks remaining'
        }
      </div>
    </>
  )
}

export default App;

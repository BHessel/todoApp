import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import uniqueRandom from 'unique-random'
//uuid library wasn't working so I found this uniqueRandom lib. Probably not perfect but allows me to continue on

const random = uniqueRandom(1, 100)
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  //first arg of useEffect is a function
  //second determines when useEffect runs/updates
  //in this case, anytime the todos state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) 
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: random, name: name, completed: false}]
    })
    todoNameRef.current.value = null
    //this sets input field to empty after storing current value in the name variable, good UI for the app
  }

  return (
    <>
      <TodoList
        currentTodos={todos}
      />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add Todo </button>
      <button>Clear Completed Todos</button>
      <div>
        0 tasks remaining
        {/* I can clean this up with a ternary statement later, to read 1 task instead of tasks when tasksRemaining === 1 */}
      </div>
    </>
  )
}

export default App;

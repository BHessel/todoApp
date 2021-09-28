import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(['Task1', 'task2'])

  return (
    <>
      <TodoList
        currentTodos={todos}
      />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>
        0 tasks remaining
        {/* I can clean this up with a ternary statement later, to read 1 task instead of tasks when tasksRemaining === 1 */}
      </div>
    </>
  )
}

export default App;

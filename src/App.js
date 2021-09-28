import React from 'react'
import TodoList from './TodoList'

function App() {
  return (
    <>
      <TodoList />
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

import React from 'react'
import Todo from './Todo'

export default function TodoList({ currentTodos, toggleTodo }) {
    return (
        currentTodos.map(task => {
            return <div>
                        <Todo
                        key={task.id}
                        task={task}
                        toggleTodo={toggleTodo}
                        />
                    </div> 
        })
    )
}
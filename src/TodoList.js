import React from 'react'
import Todo from './Todo'

export default function TodoList({ currentTodos, toggleTodo }) {
    return (
        currentTodos.map(task => {
            return <Todo
                    key={task.id}
                    task={task}
                    toggleTodo={toggleTodo}
                    />
        })
    )
}

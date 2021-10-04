import React from 'react'

export default function Todo({ task, toggleTodo }) {
    
    function handleTodoClick() {
       toggleTodo(task.id)
    }

    
    return (
        <div>
            <input type="checkbox" checked={task.completed} onChange={handleTodoClick} id={task.id} />
            <label for={task.id} >
                {task.name}
            </label>
        </div>
    )
}

import React from 'react'

export default function Todo({ task, toggleTodo }) {
    
    function handleTodoClick() {
       toggleTodo(task.id) 
    }
    
    return (
        <div className=''>
            <label>
            <input type="checkbox" checked={task.completed} onChange={handleTodoClick} />
                {task.name}
            </label>
        </div>
    )
}

import React from 'react'

export default function Todo({ task, toggleTodo, doneList }) {
    
    function handleTodoClick() {
       toggleTodo(task.id)
    }

    
    return (
        <div className='input-item'>
            <label>
            <input type="checkbox" checked={task.completed} onChange={handleTodoClick} />
                {task.name}
            </label>
        </div>
    )
}

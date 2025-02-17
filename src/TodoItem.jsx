import React from 'react'

export default function TodoItem({completed,id,title, toggleTodo, deleteTodo}) {
  return (
    <div>
        <li key={id}>
            <label>
            <input type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)}/>
            {title}
            </label>
            <button className='btn btn-danger' onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    </div>
  )
}

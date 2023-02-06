import React from "react"
import './Todo.css'

function Todo({todo, onDeleteHandler, onCompleteHandler}) {
    return (
        <div className="todo_container">
            <h2>{todo.title}</h2>
            <p>{todo.body}</p>
            <button 
                onClick={()=>onDeleteHandler(todo.id)} 
                className="del_btn">삭 제
            </button>
            
            <button 
                onClick={()=>onCompleteHandler(todo.id)} 
                className="compl_btn">{todo.isDone ? "취 소" : "완 료"}
            </button>
        </div>
    )
}
export default Todo
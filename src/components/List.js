import React from "react"
import './List.css'
import Todo from './Todo'

function List({todos, setTodos}) {
    // 다른 형제 컴포넌트들의 event에 의해 부모컴포넌트에서 수정된 props들을 넘겨 받는다.

    // 
    const onDeleteHandler = (selectedId) => {
        const rest = todos.filter((todo)=>{
            return todo.id !== selectedId
        })
        setTodos(rest)
    }

    // 배열의 요소를 원하는 규칙에 따라 새로운 배열을 생성하여 그 배열을 setTodos에 지정
    // id가 같다면 isDone값을 반전시킨 배열을, 다르다면 그대로를 반환
    const onCompleteHandler = (selectedId) =>{
        const newTodos = todos.map((todo)=>{
            if (todo.id === selectedId) {
                return {...todo, isDone: !todo.isDone}
            } else {
                return {...todo}
            }
        })
        setTodos(newTodos)
    }

    return (
        <div className="list_container">
            <h1>Working.. 🔥</h1>
            <div className="list_wrapper">
                {todos.map((todo)=>{
                    if(todo.isDone === false) {
                        return <Todo 
                                todo={todo} 
                                key={todo.id} 
                                setTodos={setTodos} 
                                onDeleteHandler={onDeleteHandler} 
                                onCompleteHandler={onCompleteHandler}/>
                        }
                    }
                )}
            </div>
            <h1>Done..! 🎉</h1>
            <div className="list_wrapper">
                {todos.map((todo)=>{
                        if(todo.isDone === true) {
                            return <Todo 
                                    todo={todo} 
                                    key={todo.id} 
                                    setTodos={setTodos} 
                                    onDeleteHandler={onDeleteHandler} 
                                    onCompleteHandler={onCompleteHandler}/>
                            }
                        }
                    )}
            </div>
        </div>
    )
}
export default List
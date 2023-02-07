import React, {useState, useRef} from "react"
import './Form.css'


function Form({todos, setTodos}) {
    const initialState = {id: 0, title: "", body: "", isDone: false} //초기값

    
    const [todo, setTodo] = useState(initialState)

    
    const nextId = useRef(3)

    const onChangeHandler=(event)=>{
        const {value, name} = event.target 
        setTodo({...todo, [name]: value, id: nextId.current})
        nextId.current++ 
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault() 
        setTodos([...todos, todo])
        setTodo(initialState) 
    }
   
    return (
        <form onSubmit={onSubmitHandler} className="form_container">
            <div className='input_container'>
                <label>제목</label>
                
                <input type='text' name="title" onChange={onChangeHandler} value={todo.title}/> 
                <label>내용</label>
                <input type='text' name="body" onChange={onChangeHandler} value={todo.body}/>
            </div>
            <button>추가하기</button>
        </form>
    )
}
export default Form
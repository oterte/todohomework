import React, {useState} from 'react'
import Layout from './Layout'
import Header from './Header'
import Form from './Form'
import List from './List'

function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "React TodoList 만들기",
            body: "두번 갈아엎음",
            isDone: false
        },
        {
            id: 2,
            title: "React TodoList 만들기",
            body: "그래서 예제랑 똑같이 만들기로 함",
            isDone: true
        }
    ])

    return (
        <Layout>
            <Header />
            <Form todos={todos} setTodos={setTodos}/>
            <List todos={todos} setTodos={setTodos}/>
        </Layout>
    )
}
export default TodoList
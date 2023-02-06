import React, {useState} from 'react'
import Layout from './Layout'
import Header from './Header'
import Form from './Form'
import List from './List'

function TodoList() {
    // 자식컴포넌트들끼리의 정보 교환을 위해 공통된 상위 컴포넌트인 TodoList에서 넘겨줄 useState 선언(포장지라고 생각하기)
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
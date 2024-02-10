import "./TodoList.css"
import React, { useState } from 'react'
import TodoAdd from '../todoadd/TodoAdd'

function createTodoList() {
    const todosArr = []

    for (let i = 0; i < todosArr.length; i++) {
        todosArr.push({
            id: i,
            text: (i + 1)
        })
    }
    return todosArr
}

function TodoList() {

    const [todoListItem, setTodoListItem] = useState(createTodoList())

    const [text, setText] = useState("")


    return (
        <div className="parent">
            <h1 className="habitMain">Habit list</h1>
            <input value={text} onChange={(e) => setText(e.target.value)} className="text" type="text" placeholder="Enter something habit" />
            <button onClick={() => {
                setText("")
                setTodoListItem([{
                    id: todoListItem.length,
                    text: text
                }, ...todoListItem])
            }}>Add</button>
            {todoListItem.map(item => (
                <TodoAdd key={item.id} todoName={item.text} />
            ))}
        </div>
    )
}

export default TodoList
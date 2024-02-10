import "./TodoAdd.css"
import React, { useState } from 'react'

function TodoAdd({ todoName }) {
    const [check, setCheck] = useState(false)

    function handleClick() {
        setCheck(e => !e)
    }

    return (
        <div className="add">
            <h1 className={`addText ${check && "line"}`}>{todoName}</h1>
            <input onClick={handleClick} className="check" type="checkbox" />
        </div>
    )
}

export default TodoAdd
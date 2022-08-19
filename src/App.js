import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";

const localStorageKey = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    // useEffect(() => {
    //     const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
    //     if (setTodos) setTodos(storedTodos)
    // })

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(todos))
    }, [todos])

    function handleAddTodo(e) {
       const name = todoNameRef.current.value
        if (name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4, name: name, complete: false}]
        })
        todoNameRef.current.value = null
    }

    return (
        <>
        <TodoList todos = {todos}/>
        <input ref={todoNameRef} type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button>Clear Complete</button>
        <div>0 left to do</div>
        </>
    )
}

export default App;
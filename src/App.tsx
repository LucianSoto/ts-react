import React , { useState, useReducer }from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
// import { StringLiteral } from 'typescript';
import { InputField } from './components/InputField';
import TodoList from './components/TodoList'
import {Todo} from './model'
import { TodoReducer } from './reducers/Reducer'
// import  {Actions} from './reducers/Reducer'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  // const [todos, setTodos] = useState<Todo[]>([])
  const [state, dispatch] = useReducer(TodoReducer, [])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    // if(todo) {
    //   setTodos([...todos, {id:Date.now(), todo, isDone: false}])
    //   setTodo('')
    // }
    // dispatch({ type: "add", payload: todo})
  }

  // console.log(todo, todos)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <h1>Taskiez</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
            {/* <TodoList todos={todos} setTodos={setTodos} /> */}
          </>
        } />
        
      </Routes>
    </div>
  )
}

export default App;



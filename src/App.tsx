import React , { useState }from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
// import { StringLiteral } from 'typescript';
import { InputField } from './components/InputField';
import TodoList from './components/TodoList'
import {Todo} from './model'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo) {
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo('')
    }
  }

  console.log(todo, todos)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <h1>Taskiez</h1>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
            <TodoList todos={todos} setTodos={setTodos} />
          </>
        } />
        
      </Routes>
    </div>
  )
}

export default App;



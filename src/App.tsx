import React , { useState }from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
// import { StringLiteral } from 'typescript';
import { InputField } from './components/InputField';
import {Todo} from './model'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = () => {}

  console.log(todo)
  return (
    <Routes>
      <Route path="/" element={<><h1>Taskiez</h1><InputField todo={todo} setTodo={setTodo}/></>} />
      
    </Routes>
  )
}

export default App;



import React, { useReducer } from 'react'
import { Todo } from '../model'

type Actions = 
  { type: "add", payload: string } |
  { type: "remove", payload: number } |
  { type: "done", payload: number }

const TodoReduce = (state:Todo[], action: Actions) => {
  switch(action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false}
      ]
    case "remove":
      return state.filter((todo) => todo.id !== action.payload )
    case "done":
      return state.map((todo) => 
        todo.id !== action.payload ? { ...todo, isDone: !todo.isDone} 
        : null
        )
    default: return state;
  }
}

const Reducer = () => {


  return (
    <div>
      
    </div>
  )
}

export default Reducer

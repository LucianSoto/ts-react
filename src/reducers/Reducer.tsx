import React, { useReducer } from 'react'
import { Todo } from '../model'

// const initialTodos = []

export type Actions = 
  { type: "add", payload: string } |
  { type: "remove", payload: number } |
  { type: "done", payload: number }

export const TodoReducer = (state:Todo[], action: Actions): Todo[] => {
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
        : null as any
        // when returning null you can either turn off strictNullChecks from tsConfig or pass it as any type.
        )
    default: return state;
  }
}






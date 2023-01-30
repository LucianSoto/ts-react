import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import { StringLiteral } from 'typescript';

let name: String
let age: number;

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hi</h1>} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}

export default App;

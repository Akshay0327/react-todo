import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './ToDoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'



function App() {
  return (
    <>

      <h1>Todo List</h1>
      {ToDoList()}
      {AddTodoForm()}
    </>
  )
}

export default App
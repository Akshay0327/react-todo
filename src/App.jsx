import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  {
    id:1,
    title:'Complete assignment',

  },
  {
    id:2,
    title:'Test one',
  },
  {
    id:3,
    title:'Test two',
  },
];

function App() {
  return (
    <>

      <h1>Todo List</h1>
      <ul>{todoList.map(function(item){
        return <ol>{item.id} {item.title}</ol>
        
      }    
    
    )}
      
      
      </ul>
      
    </>
  )
}

export default App

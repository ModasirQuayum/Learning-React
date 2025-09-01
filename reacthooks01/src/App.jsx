import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter] = useState(10)

  const incrementValue = ()=>{
    setCounter(counter+1) 
    console.log(counter);
  }
  const decrementValue = ()=>{
    if(counter<=0){
      setCounter(0)
    }else{
      setCounter(counter-1)
    }
    
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Count: {counter}</h2>
        <button onClick= {incrementValue}>
          Increse
        </button>
        <button onClick={decrementValue}>
          decrese
        </button>
      </div>
    </>
  )
}

export default App

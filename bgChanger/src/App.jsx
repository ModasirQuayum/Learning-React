import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("black")
  let classlists = ['w-full h-screen m-0 p-0 ']
  const pickColor = (e) => {
    const val = e.target.value
    console.log(val);
    setColor(val)
    classlists.push(val)
  }

  return (
    <>                        
    <div className={classlists} style={{backgroundColor: color}}> 
      <div className="text-lg text-white relative top-[38rem] bg-white border rounded-md border-black p-4 ">
        <button  className='bg-white border text-black rounded-md border-black px-2 mx-2 capitalize' onClick={pickColor} value="white">white</button>
        <button  className='bg-black border text-white rounded-md border-black px-2 mx-2 capitalize' onClick={pickColor} value="black">black</button>
        <button  className='bg-green-300 border text-white rounded-md border-green-300 px-2 mx-2 capitalize' onClick={pickColor} value="green">green</button>
        <button  className='bg-orange-500 border text-white rounded-md border-orange-500 px-2 mx-2 capitalize' onClick={pickColor} value="orange">orange</button>
        <button  className='bg-rose-600 border text-white rounded-md border-rose-600 px-2 mx-2 capitalize' onClick={pickColor} value="rose">red</button>
        <button  className='bg-purple-800 border text-white rounded-md border-purple-800 px-2 mx-2 capitalize' onClick={pickColor} value="purple">purple</button>
      </div>
    </div>

    </>
  )
}

export default App

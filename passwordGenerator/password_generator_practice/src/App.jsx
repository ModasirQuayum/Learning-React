import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password,setPassword] = useState("")
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumber] = useState(false)
  const [charAllowed,setChar] = useState(false)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*-_+=[]{}~`'

    for (let i=1; i<length; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(
    ()=>{
      passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator]
  )
  const copied = useRef(null) 
  const copyToClipboard = useCallback(()=>{
    copied.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className="w-full max-w-md shadow-md mx-auto rounded-lg bg-gray-800 my-8 px-3 py-3 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value= {password}
        className='outline-none w-full px-3 py-1'
        readOnly
        ref={copied}
        />
        <button className='outline-none bg-blue-700 px-3 py-0.5 text-white' 
        onClick={copyToClipboard}
        >
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex text-sm items-center gap-x-1'>
          <input 
            type="range"
            min= {6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex text-sm items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{setChar((prev)=> !prev)}}
          />
          <label>Charcter</label>
        </div>
        <div className='flex text-sm items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberinput'
            onChange={()=>{setNumber((prev)=> !prev)}}
          />
          <label>Number</label>
        </div>
      </div>

    </div>
  )
}

export default App

import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <div className='text-white text-center'>
        <h3 className='text-3xl'>Login</h3>
        <div className='text-center my-2'>
            <input 
            className='p-1 bg-white text-red-500 text-xl'
            type="text" 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder='username'
            />
        </div>
        <div className='text-center my-2'>
            <input 
            className='p-1 bg-white text-red-500 text-xl'
            type="text" 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='password'
            />
        </div>
        <div className='text-center my-2'>
        <button onClick={handleSubmit} className='p-2 w-24 bg-white rounded-sm text-slate-600 hover:text-orange-400 '>Submit</button>
        </div>

        
    </div>
  )
}

export default Login
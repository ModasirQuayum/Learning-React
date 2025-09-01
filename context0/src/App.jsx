import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'


function App() {
  
  return (
    <div className='m-auto  h-screen flex flex-col justify-center items-center'>
      <h2 className='text-white text-4xl text-center'>React Context Api, Project <span className='text-red-500'>v.0.0</span></h2>
      <UserContextProvider>
          <Login />
          <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App

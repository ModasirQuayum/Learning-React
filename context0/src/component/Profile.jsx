import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return( <h3 className='text-red-500 capitalize text-2xl text-center'> please login</h3> )
    else return (
    <h3 className='text-red-500 capitalize text-2xl text-center'>Hello {user.username}</h3>
    )
}

export default Profile
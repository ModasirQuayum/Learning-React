import axios from 'axios';
import { useEffect, useState, type FC } from 'react'
import type { ID, Name } from './component/data';
import User from './component/User';


interface AppProps{
  title: string;
}

// type AppProps = {
//   title: string;
// }
export interface Users{
  name: Name;
  id: ID;
  phone: string;
}

const App:FC<AppProps> = ({title}) =>{
  const [users,setUsers] = useState<Users[]>([])
  const getUsers = async()=>{
  try {
    const {data} = await axios.get('https://randomuser.me/api/?results=10')
    setUsers(data.results)
    console.log(data.results)
  } catch (error) {
    console.log(error)
  }
}
  useEffect(()=>{
    getUsers();
  },[])

  return (
    <>
      <div>
        <ul>
          {users.map(({phone,name})=>(
            <User key={phone} name={name} phone={phone}/>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

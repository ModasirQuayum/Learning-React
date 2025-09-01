
import type { FC } from "react";
import { type Name } from "./data";
interface UserProps {

  name: Name;
  phone: string;
}
const User:FC<UserProps> = ({name,phone}) => {
  return (
        <li> <span> {name.title} </span> <span> {name.first} </span> <span> {name.last} </span>  - <span>{phone}</span>
        </li>
  )
}

export default User
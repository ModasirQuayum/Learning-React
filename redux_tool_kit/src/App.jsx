import { Provider } from "react-redux"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import { store } from "./app/store"



function App() {

  return (
    <Provider store={store}>
    <h1 className="text-3xl font-bold underline">Learn redux toolkit</h1>
    <AddTodo />
    <Todos />
    </Provider>
  )
}

export default App

import { useState } from "react"
import { useTodos } from "../store/todos";

const AddtoDo = () => {
    const [toDo, setToDo] = useState('');
    const {handleAddToDo} = useTodos();
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
 e.preventDefault();
 handleAddToDo(toDo)
 setToDo('')

    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={toDo} onChange = {(e) =>setToDo(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddtoDo
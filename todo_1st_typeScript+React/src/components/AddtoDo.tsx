import { useState } from "react"

const AddtoDo = () => {
    const [toDo, setToDo] = useState('');
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
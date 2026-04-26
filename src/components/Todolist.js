import { useState } from "react";
function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [Todolist,setTodolist]=useState([]);
  const changeInput = (event) => {
    console.log(event)
    setInputValue(event.target.value)
  };
  const handelclick = () =>{
    setTodolist([...Todolist,inputValue])
  }
  const DeleteTodo=(index)=>{
    Todolist.splice(index,1);
    setTodolist([...Todolist]);
  }
  const DeleteAll=()=> {
    setTodolist([]);
  }
  return (
    <div>
      <h2>To Do List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={changeInput}
      />
<button onClick={handelclick}>Add</button>
{Todolist.length === 0 ?(<p>No elements in Todo list</p>):(
Todolist.map((item,index) => (
  <p key={index}>{item} <button onClick={()=>DeleteTodo(index)}> Delete </button></p>
))
)}
<button onClick={DeleteAll}>Delete All</button>
    </div>
  );
}

export default ToDoList;
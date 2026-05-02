import {useState} from 'react';
const Todolist = () =>{
    const [inputValue, setInputValue] = useState("");
    const [TodoList,setTodoList] = useState([]);
    const [message, setMessage] = useState("");
    
    const ChangeInput = (event) =>{
        //console.log(event);
        setInputValue(event.target.value); //specific to input tag, we can use event.target.value to get the value of the input field
        setMessage("");//clear the error message when user is typing
        
    }
    
    const handleClick = () =>{
        if (inputValue.trim() === "") return;//removes extra spaces from the input value and checks if it is empty, if it is empty then it returns and does not add it to the TodoList
  
        //check if the element already exists in the TodoList
        if(TodoList.includes(inputValue.trim())) { 
            setMessage("Element exists");
            setInputValue("");
            return;
        }
        
        setTodoList([...TodoList, inputValue]);
        setInputValue("") 
        setMessage("");
    }
    const DeleteTodo =(index) =>{
        TodoList.splice(index,1);
        setTodoList([...TodoList]);
    }
    const DeleteAll =()=>{
       setTodoList([]);
    }
    return(
        <>
        <h1>Todo List</h1>
        <input type = "text" placeholder = "Enter a task" value = {inputValue} onChange={ChangeInput} />
        <button onClick={handleClick} type = "submit" >Add Task</button>
        {message && <p>{message}</p>}
        {TodoList.length === 0 ? <p>No elements in TodoList</p> : (TodoList.map((task, index) => (
            
            <p key={index}> {task} <button onClick={()=>DeleteTodo(index)}> Delete </button></p> 
       
        )))}
        {TodoList.length > 0 && <button onClick={DeleteAll}>Delete All</button>}
        
        </>
    );
};

export default Todolist;

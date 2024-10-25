import React, { useEffect, useState } from 'react'
function List(){

    const[todos,setTodos]=useState([]);
    const[newtodo ,setNewtodo]=useState("");
    const[editing,setEditing]=useState(null);

    useEffect(() => {

        const storedTodos=localStorage.getItem("todos");
        if (storedTodos){
            setTodos(JSON.parse(storedTodos));
        }
    },[]);


const handleSubmit=(event)=> {
    event.preventDefault();
    if (newtodo.trim()!==""){
        const newtodoItem={id:Date.now(),text:newtodo,completed:false};
        setTodos([...todos,newtodoItem]);
        setNewtodo("");
    }

};
const handleEdit=(id)=> {
    setEditing(id);
};  

const handleSave=(id,text)=>{
    const updatedTodo=todos.map((todo)=>{
        if(todo.id === id){
            return {...todo,text};

        }
        return todo;
    });
    setTodos(updatedTodo);
    setEditing(null);
};

const handleDelete=(id)=>{
    const updatedTodo=todos.filter((todo)=>todo.id !==id);
    setTodos(updatedTodo);
};



  return (
    <div>
      <h1>TODO  LIST</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"  
        value={newtodo}
        onChange={(event)=> setNewtodo(event.target.value)}
        placeholder='Add New Todo' 
        />
        <button type='submit'>Add</button>
      </form>
      <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
                {editing === todo.id ? 
                (
                <input 
                type='text'
                 value={todo.text} 
                 onChange={(event)=>handleSave(todo.id,event.target.value)}/>

            ):(
                <span>{todo.text}</span>
            )}
            <button onClick={()=>handleEdit(todo.id)}>Edit</button>
            <button onClick={()=>handleDelete(todo.id)}Delete></button></li>
        ))}
      </ul>
    </div>
  )
}

export default List

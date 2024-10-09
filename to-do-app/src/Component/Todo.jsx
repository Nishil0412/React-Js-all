import React, { useState } from "react";
import './Todo.css'
import { Edit, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";


const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setNewTodo(todo.text);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === currentTodo.id ? { ...todo, text: newTodo } : todo
    );
    setTodos(updatedTodos);
    setIsEditing(false);
    setNewTodo("");
    setCurrentTodo({});
  };

  const handleDeleteAll = () => {
    setTodos([]); // Clear the items array
  };

  return (
    <div className="App" style={{backgroundColor:" #6578E6",height:"600px",width:"700px"}}>
      <div style={{backgroundColor:"#272E48",height:"560px",width:"360px",borderRadius:"10px"}}>
      <h4 style={{color:"white",padding:"15px"}}><u>Grocery Shopping</u></h4>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add something to your list"
        style={{border:"2px solid white",backgroundColor:"#272E48",textAlign:"start",color:"white",borderRadius:"7px",width:"310px",marginLeft:"4.5px"}}
      />
      <button onClick={isEditing ? handleUpdateTodo : handleAddTodo} style={{borderRadius:"6px",marginLeft:"-66px",backgroundColor:"white",border:"2px solid white",color:"black"}}>
        {isEditing ? "Update Task" : "Add"}
      </button>

    

<ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{backgroundColor:"#6578E6",width:"330px",margin:"15px",height:"35px",borderRadius:"7px",color:"white"}}>
            {todo.text}
            <IconButton onClick={() => handleEditTodo(todo)} aria-label="edit" style={{color:"white"}}>
              <Edit />
            </IconButton>
            <IconButton
              onClick={() => handleDeleteTodo(todo.id)}
              aria-label="delete"
              style={{color:"white"}}
            >
              <Delete />
            </IconButton>
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteAll} style={{backgroundColor:"white",borderRadius:"7px"}}>Delete All</button>
      
      </div>
    </div>
  );
};

export default Todo;

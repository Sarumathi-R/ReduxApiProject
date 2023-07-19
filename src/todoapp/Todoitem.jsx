import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from "../redux/Action/Action";
import "../Todostyle.css";

const Todoitem = () => {
  const [todoText, setTodoText] = useState('');
  const todos=useSelector((state=>state.todos));
  const dispatch = useDispatch();

  const handleInputTodo=(e)=>{
    setTodoText(e.target.value)

  }
  const handleAddTodo = () => {
        const newTodo={
            id:Math.random(),
            text:todoText,
        }
      dispatch(addTodo(newTodo));
      setTodoText('');
    
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));

  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className='add-todo'>
      <input className='todo-input' type="text" placeholder='add todotext' value={todoText} onChange={handleInputTodo}/>
      <button className="add-button" onClick={handleAddTodo}>Add Todo</button>
      <span className="todolist">
        {todos.map((todo) => (
          <div className='todo-item'
            key={todo.id}>
            <span style={{textDecoration:todo.completed?"line-through":"null"}}>
          
           {todo.text}</span>
            <button className="todo-delete"onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button className="todo-complete" onClick={()=>handleCompleteTodo(todo.id)} disabled={todo.completed}>Completed</button>
          </div>
        ))}
        </span>
    </div>
  );
};

export default Todoitem;


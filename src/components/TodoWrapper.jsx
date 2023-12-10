import React,{useState,useEffect} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo';
uuidv4();
const TodoWrapper = () => {
    const [todos,setTodos]= useState([]);
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);
    const addTodo = (todo) => {
        const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}];
        setTodos(newTodos);
        // setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }
    const toggleComplete = id => {
        setTodos(todos.map((todo) =>( todo.id === id ?{...todo,completed: !todo.completed} : todo)))
    }
    const deleteTodo = (id)  =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Moukhi Theni</h1>
        <TodoForm addTodo={addTodo}/>
       {todos.map((todo,index)=>(
        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>

       ))}
    </div>
  )
}

export default TodoWrapper
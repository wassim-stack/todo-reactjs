import React,{useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(value);
        addTodo(value);
        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
    <input type="text" value={value} className='todo-input' placeholder='chnw lazemna nkamlo?' onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>Task</button>
</form>
  )
}

export default TodoForm
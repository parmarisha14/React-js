import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice';

const Form = () => {
  const [todo , setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  }
  return (
    <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <form method="post" onSubmit={handleSubmit}>
              <h3>ToDo Application</h3>
              <div className="mb-3">
                <label htmlFor="todoInput" className="form-label">Todo Item</label>
                <input type="text" className="form-control"value={todo || ''} onChange={(e)=> 
                  setTodo(e.target.value)
                } id ="text" name="text" placeholder="Enter your todo" />
                 
              </div>
               <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
              
              
            </form>
          </div>
        </div>
    </div>
  )
}

export default Form

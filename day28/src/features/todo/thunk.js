import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

export const  createTodo = createAsyncThunk('todos/createTodp',async(todo,{rejectWithValue})=>{
    try {
        let response = await apiInstance.post('/todos.json',todo)
        return {...todo,id:response.data.name};
       

    } catch (error) {
        // return rejectWithValue({error:error.message});
        return rejectWithValue(error.message);

    }
})

export const getAllTodos = createAsyncThunk('todos/getAllTodos',async(_,{rejectWithValue})=>{
    try {
        let response = await apiInstance.get('/todos.json');
        return response.data;
    } catch (error) {
         return rejectWithValue(error.message);
    }
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo',async(id,{rejectWithValue})=>{
    try {
        let response = await apiInstance.delete(`/todos/${id}.json`);
        return id;
    } catch (error) {
         return rejectWithValue(error.message);
    }
})
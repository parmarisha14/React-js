import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

export const  createUser = createAsyncThunk('Users/createUser',async(data, {rejectWithValue})=> {
    try{
       let response = await apiInstance.post('/users',data);
        console.log(response)
        return response.data;
    }
    catch(error){
        rejectWithValue({error:error.message});
    }

})
const userSlice = createSlice({
    name : "Users",
    initialState : {
        users : [],
        editData : {},
        editId : null,
    },
    reducers : {
       
        
    },
    extraReducers : function(builder){
        builder.addCase(createUser.fulfilled,(state,action)=>{
          
            console.log('User created:', action.payload);
               state.users.push(action.payload)
        })
    }
})

export default userSlice.reducer;
// export const {}  = userSlice.actions;
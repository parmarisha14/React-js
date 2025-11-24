import React from "react";
import { useState } from "react";

const App = () => {
  const [user,setUser]=useState({});
  const [list,setList]=useState([]);
  const [editId,setEditId] = useState(null);
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setUser({...user,[name]:value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(editId == null){
      setList([...list,{...user,id:Date.now()}]);  
    }
    else{
        let data=list.map((val)=>{
          if(val.id==editId.id){
            return {...val,...user}
          }
          return val;
        })
        setList(data);
        setEditId(null);
    }
    setUser({});
  }
  const handleDelete=(id)=>{
    let data=list.filter(val=>val.id != id);
    setList(data);
  }
  const handleEdit=(id)=>{
    let editData=list.find(val=>val.id == id);
    setUser(editData);
    setEditId(editData);
  }
  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="mb-3 my-5 ms-2">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
              id='username'  
            onChange={handleChange} 
            name='username' 
            value={user.username || ''} 
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
              id='email' 
            onChange={handleChange} 
            name='email' 
            value={user.email || ''} 
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    <table class="table my-5 ms-4" style={{"width":"50%"}} border={"2px"}>
  <thead>
    <tr>
            <th>Sr No</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
    </tr>
  </thead>
  <tbody style={{"textAlign":"center"}}>
    {
              list.length >0 ? 
                list.map((value,index)=>(
                  <tr key={value.id}>
                    <td>{index+1}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>
                      <button onClick={()=> handleDelete(value.id)}>Delete</button>
                      <button onClick={()=> handleEdit(value.id)}>Edit</button>
                    </td>
                  </tr>
                ))
              : 
              <tr>
                <td colSpan={4}><strong>Data Not Found</strong></td>
              </tr>
            }
  </tbody>
</table>
    </>
  );
};

export default App;

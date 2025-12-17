import React from "react";

const ViewBook = ({list,handleEdit,handleDelete}) => {
  return (
    <div className="container mt-4">
      <h3 className="mb-3 text-center">View Books</h3>

      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>Sr.No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Count</th>
            <th>Author</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            list.length > 0
            ?
              list.map((value,index)=>{
                const{image,title,count,author,category,id}=value;
                return(
                  <tr key={id}>
                    <td>{index+1}</td>
                    <td>
                      <img  style={{width:'50px',height:'50px',objectFit:'cover'}}src={image} alt={title}/>
                    </td>
                    <td>{title}</td>
                    <td>{count}</td>
                    <td>{author}</td>
                    <td>{category}</td>
                    <td>
                      <button type="button" 
                      className="btn btn-danger"
                      onClick={()=> handleDelete(id)}
                    
                      >Delete</button>
                      {" "}
                      <button type="button" 
                      className="btn btn-warning"
                      onClick={()=> handleEdit(id)}
                    
                      >Edit</button>
                    </td>
                  </tr>
                )
              })
            :
            <tr>
              <td className='text-center fs-5' colSpan={6}>
                Data NOT Found
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default ViewBook;

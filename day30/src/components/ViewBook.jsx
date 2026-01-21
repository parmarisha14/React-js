import React from 'react'

const ViewBook = ({list,handleDelete,handleEdit}) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
         <table className='table table-bordered table-striped table-hover caption-top '>
            <caption>
                <h2>Books Data</h2>
            </caption>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Book Title</th>
                    <th>Price</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    list?.map((value,index)=>{
                        const{title,price,id}=value;
                        return(
                            <tr key={id}>
                                <td>{index+1}</td>
                                <td>{title}</td>
                                <td>{price}</td>
                                <td>
                                    <button type="button"onClick={()=> handleDelete(id)}className='btn btn-outline-danger'>Delete</button>
                                    <button type="button"onClick={()=> handleEdit(id)}className='btn btn-outline-warning'>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
         </table>
        </div>
      </div>
    </div>
  )
}

export default ViewBook

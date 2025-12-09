import React from "react";

const Page = ({ list, handleDelete, handleEdit }) => {
  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table className="table table-bordered table-dark table-striped table-hover caption-top">
          <caption className="fs-3 fw-bold">Employee Data</caption>

          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {list.length > 0 ? (
              list.map((value, index) => {
                const { ename, email, department, salary, id } = value;
                return (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{ename}</td>
                    <td>{email}</td>
                    <td>{department}</td>
                    <td>{salary}</td>
                    <td>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </button>

                      <button
                        className="btn btn-warning"
                        onClick={() => handleEdit(id)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center fs-3">
                  Data Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
